const express = require("express");

const {generateShortURL,redirectedURL,Alluser,totalclicks,deletee

}= require("../Controllers/url");

const router = express.Router();



router.post("/",generateShortURL);

router.get("/:shortId",redirectedURL)

router.get("/alluser",Alluser)

router.get("/tclicks/:shortid",totalclicks)

router.delete("/del/:shortid",deletee)

router.get("/",(req,res)=>{
    return res.render("home")
})

module.exports=router;