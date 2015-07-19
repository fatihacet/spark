module.exports = (grunt) ->

  options        =
    options      :
      livereload : yes
      interrupt  : yes
    configFiles  :
      files      : [ 'Gruntfile.coffee', 'karma.conf.js' ]
      options    :
        reload   : yes
    html         :
      files      : [ 'public/**/*.html' ]
    src          :
      files      : [ 'src/lib/**/*.coffee', 'src/tests/**/*.coffee' ]
      tasks      : [ 'coffee:all', 'coffee2closure', 'deps', 'karma:headless' ]
    styl         :
      files      : [ 'src/themes/edge/**/*.styl' ]
      tasks      : [ 'stylus:all', 'stylus:concat' ]
    images       :
      files      : [ 'src/images/**/*.png' ]
      tasks      : [ 'stylus:all', 'styl:concat' ]
    examples     :
      files      : [ 'src/examples/**/*.styl', 'src/examples/**/*.coffee' ]
      tasks      : [ 'stylus:examples', 'coffee:examples', 'copy' ]

  grunt.config 'watch', options
