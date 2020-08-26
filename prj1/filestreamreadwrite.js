var fs = require('fs');

var readerStream = fs.createReadStream('sample-2mb-text-file.txt', {
    encoding: "utf8",
    highWaterMark: 16000,
    objectMode: true
});

var writerStream = fs.createWriteStream('output.txt');
//readerStream.setEncoding('UTF8');

readerStream.on('data', function (chunk) {
    chunk=chunk.toUpperCase();
    writerStream.write(chunk);
});


readerStream.on('end', function (chunk) {
    console.log("file is end");
});