export function renderUsers(users, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  users.forEach(user => {
    const a = document.createElement("a");
    a.className = "user";
    a.href = `./profile.html?id=${user.id}`;
    a.innerHTML = `
      <img src="${user.image}" class="user-image">
      <h3 class="user-name">${user.name}</h3>
      <p class="user-email">${user.email}</p>
    `;
    container.appendChild(a);
  });
}
