module.exports = (grunt) ->

  options       =
    all         :
      options   :
        bare    : yes
      files     : [
        expand  : yes
        cwd     : 'src'
        src     : [ 'lib/**/*.coffee', 'tests/**/*.coffee' ]
        dest    : 'dist/js/'
        ext     : '.js'
      ]
    examples    :
      options   :
        bare    : yes
      files     : [
        expand  : yes
        cwd     : 'src/examples'
        src     : [ '**/*.coffee' ]
        dest    : 'src/examples'
        ext     : '.js'
      ]


  grunt.config 'coffee', options
