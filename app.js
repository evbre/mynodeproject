var express = require('express'); 
var app = express(); 

app.get('/',function(req,res){
	var path = require('path');
	res.sendFile(path.join(__dirname+'/days.html'));
});

app.get('/mon',function(req,res){
	res.send("<h1>On Monday</h1><p>I never go to work.</p>");
});

app.get('/tue',function(req,res){
	res.send("<h1>On Tuesday</h1><p>I stay at home.</p>");
});

app.get('/wed',function(req,res){
	res.send("<h1>On Wednesday</h1><p>I never feel inclined; work is the last thing on my mind.</p>");
});

app.get('/thu',function(req,res){
	res.send("<h1>On Thursday</h1><p>it's a holiday!</p>");
});

app.get('/fri',function(req,res){
	res.send("<h1>...and Friday</h1><p>I detest.</p>");
});

app.get('/sat',function(req,res){
	res.send("<p>Oh it's much too late</p><h1>on Saturday</h1>");
});

app.get('/sun',function(req,res){
	res.send("<h1>and Sunday</h1><p>is the day of rest.</p>");
});

app.listen(3000, function(){
	console.log('Listening on port 3000!');
});