//Sending HTML document instead of Text

const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    //console.log(req.url, req.method);
  
    //set Header content type
    res.setHeader('Content-Type','text/html');
    //send and html file as resposnse
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
             console.log(err);
             res.end();
            }
        else {
            //res.write(data);
            res.end(data); //we can  also send the data in res.end()
        }

    });

   

});


server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})

