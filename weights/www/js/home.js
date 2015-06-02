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

	$scope.optionRedirect = function(){
			$state.go('selectDays'); 
	}

	$scope.homeOptions = [
		{title: 'Get toned'}, 
		{title: 'Bulk up'}, 
		{title: 'Get healthier'}, 
		{title: 'Continue last workout'}
	]; 
}); 
