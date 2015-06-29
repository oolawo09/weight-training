angular.module('starter')
.config(function($stateProvider){
	$stateProvider
	//loading states

.state('information', {
			url:"/information", 
			templateUrl: 'pages/workout/information.html', 
			controller: 'informationCtrl'
		})	
})

.controller('informationCtrl', function($scope, $state){ 
	

})


