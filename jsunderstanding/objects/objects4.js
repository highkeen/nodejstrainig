var x=10;

function printThis(){
    console.log(this);
}

console.log(x);
console.log(globalThis.x);

console.log(globalThis.printThis);

printThis();