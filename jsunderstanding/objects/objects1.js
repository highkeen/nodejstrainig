let student = {
    name: "samik",
    role: 1,
    address: {
        line1:"birati",
        pin:"700049"
    }
};

let refStudent=student;


console.log(student.name);
console.log(refStudent.name);

refStudent.name="new samik";


console.log(student.name);
console.log(refStudent.name);

student={};

console.log(refStudent.name);
console.log(student.name);

console.log(refStudent["role"]);

let address =refStudent.address;