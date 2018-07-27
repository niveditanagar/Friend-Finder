var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var friendsList = require("././friends");
//console.log("friendsList");

var app = express();
var PORT = process.env.PORT || 3000;

// app.get("/", function(req, res){
//     res.send("Hello World");
// })


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);





app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

