angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('selectWorkouts', {
			url:"/:workoutGoalID/selectDays/:dayID/selectWorkouts", 
			templateUrl: 'pages/selectWorkouts.html', 
			controller: 'selectWorkoutsCtrl'
		}); 

})

.controller('selectWorkoutsCtrl', function ($scope, $state, getToningWorkouts){

	$scope.workoutPageRedirect = function(){
			$state.go('summary'); 
	}

	$scope.buildWorkoutPageRedirect = function(){ 
			$state.go('buildWorkouts'); 
	}

	$scope.workoutGoalID = $state.params.workoutGoalID
	$scope.dayID = $state.params.dayID
	$scope.workoutOptions = []
	

	var promise = getToningWorkouts.toggle($state.params.workoutGoalID,$state.params.dayID)

	promise().success(function(data){
		$scope.workoutOptions = data.workouts
	})
	
	
	



}); 


