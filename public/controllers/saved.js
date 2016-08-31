angular.module('doodle.saved', [
  'doodle.services'
  ])

.controller('savedController', function($scope, $stateParams, setupCanvas, canvas) {
  var showCanvas = setupCanvas(saved, false);
  showCanvas.loadFromJSON(JSON.stringify(canvas), showCanvas.renderAll.bind(showCanvas), function(o, object) {
      object.set('selectable', false);
  });
  $scope.canvas = showCanvas;
  $scope.tweetUrl = "https://twitter.com/intent/tweet?text=Check%20out%20my%20doodle%20at%20Doodle-oo!%20&url=http%3A%2F%2F45.55.27.86%3A3000%2F%23%2Fsaved%2F".concat($stateParams.id);
})