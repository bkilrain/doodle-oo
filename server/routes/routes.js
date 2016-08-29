
module.exports = function (app, express) {

  app.get('/draw', function(req, res) {
  res.sendfile()
})

};