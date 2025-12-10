// const stu1={
//     name:"Bhavik",
//     age:22,
//     marks:95,
//     getMarks : function(){
//         return this.marks;
//     }
// };
// const stu2={
//     name:"Neer",
//     age:20,
//     marks:96,
//      getMarks : function(){
//         return this.marks;
//     }
// };
// const stu3={
//     name:"Kishan",
//     age:19,
//     marks:94,
//      getMarks : function(){
//         return this.marks;
//     }
// };

// let arr1 = [1,2,3];
// arr1.sayHello =()=>{
//     console.log("Hello!, I am arr");
// }
// let arr2 =[25,3,62,5];
// arr2.sayHello =()=>{
//     console.log("Hello!, I am arr");
// }


function PersonMaker(name , age){ //factory function: create object
    const person ={
        name : name,
        age : age,
        talk(){
            console.log(`Hi, My name is ${name}!`);
        }
    };
    return person;
}

let p1 = PersonMaker("Neer",20); //create obj
let p2 = PersonMaker("kailash",23); // creaate obj
console.log("we can access property: ",p1.name,p1.age);
p1.talk();
p2.talk(); 

//dis-advantage: when we are create obj using the factory function of 1000 people i generates the diffrent copies
// that is not reliable it is solved by the new operator. as below

function Person(name , age){ //constructors - nor return anything & start with capital letter 
    this.name= name;
    this.age=age;

}
Person.prototype.talk = function() {
    console.log(`My Name is ${this.name}!`)
}
let p3 = new Person("Kishan",20); //obj create using new keyword
let p4 = new Person("Rushit",22); //obj create using new keyword


//classes are same as new operator in work but it is write in more simple & strutured way.
//class are basic templete to create object

class Person{
    constructor(name,age){
        this.name=name;
        this.age = age;
    }
    talk(){ //automatic create method inside the prototype 
        console.log(`Hi!! , This is ${this.name}`);
    }
}

let p5 = new Person("Raxit",20); //obj create use of class
let p6 = new Person("Ved",22); 