var express = require('express');
var mongoose = require('mongoose')
var drawController = require('./controllers/drawController.js');
var bodyParser = require('body-parser')
var app = express();

mongoose.connect('mongodb://localhost/doodle');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database started...');
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/canvases', drawController.saveCanvas);

app.listen(3000, function() {
  console.log("listening on port 3000!");
})

module.exports = db;