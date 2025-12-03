// let url = "https://catfact.ninja/fact";
// let url = "https://www.boredapi.com/api/activity";
let url = "https://dog.ceo/api/breeds/image/random";
async function getFacts(){
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.message);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.message);

    }catch(e){
        console.log("ERROR :",e);
    }
    console.log("bye");
    
}