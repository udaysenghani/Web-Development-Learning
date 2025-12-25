// backend/routes/watchlistRoutes.js
const express = require("express");
const pool = require("../db");

const router = express.Router();

function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ success: false, message: "Not logged in" });
  }
  next();
}

// GET /api/watchlist
router.get("/", requireAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const [rows] = await pool.query(
      `SELECT w.id AS watchlist_id, w.status, m.title, m.poster_url, m.year, m.omdb_id
       FROM watchlist w
       JOIN movies m ON w.movie_id = m.id
       WHERE w.user_id = ?
       ORDER BY w.created_at DESC`,
      [userId]
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error fetching watchlist" });
  }
});

// POST /api/watchlist/toggle
router.post("/toggle", requireAuth, async (req, res) => {
  try {
    const { watchlist_id, current_status } = req.body;
    const newStatus = current_status === "pending" ? "watched" : "pending";

    await pool.query(
      "UPDATE watchlist SET status = ? WHERE id = ?",
      [newStatus, watchlist_id]
    );

    res.json({ success: true, message: "Status updated", new_status: newStatus });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error updating status" });
  }
});

// POST /api/watchlist/delete
router.post("/delete", requireAuth, async (req, res) => {
  try {
    const { watchlist_id } = req.body;
    await pool.query("DELETE FROM watchlist WHERE id = ?", [watchlist_id]);
    res.json({ success: true, message: "Movie removed from watchlist" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error deleting movie" });
  }
});

module.exports = router;
