var dependencies = '';

module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json')
        , banner = function(mode) {
            return "/*" +
                "\n * <%= pkg.name %> v<%= pkg.version %>" + (mode ? ' ('+mode+')' : '') +
                "\n * <%= pkg.description %>" +
                "\n * (c) <%= grunt.template.today('yyyy') %> <%= pkg.author %> http://mattbalmer.com" +
                "\n * License: MIT" +
                "\n */\n";
        }
        , intro =   ";(function(" + dependencies + ") {\n\n"
        , outro = "\n}(" + dependencies + "));";

    // Project configuration.
    grunt.initConfig({
        pkg: pkg,
        concat: {
            options: {
                banner: banner() + intro,
                footer: outro
            },
            safe: {
                src: [ 'src/core.js', 'src/export.js' ],
                dest: 'dist/' + pkg.name + '.js'
            },
            sugar: {
                options: {
                    banner: banner('sugar syntax'),
                    footer: ''
                },
                src: [ 'src/sugar.js' ],
                dest: 'dist/' + pkg.name + '-sugar.js'
            }
        },
        uglify: {
            safe: {
                options: {
                    banner: banner()
                },
                files: {
                    'dist/mb-strings.min.js': 'dist/mb-strings.js'
                }
            },
            main: {
                options: {
                    banner: banner('sugar syntax enabled')
                },
                files: {
                    'dist/mb-strings-sugar.min.js': 'dist/mb-strings-sugar.js'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);

};