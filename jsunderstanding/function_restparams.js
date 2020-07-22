//ES5
function sayThings(param1){
    console.log(param1);
    console.log(arguments);
}

sayThings();
sayThings('hello');

sayThings('hello','world');

//ES6
function sayThingsWithRestParameters(param1,...others){
    console.log(param1);
    console.log(others);
}

sayThingsWithRestParameters();
sayThingsWithRestParameters('hello');
sayThingsWithRestParameters('hello','world');
sayThingsWithRestParameters('hello','world','js');
