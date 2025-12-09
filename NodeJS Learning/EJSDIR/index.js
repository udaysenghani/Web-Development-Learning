const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.get("/", (req, res) => {
    res.render("home.ejs"); // only home will be fine . express always find file in views folder by default
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal }); //also only {diceVal} no require key:value. can only require a diceVal
});

app.get("/ig/:username", (req, res) => {
    const followers = ["Neer", "Bhavik", "Hit", "Dharm", "Ayush", "Het", "Ved", "Raxit"];
    let username = req.params.username;
    res.render("instagram.ejs", { username, followers });
});
app.get("/ig1/:username", (req, res) => {
    let username = req.params.username;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("instagram1.ejs", { data });
    } else {
        res.render("error.ejs");
    }

});
app.listen(8000);