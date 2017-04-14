var port = 8080;
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));	
require('./routes/routes.js')(app);
http = require('http').createServer(app);
http.listen(port, function(){
	  console.log('middleware server is listening on *:' + port);
});	

