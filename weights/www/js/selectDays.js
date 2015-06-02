angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('selectDays', {
			url:"/selectDays", 
			templateUrl: 'pages/selectDays.html', 
			controller: 'selectDaysCtrl'
		}); 


})

.controller('selectDaysCtrl', ['$scope', '$state', 'retrieveToningData', function ($scope, $state, retrieveToningData){

	$scope.optionRedirect = function(){
			$state.go('selectWorkouts'); 
	}



	retrieveToningData.getTwoDayExercises()


	$scope.dayOptions = [
		{title: '2 day workout'}, 
		{title: '3 day workout'}, 
		{title: '4 day workout'}
	]; 


}]); 

