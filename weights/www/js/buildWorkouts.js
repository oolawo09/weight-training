angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('buildWorkouts', {
			url:"/buildWorkouts", 
			templateUrl: 'pages/buildWorkout.html', 
			controller: 'buildWorkoutsCtrl'
		}); 

	


})

.controller('buildWorkoutsCtrl', function ($scope, $state){

	$scope.workoutPageRedirect = function(){
			$state.go('summary'); 
	}

	$scope.workoutOptions = [
		{title: 'Workout 1'}, 
		{title: 'Workout 2'}, 
		{title: 'Workout 3'}
	]; 

}); 


