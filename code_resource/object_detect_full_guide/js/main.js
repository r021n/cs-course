/**
 * Roboflow Object Detection Guide - Main JavaScript
 * Handles dynamic step loading, seamless accordion behavior, and localStorage state persistence.
 */

const STORAGE_KEY = "roboflow_guide_accordion_state";
const STEP_FILES = [
  "steps/step-1.html",
  "steps/step-2.html",
  "steps/step-3.html",
  "steps/step-4.html",
  "steps/step-5.html",
  "steps/step-6.html",
  "steps/step-7.html",
];

/**
 * Retrieve saved accordion states from LocalStorage.
 * @returns {Record<string, boolean>}
 */
function getStoredStates() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.warn("Gagal membaca state dari LocalStorage:", e);
    return {};
  }
}

/**
 * Save specific accordion state to LocalStorage.
 * @param {string} id
 * @param {boolean} isOpen
 */
function saveState(id, isOpen) {
  try {
    const states = getStoredStates();
    states[id] = isOpen;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
  } catch (e) {
    console.warn("Gagal menyimpan state ke LocalStorage:", e);
  }
}

/**
 * Lazy load video sources within an accordion item when it is opened.
 * @param {HTMLElement} item
 */
function loadVideoForAccordionItem(item) {
  const videos = item.querySelectorAll("video");
  videos.forEach((video) => {
    let shouldReload = false;
    const sources = video.querySelectorAll("source[data-src]");
    sources.forEach((source) => {
      source.src = source.getAttribute("data-src");
      source.removeAttribute("data-src");
      shouldReload = true;
    });
    if (shouldReload) {
      video.load();
    }
  });
}

/**
 * Initialize accordion event listeners and restore saved states.
 */
function initAccordion() {
  const accordionItems = document.querySelectorAll(".accordion-item");
  const savedStates = getStoredStates();

  accordionItems.forEach((item) => {
    const id = item.getAttribute("data-accordion-id");
    const header = item.querySelector(".step-header");
    if (!header) return;

    // Default: shrink / tertutup semua kecuali tercatat true di LocalStorage
    const isInitiallyOpen = Boolean(savedStates[id]);

    if (isInitiallyOpen) {
      item.classList.add("active");
      header.setAttribute("aria-expanded", "true");
      // Lazy load video jika accordion ini terbuka sejak awal
      loadVideoForAccordionItem(item);
    } else {
      item.classList.remove("active");
      header.setAttribute("aria-expanded", "false");
    }

    // Event click untuk expand & shrink
    header.addEventListener("click", () => {
      const isActive = item.classList.toggle("active");
      header.setAttribute("aria-expanded", String(isActive));
      if (isActive) {
        loadVideoForAccordionItem(item);
      }
      if (id) {
        saveState(id, isActive);
      }
    });
  });
}

/**
 * Dynamically load all step HTML files into container.
 */
async function loadSteps() {
  const container = document.getElementById("accordion-container");
  if (!container) return;

  // Jika elemen accordion sudah ada di dalam DOM (misal pre-rendered), langsung inisialisasi
  if (container.querySelectorAll(".accordion-item").length > 0) {
    initAccordion();
    return;
  }

  try {
    const fetchPromises = STEP_FILES.map((file) =>
      fetch(file).then((response) => {
        if (!response.ok) {
          throw new Error(`Gagal memuat ${file} (Status: ${response.status})`);
        }
        return response.text();
      }),
    );

    const htmlSnippets = await Promise.all(fetchPromises);
    container.innerHTML = htmlSnippets.join("\n");
    initAccordion();
  } catch (error) {
    console.error("Error saat memuat modul step:", error);
    container.innerHTML = `
            <div class="note-block" style="margin: 24px 0;">
                <strong>Gagal memuat langkah panduan:</strong> ${error.message}
                <br><br>
                <em>Catatan: Jika membuka file secara langsung (file://), jalankan melalui local web server (misal: Live Server di VS Code atau <code>python -m http.server</code>) agar browser mengizinkan request modul modular.</em>
            </div>
        `;
  }
}

// Inisialisasi Service Worker untuk Local Browser Caching (Offline / Zero-latency)
function registerServiceWorker() {
  if (
    "serviceWorker" in navigator &&
    window.location.protocol.startsWith("http")
  ) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) =>
        console.log("[Service Worker] Registered successfully:", reg.scope),
      )
      .catch((err) =>
        console.warn("[Service Worker] Registration failed:", err),
      );
  }
}

// Jalankan loader saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  loadSteps();
  registerServiceWorker();
});
