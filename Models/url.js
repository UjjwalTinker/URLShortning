const { timeStamp } = require("console");
const  mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true,
    },
    RedirectURL:{
        type:String,
        required:true,
    },
    visitHIstory: [{ timestamps: { type:Number }  }]  
},
{timestamps:true});

const URL = mongoose.model("url",URLSchema);

module.exports= URL;