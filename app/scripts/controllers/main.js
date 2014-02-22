'use strict';

angular.module('employwddApp').controller('MainCtrl', function($scope) {

});

angular.module('employwddApp').controller('PostCtrl', function($scope, FireConn, $routeParams) {

	$scope.posts = FireConn.$child('posts');
	$scope.post = FireConn.$child('posts').$child($routeParams.priority);
	$scope.postPriority = $routeParams.priority;

	$scope.requests = FireConn.$child('requests');

	$scope.addRequest = function() {
		$scope.newRequest = {
			'postPriority' : $routeParams.priority,
			'ownerId' : $scope.loginObj.user.id,
			'ownerUsername' : $scope.loginObj.user.username,
			'ownerName' : $scope.ownerName,
			'phoneNum' : $scope.phoneNum,
			'email' : $scope.email,
			'gravatar' : $scope.loginObj.user.thirdPartyUserData.avatar_url
		}
		// console.log($scope.newRequest);
		$scope.requests.$add($scope.newRequest);
	}
	
	$scope.deletePost = function(){
		$scope.post.$remove();
	}
});

angular.module('employwddApp').controller('EditPostCtrl', function($scope, FireConn, $routeParams) {

	$scope.post = FireConn.$child('posts').$child($routeParams.priority);
	$scope.postPriority = $routeParams.priority;

	$scope.updatePost = function(){
		$scope.post.$save();
	}

});

angular.module('employwddApp').controller('PostsCtrl', function($scope, FireConn) {
	$scope.pageHeading = 'All Posts';
	$scope.posts = FireConn.$child('posts');
});

angular.module('employwddApp').controller('PostsPositionsCtrl', function($scope, FireConn) {
	$scope.pageHeading = 'Open Positions';
	$scope.posts = FireConn.$child('posts');
});

angular.module('employwddApp').controller('PostsFreelanceCtrl', function($scope, FireConn) {
	$scope.pageHeading = 'Freelance Opportunities';
	$scope.posts = FireConn.$child('posts');
});

angular.module('employwddApp').controller('AddPostCtrl', function($scope, FireConn) {

	$scope.addPost = function() {
		$scope.posts = FireConn.$child('posts');

		$scope.newPost = {
			'ownerId' : $scope.loginObj.user.id,
			'ownerUsername' : $scope.loginObj.user.username,
			'postType' : $scope.postType,
			'title' : $scope.title,
			'positionNeeded' : $scope.positionNeeded,
			'client' : $scope.client,
			'compensation' : $scope.compensation,
			'reqTech' : {
				'design' : {
					'photoshop' : $scope.photoshop,
					'illustrator' : $scope.illustrator,
					'indesign' : $scope.indesign
				},
				'frontend' : {
					'html' : $scope.html,
					'css' : $scope.css,
					'javascript' : $scope.javascript
				},
				'backend' : {
					'php' : $scope.php,
					'node' : $scope.node,
					'python' : $scope.python,
					'ruby' : $scope.ruby,
					'java' : $scope.javaSS
				},
				'database' : {
					'mongo' : $scope.mongo,
					'mysql' : $scope.mysql
				}
			},
			'description' : $scope.description
		}

		$scope.posts.$add($scope.newPost);
	}
});

angular.module('employwddApp').controller('DashboardCtrl', function($scope, FireConn) {
	$scope.posts = FireConn.$child('posts');
	$scope.requests = FireConn.$child('requests');
});

