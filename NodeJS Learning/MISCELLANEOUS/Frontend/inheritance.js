class Person{
    constructor(name,age){
        console.log("person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}



class Student extends Person{
    constructor(name,age,marks){
        console.log("Student class constructor");
        super(name,age); //parent class constructor is being called
        this.marks=marks;
    }
   
}

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("Teacher class constructor");
        super(name,age); //parent class constructor is being called
        this.subject=subject;
    }
    
}
let stu1 = new Student("Neer",20,96);
let t1 = new Teacher("Neer",20,"Maths");

console.log(stu1.name, stu1.marks);
stu1.talk();
console.log(t1.name, t1.marks);
t1.talk();
