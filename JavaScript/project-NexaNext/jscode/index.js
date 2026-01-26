import { fetchApiUsers, fetchLocalUsers } from "./api.js";
import { fetchImages } from "./api.js";
import { renderUsers } from "./renderUsers.js";
import { initNavbar } from "./navbar.js";

async function init() {
  const apiUsers = await fetchApiUsers();
  const images = await fetchImages(apiUsers.length);
  const localUsers = fetchLocalUsers();

  const normalizedApi = apiUsers.map((u, i) => ({
    id: `api-${i}`,
    name: `${u.firstname} ${u.lastname}`,
    email: u.email,
    image: images[i]?.url
  }));

  const normalizedLocal = localUsers.map((u, i) => ({
    id: `local-${i}`,
    name: u.name,
    email: u.email,
    image: images[i % images.length]?.url
  }));

  renderUsers([...normalizedApi, ...normalizedLocal], "usersList");
}

// const toggleBtn = document.getElementById("themeToggle");
// const root = document.documentElement;

// // Load saved theme
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



initNavbar();
init();
