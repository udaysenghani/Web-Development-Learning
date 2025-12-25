const express = require("express");
const axios = require("axios");

const router = express.Router();
const OMDB_API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=d980f080";

router.get("/", async (req, res) =>{
  const query = req.query.q;

  if (!query) {
    return res.render("index", { movies: [] });
  }

  const url = `${OMDB_API_KEY}&s=${query}`;

  try {
    const responce = await axios.get(url);
    const movies = responce.data.Search || [];
    // console.log(movies);
    res.render("index", { movies });
  } catch (err) {
    console.error(err);
    res.render("index", { movies: [] });
  }
});

module.exports = router;
