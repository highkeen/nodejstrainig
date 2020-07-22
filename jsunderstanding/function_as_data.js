function sayHello(){
    console.log("Hello");
}

var sayHelloRef=sayHello;

sayHelloRef();
sayHello();

var f=function(){

}

console.log(typeof f);