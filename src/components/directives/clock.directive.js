(function() {

  'use strict';

  angular
    .module('myApp.components.directives', [])
    .directive('clockDirective', clockDirective);

  clockDirective.$inject = ['$interval', 'dateFilter'];

  function clockDirective($interval, dateFilter) {
    /*jshint validthis: true */
    function link(scope, element, attrs) {
      var format,
          timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }

      scope.$watch(attrs.clockDirective, function(value) {
        format = value;
        updateTime();
      });

      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });

      timeoutId = $interval(function() {
        updateTime();
      }, 1000);
    }

    return {
      link: link
    };
  }

})();
