var express = require("express");
var app = express.Router();

var bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/speakers',function(req,res){
    
    var info ='';
    var dataFile =  req.app.get('appData');
    dataFile.speakers.forEach(function(item) {
        info+=`
         <li>
         <h2> ${item.name}</h2>
         <p> ${item.summary} </p>
        <li>
         
        `;
        
    });
    res.send(`<h1> Express Integration </h1>
    ${info}
    `);
})

app.get('/speakers/:speakerId',function(req,res){
    var dataFile =  req.app.get('appData');
    var item = dataFile.speakers[req.params.speakerId];
    res.send(`
    <h1> ${item.title} </h1>
    <h2> ${item.name} </h2>
    <p> ${item.summary} </p>
    `);

})


app.post('/findSum',function(req,res){

    
    var a = parseInt(req.body.first);
     var b = parseInt(req.body.second);
    
    
   
 
    
    
    res.send(""+ (a+b));

})


app.get('/medicine',function(req,res){
 res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var dataFile =  req.app.get('medicineData');
    var info ='';

    res.send(dataFile);
    

})

module.exports = app;