(function() {

  'use strict';

  angular
    .module('myApp.components.directives', [])
    .directive('clockDirective', clockDirective);

  clockDirective.$inject = ['$interval', 'dateFilter'];

  function clockDirective($interval, dateFilter) {
    return {
      link: (scope, element, attrs) => {
        var format,
            timeoutId;

        function updateTime() {
          element.text(dateFilter(new Date(), format));
        }

        scope.$watch(attrs.clockDirective, (value) => {
          format = value;
          updateTime();
        });

        element.on('$destroy', () => {
          $interval.cancel(timeoutId);
        });

        timeoutId = $interval(() => {
          updateTime();
        }, 1000);
      }
    };
  }

})();
