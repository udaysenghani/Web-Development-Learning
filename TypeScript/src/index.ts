// let msg :string = "hello this is string";
// console.log(msg);

// let username: string = "Uday";
// let age: number = 22;
// let isLoggedIn: boolean = true;

// let skills: string[] = ["JS", "TS"];
// let tuple: [string, number] = ["Admin", 1];
// let na : string;

// //statically typed language

let age: number = 20;
if (age<50)
    age+=10;

let sales: number = 123_252; 
let place; //not initialized value is type any


// Arrays 
let numbers: number[] = [1,2,3];

// tuples
//data like 1 , "Name"

let user : [number,string] = [1,"Uday"];
user.push(2,"Nayan");
console.log(user);
//which elemnt we are accessing we get that type of the methods
// for first element is number then all number method , etc


//enums 
const small = 1;
const medium = 2;
const large = 3;

//pascleCase
enum Size {Small = 1, Medium , Large};
// in this way compiler automatically assign the value 
// Small = 1
// Medium = 2
// Large = 3
// also we can define

let mySize: Size = Size.Medium;
// const mySize: Size = Size.Medium;    //if we use const compiler generate the more optimized code
console.log(mySize); //2


//Functions

//.........return value type is defined
// if no return value just write void as data type
function calculateTax(income: number): number{
    return 0;
}

function calculate(income: number, taxYear: number): number{
    if(taxYear< 50_000)
        return income* 1.2;
    return income*1.3;
}

// calculate(10_000,2022, 4); // give a compile time error it take exactly 2 arg
calculate(10_000, 2022);

//with default value
function calculate1(income: number, taxYear =2022 ): number{
    if(taxYear< 50_000)
        return income* 1.2;
    return income*1.3;
}
calculate1(20_000);

//objects

let employee = {id:1};
// employee.name = 'uday'; this is valid in js not in typescript

let emp:{
    readonly id: number,
    name: string,
    // name?: string // we can create the property optional like this
    retire: (date: Date)=> void
} = {
        id : 1,
        name:"uday",
        retire : (date: Date)=>{
            console.log(date);
        }
    };

// emp.id= 0; // if the object property is readonly that can't be changed


//Advanced Types

//type alices
// in type alices we can define the type. let we define the type of employee

type employee= {
    readonly id: number,
    name: string,
    retire: (date: Date)=> void
}
//now we can define the data type as employee in above function

let emp2 : employee;



//combining types

// Union Types
function kgToLbs(weight: number | string): number{
    //narrowing
    if (typeof weight === 'number')
        return weight * 2.2; //num function
    else
        return parseInt(weight)*2.2; //by default string function
}

kgToLbs(10);
kgToLbs("20kg");

//intersection Types

type Draggable ={
    drag: ()=> void
};

type Resizable = {
    resize: ()=> void
};

type UIwidget = Draggable & Resizable; //intersection type

let textBox: UIwidget ={
    drag: ()=>{},
    resize: ()=>{}
}



//literal types (exact or specific value)
type Quantity = 50 | 100; //possible value of the quntity
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';  //possible value of Metric

//Nullable Types
function greet(name: string) {
    console.log(name.toUpperCase());
}
// greet(null); it is not allowed



//optional chaining
type Customer ={
    birthday: Date
};

function getCustomer(id : number): Customer|null|undefined{
    return id===0 ? null : {birthday: new Date()}; 
}

let customer = getCustomer(0);
// optional property access operator
console.log(customer?.birthday);


//optional element access operator 
// customer?.[0]

//optional call
let log: any = null;
log?.('a');


