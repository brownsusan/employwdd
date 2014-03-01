'use strict';

angular.module('employwddApp').controller('MainCtrl', function($scope) {

});

angular.module('employwddApp').controller('DashboardCtrl', function($scope, FireConn) {
	$scope.posts = FireConn.$child('posts');
	$scope.requests = FireConn.$child('requests');
});

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

angular.module('employwddApp').controller('PostsCtrl', function($scope, FireConn) {
	// set a default page heading
	$scope.pageHeading = 'All Posts';
	$scope.posts = FireConn.$child('posts');
});

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

