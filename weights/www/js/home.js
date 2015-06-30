angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('home', {
			url:"", 
			templateUrl: 'pages/home.html', 
			controller: 'homeCtrl'
		})


})

.controller('homeCtrl', function ($scope, $state){


	$scope.workoutGoals = [
		{title: 'get toned', 
		id: '0'}, 
		{title: 'bulk up', 
		id:'1'}, 
		{title: 'get healthier', 
		id: '2'}
	]; 

	$scope.continueLastWorkout = function(){ 
		$state.go('summary')
	}
}); 
