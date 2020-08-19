var Math=require('./mylib1');
var f=require('./mylib2');
var {fun1}=require('./mylib2');

console.log(Math.add(10,20));
console.log(Math.totalUsed());

f.fun1();
f.fun2();

fun1();