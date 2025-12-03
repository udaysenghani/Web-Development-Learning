let url = "https://dog.ceo/api/breeds/image/random";
let i = document.getElementById("myImg");

async function getImage(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        i.src= data.message;
    }catch(e){
        console.log("ERROR :",e);
    }
}