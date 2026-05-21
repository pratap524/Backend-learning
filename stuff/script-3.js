const express = require ('express');
const app =express ();
app.get("/", function(req,res){
    res.send("champ");
})
app.get("/profile", function(req,res){
    res.send("champ2");
})
app.listen(3000);