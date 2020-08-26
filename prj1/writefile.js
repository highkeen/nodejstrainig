var fs=require('fs');

let filePath=__dirname+"/data.json";

console.log(filePath);

let data=JSON.stringify({name:"123"});

fs.writeFileSync(filePath,data);

//console.log(data);

