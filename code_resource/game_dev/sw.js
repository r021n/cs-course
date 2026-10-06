/* ============================================================
 * sw.js — Service Worker (caching browser)
 * Berlaku saat halaman dibuka lewat http/localhost (bukan file://).
 *
 * Strategi:
 * 1. Shell (HTML/CSS/JS)  → stale-while-revalidate:
 *    sajikan dari cache lebih dulu (cepat), perbarui di latar.
 * 2. Video (mp4/webm/…)   → cache-first + dukung Range:
 *    - belum ada di cache  → streaming dari jaringan; kalau respons
 *      berisi file UTUH, disimpan ke Cache Storage (di-tee, pemutaran
 *      tidak tertunda).
 *    - sudah ada di cache  → dilayani dari memori/cache dengan respons
 *      206 Partial Content (seek/timeline langsung jalan tanpa jaringan).
 * 3. Eksternal (Google Fonts dsb) → dibiarkan (biar browser yang urus).
 *
 * Catatan: ganti VERSION bila isi shell berubah total agar cache lama
 * dibersihkan saat activate.
 * ============================================================ */
"use strict";

var VERSION = "v1";
var CACHE = "panduan-" + VERSION;

var SHELL = [
  "./guides/guide_1.html",
  "./assets/css/design-system.css",
  "./assets/js/guide.js",
  "./assets/js/theme.js",
  "./assets/vendor/marked.umd.js",
  "./assets/vendor/tailwind-browser.js",
];

var VIDEO_RE = /\.(mp4|webm|ogv|ogg|mov|m4v)(\?|#|$)/i;

var MIME = {
  ".mp4": "video/mp4",
  ".m4v": "video/x-m4v",
  ".webm": "video/webm",
  ".ogv": "video/ogg",
  ".ogg": "video/ogg",
  ".mov": "video/quicktime",
};

/* buffer video per URL supaya seek berulang tidak baca disk lagi */
var buffers = new Map(); /* url → { buf: ArrayBuffer, type: String } */
var MAX_BUFFERS = 6;

function guessType(pathname) {
  var m = pathname.match(/\.[a-z0-9]+$/i);
  var ext = m ? m[0].toLowerCase() : "";
  return MIME[ext] || "video/mp4";
}

/* ---------- instalasi: precache shell ---------- */
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      /* tiap URL dicoba terpisah supaya satu yang gagal
         tidak membatalkan precache yang lain */
      return Promise.all(
        SHELL.map(function (url) {
          return fetch(url)
            .then(function (res) {
              if (res && res.ok) return cache.put(url, res);
            })
            .catch(function () {});
        })
      );
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* ---------- aktivasi: buang cache versi lama ---------- */
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (k) {
              return k.indexOf("panduan-") === 0 && k !== CACHE;
            })
            .map(function (k) {
              return caches.delete(k);
            })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

/* ---------- respons 200/206 dari buffer ---------- */
function rangeResponse(buf, type, rangeHeader) {
  var total = buf.byteLength;
  var base = { "Content-Type": type, "Accept-Ranges": "bytes" };

  if (!rangeHeader) {
    return new Response(buf, {
      status: 200,
      headers: Object.assign({}, base, { "Content-Length": String(total) }),
    });
  }

  var m = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader.trim());
  /* multi-range / format lain → kirim file penuh (tetap valid) */
  if (!m || (m[1] === "" && m[2] === "")) {
    return new Response(buf, {
      status: 200,
      headers: Object.assign({}, base, { "Content-Length": String(total) }),
    });
  }

  var start, end;
  if (m[1] === "") {
    /* suffix: bytes=-N → N byte terakhir */
    start = Math.max(0, total - Number(m[2]));
    end = total - 1;
  } else {
    start = Number(m[1]);
    end = m[2] === "" ? total - 1 : Number(m[2]);
  }

  if (isNaN(start) || start >= total || end < start) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": "bytes */" + total },
    });
  }

  end = Math.min(end, total - 1);
  var slice = buf.slice(start, end + 1);
  return new Response(slice, {
    status: 206,
    headers: Object.assign({}, base, {
      "Content-Range": "bytes " + start + "-" + end + "/" + total,
      "Content-Length": String(slice.byteLength),
    }),
  });
}

