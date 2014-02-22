'use strict';

angular.module('employwddApp').controller('MainCtrl', function($scope) {

});


angular.module('employwddApp').controller('PostCtrl', function($scope) {
	
});


angular.module('employwddApp').controller('PostsCtrl', function($scope, FireConn) {
	$scope.pageHeading = 'All Posts';
	$scope.posts = FireConn.$child('posts');
	// console.log($scope.posts);
});


angular.module('employwddApp').controller('PostsPositionsCtrl', function($scope) {
	$scope.pageHeading = 'Open Positions';
});


angular.module('employwddApp').controller('PostsFreelanceCtrl', function($scope) {
	$scope.pageHeading = 'Freelance Opportunities';
});

angular.module('employwddApp').controller('AddPostCtrl', function($scope, FireConn) {
	

	$scope.addPost = function() {
		$scope.posts = FireConn.$child('posts');
		// Need Users to set the owner
		// Format Data
		$scope.newPost = {
			owner :  $scope.loginObj.user.id,
			postType: $scope.postType,
			title: $scope.title,
			positionNeeded: $scope.positionNeeded,
			client: $scope.client,
			compensation: $scope.compensation,
			reqTech: {
				'design' : {
					'photoshop' : $scope.photoshop,
					'illustrator': $scope.illustrator,
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
			description: $scope.description 
		}
		
		$scope.posts.$add($scope.newPost);
		// Firebase Connection - connect to the posts collection
		// Push into firebase
		

	}
});

angular.module('employwddApp').controller('DashboardCtrl', function($scope) {

});

angular.module('employwddApp').controller('EditPostCtrl', function($scope) {

});

