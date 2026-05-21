var a=[1,3,2,4];
a.forEach(function(val){
 console.log(val+" "+ "hello");
})

var v =a.map(function(val){
    return 12*val
})
console.log(v);

var new_v=v.filter(function(val){
    if(val>3) return false;
    else return true;
})
console.log(new_v);

var obj ={
    name:"komal",
    age:20,
    height:5.5
}
console.log(obj.name);

var blob=await fetch(`https://randomuser.me/api/`);
var res=await blob.json();
console.log(res);