import { fetchApiUsers, fetchLocalUsers, fetchImages } from "./api.js";

const userId = new URLSearchParams(window.location.search).get("id");

async function initProfile() {
  if (!userId) return;

  if (userId.startsWith("api-")) {
    const users = await fetchApiUsers();
    const user = users[userId.split("-")[1]];
    const img = (await fetchImages(1))[0].url;

    renderProfile({
      id: userId,
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      job: user.job?.title || "Unknown job",
      birthday: user.birthday || "N/A",
      location: `${user.address?.city}, ${user.address?.country}`,
      image: img
    });
  }

  if (userId.startsWith("local-")) {
    const users = fetchLocalUsers();
    const user = users[userId.split("-")[1]];
    const img = (await fetchImages(1))[0].url;

    renderProfile({ ...user, id: userId, image: img });
  }
}

initProfile();

function renderProfile(user) {
  document.getElementById("avatar").src = user.image;
  document.getElementById("name").textContent = user.name;
  document.getElementById("email").textContent = user.email;
  document.getElementById("job").textContent = `Job: ${user.job}`;
  document.getElementById("birthday").textContent =
    `Birthday: ${user.birthday}`;
  document.getElementById("location").textContent =
    `Location: ${user.location}`;

  renderFriends();
  renderPosts();

  document.getElementById("photosBtn").onclick = () => {
    window.location.href = `./gallery.html?id=${user.id}`;
  };
}

renderProfile({
  id: userId,
  name: `${user.firstname} ${user.lastname}`,
  email: user.email,
  job: user.job?.title || "Unknown job",
  birthday: user.birthday || "N/A",
  location: `${user.address?.city}, ${user.address?.country}`,
  image: img
});


function renderFriends() {
  const friends = ["Alex", "Maria", "John"];
  const list = document.getElementById("friends");

  list.innerHTML = "";

  friends.forEach(friend => {
    const li = document.createElement("li");
    li.textContent = friend;
    list.appendChild(li);
  });
}

function renderPosts() {
  const posts = [
    "Enjoying a sunny day ☀️",
    "Working on my new project 💻"
  ];

  const container = document.getElementById("posts");
  container.innerHTML = "";

  posts.forEach(text => {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = text;
    container.appendChild(div);
  });
}
