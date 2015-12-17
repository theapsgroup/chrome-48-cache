var express = require('express');
var path = require('path');

var app = express();


app.enable('etag','weak');

app.get('/',function(req,res) {
    res.sendFile(path.resolve('./main.html'));
});

app.get('/test',function(req,res) {
    res.send('ok');
});

app.listen(6005);