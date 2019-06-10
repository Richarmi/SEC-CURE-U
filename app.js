// constants
var assignedPort = 3000;

var express = require("express");
var app = express();
var path = require('path');

// call routes or controllers
var routes = require("./api/routes");

/*---------------------------------------------------------------*/
// set assignedPort to 3000
app.set('port', 3000);
assignedPort = app.get('port');

// Define the middleware for printing requests to the prompt screen
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

// declare the "public" folder as static
app.use(express.static(path.join(__dirname, "public")));
/*---------------------------------------------------------------*/


// URL routes to access the website

/*///////////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////*/

// Default route - error page
//app.get('/', function(req, res){
//    console.log("The user is accessing the default page...");
//    
//    res.status(404).send("express yourself!");
//});

/*///////////////////////////////////////////////////////////////*/

// Default route - home page
//app.get('/', function(req, res){
//    console.log("The user is accessing the default page...");
//    
//    // this notation is perfect for avoiding path issues between
//    // different operating systems
//    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
//});

/*///////////////////////////////////////////////////////////////*/

// Default route - retreiving json
//app.get('/json', function(req, res){
//    console.log("The user is retreiving json code...");
//    
//    res.status(200).json( {'jsonData' : true} );
//});

app.use('/api', routes);

/*///////////////////////////////////////////////////////////////*/

// Default route - sending a file in a GET route
app.get('/file', function(req, res){
    console.log("The user is sending a file...");
    
    res.status(200).sendFile(path.join(__dirname, 'app.js'));
});

/*///////////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////*/

// the server will listen on the current port it was assigned
// and indicate it on the command prompt
var server = app.listen(assignedPort, function(){
    var currentPort = server.address().port;
    console.log("We are now listening in on port " + currentPort);
});

//console.log("Me first!");