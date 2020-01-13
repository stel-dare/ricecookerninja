const express = require('express');
const app = express();

//Homepage
app.get('/',function(req,res){
  res.send('say ricecookerninja');
});

//Posts
app.get('/posts',function(req,res){
  res.send('posts');
});

//About
app.get('/about',function(res,req){
  res.send('about me');
});

//Listening on port 3000
 app.listen(3000,function(){
   console.log('Server started on port 3000');
 })
