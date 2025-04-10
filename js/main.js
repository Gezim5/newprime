// public/js/main.js
console.log("Prime Hairstyle website loaded!");


// main.js
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
