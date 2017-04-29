angular.module('App', ['ngRoute', 'App.services', 'App.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'partials/landing.html',
        controller: 'IndexController'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    .directive('tabs', function() {
  		return {
  			restrict: 'A',
  			link: function(scope, element, attrs) {
  				angular.element('ul.tabs').tabs(scope.$eval(attrs.tabs));
  			}
  		};
  	})
  	.directive('collapsible', function () {
  		return {
  			restrict: 'A',
  			link: function(scope, element, attrs) {
  				angular.element('.collapsible').collapsible(scope.$eval(attrs.tabs));
  			}
  		}
  	});
