let url = "http://universities.hipolabs.com/search?name=";
const btn = document.querySelector("#btn");
const input = document.querySelector("input");
const p = document.querySelector("#result");

let country;
btn.addEventListener("click", async ()=>{
    country = input.value;
    let data = await getColleges(country);
    showColAr(data);
});
function showColAr(colarr){
    let list = document.querySelector("#result");
    list.innerText="";
    for (col of colarr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText= col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        // console.log(res.data);
        return res.data;
    }catch(e){
        console.log("Error: ",e);
        return e;
    }
}