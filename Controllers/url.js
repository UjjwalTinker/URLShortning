const shortid = require("shortid");
const URL = require("../Models/url");


async function generateShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "url is required"})
    const shortID = shortid();
await URL.create({
    shortID:shortID,
    RedirectURL:body.url,
    visitHIstory:[]
})
return res.render("home",{id:shortID})
}


async function redirectedURL(req,res){
    const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHIstory:{
                timestamps:Date.now(),
            }
        }
    })
    res.redirect(entry.RedirectURL);
}



async function Alluser(req,res){
    const dbuser = await URL.find({})
    return res.render("home",{
        urls:dbuser,
    });
}

async function totalclicks(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalclicks: result.visitHIstory.length})
}



async function deletee (req,res){
    const shortId = req.params.shortID;
    let userr = await URL.findOneAndDelete(shortId)
          return res.json({status:"success"});
        };
















module.exports={
    generateShortURL,
    redirectedURL,
    Alluser,
    totalclicks,
    deletee
}