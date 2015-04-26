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

    })

    .directive('currency', function ($filter) {
      var precision = 2;
      return {
          require: 'ngModel',
          link: function (scope, element, attrs, ctrl) {
              ctrl.$formatters.push(function (data) {

                  if (data) {

                    var formatted = $filter('currency')(data);
                    //convert data from model format to view format
                    return formatted; //converted

                  } else {

                    return '';

                  }


              });
              ctrl.$parsers.push(function (data) {
                  var plainNumber = data.replace(/[^\d|\-+|\+]/g, '');
                  var length = plainNumber.length;
                  var intValue = plainNumber.substring(0,length-precision);
                  var decimalValue = plainNumber.substring(length-precision,length)
                  var plainNumberWithDecimal = intValue + '.' + decimalValue;
                  //convert data from view format to model format
                  var formatted = $filter('currency')(plainNumberWithDecimal);
                  element.val(formatted);

                  return Number(plainNumberWithDecimal);
              });
          }
      };
    });

})(window.angular);
