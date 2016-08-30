angular.module('doodle.saved', [
  'doodle.services'
  ])

.controller('savedController', function($scope, setupCanvas, canvas) {
  var showCanvas = setupCanvas(saved, false);
  console.log(JSON.stringify(canvas));
  showCanvas.loadFromJSON(JSON.stringify(canvas));
  $scope.canvas = showCanvas;
})