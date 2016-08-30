angular.module('doodle.saved', [
  'doodle.services'
  ])

.controller('savedController', function($scope, setupCanvas, canvas) {
  var showCanvas = setupCanvas(saved, false);
  console.log(showCanvas);
  showCanvas.loadFromJSON(JSON.stringify(canvas), showCanvas.renderAll.bind(showCanvas), function(o, object) {
      object.set('selectable', false);
  });
  $scope.canvas = showCanvas;
})