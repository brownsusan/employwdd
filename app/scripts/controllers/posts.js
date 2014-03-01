'use strict';

angular.module('employwddApp').controller('PostsCtrl', function($scope, FireConn) {
	// set a default page heading
	// this will change when filters are used to search
	$scope.pageHeading = 'All Posts';
	$scope.posts = FireConn.$child('posts');
});
