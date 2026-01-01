"use strict";
// let msg :string = "hello this is string";
// console.log(msg);
Object.defineProperty(exports, "__esModule", { value: true });
// let username: string = "Uday";
// let age: number = 22;
// let isLoggedIn: boolean = true;
// let skills: string[] = ["JS", "TS"];
// let tuple: [string, number] = ["Admin", 1];
// let na : string;
// //statically typed language
let age = 20;
if (age < 50)
    age += 10;
let sales = 123_252;
let place; //not initialized value is type any
// Arrays 
let numbers = [1, 2, 3];
// tuples
//data like 1 , "Name"
let user = [1, "Uday"];
user.push(2, "Nayan");
console.log(user);
//which elemnt we are accessing we get that type of the methods
// for first element is number then all number method , etc
//enums 
const small = 1;
const medium = 2;
const large = 3;
//pascleCase
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
// in this way compiler automatically assign the value 
// Small = 1
// Medium = 2
// Large = 3
// also we can define
let mySize = Size.Medium;
// const mySize: Size = Size.Medium;    //if we use const compiler generate the more optimized code
console.log(mySize); //2
//Functions
//.........return value type is defined
// if no return value just write void as data type
function calculateTax(income) {
    return 0;
}
function calculate(income, taxYear) {
    if (taxYear < 50_000)
        return income * 1.2;
    return income * 1.3;
}
// calculate(10_000,2022, 4); // give a compile time error it take exactly 2 arg
calculate(10_000, 2022);
//with default value
function calculate1(income, taxYear = 2022) {
    if (taxYear < 50_000)
        return income * 1.2;
    return income * 1.3;
}
calculate1(20_000);
//objects
let employee = { id: 1 };
// employee.name = 'uday'; this is valid in js not in typescript
let emp = {
    id: 1,
    name: "uday",
    retire: (date) => {
        console.log(date);
    }
};
//now we can define the data type as employee in above function
let emp2;
//combining types
// Union Types
function kgToLbs(weight) {
    //narrowing
    if (typeof weight === 'number')
        return weight * 2.2; //num function
    else
        return parseInt(weight) * 2.2; //by default string function
}
kgToLbs(10);
kgToLbs("20kg");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
//Nullable Types
function greet(name) {
    console.log(name.toUpperCase());
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
// optional property access operator
console.log(customer?.birthday);
//optional element access operator 
// customer?.[0]
//optional call
let log = null;
log?.('a');
//# sourceMappingURL=index.js.map