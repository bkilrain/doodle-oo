angular.module('doodle', [
  'doodle.draw',
  'doodle.saved',
  'doodle.services',
  'ui.router'  
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/draw');

  $stateProvider
    .state('draw', {
      url: '/draw',
      templateUrl: 'views/draw.html',
      controller: 'drawController'
    })
    .state('saved', {
      url: '/saved/:id',
      templateUrl: 'views/saved.html',
      controller: 'savedController',
      resolve: {
        canvas: ['$stateParams', function($stateParams, canvases) {
          console.log('here', $stateParams.id)
          return canvases.getCanvas($stateParams.id);
        }]
      }
    });
})