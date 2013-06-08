var express = require('express');
var fs = require('fs');
var app = express();

app.get('/backbone/*', function(req, res){
    res.end(fs.readFileSync('index.html'));
});
app.listen(3000);