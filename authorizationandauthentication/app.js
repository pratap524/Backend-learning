const express = require('express');
const app = express();
const bcrypt=require("bcrypt");
const { sanitizeFilter } = require('mongoose');
app.get('/', (req, res) => {
 bcrypt.genSalt(10,function(req,res){
    bcrypt.hash("MajorKomal",function(err,hash){
        console.log(hash);
    });
 });
});

app.get("/read", (req, res) => {
    console.log(req.cookies);
    res.send("read page");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});