const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const authorizedRoles = require("../middlewares/roleMiddleware");

//only admin can accsess this routes 
router.get("/admin",verifyToken, authorizedRoles("admin") ,(req,res)=>{
    res.json({message: "Welcome admin"});
});


//only andmin and manager can access this routes 
router.get("/manager",verifyToken,authorizedRoles("admin","manager") ,(req,res)=>{
    res.json({message: "Welcome manager"});
});

//all user can access this routes
router.get("/user",verifyToken, authorizedRoles("admin", "manager","user"),(req,res)=>{
    res.json({message: "Welcome user"});
});

module.exports = router;
