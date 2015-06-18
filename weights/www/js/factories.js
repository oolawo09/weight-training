angular.module('starter', ['ionic'])

.service('getAndSetCurrentWorkout', function($http ) {
  var currentWorkout
  var currentDayId = 0; 

  this.setCurrentWorkout = function (workout){ 
    currentWorkout = workout 
  } 

  this.getCurrentWorkout = function(){ 
    return currentWorkout
  }

  this.setCurrentDay = function(){ 
    currentDayId ++
  }  

  this.getCurrentDay = function(dayID){ 
    return currentDayId
  }

  this.getDayWorkout = function() { 
    return currentWorkout[0].days[0].exercises  
  }

})

.factory('getToningWorkouts', function($http){
    var getTwoDayWorkouts = function(){ 
        return $http.get("/data/toning/two_day.json")
      }

    var getThreeDayWorkouts = function(){ 
        return $http.get("/data/toning/three_day.json")
      }

    var getFourDayWorkouts = function(){
        return $http.get("/data/toning/four_day.json")
      }

    return{     
      toggle: function(days){ 
        if(days == 0){
          return getTwoDayWorkouts

        }
        else if (days == 1){
          return getThreeDayWorkouts
        }
        else{ 
          return getFourDayWorkouts
        }

      }
    }

})

.factory('getBulkingWorkouts', function($http){

    var getTwoDayWorkouts = function(){ 
        return $http.get("/data/bulking/two_day.json")
      }

    var getThreeDayWorkouts = function(){ 
        return $http.get("/data/bulking/three_day.json")
      }

    var getFourDayWorkouts = function(){
        return $http.get("/data/bulking/four_day.json")
      }

    return{     
      toggle: function(days){ 
        if(days == 0)
          return getTwoDayWorkouts
        else if (days == 1)
          return getThreeDayWorkouts
        else 
          return getFourDayWorkouts

      }
    }


})

.factory('getHealthyWorkouts', function($http){

    var getTwoDayWorkouts = function(){ 
        return $http.get("/data/healthy/two_day.json")
      }

    var getThreeDayWorkouts = function(){ 
        return $http.get("/data/healthy/three_day.json")
      }

    var getFourDayWorkouts = function(){
        return $http.get("/data/healthy/four_day.json")
      }

    return{     
      toggle: function(days){ 
        if(days == 0)
          return getTwoDayWorkouts
        else if (days == 1)
          return getThreeDayWorkouts
        else 
          return getFourDayWorkouts

      }
    }

})

.factory('pullWorkouts', function($http, getToningWorkouts, getBulkingWorkouts, getHealthyWorkouts){
    return{ 
      toggle: function(goal, days){ 
        if(goal == 0){
          return getToningWorkouts.toggle(days) 
        }
        else if(goal == 1)
          return getBulkingWorkouts.toggle(days)
        else if(goal == 2)
          return getHealthyWorkouts.toggle(days)
        else 
          return // contain code to pull up most recent workout 
      }
    }
});

