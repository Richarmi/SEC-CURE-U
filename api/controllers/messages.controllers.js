
var messages = require("../data/messages.json");

// this is the project's first controller
module.exports.getAllMessages = function(req, res) {
    console.log("The user is retreiving list of messages...");
        
    res.status(200).json(messages);
}

// this controller is to get any one of the users and their info
module.exports.getMessage = function(req, res) {
    
        var thisUserID = req.params.userID;
        var currentMessage = messages[thisUserID];
        
        console.log("The user is retreiving info to user # " + thisUserID + "...");
        
    res.status(200).json(currentMessage);
}