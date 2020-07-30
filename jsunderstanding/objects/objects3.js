globalThis.x="hello";

function bind(objectRef,token){
    objectRef['newValue']=token;
}


function print(token){
    console.log(this.x);
    bind(this,token);
}

var obj={
    x:10,
    printX:print
}


print("global");
obj.printX("obj");

console.log(globalThis);
console.log(obj);
