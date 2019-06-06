// constants
var assignedPort = 3000;

var express = require("express");
var app = express();

// set assignedPort to 3000
app.set('port', 3000);
assignedPort = app.get('port');

var server = app.listen(assignedPort, function(){
    var currentPort = server.address().port;
    console.log("We are now listening in on port " + currentPort);
});

//console.log("Me first!");