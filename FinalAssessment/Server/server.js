var express = require('express');
var path = require('path');
var blog = require('./api/routes/blog');
var user = require('./api/routes/user');
var config=require('./config/config.json');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var passport = require('passport');
var app = express();



// Bring in defined Passport Strategy
require('./config/passport')(passport);
// view engine setup
app.set('views', path.join(__dirname, '../Client'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../Client/dest')));

// Initialize passport for use
app.use(passport.initialize());


// Home route. We'll end up changing this to our main front end index later.
app.use('/', blog);
//app.use('/user',user);

mongoose.connect(config.dburl);
var db=mongoose.connection;
db.on('error',console.error.bind(console,"Connection Error:"));
db.open('open',function(){
    console.log("connected to db");
});
app.listen(config.port);
