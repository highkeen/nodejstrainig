var count=0;


class Math{
    static add(a,b){
        count++;
        return a+b;
    }

    static totalUsed(){
        return count;
    }
}


/** 
 *  dont change the reference
 * **/
//exports=Math;

module.exports=Math;