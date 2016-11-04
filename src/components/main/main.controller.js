(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['mainService'];

  function mainController(mainService) {
    /*jshint validthis: true */
    this.greeting = 'Hello Directive';
    this.format = 'M/d/yy h:mm:ss a';

    this.title = 'Gnar';
    this.pic = 'http://pa1.narvii.com/5764/e5748b7d493e033fc5acb453665c355045db6d3b_hq.gif';
    this.content = ['Random words change without randoming them yourself and I prefer it that way, don\'t you?', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];
  }

})();
