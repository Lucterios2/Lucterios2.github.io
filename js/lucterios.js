var lucteriosApp = angular.module('lucteriosApp', [ 'scroll', 'ngSanitize',
		'pascalprecht.translate' ])

lucteriosApp.config([ '$translateProvider', function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix : 'media/',
		suffix : '.json'
	});
	$translateProvider.preferredLanguage('fr_FR');
	$translateProvider.useSanitizeValueStrategy('sanitize');
} ]);

lucteriosApp.controller('lucteriosCtrl', function($translate, $scope) {
	$scope.setLang = function(langKey) {
		$translate.use(langKey);
	};
});
