// navbar.js
import { getCurrentUser, logout } from "./auth.js";

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


}

initNavbar();