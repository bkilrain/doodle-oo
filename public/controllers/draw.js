angular.module('doodle.draw', [
  'doodle.services'
  ])

.controller('drawController', function($scope, setupCanvas, Canvases) {
  $scope.canvas = setupCanvas(canvas, true);
  $scope.url;
  $scope.saveCanvas = function() {
    Canvases.addCanvas(JSON.stringify($scope.canvas.toJSON()))
      .then(function(data) {
        $scope.url = 'http://localhost:3000/#/saved/' + data.data;
        console.log($scope.url)
      });
  };
  
})