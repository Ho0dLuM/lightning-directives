(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['mainService'];

  function mainController(mainService) {
    /*jshint validthis: true */
    this.greeting = 'Hello Directives';
  }

})();
