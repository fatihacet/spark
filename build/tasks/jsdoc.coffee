module.exports = (grunt) ->

  options           =
    dist            :
      src           : [ 'dist/js/lib/**/*.js', 'README.md', '!dist/js/lib/Bootstrapper.js' ],
      options       :
        destination : 'dist/docs'
        template    : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
        configure   : 'jsdoc.conf.json'

  grunt.config 'jsdoc', options
