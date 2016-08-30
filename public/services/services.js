angular.module('doodle.services', [
  'doodle.draw'
  ])

.factory('setupCanvas', function() {
  return function() {
    return new fabric.Canvas('canvas', {
      isDrawingMode: true,
      containerClass: 'frame',
      width: 500,
      height: 500
    });
  };
})
