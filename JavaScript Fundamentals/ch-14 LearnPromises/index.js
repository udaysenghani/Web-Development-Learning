let firstpromise = new Promise((resolve, reject)=> {
    setTimeout(function sayMyName(){
        console.log("My Name is Uday");},0);

    });

// ----------------------- Promise Chaining Example -----------------------

// Creating a promise that immediately resolves with value 10
let promise = new Promise((resolve, reject)=> {
    let success = true;
    if(success) {
        resolve(10);   // Promise fulfilled with value 10
    }
    else {
        reject("Internal Server Error"); // Promise rejected
    }
});

// Chaining multiple .then() calls
promise1.then((message)=> {
    console.log("first msg:" + message);  // message = 10
    return 20;  // Passing 20 to the next .then()
}).then((message)=> {
    console.log("second msg: " + message); // message = 20
    return 30; // Passing 30 to the next .then()
}).then((message)=> {
    console.log("third msg: " + message); // message = 30
}).catch((error) => {
    // This runs ONLY if any promise in the chain rejects
    console.error(error);
}).finally((message) => {
    // Finally runs on resolve or reject — always executes
    console.log("Main to final hu, chalunga pakka")
});


// ----------------------- Promise.all Example -----------------------

// promise1 resolves after 1 second
let promise1 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 1000, "First");
});

// promise2 resolves after 2 seconds
let promise2 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 2000, "Second");
});

// promise3 REJECTS after 4 seconds
let promise3 = new Promise((resolve, reject)=> {
    setTimeout(reject, 4000, "Third");  // rejected with value "Third"
});

// Promise.all waits for ALL promises
// If ANY promise rejects → entire Promise.all rejects
Promise.all([promise3, promise2, promise1])
.then((values) => {
    // This runs only if ALL promises resolve (not happening here)
    console.log(values);
})
.catch((error)=> {
    // This executes because promise3 gets rejected after 4 seconds
    console.error("error:" + error);
});
