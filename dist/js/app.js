'use strict';

angular
	.module('Lustrel', ['ngRoute'])
	.config(function($routeProvider){
		var pagesTemplatePath = './dist/templates/pages';

		$routeProvider
			.when('/', { 
				templateUrl: (pagesTemplatePath + '/home/home.template.html')
			})
			.when('/contact', {
				templateUrl: (pagesTemplatePath + '/contact/contact.template.html')
			})
	});
