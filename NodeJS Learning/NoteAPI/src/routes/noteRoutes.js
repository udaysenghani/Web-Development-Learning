const express = require('express');
const noteRouter = express.Router();

noteRouter.get("/",(req,res)=>{
    res.send("note get Request");
});

noteRouter.post("/",(req,res)=>{
    res.send("note post Request");
});

module.exports = noteRouter;
