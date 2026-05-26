const express = require('express');
const app = express();
const path=require('path');
const cookieParser = require('cookie-parser');
const user=require('./models5/user');
const userModel=require('./models5/user');
const postModel=require('./models5/post');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views5'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public5')));

app.get('/',(req,res)=>{
    res.render('index')});

app.get("/login",(req,res)=>{
    res.render('login');
}   );
app.get("/profile",isLoggedIn,async(req,res)=>{
     console.log(req.user);
     res.render("login");});
app.post('/register',async(req,res)=>{
    let {username,name,email,age,password}=req.body;
    let user= await userModel.findOne({ email: email });
    if(user){
        return res.status(500).send('User already exists');
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          let user=  await userModel.create({
                username,
                name,
                email,
                age,
                password: hash
            });

           let token= jwt.sign({email:email,userid: user._id }, "shh", );
            res.cookie("token",token);
            res.send("registered successfully");
        });
    });
});
app.post('/login',async(req,res)=>{
    let {email,password}=req.body;
    let user= await userModel.findOne({ email: email });
    if(!user){
        return res.status(500).send('User does not exist');
    }
    bcrypt.compare(password, user.password, (err, result) => {
     if (result) {
      let token=jwt.sign({email:email,userid:user._id}, "shh");
      res.cookie("token",token);
      res.status(200).send('Login successful');
     } else {res.redirect("/login");}
    });
        });
    
app.get('/login',(req,res)=>{   
    res.cookie("token","");
    res.redirect('/login');
});

app.get('/logout',(req,res)=>{   
    res.cookie("token","");
    res.redirect('/login');
});

function isLoggedIn(req,res,next){
    if(req.cookies.token===""){
        res.send('you are not logged in');
    } 
    else{ 
      let data=  jwt.verify(req.cookies.token, "shh");
      req.user=data;
      next();}
        }

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})