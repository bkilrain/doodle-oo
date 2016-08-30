var Q = require('q');
var Canvas = require('../dbFiles/config.js');
var mongoose = require('mongoose');

var newCanvas = Q.nbind(Canvas.create, Canvas);
var findCanvas = Q.nbind(Canvas.findOne, Canvas);
var findCanvases = Q.nbind(Canvas.find, Canvas);

module.exports = {
  saveCanvas: function(req, res, next) {
    console.log(req.body);
    var json = req.body;
    var savedId;

    newCanvas({file: json})
      .then(function(saved) {
        savedId = saved._id;
        res.send(savedId);
      });
    
  }
};