const express = require('express');
const { getNote, createNote, deleteNote, updateNote } = require('../controllers/noteController');
const auth = require('../middlewares/auth');
const noteRouter = express.Router();

// noteRouter.get("/",(req,res)=>{
//     res.send("note get Request");
// });

// noteRouter.post("/",(req,res)=>{
//     res.send("note post Request");
// });

noteRouter.get("/",auth,getNote);  //add auth for use authorize middleware

noteRouter.post("/",auth,createNote); // callback function is used

noteRouter.delete("/:id",auth,deleteNote);

noteRouter.put("/:id",auth,updateNote);

module.exports = noteRouter;
