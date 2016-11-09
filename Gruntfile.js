module.exports = function (grunt) {
    // Do grunt-related things in here
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/site/main.css': 'site-src/scss/**/*.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['site-src/scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.registerTask('default', ['sass', 'watch']);
};