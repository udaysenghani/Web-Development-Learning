let url = "https://icanhazdadjoke.com/";
const btn = document.querySelector("#getJock");
const p = document.querySelector("#Jock");

btn.addEventListener("click",async ()=>{
    let joke = await getJock();
    p.innerText=joke;
})

async function getJock() {
    try {
        const config = {headers: {Accept: "application/json"} }; // use headers
        let res = await axios.get(url,config);
        console.log(res.data);
        return res.data.joke;
    } catch (e) {
        console.log("Error : ", e);
        return "Joke Not Found";
    }
}