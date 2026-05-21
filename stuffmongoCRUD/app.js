const express = require('express');
const app = express();
const userModel=require('./usermodel');
const PORT = 4003;
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
app.get("/update",async function (req,res){
   
      let updateuser = await userModel.findOneAndUpdate(
         { name: "komal" },
         { name: "major pratap", username: "majorpratap", email: "majorpratap@gmail.com" },
         { new: true }
      );
      res.send(updateuser);
   
});

app.get("/read",async function (req,res){
   
      let user = await userModel.findOne({ name: "komal" });
      
      res.send(user);
      console.log(user);
   
});
app.get("/delete",async function (req,res){
   
      let user = await userModel.findOneAndDelete({ name: "komal" });
      
      res.send(user);
      console.log("User komal has been deleted");
   
});

app.listen(PORT, function () {
   console.log(`Server running on port ${PORT}`);
});