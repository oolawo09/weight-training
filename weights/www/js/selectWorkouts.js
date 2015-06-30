angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('selectWorkouts', {
			url:"/:workoutGoalID/selectWorkouts", 
			templateUrl: 'pages/selectWorkouts.html', 
			controller: 'selectWorkoutsCtrl'
		}); 

})

.controller('selectWorkoutsCtrl', function ($scope, $state, pullWorkouts, getAndSetCurrentWorkout){

	$scope.workoutPageRedirect = function(){
			$state.go('summary'); 
	}

	$scope.buildWorkoutPageRedirect = function(){ 
			$state.go('buildWorkouts'); 
	}

	var promise = pullWorkouts.toggle($state.params.workoutGoalID,0)

	$scope.workoutOptions = [] 

	promise().success(function(data){
		getAndSetCurrentWorkout.setCurrentWorkout(data.workouts)
		$scope.workoutOptions = data.workouts
	})
	
	
	



}); 


