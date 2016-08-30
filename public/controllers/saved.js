angular.module('doodle.saved', [
  'doodle.services'
  ])

.controller('savedController', function($scope, setupCanvas) {
  console.log('savedcontr run')
  $scope.canvas = setupCanvas(saved);
})