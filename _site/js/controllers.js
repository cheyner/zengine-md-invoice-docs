(function(angular) {
  'use strict';

  /* Controllers */
  angular.module('mdDocApp', ['ngRoute'])

    .controller('DataCtrl', function($scope, $route, $routeParams, $location, $http) {

      $scope.params = $location.search();

    })

    .config(function($routeProvider, $locationProvider) {

      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);

    });

})(window.angular);
