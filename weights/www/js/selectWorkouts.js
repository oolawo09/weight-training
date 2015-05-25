angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('selectWorkouts', {
			url:"/selectWorkouts", 
			templateUrl: 'pages/selectWorkouts.html', 
			controller: 'selectWorkoutsCtrl'
		}); 

	


})

.controller('selectWorkoutsCtrl', function ($scope, $state){

	$scope.workoutPageRedirect = function(){
			$state.go('summary'); 
	}

	$scope.workoutOptions = [
		{title: 'Workout 1'}, 
		{title: 'Workout 2'}, 
		{title: 'Workout 3'}
	]; 
}); 


