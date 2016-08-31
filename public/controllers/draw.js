angular.module('doodle.draw', [
  'doodle.services'
  ])

.controller('drawController', function($state, $scope, setupCanvas, Canvases) {
  $scope.canvas = setupCanvas(canvas, true);
  $scope.color = "#005E7A"
  $scope.canvas.freeDrawingBrush.color = $scope.color;
  $scope.url;
  $scope.width = 4;
  $scope.canvas.freeDrawingBrush.width = $scope.width;
  $scope.saveCanvas = function() {
    Canvases.addCanvas(JSON.stringify($scope.canvas.toJSON()))
      .then(function(data) {
        $scope.url = 'http://45.55.27.86:3000/#/saved/' + data.data;
        console.log($scope.url)
      });
  };
  $scope.freshen = function() {
    $state.reload();
  
  };
  $scope.changeColor = function() {
    $scope.canvas.freeDrawingBrush.color = $scope.color;
  }
  $scope.changeWidth = function() {
    $scope.canvas.freeDrawingBrush.width = $scope.width;
  }
  
})