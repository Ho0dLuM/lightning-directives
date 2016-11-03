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
        templateUrl: 'components/htmlPartials/first.view.html'
      });

    $urlRouterProvider
      .otherwise('/home');
  }

})();
