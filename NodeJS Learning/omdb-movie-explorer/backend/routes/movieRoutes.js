// backend/routes/movieRoutes.js
const express = require("express");
const pool = require("../db");

const router = express.Router();

// middleware to check login
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ success: false, message: "Not logged in" });
  }
  next();
}

// POST /api/movies/add
router.post("/add", requireAuth, async (req, res) => {
  try {
    const { omdb_id, title, poster_url, year } = req.body;
    const userId = req.session.userId;

    // 1. find/create movie
    const [movieRows] = await pool.query("SELECT id FROM movies WHERE omdb_id = ?", [omdb_id]);
    let movieId;
    if (movieRows.length > 0) {
      movieId = movieRows[0].id;
    } else {
      const [insertMovie] = await pool.query(
        "INSERT INTO movies (omdb_id, title, poster_url, year) VALUES (?, ?, ?, ?)",
        [omdb_id, title, poster_url, year]
      );
      movieId = insertMovie.insertId;
    }

    // 2. check if already in watchlist
    const [wlRows] = await pool.query(
      "SELECT id FROM watchlist WHERE user_id = ? AND movie_id = ?",
      [userId, movieId]
    );
    if (wlRows.length > 0) {
      return res.json({ success: true, status: "exists", message: "Already in watchlist" });
    }

    // 3. insert into watchlist
    await pool.query(
      "INSERT INTO watchlist (user_id, movie_id) VALUES (?, ?)",
      [userId, movieId]
    );

    res.json({ success: true, status: "success", message: "Added to watchlist" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error adding to watchlist" });
  }
});

module.exports = router;
