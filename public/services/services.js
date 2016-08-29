angular.module('doodle.services', [])

.factory('setupCanvas', function() {
  return function() {
    var canvas = new fabric.Canvas('canvas', {
      isDrawingMode: true
    });

    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });

    canvas.add(rect);
  };
})