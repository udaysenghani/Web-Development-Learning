let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data.fact);
})
.catch((err)=>{
    console.log("err : ",err);
});

// fetch(url)
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("data 1 : ",data.fact);
//     return fetch(url);
// }).then((res)=>{
//     // console.log(res);
//     return res.json();
// }).then((data)=>{
//     console.log("data 2 : ",data.fact);
// })
// .catch((err)=>{
//     console.log("err : ",err);
// });

console.log("this is asynchronus fetch API");