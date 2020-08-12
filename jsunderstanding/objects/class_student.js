class Student{
    static roleCount=0;
    constructor(name){
        this.name=name;
        this.role=++Student.roleCount;
    }
}

let std1=new Student('samik1');

let std2=new Student('samik2');

console.log(std1);
console.log(std2);
