const express = require("express");
const dbConnect = require("./config/db");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
dbConnect();

const app = express();

//middleware 
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`app listening at port ${PORT}`);
})