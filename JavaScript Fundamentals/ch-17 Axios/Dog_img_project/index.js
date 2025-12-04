let url = "https://dog.ceo/api/breeds/image/random";
let i = document.getElementById("myImg");

let btn = document.querySelector("#btn");
btn.addEventListener("click", async ()=>{
    let img = await getImage();
    i.src = img.message;
});

async function getImage(){
    try{
        let res = await axios.get(url);
        console.log(res.data);
        return res.data;
    }catch(e){
        console.log("ERROR :",e);
    }
}