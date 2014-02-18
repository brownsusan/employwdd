'use strict';
var app = angular.module('employwddApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'firebase']);
/*global firebase*/
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	});

	$routeProvider.when('/post/:postNumber', {
		templateUrl : 'views/post.html',
		controller : 'PostCtrl'
	});

	$routeProvider.when('/posts', {
		templateUrl : 'views/posts.html',
		controller : 'PostsCtrl'
	});

	$routeProvider.when('/add-freelance', {
		templateUrl : 'views/add-freelance.html',
		controller : 'AddFreelanceCtrl'
	});

	$routeProvider.when('/add-position', {
		templateUrl : 'views/add-position.html',
		controller : 'AddPositionCtrl'
	});
	
	$routeProvider.when('/my-posts', {
		templateUrl : 'views/my-posts.html',
		controller : 'MyPostsCtrl'
	});

	$routeProvider.when('/edit/:postNumber', {
		templateUrl : 'views/edit-post.html',
		controller : 'EditPostCtrl'
	});

	$routeProvider.otherwise({
		redirectTo : '/'
	});
});

app.run(['$firebaseSimpleLogin', '$rootScope',
function($firebaseSimpleLogin, $rootScope) {

	var dataRef = new Firebase("https://sbrownmdd.firebaseio.com");
	$rootScope.loginObj = $firebaseSimpleLogin(dataRef);

}]);
