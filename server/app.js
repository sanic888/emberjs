var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var path = require('path');

app.use(express.static('client'));
/*app.get('/', function (req, res) {
	res.sendfile(path.normalize(__dirname + '/../client/index.html'));
});*/

app.route('/*').get(function(req, res) {
	res.sendfile(path.normalize(__dirname + '/../client/index.html'));
});

server.listen(8080);

console.log('server listening on 8080');