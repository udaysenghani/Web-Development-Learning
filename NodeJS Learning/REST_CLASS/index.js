const express= require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:"1a",
        username: "Neer Sankhla",
        content: "I Love Read a Books!"
    },
    {
        id:"2b",
        username: "Kishan Patel",
        content: "HardWork is important to get success"
    },
    {
        id: "3c",
        username: "Hit Rudani",
        content: "I get a 95 marks in Computer Networks"
    },
    {
        id: "4d",
        username: "Raxit Rangani",
        content: "I Love VLSI subject"
    }

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts}); 
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username, content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    // res.send("received");
    res.render("show.ejs", {post});

})

app.get("/",(req,res)=>{
    res.send("hello");
});


app.listen(8000);
