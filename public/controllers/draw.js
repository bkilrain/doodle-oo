angular.module('doodle.draw', [
  'doodle.services'
  ])

.controller('drawController', function($scope, setupCanvas) {
  setupCanvas();
})