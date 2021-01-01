module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist'],
        concat: {
            dist: {
                src: [
                    'src/js/intro.js',
                    'src/js/EweEye/*.js',
                    'src/js/RenderQueue/object.js', 'src/js/RenderQueue/prototype/*.js',
                    'src/js/TreeView/object.js', 'src/js/TreeView/prototype/*.js',
                    'src/js/Node/object.js', 'src/js/Node/prototype/*.js',
                    'src/js/ExpandableNode/object.js', 'src/js/ExpandableNode/prototype/*.js',
                    'src/js/outro.js'
                ],
                dest: 'dist/js/eweeye.js'
            }
        },
        copy: {
            main: {
                expand: true,
                src: ['dist/**', 'samples/**'],
                dest: '/var/www/html',
            },
        },
        jsbeautifier: {
            files: ['dist/js/eweeye.js']
        },
        jshint: {
            src: ['dist/js/eweeye.js']
        },
        sass: {
            dist: {
                files: {
                    'dist/css/eweeye.css': 'src/sass/main.scss'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/js/eweeye.js',
                dest: 'dist/js/eweeye.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('default', ['clean', 'concat', 'jsbeautifier', 'jshint', 'uglify', 'sass', 'copy']);
}