var express = require('express');
var router = express.Router();
var imdbObj = require('node-movie');
var Blog = require('../../../models/blog/blogSchema');
// Route to get all movies and save a movie
router.route('/movies')
// Get all movies
    .get(function(req, res){
      Blog.find(function(err, blogPosts) {
            if (err)
                res.send(err);
            res.json(blogPosts);
        });
    });
// Route to get all movies and save a movie
    router.route('/movies/:movie_id')
// Get the movie by id
          .get(function(req, res) {
            Movie.findById(req.params.movie_id, function(err, movie) {
                if (err)
                    res.send(err);
                res.json(movie);
            });
        })
// Update the movie by id
        .put(function(req, res) {
        Movie.findById(req.params.movie_id, function(err, movie) {
            if (err)
                res.send(err);
            movie.Title = 'Hello';
            movie.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Movie updated!' });
            });
        });
    })
// Delete the movie by id
    .delete(function(req, res) {
      console.log("hiiiiiii "+req.params.movie_id);
        Movie.remove({
            _id:  req.params.movie_id
        }, function(err, movie) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
    //Filter
    router.route('/movies/filter')
        .post(function(req, res){
          var mov=[];
          var r=req.body.Title;
          console.log(r);
          omdb.search( r,function(err, movies) {
                if (err)
                    res.send(err);
                    else
                        movies.forEach(function(movie){
                          console.log(movie.title);
                            mov.push(movie.title);
                          });
                          res.send(mov);
            });
        });

      router.route('/movies/deleteMultiple/:id1')
      .delete(function(req, res) {
        console.log("hi "+req.params.id1);
        var deleteArray=req.params.id1.toString().split(',');
        deleteArray.map(function(key){
          Movie.remove({  _id:  key},function(err, movie) {
              if (err)
                  res.send(err);

          });

        });
    res.json({ message: 'Successfully deleted' });
        });


router.route('/movies/update')
.post(function(req, res) {
console.log("Poster +++++"+req.body.Poster);
  var blog=new Blog();
  blog.Title = req.body.Title;
  blog.Author =  req.body.Author;
  blog.Content = req.body.Content;
  blog.Likes = req.body.Like;

  blog.save(function(err) {
      if (err)
          res.send(err);

        });
res.json({message:"movie added"});


});
    module.exports= router;
