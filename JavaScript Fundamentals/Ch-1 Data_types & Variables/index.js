//variable rule 
/*
 * 1. Case Sensitivity: "a" and "A" are different.
 * 2. Allowed Characters: Only letters, digits, underscore (_), and dollar sign ($) are allowed. (No spaces!)
 * 3. First Character: Must be a letter, underscore (_), or dollar sign ($). Cannot be a digit.
 * 4. Reserved Words: Cannot be used as variable names (e.g., const, let, function).
 * 5. Dynamic Typing: JS is dynamically typed; no need to define type (like int, bool).
 */

//js is dynamically typed language don't need to define the type like int, bool, char or string
//do not use below type of declaration is only for variable example.always use let , var or const to declare a variable
fullName="Uday Senghani";
age = 21;
price=38.99;
radius = 25.32;
a= null;
b = undefined;
isFollow=true;
console.log(fullName)


//let, const & var

//var : Variable can be re-declared & updated. A global scope variable. 
var age = 25;
var age =21;

//let : Variable cannot be re-declared but can be updated. A block scope variable.
let name="uday";
let roll_no=21;
//const : Variable cannot be re-declared or updated. A block scope variable.
const PI = 3.14;
const ROI=12;

// Data Types in JS
//Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol
let Name = "Shiv";
console.log(typeof(Name));// string
let x;//Undefined
let y=null;//null data type

let b = BigInt("495612356122");
console.log(typeof(b));//bigint
let s = Symbol("hello!");
console.log(typeof(s))// symbol


//Non-primitive Data Types: Objects, array, function
// Example 1: Student Object
const student={
    fullName:"Shiv Patel",
    age:29,
    cgpa:8.2,
    isPass: true
};
//access values
console.log(student.age);
console.log(student["age"]);

//update values
// Updating Values (even though 'student' is const, its properties can be changed)
student.age=student.age+1;
console.log(student.age);

// Example 2: Product Object
const product ={
    productName:"pokker Ballpen(Black)",
    rating:4.8,
    isOffer: true,
    discount: "5% off",
    price: 270.00
};
console.log(`Product Name: ${product.productName}`);

// Example 3: Social Media Profile (Cleaned and restructured for clarity)
const profile={
    id_name: "uday_senghani",
    isfollow:"true",
    post:45,
    followers:450,
    following:327,
    bio:"Future Computer Engineer, Tech Enthusist, Problem-solver with tech"
};
console.log(`Profile Followers: ${profile.followers}`);