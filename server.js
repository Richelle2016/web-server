var express = require('express');
var app = express();
var PORT = 3000; // as port is capital letter, it means in javascript that it should not be changed

/*app.get('/', function (req, res){
	res.send('Hello Express!');
});*/

var middleware = require('./middleware.js');


app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication, function (req, res){
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function (){
	console.log('Express server started on port ' + PORT + '!');
});
