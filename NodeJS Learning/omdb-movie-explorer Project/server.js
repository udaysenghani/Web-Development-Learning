const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const searchRoutes = require("./routes/searchRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");

const app = express();

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", searchRoutes);
app.use("/watchlist", watchlistRoutes);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
    

