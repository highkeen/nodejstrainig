var global=10;

function f(){
    var local=2;
    global++;
    console.log(local);
}
f();
console.log(global);
console.log(local);
