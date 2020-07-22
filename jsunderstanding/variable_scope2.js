//variable hoisting
/**
 * function f(){
 *  var local=undefined; 
    console.log(local);
    local=2;    
}
 * **/

function f(){
    console.log(local);
    var local=2;    
}



f();

