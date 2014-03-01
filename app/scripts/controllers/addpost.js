'use strict';

angular.module('employwddApp').controller('AddPostCtrl', function($scope, FireConn, $location) {

	$scope.pageHeading = 'Add a Post';
	$scope.buttonText = 'Post It';

	$scope.submit = function() {

		$scope.posts = FireConn.$child('posts');

		$scope.post.ownerId = $scope.loginObj.user.id;
		$scope.post.ownerUsername = $scope.loginObj.user.username;

		$scope.posts.$add($scope.post);

		$location.path('/dashboard');

	};

});
