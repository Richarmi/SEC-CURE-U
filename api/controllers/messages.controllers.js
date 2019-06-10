
// this is the project's first controller
module.exports.messagesGetAll = function(req, res) {
    console.log("The user is retreiving json code...");
        
    res.status(200).json( {'jsonData' : true} );
}