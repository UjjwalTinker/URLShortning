const express = require("express");
const router = express.Router();

const {handleUserSignUp, handleUserLogin}= require("../Controllers/user")

router.post("/",handleUserSignUp)

router.post("/login",handleUserLogin)



router.get("/signup",(req,res)=>{
    return res.render("signup")
})
router.get("/login",(req,res)=>{
    return res.render("login")
})




module.exports=router;