const http = require('http');


const server = http.createServer((req,res)=>{
    console.log('Request made');
    res.write('A reques has been made');
    res.end();
});


server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})