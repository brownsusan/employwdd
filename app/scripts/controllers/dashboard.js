'use strict';

angular.module('employwddApp').controller('DashboardCtrl', function($scope, FireConn) {
	$scope.posts = FireConn.$child('posts');
	$scope.requests = FireConn.$child('requests');
});
