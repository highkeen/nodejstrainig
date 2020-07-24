function f(){
    var arr=[],i;
    for(i=0;i<3;i++){
        arr[i]=function(){
            console.log(i);
            //return i;
        }
    }
    return arr;

}

var returnFun=f();

returnFun[0]();
returnFun[1]();
returnFun[2]();
