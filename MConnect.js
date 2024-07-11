const mongoose = require("mongoose");

async function ConnectTOMongo(url){
    return mongoose.connect(url);
}



module.exports={
    ConnectTOMongo,
}