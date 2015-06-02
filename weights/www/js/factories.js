angular.module('starter', ['ionic'])

.factory('retrieveToningData', function($http) {
  var toning_exercises, two_day_exercises, three_day_exercises, four_day_exercises

  return {
    $http.get("/data/toning_exercises.json").success(function(data){ 
      toning_exercises = angular.fromJson(data) 
    })  

    getTwoDayExercises: function(){
      return toning_exercises[0]
    }

    getThreeDayExercises: function(){
      return toning_exercises[1]
    }

    getFourDayExercises: function(){
      return toning_exercises[2]
    }
  }
})

.factory('retrieveBulkingData', function($http) {
  var bulking_exercises, two_day_exercises, three_day_exercises, four_day_exercises

  return {
    $http.get("/data/bulking_exercises.json").success(function(data){ 
      bulking_exercises = angular.fromJson(data) 
    })  

    getTwoDayExercises: function(){
      return bulking_exercises[0]
    }

    getThreeDayExercises: function(){
      return bulking_exercises[1]
    }

    getFourDayExercises: function(){
      return bulking_exercises[2]
    }
  }
})

.factory('retrieveHealthData', function($http) {
  var health_exercises, two_day_exercises, three_day_exercises, four_day_exercises

  return {
    $http.get("/data/healthy_exercises.json").success(function(data){ 
      health_exercises = angular.fromJson(data) 
    })  

    getTwoDayExercises: function(){
      return health_exercises[0]
    }

    getThreeDayExercises: function(){
      return health_exercises[1]
    }

    getFourDayExercises: function(){
      return health_exercises[2]
    }
  }
})

