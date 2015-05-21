angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('summary', {
			url:"/summary", 
			templateUrl: 'pages/workout/summary.html', 
			controller: 'summaryCtrl'
		})

		.state('psyche', {
			url:"/psyche", 
			templateUrl: 'pages/workout/psyche.html', 
			controller: 'psycheCtrl'
		})

		.state('exercises', {
			url:"/exercises", 
			templateUrl: 'pages/workout/exercises.html', 
			controller: 'workoutCtrl'
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


.controller('psycheCtrl', function($scope, $state, $timeout){ 
	$timeout(function() { 
		$state.go('exercises'); 
	}, 3000); 
})


.controller('workoutCtrl', function ($scope, $state){
	$scope.exercises = [
		{title: 'exercise 1', 
		id: 1}, 
		{title: 'exercise 2', 
		id: 2}, 
		{title: 'exercise 3', 
		id: 3}, 
		{title: 'exercise 4', 
		id: 4}
	]; 

	$scope.currentExercise = $scope.exercises[0]

	$scope.nextExercise = function (){ 
		console.log($scope.currentExercise.id)

		if($scope.currentExercise.id < $scope.exercises.length){
			nextExerciseID = $scope.currentExercise.id++; 
			$scope.currentExercise = $scope.exercises[nextExerciseID]; 
		}
	}
}); 



