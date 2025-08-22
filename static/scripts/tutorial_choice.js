document.addEventListener("DOMContentLoaded", () => {
  // Initialize with text tutorial
  showTutorial("text");

  // Add click event listeners to choice buttons
  const choiceButtons = document.querySelectorAll(".choice-btn");
  choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tutorialType = this.getAttribute("onclick").match(
        /showTutorial\('(.+?)'\)/
      )[1];
      showTutorial(tutorialType);
    });
  });
});

// Tutorial Choice Functionality
function showTutorial(type) {
  // Update button states
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (type === "text") {
    buttons[0].classList.add("active");
    document.getElementById("text-tutorial").style.display = "block";
    document.getElementById("video-tutorial").style.display = "none";
  } else {
    buttons[1].classList.add("active");
    document.getElementById("text-tutorial").style.display = "none";
    document.getElementById("video-tutorial").style.display = "block";
  }

  // Scroll to tutorial section
  const tutorialSection = document.querySelector(".tutorial-content");
  if (tutorialSection) {
    tutorialSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
