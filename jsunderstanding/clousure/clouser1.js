var a="global";
var f=function(){
    var b="local";
    var f1=function(){
        var c="inner local";
        console.log(a);
        return b;
    }
    
    return f1;
};

var rf=f();
console.log(rf());