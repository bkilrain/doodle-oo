angular.module('doodle-oo' [
  'ui-router'  
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/draw');

  $stateProvider
    .state('draw', {
      url: '/draw',
      templateUrl: 'public/draw/draw.html',
      controller: 'drawController'
    })
})