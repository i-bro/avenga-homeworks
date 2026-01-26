const THEME_KEY = "theme";

export function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
  updateIcon();
}

function updateIcon() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.textContent =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "☀️"
      : "🌙";
}

