export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const index = users.findIndex(
    u => u.email === email && u.password === password
  );

  if (index === -1) return null;

  const user = { id: `local-${index}`, ...users[index] };
  localStorage.setItem("currentUser", JSON.stringify(user));

  return user;
}

export function logout() {
  localStorage.removeItem("currentUser");
}


export function registerUser(name, email, password) {
  if (!name || !email || !password) {
    return "All fields required";
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.some(u => u.email === email);
  if (exists) {
    return "User already exists";
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  return null; // success
}
