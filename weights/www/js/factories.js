angular.module('starter', ['ionic'])

.factory('retrieveToningData', function($http) {
  var toning_exercises, two_day_exercises, three_day_exercises, four_day_exercises
  $http.get("/data/toning_exercises.json").success(function(data){ 
      toning_exercises = angular.fromJson(data) 
    })

  return {
     

    getTwoDayExercises: function(){
      $http.get("/data/toning_exercises.json").success(function(data){
      console.log(data)
      return data[0]
      }
    )},

    getThreeDayExercises: function(){
      $http.get("/data/toning_exercises.json").success(function(data){
      console.log(data)
      return data[1]
      }
    )},

    getFourDayExercises: function(){
      $http.get("/data/toning_exercises.json").success(function(data){
      console.log(data)
      return data[0]
      }
    )}
  }
})

.factory('retrieveBulkingData', function($http) {
  var bulking_exercises, two_day_exercises, three_day_exercises, four_day_exercises
  $http.get("/data/bulking_exercises.json").success(function(data){ 
      bulking_exercises = angular.fromJson(data) 
    })  

  return {
  

    getTwoDayExercises: function(){
      return bulking_exercises[0]
    },

    getThreeDayExercises: function(){
      return bulking_exercises[1]
    },

    getFourDayExercises: function(){
      return bulking_exercises[2]
    }
  }
})

.factory('retrieveHealthData', function($http) {
  var health_exercises, two_day_exercises, three_day_exercises, four_day_exercises
  $http.get("/data/healthy_exercises.json").success(function(data){ 
      health_exercises = angular.fromJson(data) 
    }) 

  return {
  

    getTwoDayExercises: function(){
      return health_exercises[0]
    },

    getThreeDayExercises: function(){
      return health_exercises[1]
    },

    getFourDayExercises: function(){
      return health_exercises[2]
    }
  }
}); 

