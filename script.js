function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", () => toggleSubMenu(button));
  });
});

const toggleBtn = document.querySelectorAll(".toggle-btn");
const sideBar = document.getElementById("sidebar");
const sectionTitles = document.querySelectorAll(".section-title");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    sideBar.classList.toggle("close");

    const icon = btn.querySelector("i");

    btn.classList.toggle("rotate1");
    sectionTitles.forEach((title) => title.classList.add("hide"));

    if (sideBar.classList.contains("close")) {
      icon.classList.remove("ph-caret-right");
      icon.classList.add("ph-caret-left");
      sectionTitles.forEach((title) => title.classList.remove("hide"));
    } else {
      icon.classList.remove("ph-caret-left");
      icon.classList.add("ph-caret-right");
      sectionTitles.forEach((title) => title.classList.add("hide"));
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

// Light and dark mode
const themeBtn = document.querySelector(".toggle-theme-btn");
const root = document.documentElement;

themeBtn.addEventListener("click", () => {
  root.classList.toggle("light-theme");

  if (root.classList.contains("light-theme")) {
    // light theme → show sun
    themeBtn.innerHTML = '<i class="ph ph-moon"></i>';
    localStorage.setItem("theme", "light");
  } else {
    themeBtn.innerHTML = '<i class="ph ph-sun-dim"></i>'; // dark theme → show moon
    localStorage.setItem("theme", "dark");
  }
});
