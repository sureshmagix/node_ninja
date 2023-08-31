const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

console.log('Going to Read Stream');


// readStream.on('data',(chunk)=>{
//     console.log('---- NEW Chunk ----');
//     console.log(chunk.toString());
//     writeStream.write('\n------NEW CHUNK --------\n'); // writting data to the file 
//     writeStream.write(chunk);// writing the chunk which is read from blog 3
// })

//piping - we are going to pipe what is there in the read stream to the write stream
readStream.pipe(writeStream);  
