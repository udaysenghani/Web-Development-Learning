//await 

function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo() {
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    getnum();
}

//execute thingg one by one not at same time 