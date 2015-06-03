angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states


		.state('psyche', {
			url:"/psyche", 
			templateUrl: 'pages/workout/psyche.html', 
			controller: 'psycheCtrl'
		})

})

.controller('psycheCtrl', function($scope, $state, $timeout){ 
	$timeout(function() { 
		$state.go('exercises'); 
	}, 3000); 
})
