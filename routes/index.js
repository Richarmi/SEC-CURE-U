var express = require("express");
var router = express.Router();

// define router to be the /json route for GET and POST
router.route("/json")
    .get(function(req, res){
        console.log("The user is retreiving json code...");
        
        res.status(200).json( {'jsonData' : true} );
    })
    .post(function(req, res){
        console.log("Posting json route...");
        
        res.status(200).json( {'jsonData' : "POST received"} );
    });






module.exports = router;