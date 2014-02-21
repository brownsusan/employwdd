'use strict';

angular.module('employwddApp').controller('MainCtrl', function($scope) {

});


angular.module('employwddApp').controller('PostCtrl', function($scope) {

});


angular.module('employwddApp').controller('PostsCtrl', function($scope) {
	$scope.pageHeading = 'All Posts';
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
		// Format Data
		$scope.newPost = {
			postType: $scope.postType,
			title: $scope.title,
			positionNeeded: $scope.positionNeeded,
			client: $scope.client,
			compensation: $scope.compensation,
			reqTech: {
				'design' : {
					'photoshop' : $scope.photoshop,
					'illustrator': $scope.photoshop,
					'indesign' : $scope.photoshop
				},
				'frontend' : {
					'html' : $scope.photoshop,
					'css' : $scope.photoshop,
					'js' : $scope.photoshop
				},
				'backend' : {
					'php' : $scope.photoshop,
					'node' : $scope.photoshop,
					'python' : $scope.photoshop,
					'ruby' : $scope.photoshop,
					'java' : $scope.photoshop
				},
				'database' : {
					'mongo' : $scope.photoshop,
					'sql' : $scope.photoshop
				}
			},
			description: $scope.description 
		}
		
		// $scope.posts.$add($scope.newPost);
			
		// Firebase Connection - connect to the posts collection
		// Push into firebase
		

	}
});

angular.module('employwddApp').controller('DashboardCtrl', function($scope) {

});

angular.module('employwddApp').controller('EditPostCtrl', function($scope) {

});

