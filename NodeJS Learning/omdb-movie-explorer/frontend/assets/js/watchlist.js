async function loadWatchlist() {
  const res = await fetch("http://localhost:3000/api/watchlist", {
    credentials: "include"
  });

  const data = await res.json();

  if (!data.success) {
    alert("Login first!");
    window.location.href = "login.html";
    return;
  }

  const container = document.getElementById("watchlistContainer");
  container.innerHTML = "";

  data.data.forEach(item => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="${item.poster_url}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>Year: ${item.year}</p>
        <p>Status: ${item.status}</p>

        <button onclick="toggleStatus(${item.watchlist_id}, '${item.status}')">
          Toggle Watched
        </button>
        <button onclick="deleteMovie(${item.watchlist_id})">
          Remove
        </button>
      </div>
    `;
  });
}

loadWatchlist();
