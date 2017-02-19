(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
	$scope.stringToSplit = "";
	var separator = ',';
	$scope.message = "Please enter data first";

	$scope.sayMessage = function () {
	
	if ($scope.stringToSplit == "") 
		{
			$scope.message = "Please enter data first";
			return 0;
		} 
	if ($scope.stringToSplit.split(separator).length <= 3) 
		{
			$scope.message = "Enjoy!";
			return 0;
		}	else {
			$scope.message = "Too much!"
			return 0;
		}
	} 


});

})();