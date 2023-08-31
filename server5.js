//Sending HTML document instead of Text

const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    //console.log(req.url, req.method);
  
    //set Header content type
    res.setHeader('Content-Type','text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode= 200;
        break;
        case '/about':
            path+= 'about.html';
            res.statusCode= 200;
            break;
        case '/about-me':
                res.statusCode= 301;
                res.setHeader('Location','/about');
                res.end();
                break;            
            
        default:
            path += '404.html';
            res.statusCode= 404;
            break;
            
    
    }
    //send and html file as resposnse
    fs.readFile(path,(err,data)=>{
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

