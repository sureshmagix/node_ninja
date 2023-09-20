const express = require('express');
const morgan = require('morgan');

// express app

 const app = express();

 // Register View Engine
 app.set('view engine','ejs'); // This line will automatically look for views folder
 // app.set('views','myviews ')// This line will look for my views instead of views. 


//listeing for a request
app.listen(3000);

app.use(express.static('public')); //once we use this line then what ever in public folder can be accessed by the front end
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    //res.send('<p> home page </p>');
    const blogs =[
        {title: 'yoshi finds eggs', snippet:'Lorem ipsum dolor sit amet conserctetur'},
        {title: 'Mario finds stars', snippet:'Lorem ipsum dolor sit amet conserctetur'},
        {title: 'How to defeat browser', snippet:'Lorem ipsum dolor sit amet conserctetur'},
         ];
    res.render('index',{title: 'Home',blogs});
});


app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});
});

// redirecting a page to exsisting uirl
app.get('/about-us',(req,res)=>{
    res.redirect('./about');
})

app.get('/blogs/create', (req,res)=>{
    res.render('create', {title: 'Create a new Blog'});
})

// 404 page and It must be always at bottom after all urls

app.use((req,res)=>{
    res.status(404).render('404',{title:'404 Page'});
})
