(function() {

  'use strict';

  angular
    .module('myApp.components.directives', [])
    .directive('firstDirective', firstDirective);

  firstDirective.$inject = ['$http'];

  const giphyBase = 'http://api.giphy.com/v1/gifs/search?q=funny+cat';
  const apiKey = '&api_key=dc6zaTOxFJmzC';

  function firstDirective() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      template:
      '<h1>{{mainCtrl.greeting}}<h1><br><hr>' +
      '<input type="search" name="user-search">' +
      '<input type="button" value="search">',
      controller: ($http)=> {
        $http.get(giphyBase + apiKey)
        .success((data) => {
          console.log(data);
        });
      }
    };
  }

})();
// templateUrl: ,
// scope: {},
// link: () => {},
// .directive('myTabs', function() {
//   return {
//     restrict: 'E',
//     transclude: true,
//     scope: {},
//     controller: ['$scope', function MyTabsController($scope) {
//       var panes = $scope.panes = [];
//
//       $scope.select = function(pane) {
//         angular.forEach(panes, function(pane) {
//           pane.selected = false;
//         });
//         pane.selected = true;
//       };
//
//       this.addPane = function(pane) {
//         if (panes.length === 0) {
//           $scope.select(pane);
//         }
//         panes.push(pane);
//       };
//     }],
//     templateUrl: 'my-tabs.html'
//   };
// })
// .directive('myPane', function() {
//   return {
//     require: '^^myTabs',
//     restrict: 'E',
//     transclude: true,
//     scope: {
//       title: '@'
//     },
//     link: function(scope, element, attrs, tabsCtrl) {
//       tabsCtrl.addPane(scope);
//     },
//     templateUrl: 'my-pane.html'
//   };
// });
