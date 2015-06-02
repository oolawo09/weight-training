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

.controller('selectWorkoutsCtrl', function ($scope, $state, $stateParams, retrieveToningData, retrieveBulkingData, retrieveHealthData){

	$scope.workoutPageRedirect = function(){
			$state.go('summary'); 
	}

	$scope.buildWorkoutPageRedirect = function(){ 
			$state.go('buildWorkouts'); 
	}

	$scope.workoutOptions = [
		{title: 'Workout 1'}, 
		{title: 'Workout 2'}, 
		{title: 'Workout 3'}
	];

	$scope.newWorkoutOptions = []

	




}); 


