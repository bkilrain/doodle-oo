var express = require('express');
var mongoose = require('mongoose')
var app = express();

mongoose.connect('mongodb://localhost/doodle-oo');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database started...');
});

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("listening on port 3000!");
})

module.exports = db;