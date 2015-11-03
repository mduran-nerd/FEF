/*jshint node:true */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        copy: {
            buildStatic: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    src: [
                        '**/.htaccess',
                        '**/*.{asp,aspx,cshtml,jsp,php,py,rb,txt}',
                        'assets/fonts/**',
                        'assets/media/**',
                        '!assets/vendor/**',
                        'assets/vendor/**/*.{gif,eot,svg,ttf,woff}'
                    ],
                    dest: '<%= env.DIR_DEST %>'
                }]
            }
        }
    });

    grunt.registerTask('buildStatic', [
        'copy:buildStatic',
    ]);
};
