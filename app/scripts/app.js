'use strict';

var app = angular.module('employwddApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'firebase']);

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		'templateUrl' : 'views/main.html',
		'controller' : 'MainCtrl'
	});

	$routeProvider.when('/dashboard', {
		'templateUrl' : 'views/dashboard.html',
		'controller' : 'DashboardCtrl'
	});

	$routeProvider.when('/add-post', {
		'templateUrl' : 'views/add-edit-post.html',
		'controller' : 'AddPostCtrl'
	});

	$routeProvider.when('/posts', {
		'templateUrl' : 'views/posts.html',
		'controller' : 'PostsCtrl'
	});

	//Using the posts view with filters written into the controllers
	$routeProvider.when('/positions', {
		'templateUrl' : 'views/position-posts.html',
		'controller' : 'PostsPositionsCtrl'
	});
	
	//Using the posts view with filters written into the controllers
	$routeProvider.when('/freelance', {
		'templateUrl' : 'views/freelance-posts.html',
		'controller' : 'PostsFreelanceCtrl'
	});

	$routeProvider.when('/post/:priority', {
		'templateUrl' : 'views/post.html',
		'controller' : 'PostCtrl'
	});

	$routeProvider.when('/edit-post/:priority', {
		'templateUrl' : 'views/add-edit-post.html',
		'controller' : 'EditPostCtrl'
	});

	$routeProvider.otherwise({
		'redirectTo' : '/'
	});

});

app.run(['$firebaseSimpleLogin', '$rootScope',
function($firebaseSimpleLogin, $rootScope) {

	var dataRef = new Firebase("https://sbrownmdd.firebaseio.com");
	$rootScope.loginObj = $firebaseSimpleLogin(dataRef);

}]);


app.filter('toArray', function () {
    'use strict';
 
    return function (obj) {
        if (!(obj instanceof Object)) {
            return obj;
        }
 
        return Object.keys(obj).filter(function(key){if(key.charAt(0) !== "$") {return key;}}).map(function (key) {
            return Object.defineProperty(obj[key], '$key', {__proto__: null, value: key});
        });
    };
});

