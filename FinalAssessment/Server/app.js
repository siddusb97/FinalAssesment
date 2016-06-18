var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var movie = require('./api/routes/movies/movie');
var user = require('./api/routes/users/users');
var config=require('./config/config.json');
var path = require('path');
var app = express();
var passport = require('passport');
var jwt = require('jsonwebtoken');


//Express Validator
app.use(expressValidator({
  errorFormatter : function(param, msg , value){
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;
       while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }
    return{
      param: formParam,
      msg : msg,
      value : value
    };
  }
}));
//Assign body-parser to the app for getting the post data from req body
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

//Bring in defined Passport Strategy
require('./config/passport')(passport);

//Passport Innit
app.use(passport.initialize());
app.use(passport.session());


//Connect to Mongo Database, If custom connections are not made then this connection will be shared across all models
mongoose.connect(config.DatabaseURL);
// assign the mongoose connection to a variable
var db = mongoose.connection;
//Verify the connection status with the database
db.on('error', console.error.bind(console,'Connection error ...!!!!!'));
db.once('open',function(){
  console.log("Connected to MongoDB successfully");
})

// Assign /Api as the root of the application
app.use('/api', movie);
app.use('/user', user);
var port = config.port;
//instantiate the server at the specified port
app.listen(port, function(){
  console.log("Server started at port :"+port);
});
