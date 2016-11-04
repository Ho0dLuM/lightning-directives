(function() {

  'use strict';

  angular
    .module('myApp.components.directives')
    .directive('myTabs', () => {
      return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: ['$scope', function MyTabsController($scope) {
          var panes = $scope.panes = [];

          $scope.select = (pane) => {
            angular.forEach(panes, (pane) => {
              pane.selected = false;
            });
            pane.selected = true;
          };

          this.addPane = (pane) => {
            if (panes.length === 0) {
              $scope.select(pane);
            }
            panes.push(pane);
          };
        }],
        templateUrl: 'components/htmlPartials/zmy-tabs.html'
      };
    })
    .directive('myPane', () => {
      return {
        require: '^^myTabs',
        restrict: 'E',
        transclude: true,
        scope: {
          title: '@'
        },
        link: (scope, element, attrs, tabsCtrl) => {
          tabsCtrl.addPane(scope);
        },
        templateUrl: 'components/htmlPartials/zmy-pane.html'
      };
    })
    .directive('morePane', () => {
      return {
        require: '^^myTabs',
        restrict: 'E',
        transclude: true,
        scope: {
          title: '@'
        },
        link: (scope, element, attrs, tabsCtrl) => {
          tabsCtrl.addPane(scope);
        },
        templateUrl: 'components/htmlPartials/zmore-pane.html'
      };
    });

})();
