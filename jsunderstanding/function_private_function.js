function outer(){
    function inner(){
        console.log("Return by inner");
        return 10;
    }
    return inner();
}
console.log(outer());

function returnFunction(){
    function inner(){
        console.log("Return by inner");
        return 10;
    }
    return inner;
}

console.log(returnFunction()());