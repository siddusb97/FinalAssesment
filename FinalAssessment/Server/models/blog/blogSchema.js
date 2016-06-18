var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var blogSchema= new Schema({
Title: String,
Author:String,
Content:String,
likes:Number
});

module.exports=mongoose.model("BlogDB",blogSchema);
