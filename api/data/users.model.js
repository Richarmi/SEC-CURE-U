var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName : String,
    lastName : Boolean,
    privLevel : Number,
    userID : String
});

module.exports = mongoose.model('User', userSchema);