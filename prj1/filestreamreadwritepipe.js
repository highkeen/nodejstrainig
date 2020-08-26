var fs = require('fs');

var readerStream = fs.createReadStream('sample-2mb-text-file.txt', {
    encoding: "utf8",
    highWaterMark: 16000,
    objectMode: true
});

var writerStream = fs.createWriteStream('outputpipe.txt');
//readerStream.setEncoding('UTF8');

readerStream.pipe(writerStream);


readerStream.on('end', function (chunk) {
    console.log("file is end");
});