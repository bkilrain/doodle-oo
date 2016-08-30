var mongoose = require('mongoose');

var canvasSchema = new mongoose.Schema({
  url: String,
  file: String
  date: { type: Date, default: Date.now}
});

var Canvas = mongoose.model('Canvas', canvasSchema);

module.exports = Canvas;