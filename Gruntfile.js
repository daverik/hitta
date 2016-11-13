module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

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
        uglify: {
            options: {
                mangle: false
            },
            build: {
                files: {
                    'release/hitta.min.js': ['dist/hitta.js']
                }
            }
        },
        copy: {
            build: {
                files: [
                    // includes files within path
                    { expand: true, flatten: true, src: ['dist/hitta.js'], dest: 'release/',}
                ],
            },
        }
    });

    grunt.registerTask('default', ['sass', 'watch']);

    grunt.registerTask('build', ['uglify:build', 'copy:build']);
};