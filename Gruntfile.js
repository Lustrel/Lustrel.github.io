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
			}
		},
		
		// Copy
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

		// SASS
		sass: {
			options: { sourcemap: "none", style: "compressed", update: true },
			app: {
				files: { "./dist/css/app.css": "./src/style.loader.scss" }
			}
		},

		// Watch
		watch: {
			options: {},
			app: {
				files: (sourcePath + "/**/*"),
				tasks: ["default"]
			}
		}
	});

	Grunt.loadNpmTasks('grunt-contrib-concat');
	Grunt.loadNpmTasks('grunt-concat-css');
	Grunt.loadNpmTasks('grunt-contrib-sass');
	Grunt.loadNpmTasks('grunt-contrib-copy');
	Grunt.loadNpmTasks('grunt-contrib-watch');

	Grunt.registerTask('default', ['concat:app', 'sass:app', 'copy:pages_templates', 'copy:images']);
	Grunt.registerTask('vendor', ['concat:vendor', 'concat_css:vendor']);
	Grunt.registerTask('build', ['vendor', 'default']);
};
