angular.module('doodle', [
  'doodle.draw',
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
      url: '/saved/*',
      templateUrl: 'views/saved.html',
      controller: 'savedController'
    });
})