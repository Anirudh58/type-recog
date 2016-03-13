var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
   name: String,
   pattern: String
});

mongoose.model('User', userSchema);


