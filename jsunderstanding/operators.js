// let x=10;

// let y=++x;  //x=x+1 , x+=1, ++x
// //++x;

// console.log(x);
// console.log(y);

// let b=!0;

// console.log(b);

/**logical operator**/ 

let op1=true;
let op2=true;

let a= op1 && (op2=false);  // op1 && op2
console.log(a);
console.log(op1);
console.log(op2);

a= null && 6;
console.log(a);

a= 7 || 6;
console.log(a);

a= null && undefined;
console.log(a);

a= null || undefined;
console.log(a);