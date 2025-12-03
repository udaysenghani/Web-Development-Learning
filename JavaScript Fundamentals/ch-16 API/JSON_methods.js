let data = '{"fact":"Cats see six times better in the dark and at night than humans.","length":63}';

let obj = JSON.parse(data);   //string --> obj
console.log(obj);
console.log(obj.length);
let student ={
    name : "Uday",
    roll : "220",
    marks : 95
}
let data_str = JSON.stringify(student);  //obj --> string
console.log(data_str);