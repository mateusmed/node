var express = require('express');
var app = express();


app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    console.log("this is my path: /");
    res.json({"status": "health"})
});

app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// to make visible on machines on the same network
app.listen(3000, '0.0.0.0');
