const express = require('express');

// express app

const app = express();

//listeing for a request
app.listen(3000);


app.get('/',(req,res)=>{
    ((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})



 

 
