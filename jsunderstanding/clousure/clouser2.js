var inner;
var f=function(){
    var b="local";
    var f1=function(){
        var c="inner local";
        return b;
    }
    
    inner=f1;
};

f();
console.log(inner());