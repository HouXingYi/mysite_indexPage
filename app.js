var express = require("express");
var app = express();
var port = 8083;
app.use("/",express.static(__dirname + "/public"));
app.listen(port);
console.log("app is runing on port"+port);