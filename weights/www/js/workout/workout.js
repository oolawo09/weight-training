angular.module('starter')
.config(function($stateProvider){
	$stateProvider

	.state('exercises', {
			url:"/exercises", 
			templateUrl: 'pages/workout/exercises.html', 
			controller: 'workoutCtrl'
		})
})

.controller('workoutCtrl', function ($scope, $state, getAndSetCurrentWorkout){
	$scope.exercises = getAndSetCurrentWorkout.getCurrentWorkout()

	$scope.nextExerciseLabel = 'next exercise'

	$scope.currentExercise = $scope.exercises[0]

	$scope.nextExercise = function (){ 

		if($scope.currentExercise.id < ( $scope.exercises.length - 1)){
			nextExerciseID = $scope.currentExercise.id++; 
			$scope.currentExercise = $scope.exercises[nextExerciseID]; 
		}

		else{
			$scope.nextExerciseLabel = 'complete'
		}

		if($scope.nextExerciseLabel == 'complete'){
			$state.go('congratulations')
		}
	}

	$scope.information = function(){ 
		$state.go('information')
	}

	$scope.stop = function(){ 
		$state.go('selectWorkouts')
	}

}) 
