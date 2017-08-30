"use strict";

module.exports = function(Grunt) {
	const bowerPath = "./bower_components";
	const sourcePath = "./src";
	const distPath = "./dist";
	const distCssPath = (distPath + "/css");
	const distJsPath = (distPath + "/js");

	Grunt.initConfig({

		// Concat
		concat: {
			options: { separator: "; \n" },
			vendor: {
				src: [
					(bowerPath + "/jquery/dist/jquery.min.js"),
					(bowerPath + "/angular/angular.min.js"),
					(bowerPath + "/angular-route/angular-route.min.js")
				],
				dest: (distJsPath + "/vendor.js")
			},
			app: {
				src: [
					(sourcePath + "/app.module.js"),
					(sourcePath + "/components/**/*.module.js"),
					(sourcePath + "/components/**/*.directive.js"),
					(sourcePath + "/components/**/*.provider.js"),
					(sourcePath + "/components/**/*.service.js"),
					(sourcePath + "/components/**/*.controller.js"),
					(sourcePath + "/globals/js/**/*.module.js"),
					(sourcePath + "/globals/js/**/*.service.js"),
					(sourcePath + "/globals/js/**/*.factory.js"),
					(sourcePath + "/pages/**/*.module.js"),
					(sourcePath + "/pages/**/*.service.js"),
					(sourcePath + "/pages/**/*.controller.js")
				],
				dest: (distJsPath + "/app.js")
			}
		},

		// Sass
		sass: {
			options: { sourcemap: "none", style: "compressed", update: true },
			app: {
				files: { "./dist/css/app.css": "./src/style.loader.sass" }
			}
		},

		// Concat CSS
		concat_css: {
			vendor: {
				src: [
					(bowerPath + "/reset-css/reset.css"),
					(bowerPath + "/components-font-awesome/css/font-awesome.min.css")
				],
				dest: (distCssPath + "/vendor.css")
			}
		},

		// Copy
		copy: {
			components_templates: {
				expand: true,
				cwd: (sourcePath + "/components"),
				// src: "**/*.html",
				dest: (distPath + "/templates/components")
			},
			pages_templates: {
				expand: true,
				cwd: (sourcePath + "/pages"),
				src: "**/*.html",
				dest: (distPath + "/templates/pages")
			},
			vendor: {
				expand: true,
				cwd: (bowerPath + "/components-font-awesome/fonts"),
				src: "**",
				dest: (distPath + "/fonts")
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

	Grunt.loadNpmTasks("grunt-contrib-concat");
	Grunt.loadNpmTasks("grunt-contrib-sass");
	Grunt.loadNpmTasks("grunt-contrib-copy");
	Grunt.loadNpmTasks("grunt-contrib-watch");
	Grunt.loadNpmTasks("grunt-concat-css");

	Grunt.registerTask("default", ["concat:app", "sass:app", "copy:components_templates", "copy:pages_templates"]);
	Grunt.registerTask("vendor", ["concat:vendor", "concat_css:vendor", "copy:vendor"]);
	Grunt.registerTask("build", ["vendor", "default"]);
};
