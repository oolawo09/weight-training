angular.module('starter', ['ionic'])


.service('getAndSetCurrentWorkout', function($http ) {
  var currentWorkout 

  this.setCurrentWorkout = function (workout){ 
    currentWorkout = workout 
    console.log("This is the currentWorkout: " + currentWorkout)
  } 

  this.getCurrentWorkout = function(){ 
    console.log("returning the currentWorkout: " + currentWorkout)
    return currentWorkout
  }

})
