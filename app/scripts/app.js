'use strict';
var app = angular.module('employwddApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'firebase']);
/*global firebase*/
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	});

	// Will eventually need /:postNumber
	$routeProvider.when('/post/:priority', {
		templateUrl : 'views/post.html',
		controller : 'PostCtrl'
	});

	$routeProvider.when('/posts', {
		templateUrl : 'views/posts.html',
		controller : 'PostsCtrl'
	});
	//Using the posts view with filters written into the controllers
	$routeProvider.when('/posts/positions', {
		templateUrl : 'views/posts.html',
		controller : 'PostsPositionsCtrl'
	});
	//Using the posts view with filters written into the controllers
	$routeProvider.when('/posts/freelance', {
		templateUrl : 'views/posts.html',
		controller : 'PostsFreelanceCtrl'
	});

	$routeProvider.when('/add-freelance', {
		templateUrl : 'views/add-freelance.html',
		controller : 'AddFreelanceCtrl'
	});

	$routeProvider.when('/add-post', {
		templateUrl : 'views/add-post.html',
		controller : 'AddPostCtrl'
	});
	
	$routeProvider.when('/dashboard', {
		templateUrl : 'views/dashboard.html',
		controller : 'DashboardCtrl'
	});


	//will eventually need /:postNumber
	$routeProvider.when('/edit', {
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
