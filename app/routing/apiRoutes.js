var friendsList = require("../data/friends.js");
var gitHub = require("/https://github.com/niveditanagar/Friend-Finder");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsList);

    })

    app.get("/https://github.com/niveditanagar/Friend-Finder", function(req, res){
        res.json(gitHub);
    })
    
}