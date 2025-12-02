

function savetoDb(data){
    return new Promise((resolve,reject) =>{ //also we can use success, failure
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        setTimeout(()=>{
            if (internetSpeed > 4){
            resolve("success : data saved to db");
            } else{
            reject("failed : data not saved");
            }
        },10000);
    });
}

// savetoDb("hello");

let request = savetoDb("hello");
console.log(request);

request.then(()=>{
    console.log("promise was resolved");
    console.log(request);
}).catch(()=>{
    console.log("promise was rejected");
    console.log(request);
});
