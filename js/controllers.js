angular.module('App.controllers', [])
    .controller('IndexController', ['$scope','$http','$route','$window', function ($scope,$http,$route,$window) {
      var storage = window.localStorage;
      $scope.preloader = true;
      $scope.contacts = false;
      $http({
        url: 'https://parseapi.back4app.com/classes/contacts?limit=999',
        method: "GET",
        headers: { 'X-Parse-Application-Id': 'Fdo6szLdxY1gndKElzfBljZoXvq1DRM84w8dwlvo', 'X-Parse-REST-API-Key': 'svq43qepgkP1S333jwJzCva6r2mPySuO2SdekWdr', 'Content-Type': 'application/json' },
        data: JSON.stringify({
          //for now nothing
        })
      }).success(function (data) {
        console.log(data.results);
        //clear the old data
        storage.clear();
        var datalist = data.results;
        //load the new data :)
        datalist.forEach(function(each){
          storage.setItem(each.objectId,JSON.stringify(each));
        });
        $scope.ContactsResult = data.results;
        $scope.preloader = false;
        $scope.contacts = true;
      }).error(function (data) {
        var localdata = []
        console.log(storage.length);
        for (var i = 0; i < storage.length; i++){
          localdata.push(JSON.parse(storage.getItem(storage.key(i))));
        }
        $scope.ContactsResult = localdata;
        $scope.preloader = false;
        $scope.contacts = true;
        Materialize.toast('Offline data!', 2000);
      });
      $scope.reloadroute = function() {
        $route.reload();
      }
    }])
    .controller('ParamController', ['$scope','$routeParams','$http', function ($scope,$routeParams,$http) {
      var storage = window.localStorage;
      $scope.params = $routeParams;
      console.log(JSON.parse(storage.getItem($scope.params.userid)));
      $scope.contactda = JSON.parse(storage.getItem($scope.params.userid));
      $scope.contactview = true;
    }]);
