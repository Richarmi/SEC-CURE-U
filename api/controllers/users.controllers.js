var users = require("../data/users.json");


// this is the project's first controller
module.exports.getAllUsers = function(req, res) {
    console.log("The user is retreiving list of users...");
        
    res.status(200).json(users);
}

// this controller is to get any one of the users and their info
module.exports.getUser = function(req, res) {
    
        var thisUserID = req.params.userID;
        var currentUser = users[thisUserID];
        
        console.log("The user is retreiving info to user # " + thisUserID + "...");
        
    res.status(200).json(currentUser);
}