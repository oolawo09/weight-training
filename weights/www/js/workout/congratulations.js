angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

			.state('congratulations', {
			url:"/congratulations", 
			templateUrl: 'pages/workout/congratulations.html', 
			controller: 'congratulationsCtrl'
		})
})

.controller('congratulationsCtrl', function($scope, $state, $timeout){
	$timeout(function() { 
		$state.go('summary'); 
	}, 3000); 
}); 
