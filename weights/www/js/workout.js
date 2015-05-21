angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('summary', {
			url:"/summary", 
			templateUrl: 'pages/workout/summary.html', 
			controller: 'workoutCtrl'
		})

		.state('psyche', {
			url:"/psyche", 
			templateUrl: 'pages/workout/psyche.html', 
			controller: 'workoutCtrl'
		})

		.state('exercises', {
			url:"/exercises", 
			templateUrl: 'pages/workout/exercises.html', 
			controller: 'workoutCtrl'
		})
	


})

.controller('workoutCtrl', function ($scope, $state){

	$scope.psycheRedirect = function(){
			$state.go('psyche'); 
	}

	$scope.exercises = [
		{title: 'exercise 1'}, 
		{title: 'exercise 2'}, 
		{title: 'exercise 3'}
	]; 
}); 



