const fs= require('fs');

fs.writeFile("hey.txt","hey kaise ho ", function(err){
    if (err) console.log(err);
    else console.log("done");
})
fs.appendFile("hey.txt"," mein to achha hu ", function(err){
    if (err) console.log(err);
    else console.log("done");
})
fs.rename("hey.txt","hello.txt", function(err){
    if (err) console.log(err);
    else console.log("done");
})
fs.copyFile("hello.txt","chacha.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.unlink("hello.txt",function(err){
    if(err) console.error(err);
    else console.log("removed");
})
const http=require('http');

const server = http.createServer(function(req,res){
    res.end ("hello world");
})
server.listen(3000);