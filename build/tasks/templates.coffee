module.exports = (grunt) ->

  options  =
    all    :
      src  : 'src/lib/templates/**/*.soy'
      dest : 'dist/js/lib/templates/'

  grunt.config 'templates', options
