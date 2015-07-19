module.exports = (grunt) ->

  options      =
    all        :
      files    : [
        expand : yes
        src    : [ 'dist/js/lib/**/*.js', '!dist/js/lib/templates/**/*.js' ]
        ext    : '.js'
      ]

  grunt.config 'coffee2closure', options
