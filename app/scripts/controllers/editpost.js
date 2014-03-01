'use strict';

angular.module('employwddApp').controller('EditPostCtrl', function($scope, FireConn, $routeParams, $location) {

	$scope.post = FireConn.$child('posts').$child($routeParams.priority);
	$scope.postPriority = $routeParams.priority;

	$scope.pageHeading = 'Edit a Post';
	$scope.buttonText = 'Update It';

	$scope.submit = function() {
		$scope.post.$save();
		$location.path('/dashboard');
	};

});
