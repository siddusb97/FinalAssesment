var mongoose = require('mongoose');
var Schema = mongoose.Schema;


  var blogSchema = new Schema({
        title:  String,
        subtitle:String,
        author: String,
        body:   String,
        date: { type: Date, default: Date.now },
      });
//Make the model
var Blog=mongoose.model("Blog",blogSchema,"Blog");
module.exports = Blog;
