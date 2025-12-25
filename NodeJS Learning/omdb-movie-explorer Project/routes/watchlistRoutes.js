const express = require("express");
const mysql = require("mysql2/promise");

const router = express.Router();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "movie_explorer"
});

// ADD MOVIE
router.post("/add", async (req, res) => {
  const { title, year, poster, imdb_id } = req.body;
  const [movieRows] = await db.query("SELECT imdb_id FROM watchlist WHERE imdb_id = ?", [imdb_id]);
    if (movieRows.length > 0) {
      res.redirect("/watchlist");
      
    }else{
      await db.query(
      "INSERT INTO watchlist (title, year, poster, imdb_id) VALUES (?, ?, ?, ?)",
      [title, year, poster, imdb_id]
      );
      res.redirect("/watchlist");
    }
});

// SHOW WATCHLIST
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM watchlist");
  res.render("watchlist", { movies: rows });
});

// DELETE MOVIE
router.post("/delete/:id", async (req, res) => {
  await db.query("DELETE FROM watchlist WHERE id=?", [req.params.id]);
  res.redirect("/watchlist");
});
// UPDATE WATCH STATUS
router.post("/update/:id", async (req,res)=>{
  await db.query(`UPDATE watchlist
    SET status = CASE 
    WHEN status = 'pending' THEN 'watched'
    ELSE 'pending'
    END
    WHERE id = ?;`,[req.params.id]);
  res.redirect("/watchlist");
});

module.exports = router;
