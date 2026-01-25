import { showLoader, hideLoader } from "./loader.js";

export function fetchLocalUsers() {
  showLoader();
  try {
    return JSON.parse(localStorage.getItem("users")) || [];
  } finally {
    hideLoader();
  }
}

export async function fetchApiUsers(quantity = 50) {
  showLoader();
  try {
    const res = await fetch(
      `https://fakerapi.it/api/v1/persons?_quantity=${quantity}`
    );
    return (await res.json()).data;
  } finally {
    hideLoader();
  }
}


export async function fetchImages(quantity = 12) {
  showLoader();
  try {
    const res = await fetch(
      `https://fakerapi.it/api/v1/images?_quantity=${quantity}`
    );
    return (await res.json()).data;
  } finally {
    hideLoader();
  }
}
