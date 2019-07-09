var express = require("express");
var router = express.Router();


// call the message controller
messageController = require('../controllers/messages.controllers.js');
userController = require('../controllers/users.controllers.js');

// define router to be the /json route for GET and POST (this now uses a controller)
router.route("/users")
    .get(userController.getAllUsers);

router.route("/users/userID")
    .get(userController.getUser);
    
router.route("/messages")
    .get(messageController.getAllMessages);

router.route("/messages/userID")
    .get(messageController.getMessage);
    
module.exports = router;