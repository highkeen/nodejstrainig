
//ES5
function sum(num1,num2){
    num1=num1||0;
    num2=num2||0;
    return num1+num2;
}

console.log(sum(10));

//ES6
function sumWithDefaultValue(num1=0,num2=0){
    return num1+num2;
}

console.log(sumWithDefaultValue());
