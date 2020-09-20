// cmd:
// npm init
// npm install dependencie --save


var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var mongoose = require("mongoose");

app.use(express.static("public")); //
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


// ROUTES:
app.get("/", function(req, res){
	res.render("home.ejs");
});

app.listen(8000, process.env.IP, function(){
	console.log("Server started");
});