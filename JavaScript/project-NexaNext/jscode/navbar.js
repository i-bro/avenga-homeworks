// navbar.js
import { getCurrentUser, logout } from "./auth.js";
import { toggleTheme, initTheme } from "./theme.js";

export function initNavbar() {
  const loginLink = document.getElementById("logIn");
  const registerLink = document.getElementById("register");
  const logoutBtn = document.getElementById("logOut");

  if (!loginLink || !registerLink || !logoutBtn) return;

  const currentUser = getCurrentUser();

  if (currentUser) {
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutBtn.style.display = "inline-block";

    logoutBtn.onclick = () => {
      logout();
      window.location.href = "./index.html";
    };
  } else {
    logoutBtn.style.display = "none";
  }

  if (window.location.pathname.endsWith("register.html")) {
    registerLink.style.display = "none";}
    if (window.location.pathname.endsWith("login.html")) {
    loginLink.style.display = "none";}

    
const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
hamburger.onclick = () => {
  navLinks.classList.toggle("active");
  hamburger.textContent =
    hamburger.textContent === "☰" ? "✕" : "☰";
};

const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

// Load saved theme
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//   root.setAttribute("data-theme", savedTheme);
//   toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
// }

// toggleBtn?.addEventListener("click", () => {
//   const isDark = root.getAttribute("data-theme") === "dark";

//   if (isDark) {
//     root.removeAttribute("data-theme");
//     localStorage.setItem("theme", "light");
//     toggleBtn.textContent = "🌙";
//   } else {
//     root.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//     toggleBtn.textContent = "☀️";
//   }
// });




const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  themeBtn.onclick = toggleTheme;
}



}
initTheme();
initNavbar();