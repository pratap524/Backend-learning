const mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testapp");
const userSchema= mongoose.Schema({
  
    email:String,
    name:String,
    age:Number
});
module.exports= mongoose.model("User",userSchema);