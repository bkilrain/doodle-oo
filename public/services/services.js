angular.module('doodle.services', [
  'doodle.draw'
  ])

.factory('setupCanvas', function() {
  return function(id, drawMode) {
    return new fabric.Canvas(id, {
      isDrawingMode: drawMode,
      containerClass: 'frame',
      width: 500,
      height: 500
    });
  };
})

.factory('Canvases', function($http) {
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
    },
    getCanvas: function(id) {
      console.log(id)
      return $http({
        method: 'GET',
        url: 'saved/' + id,
      }).then(function(res) {
        if (res) {
          return res.data.file;
        } else {
          console.log('error in getCanvas')
        }
      })
    }
  };
})
