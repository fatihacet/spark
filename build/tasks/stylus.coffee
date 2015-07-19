module.exports = (grunt) ->

  options        =
    options      : 'include css': yes
    all          :
      files      : [
        compress : no
        expand   : yes
        cwd      : 'src/themes/edge'
        src      : [ '**/*.styl', '!imports.styl' ]
        dest     : 'dist/css'
        ext      : '.css'
      ]
    concat       :
      files      : [
        expand   : yes
        cwd      : 'src/themes/edge'
        src      : 'imports.styl'
        dest     : 'dist/css/'
        ext      : '.css'
      ]
    examples     :
      files      : [
        compress : yes
        expand   : yes
        cwd      : 'src/examples'
        src      : [ '**/*.styl' ]
        dest     : 'src/examples'
        ext      : '.css'
      ]

  grunt.config 'stylus', options
