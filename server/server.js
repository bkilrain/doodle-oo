var express = require('express');
var mongoose = require('mongoose')
var app = express();

mongoose.connect('mongodb://localhost/doodle-oo')

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("listening on port 3000!");
})