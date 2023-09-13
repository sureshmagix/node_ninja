const express = require('express');

// express app

 const app = express();

//listeing for a request
app.listen(3000);

app.get('/',(req,res)=>{
    //res.send('<p> home page </p>');
    res.sendFile('./views/index.html',{root: __dirname});
});


app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root: __dirname});
});

// redirecting a page to exsisting uirl
app.get('/about-us',(req,res)=>{
    res.redirect('./about');
})

// 404 page and It must be always at bottom after all urls

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})
