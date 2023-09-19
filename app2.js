const express = require('express');

// express app

 const app = express();

 // Register View Engine
 app.set('view engine','ejs'); // This line will automatically look for views folder
 // app.set('views','myviews ')// This line will look for my views instead of views. 


//listeing for a request
app.listen(3000);

app.get('/',(req,res)=>{
    //res.send('<p> home page </p>');
    res.render('index');
});


app.get('/about',(req,res)=>{
    res.render('about');
});

// redirecting a page to exsisting uirl
app.get('/about-us',(req,res)=>{
    res.redirect('./about');
})

app.get('/blogs/create', (req,res)=>{
    res.render('create');
})

// 404 page and It must be always at bottom after all urls

app.use((req,res)=>{
    res.status(404).render('404');
})
