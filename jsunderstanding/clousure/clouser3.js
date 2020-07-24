function f(count){
    function inner(name){
        console.log(name);
        return count;
    }
    count ++;
    return inner;
}

console.log(f(100)('samik'));
console.log(f(50)('xyz'));