// in main.js (frontend)
async function addToWatchlist(movie) {
  try {
    const response = await fetch("http://localhost:3000/api/movies/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // important for session cookies
      body: JSON.stringify(movie),
    });
    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error(error);
    alert("Error adding to watchlist");
  }
}
async function addToWatchlist(movie) {
  const res = await fetch("http://localhost:3000/api/movies/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(movie)
  });

  const data = await res.json();
  alert(data.message);
}
