let express = require("express")
let user = "uday"
let pass = "1234"
let app = express()
app.use(express.json())

let checktoken = (req, res, next) => {
    if (req.query.user == user && req.query.pass == pass) {
        console.log("welcome")
        next();
    }
    else {
        return res.send({
            status: 0,
            msg: "please fill the username and password"
        })
    }
}
app.use(checktoken) //middleware we can use multiple middleware


app.get("/", (req, res) => {
    res.send({ status: 1, msg: "Home Page API" })
})
app.get("/contact", (req, res) => {
    res.send({ contact: 7043936263 })
})
app.post("/login", (req, res) => {
    // console.log(req.body)
    // res.send(req.query)
    res.status(200).json({
        msg: "hello",
        queryobj: req.query
    })
})
app.get("/new", (req, res) => {
    // let current = req.params.id
    res.send("hello current id is ")
})


app.listen("8000")