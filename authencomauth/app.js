const express= require("express");
const app= express();
const path= require("path");
const cookieParser= require("cookie-parser");
const User= require("../models4/user");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views4"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public4")));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.render("index4");
});

app.get("/register", (req, res) => {
    res.render("index4");
});

app.post("/register", async (req, res) => {
        let { username, email, password, age } = req.body;
        bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password ,salt,(err,hash) =>{
         console.log(hash);
        })
    })

        let user = new User({ username, email, password, age });
        await user.save();
        res.redirect("/register");
       
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});