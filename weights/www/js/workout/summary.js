angular.module('starter')

.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('summary', {
			url:"/:workoutOptionID/summary", 
			templateUrl: 'pages/workout/summary.html', 
			controller: 'summaryCtrl'
		})
})

.controller('summaryCtrl', function($scope, $state, getAndSetCurrentWorkout) {
	$scope.psycheRedirect = function(){
			$state.go('psyche'); 
	}

	$scope.workoutSelected 


	if(typeof($state.params.workoutOptionID) != undefined ){
		$scope.workoutSelected = getAndSetCurrentWorkout.getCurrentWorkout()[$state.params.workoutOptionID]; 
		getAndSetCurrentWorkout.setCurrentWorkout($scope.workoutSelected); 
	}


	$scope.exercises = getAndSetCurrentWorkout.getDayWorkout()
	console.log("exercises "+ getAndSetCurrentWorkout.getDayWorkout())



})
