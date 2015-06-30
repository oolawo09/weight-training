angular.module('starter')
.config(function($stateProvider){
	$stateProvider

	.state('exercises', {
			url:"/exercises", 
			templateUrl: 'pages/workout/exercises.html', 
			controller: 'workoutCtrl'
		})
})

.controller('workoutCtrl', function ($scope, $state, getAndSetCurrentWorkout, $sce){
	$scope.exercises = getAndSetCurrentWorkout.getDayWorkout()
	$scope.nextExerciseLabel = 'next exercise'
	$scope.currentExercise = $scope.exercises[0]
	$scope.currentExercise.url = $sce.trustAsResourceUrl($scope.currentExercise.url) ; 


	$scope.nextExercise = function (){ 
		getAndSetCurrentWorkout.getDayWorkout()

		if($scope.currentExercise.id < ( $scope.exercises.length )){
			nextExerciseID = $scope.currentExercise.id++; 
			$scope.currentExercise = $scope.exercises[nextExerciseID];
			$scope.currentExercise.url = $sce.trustAsResourceUrl($scope.currentExercise.url) ; 
		}

		else{
			$scope.nextExerciseLabel = 'complete'
		}

		if($scope.nextExerciseLabel == 'complete'){
			getAndSetCurrentWorkout.setCurrentDay()
			$state.go('congratulations')
		}
	}

	$scope.information = function(){ 
		$state.go('information')
	}

	$scope.stop = function(){ 
		$state.go('selectWorkouts')
	}

	var setNextWorkout = function () { 

	}

}) 
