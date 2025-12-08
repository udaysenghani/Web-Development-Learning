const express = require("express")
const app= express()
console.dir(app);

const port = 3000

// app.get("/",(req,res)=>{
//     // res.send("hello world");

//     res.send({
//         name:"Uday",
//         roll:220
//     })
//     // res.send("<h1>hello<h1>");
//     // res.send('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjqul6S4IKZD09MtwQbTTrVMBQP03zUtJZQ&s" alt="Italian Trulli">');
//     //res.send(code);
// });

app.get("/",(req,res)=>{
    res.send("you contacted root path");
})

app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
})

app.get("/banana",(req,res)=>{
    res.send("you contacted banana path");
})

// app.get("*",(req,res)=>{ //universal path if it is not get proper path
//     res.send("this path does not exist");
// }); 

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    let {username,id}=req.params;
    let htmlstr = `<h1>welcome to the page of @${username}</h1>`
    res.send(htmlstr);
});

app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>results of query string : ${q}</h1>`); 
})




app.listen(port,()=>{
    console.log(`app listeing at port ${port}`);
});



// app.use((req,res)=>{
//     console.log("request Received!");
// })