/* promise is an eager precess */
let p=new Promise((res,rej)=>{
    console.log('fired: '+ new Date());
    setTimeout(()=>res(new Date()),2000);
});


setTimeout(()=>p.then(data=>console.log(data)),5000);

setTimeout(()=>p.then(data=>console.log(data)),3000);
