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
      console.log(typeof json, 'on addCanvas!!!!!')
      return $http({
        method: 'POST',
        url: '/api/canvases',
        data: json
      })
      .then(function(res) {

        console.log(res);
        return res;
      });
    }
  };
})
