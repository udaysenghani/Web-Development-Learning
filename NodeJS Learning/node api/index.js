
let http = require("http")
let student={
    name :"uday",
    contact: "7043936263",
    roll:"220160107112"
}
let server = http.createServer((req,res)=>{
    // res.end("hello uday")
    if (req.url =="/new"){
        res.end(" this is new ")
    }
    if (req.url=="/"){
        res.end("this is /")
    }
    if (req.url=="/contact"){
        res.end("7043936263")
    }
    if (req.url=="/data"){
        res.end(JSON.stringify(student))
    }
})
server.listen("8000"); //http://localhost:8000
