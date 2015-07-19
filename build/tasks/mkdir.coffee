module.exports = (grunt) ->

  options      =
    all        :
      options  :
        create : [
          'src/lib'
          'src/externs'
          'src/images'
          'src/themes/edge'
          'src/lib/templates'
          'src/third-party'
          'dist/css'
          'dist/compiled'
          'dist/images'
        ]

  grunt.config 'mkdir', options
