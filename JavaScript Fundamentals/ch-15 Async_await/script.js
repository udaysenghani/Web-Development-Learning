async function namste() {  //async keyword create a promise 
    // return "hello";
    throw "random err";
}

namste().then((result) => {
    console.log("promise is fullfilled");
    console.log("result was :", result);
})
.catch((err) => {
    console.log("promise is rejected with error: ", err);
});

namste();

//use async function as arrow function
let hello = async ()=>{}; //return promise
