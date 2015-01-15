/*
 * grunt-characters-file
 * https://github.com/JA44/grunt-characters-file
 *
 * Copyright (c) 2015 Jean-Alain Ré
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('characters_file', 'get the characters number file', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
                alertIfHigher: Number.POSITIVE_INFINITY
            }),
            errorsGrunt = false;

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).forEach(function(filepath) {
                var charactersLength = grunt.file.read(filepath).length;

                grunt.log[charactersLength > options.alertIfHigher ? 'errorlns' : 'writeln'](filepath + ' :: ' + charactersLength + ' character ' + ((charactersLength > 0) ? 's': ''));
                errorsGrunt = errorsGrunt || charactersLength > options.alertIfHigher;
            });
        });

        if (errorsGrunt) {
            grunt.fail.warn('Some files exceed the limit of characters');
        }
    });
};
