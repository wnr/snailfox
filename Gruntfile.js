'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      root: {
        files: {
          src: ['Gruntfile.js']
        },
        options: {
          jshintrc: '.jshintrc'
        }
      },
      lib: {
        files: {
          src: ['lib/**/*.js']
        },
        options: {
          jshintrc: '.jshintrc'
        }
      },
      test: {
        files: {
          src: ['test/**/*.js']
        },
        options: {
          jshintrc: './test/.jshintrc'
        }
      },
      bin: {
        files: {
          src: ['bin/**/*.js']
        },
        options: {
          jshintrc: '.jshintrc'
        }
      }
    },
    simplemocha: {
      options: {
        globals: ['expect'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'Spec'
      },

      all: {
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.task.registerTask('test', ['simplemocha']);

  grunt.task.registerTask('default', ['jshint', 'test']);
};