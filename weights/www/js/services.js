angular.module('starter', ['ionic'])


.service('retrieveData', function($http ) {
  var toning_exercises, bulking_exercises, health_exercises

    $http.get("/data/bulking_exercises.json").success( function(data){ 
      bulking_exercises = angular.fromJson(data)
      })

   $http.get("/data/healthy_exercises.json").success( function(data){ 
      health_exercises = angular.fromJson(data)
    })

    $http.get("/data/toning_exercises.json").success(function(data){ 
      toning_exercises = angular.fromJson(data) 
    })  


})
