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
    } else {
      item.classList.remove("active");
      header.setAttribute("aria-expanded", "false");
    }

    // Event click untuk expand & shrink
    header.addEventListener("click", () => {
      const isActive = item.classList.toggle("active");
      header.setAttribute("aria-expanded", String(isActive));
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

// Jalankan loader saat DOM siap
document.addEventListener("DOMContentLoaded", loadSteps);
