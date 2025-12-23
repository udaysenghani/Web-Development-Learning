const express = require('express');
const quotes = require("./quotes.json");
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();

const mongoose = require('mongoose');

app.use(express.json()); // body data parse to json

app.use((req, res, next) => { //middleware // security guard that verifies the token
   console.log("HTTP Method - " + req.method + ", URL -" + req.url);
   next();
});

app.get("/", (req, res) => {
   res.status(200).send("hello");
});

mongoose.connect("mongodb+srv://admin:admin@cluster0.szmysat.mongodb.net/?appName=Cluster0")
   .then(() => {
      app.listen(3000);
   })
   .catch((err) => {
      console.log(err);
   })

app.use("/user", userRouter);
app.use("/note", noteRouter);







// app.get("/quote",(req,res)=>{
//     res.json(quotes);
// });

// app.get("/random",(req,res)=>{
//     let index = Math.floor(Math.random()* quotes.length);
//     let q = quotes[index];
//     res.status(200).json(q);
// });
