var express = require("express");
var router = express.Router();

// call the message controller
messageController = require('../controllers/messages.controllers.js');

// define router to be the /json route for GET and POST (this now uses a controller)
router.route("/messages")
    .get(messageController.messagesGetAll);


module.exports = router;