(function() {

  'use strict';

  angular
    .module('myApp', [
      'ui.bootstrap',
      'ui.router',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.directives'
    ]);

})();
