var Q = require('q');
var Canvas = require('../dbFiles/config.js');

var findCanvas = Q.nbind(Canvas.findOne, Canvas);

module.exports = {
  getSaved: function(req, res) {
    var id = req.url.substring(7);
    findCanvas({_id: id})
      .then(function(canvas) {
        if (canvas) {
          res.send(canvas);
        } else {
          console.log("doodle not found")
        }
      });
  };
}