/* ---------- coba layani video dari cache/memori ---------- */
function serveVideoFromCache(request) {
  var key = request.url;
  var entry = buffers.get(key);

  var read;
  if (entry) {
    read = Promise.resolve({ buf: entry.buf, type: entry.type });
  } else {
    read = caches.match(request).then(function (res) {
      if (!res) return null;
      return res
        .clone()
        .arrayBuffer()
        .then(function (buf) {
          if (!buf || !buf.byteLength) return null;
          var type =
            (res.headers.get("content-type") || "").split(";")[0] ||
            guessType(new URL(key).pathname);
          var item = { buf: buf, type: type };
          if (buffers.size >= MAX_BUFFERS) {
            buffers.delete(buffers.keys().next().value); /* lru kasar */
          }
          buffers.set(key, item);
          return item;
        })
        .catch(function () {
          return null;
        });
    });
  }

  return read.then(function (item) {
    if (!item) return null;
    return rangeResponse(item.buf, item.type, request.headers.get("range"));
  });
}

/* ---------- apakah respons jaringan berisi file utuh? ---------- */
function isWholeBody(request, response) {
  if (!response || !response.ok || !response.body) return false;

  var range = request.headers.get("range");
  if (!range) return response.status === 200;
  if (response.status === 200) return true; /* server mengabaikan Range → file utuh */
  if (response.status !== 206) return false;

  var cr = response.headers.get("content-range") || "";
  var m = /^bytes (\d+)-(\d+)\/(\d+)$/.exec(cr);
  if (!m) return false;
  var total = Number(m[3]);
  var len = Number(response.headers.get("content-length") || 0);
  return Number(m[1]) === 0 && Number(m[2]) === total - 1 && len === total;
}

/* ---------- video: cache-first, jaringan + simpan saat pertama ---------- */
function handleVideo(event) {
  var request = event.request;

  /* respondWith HARUS dipanggil sinkron saat event berjalan */
  event.respondWith(
    serveVideoFromCache(request).then(function (hit) {
      if (hit) return hit;

      return fetch(request).then(function (response) {
        if (!response.body || !isWholeBody(request, response)) return response;

        /* tee: satu cabang ke halaman (streaming langsung),
           satu cabang masuk Cache Storage (di latar) */
        var pair = response.body.tee();
        var headers = new Headers(response.headers);
        headers.delete("content-range");
        headers.delete("content-length");
        headers.delete("content-encoding");

        var stored = new Response(pair[0], {
          status: 200,
          statusText: "OK",
          headers: headers,
        });
        var toPage = new Response(pair[1], {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });

        event.waitUntil(
          caches
            .open(CACHE)
            .then(function (cache) {
              return cache.put(request, stored);
            })
            .catch(function () {})
        );
        return toPage;
      });
    })
  );
}

/* ---------- shell: stale-while-revalidate ---------- */
function handleShell(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (cached) {
      var network = fetch(request)
        .then(function (response) {
          if (response && response.ok && response.status === 200) {
            cache.put(request, response.clone()).catch(function () {});
          }
          return response;
        })
        .catch(function () {
          return cached || Response.error();
        });
      return cached || network;
    });
  });
}

/* ---------- router ---------- */
self.addEventListener("fetch", function (event) {
  var request = event.request;
  if (request.method !== "GET") return;

  var url;
  try {
    url = new URL(request.url);
  } catch (e) {
    return;
  }
  if (url.origin !== self.location.origin) return; /* font dsb: dibiarkan */

  if (VIDEO_RE.test(url.pathname)) {
    handleVideo(event);
  } else {
    event.respondWith(handleShell(request));
  }
});
