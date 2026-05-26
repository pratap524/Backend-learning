const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Mini-project');
const userSchema = new mongoose.Schema({
    username:String,
    name:String,
    email:String,
    age:Number,
    password:String,
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
});
const user=mongoose.model('user',userSchema);
module.exports=user;