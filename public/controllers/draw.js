angular.module('doodle.draw', [
  'doodle.services'
  ])

.controller('drawController', function($state, $scope, setupCanvas, Canvases) {
  $scope.canvas = setupCanvas(canvas, true);
  $scope.url;
  $scope.saveCanvas = function() {
    Canvases.addCanvas(JSON.stringify($scope.canvas.toJSON()))
      .then(function(data) {
        $scope.url = 'http://45.55.27.86:3000/#/saved/' + data.data;
        console.log($scope.url)
      });
  };
  $scope.freshen = function() {
    $state.reload();
};
  
})