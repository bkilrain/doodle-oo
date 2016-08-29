angular.module('doodle', [
  'doodle.draw',
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
})