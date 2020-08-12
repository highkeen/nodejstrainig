class A{
	static count=0;
	constructor(){
		this.data=++A.count;
	}
}


let a=new A();

let b=new A();

console.log(a);
console.log(b);