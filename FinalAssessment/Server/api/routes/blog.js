var express = require('express');
var Blog=require('../../models/blog');
var router = express.Router();
//To render initial html page
router.get('/', function(req, res) {
    res.render('index.html');
});
//To send available posts
router.get('/getPosts',function(req,res){
  //Sort is to get latest post first
  Blog.find().sort({date:'desc'}).exec(function(err, posts) {
            if (err)
                res.send(err);
            res.json(posts);
        });
});
//To add new post to DB
router.post('/addPost',function(req,res){
  var blog = new Blog();

      blog.title = req.body.Title;
      blog.subtitle=req.body.Subtitle;
      blog.body=req.body.Description;
      blog.author=req.body.Author;
      blog.save(function(err) {
          if (err)
              res.send(err);
          res.json({ message: 'Post added!' });
            });
});
module.exports = router;
