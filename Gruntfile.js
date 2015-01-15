/*
 * grunt-characters-file
 * https://github.com/JA44/grunt-characters-file
 *
 * Copyright (c) 2015 Jean-Alain Ré
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jscs: {
            src: ['*.js', '*/**.js']
        },
        // Configuration to be run (and then tested).
        characters_file: {
            default_options: {
                options: {},
                src: 'test/fixtures/*'
            },
            custom_options: {
                options: {
                    alertIfHigher: 10
                },
                src: 'test/fixtures/*'
            }
        }
    });
    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');
    // By default, lint and run all tests.
    grunt.registerTask('default', ['jscs', 'characters_file']);
};
