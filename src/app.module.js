'use strict';

angular
	.module('Lustrel', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', { 
				templateUrl: './src/pages/home/home.template.html'
			})
			.when('/contact', {
				templateUrl: './src/pages/contact/contact.template.html'
			})
	});
