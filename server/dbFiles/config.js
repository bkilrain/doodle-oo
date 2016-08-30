var mongoose = require('mongoose');

var canvasSchema = new mongoose.Schema({
  file: {},
  date: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Canvas', canvasSchema);
