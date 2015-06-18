angular.module('starter')

.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('summary', {
			url:"/:workoutGoalID/:dayID/:optionID/summary", 
			templateUrl: 'pages/workout/summary.html', 
			controller: 'summaryCtrl'
		})
})

.controller('summaryCtrl', function($scope, $state, getAndSetCurrentWorkout) {
	$scope.psycheRedirect = function(){
			$state.go('psyche'); 
	}

	$scope.exercises = getAndSetCurrentWorkout.getCurrentWorkout()[$state.params.optionID].exercises
	getAndSetCurrentWorkout.setCurrentWorkout($scope.exercises)
	
})
