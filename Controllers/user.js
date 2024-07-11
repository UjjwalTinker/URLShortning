const User = require("../Models/user")

async function handleUserSignUp(req,res){
    const{name,email,password}= req.body;
    await User.create({
        name:"ujjwal tinker",
        email :"ujjwwaaal@gmail.com",
        password: "12321",
    });
    return res.redirect("/user/login")
}

async function handleUserLogin(req,res){
    const{email,password}= req.body;
    const user = await User.findOne({email:"ujjwwaaal@gmail.com",password:"12321"});
    console.log("user",user);
    if(!user) return  res.render("login",{error:"invalid username or password"})
    return res.redirect("/url/alluser")
}



module.exports ={
    handleUserSignUp,
    handleUserLogin
}