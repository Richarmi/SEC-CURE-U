// constants
var currentPort = 3000;

var express = require("express");
var app = express();

// this line of code is having problems
app.set('port', 3000);
currentPort = app.get('port');

app.listen(currentPort);
console.log("We are now listening in on port " + currentPort);