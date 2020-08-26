var fs = require('fs');

var readerStream = fs.createReadStream('sample-2mb-text-file.txt',{
    encoding : "utf8",
    highWaterMark : 16000,
    objectMode: true
    });

//readerStream.setEncoding('UTF8');

readerStream.on('data', function (chunk) {
    console.log(chunk);
});


readerStream.on('end', function (chunk) {
    console.log("file is end");
});