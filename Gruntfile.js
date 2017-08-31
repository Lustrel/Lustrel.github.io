'use strict';

module.exports = function(Grunt) {
	const bowerPath = './bower_components';
	const sourcePath = './src';
	const distPath = './dist';
	const distCssPath = (distPath + '/css');
	const distJsPath = (distPath + '/js');

	Grunt.initConfig({

		// Concat
		concat: {
			options: { separator: '; \n' },
			vendor: {
				src: [
					(bowerPath + '/jquery/dist/jquery.min.js'),
					(bowerPath + '/angular/angular.min.js'),
					(bowerPath + '/angular-route/angular-route.min.js')
				],
				dest: (distJsPath + '/vendor.js')
			},
			app: {
				src: [
					(sourcePath + '/app.module.js')
				],
				dest: (distJsPath + '/app.js')
			}
		},
		
		// Concat CSS
		concat_css: {
			vendor: {
				src: [
					(bowerPath + '/reset-css/reset.css'),
				],
				dest: (distCssPath + '/vendor.css')
			},
			app: {
				src: [
					(sourcePath + '/general.style.css'),
					(sourcePath + '/pages/home/home.style.css')
				],
				dest: (distCssPath + '/app.css')
			}
		},
		
		copy: {
			pages_templates: {
				expand: true,
				cwd: (sourcePath + '/pages'),
				src: '**/*.html',
				dest: (distPath + '/templates/pages')
			},
			images: {
				expand: true,
				cwd: (sourcePath + '/images'),
				src: '**/*.jpeg',
				dest: (distPath + '/images')
			}
		},
	});

	Grunt.loadNpmTasks('grunt-contrib-concat');
	Grunt.loadNpmTasks('grunt-concat-css');
	Grunt.loadNpmTasks('grunt-contrib-copy');

	Grunt.registerTask('default', ['concat:app', 'concat_css:app', 'copy:pages_templates', 'copy:images']);
	Grunt.registerTask('vendor', ['concat:vendor', 'concat_css:vendor']);
	Grunt.registerTask('build', ['vendor', 'default']);
};
