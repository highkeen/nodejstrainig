globalThis.x = 10;

/* var print=function() {
    console.log(this.x);
} */

var print=()=> console.log(this.x);



let obj = {
    x: 20,
    print: print
};

print();
obj.print();

