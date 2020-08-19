(function(module){
    let hideFunction=function(){
        console.log('i am not accesable outside');
    }

    module.exposedFunction=function(){
        console.log('i am not accesable ');
        hideFunction();
    }
})(globalThis);

exposedFunction();
//hideFunction(); //not exposed