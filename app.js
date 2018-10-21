// Initialize NPM BOYS

var express = require("express");
var app = express();
//view engine    
app.set("view engine", "ejs");
//use public dir
app.use(express.static(__dirname + "/public"));

//routes
var indexRoutes      = require("./routes/index");

app.use("/", indexRoutes);

//-------------------------------- EVENT LISTENER SERVER -------------------------------------------------
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Colorgame Server start"); 
});