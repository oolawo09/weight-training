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

.controller('selectDaysCtrl', function ($scope, $state, $stateParams){

	$scope.workoutGoalID = $state.params.workoutGoalID

	$scope.dayOptions = [
		{title: 'two day workout', 
		id: '0'},
		{title: 'three day workout',
		id: '1'}, 
		{title: 'four day workout',
		id: '2'}
	]; 


}); 

