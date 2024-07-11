const express = require("express")
const{ConnectTOMongo}= require("./MConnect");
const urlRoute = require("./Routes/url");
const userRoute = require("./Routes/user")
const app = express();

const path = require("path");

const URL = require("./Models/url")
const user = require("./Models/user")





ConnectTOMongo("mongodb://127.0.0.1:27017/short-url2").then(() =>
  console.log("MongoDbConnected"));



const PORT = 4500;


app.set("view engine","ejs")
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/url",urlRoute);
app.use("/user",userRoute);




app.listen(PORT,()=>{
    console.log(`Server Started at : ${PORT}`);
})
