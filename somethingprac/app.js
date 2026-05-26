const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.get("/",(req,res)=>{
    res.send("Everythong is fine");
})
app.listen(3000,()=>{
    console.log("server is running on the port 3000");
})