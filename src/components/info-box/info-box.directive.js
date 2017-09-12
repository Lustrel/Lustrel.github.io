angular.module('Lustrel').directive('lstInfoBox', function (){
	return {
		restrict: 'E', 
		templateUrl: './dist/templates/components/info-box/info-box.template.html',
		transclude: true,
		scope: {
			title: "@",
		}

	};
});
