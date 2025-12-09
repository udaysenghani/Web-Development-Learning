const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true})); //middelewere for parse a string data
app.use(express.json()); // middlewere to parse a json data
//above both line is needed when we are using POST method to get data

app.get("/register",(req,res)=>{
    let {user ,pass}=req.query;
     res.send(`standard GET response. Welcome ${user}!`);
});

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user,pass} = req.body;
     res.send(`standard POST response. welcome ${user}!`);
});


app.listen(8000);