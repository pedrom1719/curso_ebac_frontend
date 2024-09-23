module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress: true,
                },
                files:{
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        htmlmin:{
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'pre-build/index.html': 'src/index.html'
                }
            }
        },
        replace:{
            development:{
                options:{
                    patterns: [
                        {
                            match: 'css_path',
                            replacement: 'styles/main.css'
                        },
                        {
                            match: 'js_path',
                            replacement: 'scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/scripts/*.js'],
                        dest: 'dev/scripts/'
                    }
                ]
            },
            dist:{
                options:{
                    patterns: [
                        {
                            match: 'css_path',
                            replacement: 'styles/main.min.css'
                        },
                        {
                            match: 'js_path',
                            replacement: 'scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['pre-build/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        clean: ['pre-build'],
        uglify:{
            target:{
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js' 
                }
            }
        },
        watch:{
            less:{
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html:{
                files: ['src/index.html'],
                tasks: ['replace:development']
            },
            js: {
                files: ['src/scripts/**/*.js'],
                tasks: ['replace:development']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'uglify', 'clean']);

}
