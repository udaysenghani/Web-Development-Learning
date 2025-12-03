

function savetoDb(data){
    return new Promise((resolve,reject) =>{ //also we can use success, failure
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        setTimeout(()=>{
            if (internetSpeed > 4){
            resolve("success : data saved to db");
            } else{
            reject("failed : week connection");
            }
        },1000);
    });
}

// savetoDb("hello");

let request = savetoDb("hello");
console.log(request);

request.then((result)=>{
    // console.log("promise was resolved");
    // console.log(request);
    console.log("data 1 saved");
    console.log("result of Promise : ",result);
    return savetoDb("hello world"); //next data 

}).then((result)=>{
    console.log("data 2 saved");     //there is possible to multiple then and one catch block
    console.log("result of Promise : ",result);
    return savetoDb("new data"); // next data

}).then((result)=>{
    console.log("new data saved");
    console.log("result of Promise : ",result);

}).catch((error)=>{
    console.log("promise was rejected : ", error);
    console.log("error of Promise : ",request);
});


//it is used when the sequencial call one after another 
//if one is failed the next call will not execute 
// one is success then go for the next call ....

//also handle error in same catch block 