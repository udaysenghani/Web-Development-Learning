//axios is better way of structure of fetch method 
//internally the fetch method is working in axios

//in axios we direct get the data we do not have to parse. 

let url = "https://catfact.ninja/fact";

let p = document.querySelector("#fact");

async function getFacts(){
    try{
        let res = await axios.get(url); //return a promise
        console.log(res.data);
        p.innerText = res.data.fact;
    }catch(e){
        console.log("ERROR: ",e);
        p.innerText = "No Fact Found";
    }
    
}


// async function getFacts(){
//     try{
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log(data1.message);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.message);

//     }catch(e){
//         console.log("ERROR :",e);
//     }
//     console.log("bye");
    
// }