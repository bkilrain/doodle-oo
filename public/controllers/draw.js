angular.module('doodle.draw', [
  'doodle.services'
  ])

.controller('drawController', function($scope, setupCanvas) {
  $scope.canvas = setupCanvas();
  $scope.saveCanvas = function() {
    console.log(JSON.stringify($scope.canvas));
  };
})