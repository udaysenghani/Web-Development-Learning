const express = require('express');
const quotes = require("./quotes.json");
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();

const mongoose = require('mongoose');

app.use(express.json()); // body data parse to json

app.use("/user", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
   res.status(200).send("NotesAPI");
});

const PORT = 3000;

mongoose.connect("mongodb+srv://admin:admin@cluster0.szmysat.mongodb.net/?appName=Cluster0")
   .then(() => {
      app.listen(PORT);
   })
   .catch((err) => {
      console.log(err);
   })











// app.get("/random",(req,res)=>{
//     let index = Math.floor(Math.random()* quotes.length);
//     let q = quotes[index];
//     res.status(200).json(q);
// });
