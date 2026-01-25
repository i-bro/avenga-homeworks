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
}

initNavbar();