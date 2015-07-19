module.exports = (grunt) ->

  options     =
    all       :
      options : force: yes
      src     : 'dist'

  grunt.config 'clean', options
