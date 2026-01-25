export function renderUsers(users, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  users.forEach(user => {
    const a = document.createElement("a");
    a.className = "user";
    a.href = `./profile.html?id=${user.id}`;
    a.innerHTML = `
      <img src="${user.image}">
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    `;
    container.appendChild(a);
  });
}
