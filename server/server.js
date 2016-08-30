var express = require('express');
var mongoose = require('mongoose')
var drawController = require('./controllers/drawController.js');
var savedController = require('./controllers/savedController.js');
var bodyParser = require('body-parser')
var app = express();

/************ Database ****************/

mongoose.connect('mongodb://45.55.27.86//doodle');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database started...');
});

/************ Middleware ****************/

app.use(bodyParser.json());
app.use(express.static('public'));

/************ Routing ****************/

app.post('/api/canvases', drawController.saveCanvas);
app.get('/saved/*', savedController.getSaved);

/************ Server ****************/

app.listen(3000, function() {
  console.log("listening on port 3000!");
})

module.exports = db;