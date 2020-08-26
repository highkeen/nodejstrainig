var path=require('path');
var fs=require('fs');

let filePath=path.join(__dirname,'..','main.js');

console.log(filePath);

const data=fs.readFileSync(filePath,'utf8');
console.log(data);

