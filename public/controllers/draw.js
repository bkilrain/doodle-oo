angular.module('doodle.draw', [
  'doodle.services'
  ])

.controller('drawController', function($scope, setupCanvas, canvases) {
  $scope.canvas = setupCanvas();
  $scope.url;
  $scope.saveCanvas = function() {
    canvases.addCanvas(JSON.stringify($scope.canvas))
      .then(function(data) {
        $scope.url = 'http://localhost:3000/saved/' + data.data;
        console.log($scope.url)
      });
  };
  
})