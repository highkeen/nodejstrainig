var roleCount=0;
function Student(name){
    
    this.name=name;
    this.role=++roleCount;

    this.print=function(){
        console.log(`${this.name} , ${this.role}`);    
    }
}


let std1=new Student('samik1');
let std2=new Student('samik2');

std1.print();
std2.print();