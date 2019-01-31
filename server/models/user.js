var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {
  	type:String,
  	unique:true},

  password: String,
  email: {
  type:	String,
unique:true  }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('new', User);
