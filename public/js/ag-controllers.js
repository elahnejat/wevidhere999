var WeVidHereConfig = angular.module("WeVidHere", []);

WeVidHereConfig.controller(
		"WeVidHereConfig",
		[
			"$scope",  //the object we attach everything to
			"$http",   //important Ajax object, injectd to our controller
			function ($scope, $http)  {
			
			//get data by Ajax
			$http(
				method:"GET",
				url:"data/users.json"	
			)
			.success(function (data, status, headers, config) {
				//do something if we got the data
			}
			
			);
			
			// check data on submit form
			$scope.doLogin = function(){
				//process what user typed in
			}
			
			}
		]

);