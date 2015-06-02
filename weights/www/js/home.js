angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

		.state('home', {
			url:"/", 
			templateUrl: 'pages/home.html', 
			controller: 'homeCtrl'
		})


})

.controller('homeCtrl', function ($scope, $state){

	$scope.optionRedirect = function(){
			$state.go('selectDays'); 
	}

	$scope.homeOptions = [
		{title: 'Get toned', 
		id: '0'}, 
		{title: 'Bulk up', 
		id:'1'}, 
		{title: 'Get healthier', 
		id: '2'}, 
		{title: 'Continue last workout', 
		id: '4'}
	]; 
}); 
