(function() {

  'use strict';

  angular
    .module('myApp.components.main')
    .service('mainService', mainService);

  mainService.$inject = ['$http'];

  function mainService('$http') {
    /*jshint validthis: true */
  }

})();
