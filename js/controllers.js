angular.module('App.controllers', [])
    .controller('IndexController', ['$scope','$http','$route','$window', function ($scope,$http,$route,$window) {
      $scope.preloader = true;
      $scope.contacts = false;
      $scope.contactview = false;
      $http({
        url: 'https://parseapi.back4app.com/classes/contacts',
        method: "GET",
        headers: { 'X-Parse-Application-Id': 'Fdo6szLdxY1gndKElzfBljZoXvq1DRM84w8dwlvo', 'X-Parse-REST-API-Key': 'svq43qepgkP1S333jwJzCva6r2mPySuO2SdekWdr', 'Content-Type': 'application/json' },
        data: JSON.stringify({
          //for now nothing
        })
      }).success(function (data) {
        console.log(data);
        $scope.ContactsResult = data.results;
        $scope.preloader = false;
        $scope.contacts = true;
      }).error(function (data) {
        console.log(data);
        Materialize.toast('Something went wrong!', 2000);
      });
      $scope.detailedcontact = function(contact) {
        console.log(contact);
        $scope.contacts = false;
        $scope.contactview = true;
        $scope.contactda = contact;
      }
      $scope.reloadroute = function() {
        $route.reload();
      }
    }]);
