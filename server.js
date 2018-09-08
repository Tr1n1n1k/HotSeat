var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/viewtables', function(req, res) {
  res.sendFile(path.join(__dirname, 'viewtables.html'));
});

app.get('/reservation', function(req, res) {
  res.sendFile(path.join(__dirname, 'reservations.html'));
});

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
