const http = require('http');


const server = http.createServer((req,res)=>{
    //console.log(req.url, req.method);
  
    //set Header content type
    res.setHeader('Content-Type','text/plain');

    res.write('Hello world'); //How to send it to browser/
    res.end();// First write the text and then when you say res.end() then its sent to the browser

});


server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})