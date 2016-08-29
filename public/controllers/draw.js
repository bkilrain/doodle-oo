angular.module('doodle.draw', [])

.controller('drawController', function($scope) {
  var canvas = new fabric.Canvas('canvas');

  var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20
  });

  canvas.add(rect);
})