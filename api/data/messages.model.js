var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    message : String,
    isEncrypted : Boolean,
    standard : String,
    userID : String
});

module.exports = mongoose.model('Message', messageSchema);