var express = require("express");
var app = express();

var dataFile = require("../data/data.json");

var medicineFile = require("../data/data2.json");
app.set('appData',dataFile);
app.set('medicineData',medicineFile);

app.use(require("../route/index"));
app.use(require("../route/speakers"));
var server = app.listen(3001,function(){
    console.log("Server Started");
})