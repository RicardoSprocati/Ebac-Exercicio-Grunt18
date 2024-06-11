const {option} = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    compress: true,
                },
                files: {
                    'build/style/main.min.css': 'src/style/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/style/**/*.less'],
                tasks: ['less:development']
            }
        },
        uglify:{
            target: {
                files: {
                    'build/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['less','uglify','watch']);
}