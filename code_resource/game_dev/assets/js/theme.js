/* ============================================================
 * theme.js — toggle tema terang/gelap
 * - Mengikuti preferensi sistem secara otomatis (tanpa data-theme)
 * - Pilihan manual disimpan di localStorage ('guide-theme')
 * - Override manual selalu menang: :root[data-theme=...]
 * ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "guide-theme";
  var root = document.documentElement;

  function systemPrefersDark() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    return systemPrefersDark() ? "dark" : "light";
  }

  function savedTheme() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return v === "dark" || v === "light" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* storage penuh/nonaktif — abaikan */
    }
  }

  function paintButton(theme) {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    var icon = btn.querySelector(".tt-icon");
    var label = btn.querySelector(".tt-label");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
    if (label) label.textContent = theme === "dark" ? "Terang" : "Gelap";
    btn.setAttribute(
      "aria-label",
      "Ganti ke mode " + (theme === "dark" ? "terang" : "gelap")
    );
    btn.setAttribute("title", "Mode " + (theme === "dark" ? "gelap" : "terang"));
  }

  function toggle() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    saveTheme(next);
    paintButton(next);
  }

  function init() {
    var saved = savedTheme();
    if (saved) root.setAttribute("data-theme", saved);

    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", toggle);
      paintButton(currentTheme());
    }

    /* kalau user belum memilih manual, ikuti perubahan preferensi sistem */
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function () {
        if (!savedTheme()) {
          root.removeAttribute("data-theme");
          paintButton(currentTheme());
        }
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
