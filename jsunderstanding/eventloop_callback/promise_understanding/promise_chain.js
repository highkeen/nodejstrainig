/* promise is an eager precess */
let p=new Promise((res,rej)=>{
    
    setTimeout(()=>rej(100),2000);
});


p.then(resolve=>{
    return resolve *100;
})
.then(resolve=>{
    console.log(resolve);
})
.catch(err=>console.log(err));


