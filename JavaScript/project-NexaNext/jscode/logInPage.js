import { login } from "./auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("logIn");
const msg = document.getElementById("msg");
const logOutBtn = document.getElementById("logOut");

loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const user = login(email, password);

  if (!user) {
    msg.textContent = "Invalid credentials";
    return;
  }

  window.location.href = `./profile.html?id=${user.id}`;
});


