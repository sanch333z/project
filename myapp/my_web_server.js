var express = require('express'),
    app = express();

var log = require('winston');

app.use(express.static(__dirname + '/public'));

app.listen(8080);


console.log("Server is running on port 8080 !!!")


