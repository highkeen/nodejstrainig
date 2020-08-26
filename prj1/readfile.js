var path=require('path');
var fs=require('fs');

let filePath=__dirname+"/main.js";

console.log(filePath);

const data=fs.readFileSync(filePath,'utf8');

console.log(data);

