angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $translate) {

	$scope.language = navigator.language;
	$scope.language = $scope.language.toLowerCase();


	//console.log("language > ", $scope.language);

	if(!$scope.language) {
		$scope.language = 'en';
	};

	if($scope.language.includes("en")) {
		//console.log("we are in english");
		$scope.language = "en";
	} else if($scope.language.includes("es")) {
		$scope.language = "es";
	} else if($scope.language.includes("fr")) {
		$scope.language = "fr";
	} else if($scope.language.includes("pl")) {
		$scope.language = "pl";
	} else if($scope.language.includes("cat") && (!$scope.language.includes("fr") || !$scope.language.includes("en"))) {
		$scope.language = "cat";
	} else {
		$scope.language = "es";
	};

	$translate.use($scope.language);

	$scope.options = [{ language: "en"}, { language: "es"}, { language: "fr"}, { language: "pl"}, { language: "cat"}];

	for (var i = 0; i < 5; i++) {
		//console.log("i / ", $scope.options[i].language);
		if ($scope.options[i].language == $scope.language) {
			$scope.selectedOption = $scope.options[i];
			i = 5;
		};
	};

	

	//if(!$scope.language || ($scope.language != "es" && $scope.language != "en" && $scope.language != "fr" && $scsope.language != "pl" && $scope.language != "cat")) {
	//	$scope.language = 'es';
	//};

		console.log("$scope.language", $scope.language);
	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
		$scope.language = langKey;
	};


	/*$scope.test = true;

	$scope.printFirstText = function () {
		console.log("test: ", $scope.test);
		if($scope.test == false)
		{
			//console.log("test: ", $scope.test);
			$scope.test = true;
		}
		else
		{
			$scope.test = false;
		}

	};*/

	



});
	