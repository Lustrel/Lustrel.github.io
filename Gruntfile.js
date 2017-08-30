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
        
        // Concat CSS
        concat_css: {
            vendor: {
                src: [
                    (bowerPath + "/reset-css/reset.css"),
                ],
                dest: (distCssPath + "/vendor.css")
            },
            app: {
                src: [
                    (sourcePath + "/pages/home/home.style.css")
                ],
                dest: (distCssPath + "/app.css")
            }
        },

    });

    Grunt.loadNpmTasks("grunt-contrib-concat");
    Grunt.loadNpmTasks("grunt-concat-css");
    
    Grunt.registerTask("default", ["concat:app", "concat_css:app"]);
    Grunt.registerTask("vendor", ["concat:vendor", "concat_css:vendor"]);
    Grunt.registerTask("build", ["vendor", "default"]);
};
