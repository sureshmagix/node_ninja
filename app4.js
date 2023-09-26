const express = require('express');

const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog');



// express app

 const app = express();
// Connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@fstodo.cogkpw1.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then ((result)=>{console.log('Connected to DB and listening in 3000'),app.listen(3000)})
.catch((err)=>{console.log(err)});


 // Register View Engine
 app.set('view engine','ejs'); // This line will automatically look for views folder
 // app.set('views','myviews ')// This line will look for my views instead of views. 
//
//test1234

//listeing for a request


app.use(express.static('public')); //once we use this line then what ever in public folder can be accessed by the front end
app.use(morgan('dev'));

// mongoose and monggose sandbox routes
app.get('/add-blog', (req, res)=>{
    const blog = new Blog({
        title: 'new blog',
        snippet:' about my new blog',
        body: 'more about my new blog'
    })
 blog.save()
 .then((result)=> {
    res.send(result)
    })
.catch((err)=>{
    console.log(err);
});
})

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('651249436645ab8e388cdaef')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})




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
