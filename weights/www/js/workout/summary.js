angular.module('starter')

.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('summary', {
			url:"/summary", 
			templateUrl: 'pages/workout/summary.html', 
			controller: 'summaryCtrl'
		})
})

.controller('summaryCtrl', function($scope, $state, getAndSetCurrentWorkout) {
	$scope.psycheRedirect = function(){
			$state.go('psyche'); 
	}

	$scope.exercises = getAndSetCurrentWorkout.getDayWorkout()
	$scope.currentDay = getAndSetCurrentWorkout.getCurrentWorkout()

	console.log($scope.currentDay)
})
