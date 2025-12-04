const {addtocart,uday,name} = require("./cart");
const math = require("./math");

console.log(math);
console.log(math.PI);
console.log(math.mul(2,10));
console.log(math.sum(2,2));

console.log("hello uday");

console.log(20+30);
console.log(addtocart(),uday(), name);

//
let l =[11,2,0,1,0,5,5,2,3]

l.forEach((value,index)=>{
    console.log(value,index)
});