/* ============================================================
 * guide.js — pipeline konten panduan (markdown-driven)
 *
 * Alur:
 *   1. baca markdown dari <script type="text/markdown" id="guide-source">
 *   2. render dengan marked
 *   3. pasang hasilnya ke #content
 *   4. transformasi DOM → komponen design system:
 *        h1          → .doc-title
 *        "Subtitle:" → .doc-subtitle
 *        h2          → .section-title (+ badge nomor + anchor)
 *        h3          → .sub-label  (prefiks "// ")
 *        > blockquote→ .callout
 *        🎬 Video    → .video-card (embed / placeholder)
 *        table       → .table-wrap > .doc-table
 *        daftar      → .checklist (opsional, via config)
 *   5. bangun nav pill (TOC) di header + sorot seksi aktif
 *
 * Konfigurasi per halaman didefinisikan di window.GUIDE_CONFIG:
 *   {
 *     videos: { "unduh-gdevelop": "https://youtu.be/XXXX" },
 *     checklists: ["Yang Perlu Disiapkan"]
 *   }
 * ============================================================ */
(function () {
  "use strict";

  var config = window.GUIDE_CONFIG || {};
  var videos = config.videos || {};
  var checklists = config.checklists || ["Yang Perlu Disiapkan"];

  /* file video lokal (mp4/webm/…) vs URL lain */
  var VIDEO_FILE_RE = /\.(mp4|webm|ogv|ogg|mov|m4v)(\?|#|$)/i;

  /* ---------- util ---------- */

  function slugify(text) {
    return String(text)
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  function youtubeId(url) {
    if (!url) return null;
    if (/^[\w-]{11}$/.test(url.trim())) return url.trim();
    var m = String(url).match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
    );
    return m ? m[1] : null;
  }

  function el(tag, className, attrs) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (attrs) {
      for (var k in attrs) node.setAttribute(k, attrs[k]);
    }
    return node;
  }

  /* ---------- kartu video ---------- */

  function buildVideoCard(paragraph) {
    var text = (paragraph.textContent || "").trim();
    var link = paragraph.querySelector("a[href]");
    var bracket = text.match(/\[([^\]]+)\]/);
    var rawLabel = bracket
      ? bracket[1].trim()
      : text.replace(/^🎬\s*/, "").replace(/^Video:?\s*/i, "").trim();

    /* "Embed video unduh GDevelop" → "unduh GDevelop" → "unduh-gdevelop" */
    var cleanLabel = rawLabel.replace(/^embed\s*video\s*/i, "").trim();
    if (!cleanLabel) cleanLabel = rawLabel;
    var slug = slugify(cleanLabel);

    var url = "";
    if (link && /^https?:\/\//i.test(link.getAttribute("href") || "")) {
      url = link.getAttribute("href");
    }
    if (!url) url = videos[slug] || videos[slugify(rawLabel)] || "";

    var card = el("figure", "video-card");
    card.setAttribute("data-video", slug);

    var head = el("figcaption", "video-head");
    var tag = el("span", "video-tag");
    tag.textContent = "🎬 Video";
    var label = el("span", "video-label");
    label.textContent = cleanLabel;
    head.appendChild(tag);
    head.appendChild(label);
    card.appendChild(head);

    var frame = el("div", "video-frame");
    var ytId = url ? youtubeId(url) : null;

    if (url && ytId) {
      frame.appendChild(
        el("iframe", null, {
          src: "https://www.youtube-nocookie.com/embed/" + ytId,
          title: "Video: " + cleanLabel,
          loading: "lazy",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: "",
        })
      );
    } else if (url && VIDEO_FILE_RE.test(url)) {
      /* video lokal — streaming dari folder videos/, di-cache
         service worker saat dibuka lewat http */
      var video = document.createElement("video");
      video.setAttribute("controls", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("preload", "metadata");
      video.addEventListener("error", function () {
        var err = el("div", "video-placeholder video-error");
        err.innerHTML =
          '<span class="vp-label"></span><span class="vp-how"></span>';
        err.querySelector(".vp-label").textContent = "✗ video tidak dapat dimuat";
        err.querySelector(".vp-how").textContent = "cek file: " + url;
        if (frame.parentNode) frame.replaceChildren(err);
      });
      video.src = url;
      frame.appendChild(video);
    } else if (url) {
      frame.appendChild(
        el("iframe", null, {
          src: url,
          title: "Video: " + cleanLabel,
          loading: "lazy",
          allowfullscreen: "",
        })
      );
    } else {
      var ph = el("div", "video-placeholder");
      ph.innerHTML =
        '<span class="vp-label"></span><span class="vp-how"></span>';
      ph.querySelector(".vp-label").textContent = "▶ " + cleanLabel;
      ph.querySelector(".vp-how").textContent =
        'tambahkan URL di GUIDE_CONFIG.videos["' + slug + '"]';
      frame.appendChild(ph);
    }

    card.appendChild(frame);
    return card;
  }

  /* ---------- transformasi pasca-render ---------- */

  function isVideoParagraph(p) {
    return /^\s*🎬\s*\*\*Video:\*\*/.test(p.innerHTML) ||
      /^\s*🎬\s*Video:/i.test(p.textContent || "");
  }

  function decorate(container) {
    var i;
    var headings = [];

    /* h1 */
    var h1 = container.querySelector("h1");
    if (h1) {
      h1.classList.add("doc-title");
      h1.id = slugify(h1.textContent);
      document.title = h1.textContent.trim() + " — Panduan Game Dev";
    }

    /* subtitle: paragraf pertama yang diawali **Subtitle:** */
    var firstP = container.querySelector("p");
    if (firstP) {
      var strong = firstP.querySelector("strong");
      if (strong && /^subtitle:$/i.test(strong.textContent.trim())) {
        firstP.classList.add("doc-subtitle");
        firstP.id = "subtitle";
      } else {
        firstP.classList.add("doc-lede");
      }
    }

    /* daftar elemen secara terurut (querySelectorAll = document order) */
    var all = container.querySelectorAll(
      "h2, h3, blockquote, p, table, ol, ul"
    );
    for (i = 0; i < all.length; i++) {
      var node = all[i];

      if (node.tagName === "H2") {
        var raw = node.textContent.trim();
        var m = raw.match(/^(\d+)\.\s*(.*)$/);
        var label = m ? m[2] : raw;
        node.classList.add("section-title");
        node.id = slugify(raw);
        node.setAttribute("data-label", label);

        if (m) {
          /* lepas nomor dari judul → badge tersendiri */
          node.textContent = "";
          var badge = el("span", "sec-num");
          badge.textContent = m[1];
          node.appendChild(badge);
          node.appendChild(document.createTextNode(label));
        }

        var anchor = el("a", "anchor", { href: "#" + node.id });
        anchor.textContent = "#";
        anchor.setAttribute("aria-label", "Tautan ke " + label);
        node.appendChild(anchor);
        headings.push(node);
      } else if (node.tagName === "H3") {
        node.classList.add("sub-label");
        node.id = slugify(node.textContent);
      } else if (node.tagName === "BLOCKQUOTE") {
        node.classList.add("callout");
      } else if (node.tagName === "P" && isVideoParagraph(node)) {
        node.parentNode.replaceChild(buildVideoCard(node), node);
      } else if (node.tagName === "TABLE" && !node.closest(".table-wrap")) {
        var wrap = el("div", "table-wrap");
        node.parentNode.insertBefore(wrap, node);
        wrap.appendChild(node);
        node.classList.add("doc-table");
      }
    }

    /* checklist: daftar pertama setelah h2 yang cocok */
    for (i = 0; i < headings.length; i++) {
      var h = headings[i];
      var want = checklists.some(function (name) {
        return h.textContent.trim().indexOf(name) !== -1;
      });
      if (!want) continue;
      var sib = h.nextElementSibling;
      while (sib && sib.tagName !== "H2") {
        if (sib.tagName === "UL" || sib.tagName === "OL") {
          sib.classList.add("checklist");
          break;
        }
        sib = sib.nextElementSibling;
      }
    }

    /* link eksternal */
    var links = container.querySelectorAll("a[href^='http']");
    for (i = 0; i < links.length; i++) {
      links[i].setAttribute("target", "_blank");
      links[i].setAttribute("rel", "noopener");
    }

    return headings;
  }

  /* ---------- nav pill (TOC) + sorotan seksi aktif ---------- */

  function buildToc(headings) {
    var nav = document.getElementById("toc-nav");
    if (!nav || !headings.length) return;

    var pills = headings.map(function (h) {
      var a = el("a", "nav-pill", { href: "#" + h.id });
      a.textContent = h.getAttribute("data-label") || h.textContent;
      a.title = h.textContent.trim();
      nav.appendChild(a);
      return a;
    });

    var lastActive = -1;

    function setActive(idx) {
      if (idx === lastActive) return;
      lastActive = idx;
      pills.forEach(function (p, i) {
        p.classList.toggle("is-active", i === idx);
      });
      /* pastikan pill aktif terlihat di nav yang digulir horizontal.
         Pakai scrollTo pada nav (BUKAN scrollIntoView) supaya
         animasi scroll halaman tidak dibatalkan. */
      if (idx >= 0 && pills[idx]) {
        var nav = pills[idx].parentNode;
        if (nav && nav.scrollTo) {
          var target =
            pills[idx].offsetLeft - (nav.clientWidth - pills[idx].offsetWidth) / 2;
          nav.scrollTo({
            left: Math.max(0, target),
            behavior: "smooth",
          });
        }
      }
    }

    /* seksi aktif = judul terakhir yang sudah melewati garis baca */
    var ticking = false;
    function updateActive() {
      ticking = false;
      var line = 140;
      var idx = 0;
      for (var i = 0; i < headings.length; i++) {
        if (headings[i].getBoundingClientRect().top <= line) idx = i;
      }
      setActive(idx);
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(updateActive);
        }
      },
      { passive: true }
    );
    updateActive();
  }

  /* ---------- scroll ke anchor (konten dirender setelah load) ---------- */

  function scrollToHash() {
    if (!location.hash) return;
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ block: "start" });
  }

  /* ---------- boot ---------- */

  function boot() {
    var host = document.getElementById("content");
    var source = document.getElementById("guide-source");
    if (!host || !source) return;

    var md = (source.textContent || "").trim();

    if (typeof window.marked === "undefined") {
      host.innerHTML =
        '<div class="boot-error">Library markdown belum termuat. ' +
        "Pastikan <code>assets/vendor/marked.umd.js</code> ada, lalu muat ulang halaman.</div>";
      return;
    }

    host.innerHTML = window.marked.parse(md);
    var headings = decorate(host);
    buildToc(headings);
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
