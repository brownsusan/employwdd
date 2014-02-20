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

angular.module('employwddApp').controller('AddPostCtrl', function($scope) {


	$scope.submit = function() {

		var tech = {
			'photoshop' : $scope.photoshop,
			'illustrator' : $scope.illustrator,
			'javascript' : $scope.illustrator
		};
		
		console.log(tech);

	}
});

angular.module('employwddApp').controller('DashboardCtrl', function($scope) {

});

angular.module('employwddApp').controller('EditPostCtrl', function($scope) {

});

