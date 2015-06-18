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

.controller('summaryCtrl', function($scope, $state) {
	$scope.psycheRedirect = function(){
			$state.go('psyche'); 
	}

	$scope.exercises = [
		{title: 'exercise 1'}, 
		{title: 'exercise 2'}, 
		{title: 'exercise 3'}, 
		{title: 'exercise 4'}
	]; 
})
