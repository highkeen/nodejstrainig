function f(){
    console.log(local);
    let local=2;    
}


function f1(){
    {
        let x=10;
        console.log(x);
    }
    console.log(x);
}
/** var not support block scope */
function f2(){
    {
        var x=10;
        console.log(x);
    }
    console.log(x);
}


f2();

