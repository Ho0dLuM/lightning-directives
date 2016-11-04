(function() {

  'use strict';

  angular
    .module('myApp.components.directives')
    .directive('transDirective', transDirective);

  function transDirective() {
    return {
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {
        title: '=myTitle',
        pic: '=myPic'
      },
      templateUrl: 'myCard',
      transclude: true,
      controller: () => {
      }
    };
  }

})();
