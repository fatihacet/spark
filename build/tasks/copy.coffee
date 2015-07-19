module.exports = (grunt) ->

  options    =
    examples :
      expand : yes
      cwd    : 'src/examples'
      src    : '**'
      dest   : 'dist/docs/examples'
    allJS    :
      src    : 'dist/compiled/compiled.js'
      dest   : 'dist/docs/compiled.js'
    allCSS   :
      src    : 'dist/css/spark.css'
      dest   : 'dist/docs/spark.css'

  grunt.config 'copy', options
