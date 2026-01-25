// jscode/registerPage.js
import { registerUser } from "./auth.js";

const registerBtn = document.getElementById("registerUser");
const msg = document.getElementById("msg");

registerBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const error = registerUser(name, email, password);

  if (error) {
    msg.textContent = error;
    return;
  }

  msg.textContent = "Registered successfully 🎉";

  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
});
