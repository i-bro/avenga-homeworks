import { showLoader, hideLoader } from "./loader.js";
// export async function fetchApiUsers(quantity = 50) {
//   showLoader();
//   const res = await fetch(
//     `https://fakerapi.it/api/v1/persons?_quantity=${quantity}`
//   );
//   hideLoader();
//   return (await res.json()).data;
  
// }
export function fetchLocalUsers() {
  showLoader();
  try {
    return JSON.parse(localStorage.getItem("users")) || [];
  } finally {
    hideLoader();
  }
}


// export function fetchLocalUsers() {
//   showLoader();
//   return JSON.parse(localStorage.getItem("users")) || [];
//   hideLoader();
// }

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

// export async function fetchImages(quantity = 12) {
//   showLoader();
//   const res = await fetch(
//     `https://fakerapi.it/api/v1/images?_quantity=${quantity}`
//   );
//   hideLoader();
//   return (await res.json()).data;
  
// }

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
