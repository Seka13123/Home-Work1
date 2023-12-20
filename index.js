var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendfile('gogle.html');
});

http.listen(5500, function(){
  console.log('listening on *:5500');
});