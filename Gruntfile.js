// Generated on 2015-04-22 using generator-firefox-extension 0.2.0

module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        name: 'hasher',
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        config: config,

        shell: {
            run: {
                command: 'cfx run --pkgdir=<%= config.app %>'
            },
            xpi: {
                command: [
                    'cfx xpi --pkgdir=<%= config.app %>',
                    'mv <%= config.name %>.xpi <%= config.dist %>',
                    'wget --post-file=<%= config.dist %>/<%= config.name %>.xpi http://localhost:8888/ || echo>/dev/null'
                ].join('&&')
            }
        },
        watch: {
            xpi: {
                files: ['<%= config.app %>/**/*.{html,js}'],
                tasks: ['shell:xpi']
            }
        }
    });

    grunt.registerTask('run', ['shell:run']);
    grunt.registerTask('default', ['run']);
};
