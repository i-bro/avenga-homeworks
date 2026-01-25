import { fetchImages, fetchApiUsers, fetchLocalUsers } from "./api.js";
const backBtn = document.querySelector(".backBtn");
backBtn.addEventListener("click", () => {
  window.history.back();
});

const userId = new URLSearchParams(window.location.search).get("id");

document.addEventListener("DOMContentLoaded", initGallery);

async function initGallery() {
  if (!userId) return;

  await loadTitle();
  const images = await fetchImages(getRandomQty());
  renderGallery(images);
}

/* ---------- TITLE ---------- */

async function loadTitle() {
  const title = document.getElementById("galleryTitle");

  if (userId.startsWith("api-")) {
    const users = await fetchApiUsers();
    const index = Number(userId.split("-")[1]);
    const user = users[index];

    title.textContent = `${user.firstname} ${user.lastname}'s Gallery`;
  }

  if (userId.startsWith("local-")) {
    const users = fetchLocalUsers();
    const index = Number(userId.split("-")[1]);
    const user = users[index];

    title.textContent = `${user.name}'s Gallery`;
  }
}

/* ---------- GALLERY ---------- */

function renderGallery(images) {
  const gallery = document.getElementById("gallery");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  gallery.innerHTML = "";

  images.forEach(img => {
    const image = document.createElement("img");
    image.className = "galleryImg";
    image.src = img.url;
    image.alt = img.title;

    image.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.url;
    });

    gallery.appendChild(image);
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

/* ---------- HELPERS ---------- */

function getRandomQty() {
  return Math.floor(Math.random() * 8) + 12;
}
