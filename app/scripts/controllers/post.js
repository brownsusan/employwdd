'use strict';

angular.module('employwddApp').controller('PostCtrl', function($scope, FireConn, $routeParams, $location) {

	$scope.posts = FireConn.$child('posts');
	$scope.post = FireConn.$child('posts').$child($routeParams.priority);
	$scope.postPriority = $routeParams.priority;

	$scope.requests = FireConn.$child('requests');

	$scope.requestFormHide = false;

	$scope.addRequest = function() {

		$scope.requestFormHide = true;

		$scope.newRequest = {
			'postPriority' : $routeParams.priority,
			'ownerId' : $scope.loginObj.user.id,
			'ownerUsername' : $scope.loginObj.user.username,
			'ownerName' : $scope.ownerName,
			'phoneNum' : $scope.phoneNum,
			'email' : $scope.email,
			'gravatar' : $scope.loginObj.user.thirdPartyUserData.avatar_url
		};

		// console.log($scope.newRequest);
		$scope.requests.$add($scope.newRequest);

	};

	$scope.deletePost = function() {
		$scope.post.$remove();
		$location.path('/dashboard');
	};

});
