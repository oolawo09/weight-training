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

.controller('selectDaysCtrl', function ($scope, $state){

	$scope.optionRedirect = function(){
			$state.go('selectWorkouts'); 
	}

	$scope.dayOptions = [
		{title: '2 day workout'}, 
		{title: '3 day workout'}, 
		{title: '4 day workout'}
	]; 
}); 

