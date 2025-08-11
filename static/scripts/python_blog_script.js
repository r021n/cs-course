document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("floating-navbar");
  const h1Text = document.querySelector("h1").innerText;
  document.querySelector(".nav-title").innerText = h1Text;

  let lastScrollY = window.scrollY;
  let navbarHeight = navbar.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      navbar.style.transform = "translateY(100%)";
      navbar.style.opacity = "0";
      document.body.style.setProperty("--whatsapp-bottom", "20px");
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
      navbar.style.opacity = "1";
      navbarHeight = navbar.offsetHeight;
      document.body.style.setProperty(
        "--whatsapp-bottom",
        `${navbarHeight + 20}px`
      );
    }
    lastScrollY = window.scrollY;
  });

  // Initial check
  if (window.scrollY === 0) {
    navbarHeight = navbar.offsetHeight;
    document.body.style.setProperty(
      "--whatsapp-bottom",
      `${navbarHeight + 20}px`
    );
    navbar.style.transform = "translateY(0)";
    navbar.style.opacity = "1";
  }

  // --- Sidebar Toggle Logic ---
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const body = document.body;

  sidebarToggle.addEventListener("click", () => {
    body.classList.toggle("sidebar-open");
  });

  sidebarOverlay.addEventListener("click", () => {
    body.classList.remove("sidebar-open");
  });

  // Initialize syntax highlighting
  hljs.highlightAll();
});
