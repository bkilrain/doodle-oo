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

.factory('canvases', function($http) {
  return {
    addCanvas: function(json) {
      return $http({
        method: 'POST',
        url: ,
        data: json
      })
      .then(function(res) {
        return res;
      })
    }
  }
})
