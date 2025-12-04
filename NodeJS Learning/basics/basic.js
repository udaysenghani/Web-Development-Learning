// let a =5;

// for(i=0;i<=a;i++){
//     console.log("hello",i);
// }

console.log(process.argv);

let a = process.argv;
for (i = 2; i <a.length; i++) {
    console.log("hello & Welcome to ", a[i]);
}