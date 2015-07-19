module.exports = (grunt) ->

  options          =
    all            :
      options      :
        outputFile : 'dist/deps.js'
        prefix     : '../../../../'
        root       : [
          'bower_components/closure-library'
          'bower_components/closure-templates'
          'dist/js/'
        ]

  grunt.config 'deps', options
