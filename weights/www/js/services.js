angular.module('starter', ['ionic'])

.service('retrieveData', function($http) {
  var toning_exercises, bulking_exercises, health_exercises


    $http.get("/data/bulking_exercises.json").success( function(data){ 
      bulking_exercises = data
      console.log(angular.fromJson(bulking_exercises))
      })

   $http.get("/data/health_exercises.json").success( function(data){ 
      health_exercises = data
      console.log(angular.fromJson(health_exercises))

    })

    $http.get("/data/toning_exercises.json").success(function(data){ 
      toning_exercises = data 
      console.log(angular.fromJson(toning_exercises))

    })  

})
