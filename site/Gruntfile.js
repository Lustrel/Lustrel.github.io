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
                    (sourcePath + "/app.module.js")
                ],
                dest: (distJsPath + "/app.js")
            }
        },

    });

    Grunt.loadNpmTasks("grunt-contrib-concat");

    Grunt.registerTask("default", ["concat:app"]);
    Grunt.registerTask("vendor", ["concat:vendor"]);
    Grunt.registerTask("build", ["vendor", "default"]);
};