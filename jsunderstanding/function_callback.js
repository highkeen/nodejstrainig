function invoker(callbackFunction){
    callbackFunction();
}

function sayHello(){
    console.log("Hello");
}

//invoker(sayHello);
invoker(function(){
    console.log("Hello from inline function");
});