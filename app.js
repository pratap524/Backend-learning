const express = require('express');
const app = express();
const userModel=require('./usermodel');
app.get("/",function(req,res){
    console.log("done");
    res.send("HII I know why you are here :) ");
})
app.get("/create",async function (req,res){
   let createuser=await userModel.create({
    name:"komal",
    username:"komal",
    email:"komal@gmail.com"
   });
   res.send(createuser);
})
app.listen(3002);