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

.controller('summaryCtrl', function($scope, $state, pullWorkouts) {
	$scope.psycheRedirect = function(){
			$state.go('psyche'); 
	}

	$scope.workoutGoalID = $state.params.workoutGoalID
	$scope.dayID = $state.params.dayID
	$scope.workoutID = $state.params.optionID
	$scope.exercises = []

	var promise = pullWorkouts.toggle($state.params.workoutGoalID, $state.params.dayID) 
	promise().success( function(data){
		$scope.exercises = data.workouts[$scope.workoutID].exercises
	})


})
