console.log('start');
setTimeout(()=>console.log('Execute after timeout1'),300);
setTimeout(()=>console.log('Execute after timeout2'),0);
console.log('end');