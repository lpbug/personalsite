var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var mg = require('mongoose');
mg.connect('mongodb://admin:h32isawesome@ds041432.mongolab.com:41432/checklist');

app.use(express.static(__dirname));
app.use(bodyParser.json());

io.on('connection', function (socket) {
  console.log('a user connected');
});

http.listen(3000);
console.log("Server running on port 3000");
//var io = require('socket.io').listen(server);
