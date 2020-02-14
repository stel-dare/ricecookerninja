const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const _ = require('lodash');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//Constants
const funFoodQuote = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Nunc aliquet bibendum enim facilisis gravida.
 Stella.
`;

const categories = ['Lorem','Lorem','Lorem','Lorem','vivamus at augue', 'arcu dictum varius','eiusmod tempor incididunt','Nunc aliquet bibendum enim facilisis'];

const posts = [];
//Homepage
app.get('/',function(req,res){
  res.render('index');
});

//Posts
app.get('/posts',function(req,res){
  res.render('posts',{quote:funFoodQuote,categories:categories,posts:posts});
});

app.get('/posts/:post',function(req,res){
  console.log(req.params.post);
  for(let i = 0; i<posts.length;i++){
  if (_.lowerCase(posts[i].title) === _.lowerCase(req.params.post)){
  return  res.render('post',{post:posts[i]});
  }
  }
return  res.send('Match Not Found');
});
//About
app.get('/about',function(req,res){
  res.render('about');
});

//akimbo
app.get('/akimbo',function(req,res){
  res.render('akimbo');
});

app.post('/publish',function(req,res){
  let ingredientsArr = req.body.ingrdients.split(',');
  let post = {
    title:req.body.title,
    image:req.body.image,
    ingredients:ingredientsArr
  }
  posts.push(post);
  res.redirect('/posts');
});
//Listening on port 3000
 app.listen(3000,function(){
   console.log('Server started on port 3000');
 })
