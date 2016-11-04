(function() {

  'use strict';

  angular
    .module('myApp.components.directives')
    .directive('moveDirective', moveDirective);

  moveDirective.$inject = ['$document'];

  function moveDirective($document) {
    return {
      link: function(scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;

        element.css({
          position: 'relative',
          border: '100px solid #7DFF88',
          backgroundColor: '#7DFF88',
          cursor: 'pointer'
        });

        element.on('mousedown', function(event) {
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

// angular.module('dragModule', [])
// .directive('myDraggable', ['$document', function($document) {
//   return {
//     link: function(scope, element, attr) {
//       var startX = 0, startY = 0, x = 0, y = 0;
//
//       element.css({
//        position: 'relative',
//        border: '1px solid red',
//        backgroundColor: 'lightgrey',
//        cursor: 'pointer'
//       });
//
//       element.on('mousedown', function(event) {
//         // Prevent default dragging of selected content
//         event.preventDefault();
//         startX = event.pageX - x;
//         startY = event.pageY - y;
//         $document.on('mousemove', mousemove);
//         $document.on('mouseup', mouseup);
//       });
//
//       function mousemove(event) {
//         y = event.pageY - startY;
//         x = event.pageX - startX;
//         element.css({
//           top: y + 'px',
//           left:  x + 'px'
//         });
//       }
//
//       function mouseup() {
//         $document.off('mousemove', mousemove);
//         $document.off('mouseup', mouseup);
//       }
//     }
//   };
// }]);
