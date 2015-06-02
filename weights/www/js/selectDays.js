angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('selectDays', {
			url:"/:workoutGoalID/selectDays", 
			templateUrl: 'pages/selectDays.html', 
			controller: 'selectDaysCtrl'
		}); 


})

.controller('selectDaysCtrl', ['$scope', '$state', 'retrieveToningData', function ($scope, $state, retrieveToningData){

	$scope.optionRedirect = function(){
			$state.go('selectWorkouts'); 
	}




	$scope.workoutGoalID = $state.params.workoutGoalID

	$scope.dayOptions = [
		{title: '2 day workout', 
		id: '0'}, 
		{title: '3 day workout',
		id: '1'}, 
		{title: '4 day workout',
		id: '2'}
	]; 


}]); 

