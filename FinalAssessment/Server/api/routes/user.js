var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt=require('bcryptjs');

var User=new Schema({

  email: {
    type:String,
    required:true
  },
  password: {
    type: String,
    required:true
  }

});
// Saves the user's password hashed (plain text password storage is not good)
User.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Create method to compare password input to password saved in database
User.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = User;
