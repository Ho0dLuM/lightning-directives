(function() {

  'use strict';

  angular
    .module('myApp.components.directives')
    .directive('moveDirective', moveDirective);

  moveDirective.$inject = ['$document'];

  function moveDirective($document) {
    return {
      link: (scope, element, attr) => {
        let startX = 0;
        let startY = 0;
        let x = 0;
        let y = 0;

        element.css({
          position: 'relative',
          margin: '35%',
          border: '100px solid #7DFF88',
          backgroundColor: '#7DFF88',
          cursor: 'pointer'
        });

        element.on('mousedown', (event) => {
          event.preventDefault();
          startX = event.pageX - x;
          startY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
          y = event.pageY - startY;
          x = event.pageX - startX;
          element.css({
            top: y + 'px',
            left:  x + 'px'
          });
        }

        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
      }
    };

  }

})();
