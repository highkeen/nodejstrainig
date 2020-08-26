const {Readable} = require('stream');

const rs=new Readable({
    read(size){
        console.log(size);
    }
});

rs.push('abcd');
rs.push('efgh');
rs.push(null);

rs.pipe(process.stdout);
