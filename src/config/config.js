(function() {

  'use strict';

  angular
    .module('myApp.config', ['ui.router'])
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'components/htmlPartials/clock.view.html'
      })
      .state('move', {
        url: '/move',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'components/htmlPartials/move.view.html'
      })
      .state('transclude', {
        url: '/transclude',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'components/htmlPartials/transclude.view.html'
      })
      .state('communicate', {
        url: '/communicate',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'components/htmlPartials/zcommunicate.view.html'
      });

    $urlRouterProvider
      .otherwise('/home');
  }

})();
