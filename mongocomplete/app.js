const { urlencoded } = require("body-parser");
const express =require("express");
const app = express();
const mongoose=require("mongoose");
const path =require("path")
const User = require("../models/user");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public3")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views3"));
app.get("/",function(req,res){
res.render("index3");
console.log("done");
})

app.get("/read",function(req,res){
  let alluser=  await userModel.find();
res.render("read",{alluser});
console.log("done");
})

app.post("/create",async function(req,res){
   let{name,email,age}=req.body;
 let createdUser = await User.create({
    name:name,
    email:email,
    age:age
});
 res.send(createdUser);
});
app.listen(3000,function(){
    console.log("server is running on port 3000");
});