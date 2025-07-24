// temples.js

// copyright year
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// last modified date
const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = document.lastModified;

// Toggle menu for small screens
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});
