var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Hello World!<br>It is the server.js app");
  res.status(200).send('ok');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//var server = app.listen(3000, function () {
//  var port = server.address().port;
//  console.log('Example app listening at port %s', port);
//});

//module.exports = server;
