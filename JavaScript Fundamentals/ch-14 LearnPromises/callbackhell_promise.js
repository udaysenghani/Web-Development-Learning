h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color= color;
        resolve("color is canged!");
    },delay);
    });
}

changeColor("red",1000).then((resolve)=>{
    console.log("messsage : ",resolve);
    return changeColor("green",1000); //next call

}).then((resolve)=>{
    console.log("message: ",resolve);
    return changeColor("blue",1000); //next call

}).then((resolve)=>{
    console.log("message: ",resolve);
    return changeColor("orange",1000); //next call

}).then((resolve)=>{
    console.log("message : ",resolve); 
})

