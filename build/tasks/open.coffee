module.exports = (grunt) ->

  options    =
    dev      :
      path   : 'http://localhost:1111/public/debug'
      app    : 'Google Chrome'
    examples :
      path   : 'http://localhost:1111/dist/docs/examples/'
      app    : 'Google Chrome'
    coverage :
      path   : 'http://localhost:1111/dist/coverage/PhantomJS 1.9.8 (Mac OS X)/lcov-report/index.html'
      app    : 'Google Chrome'
    build    :
      path   : 'http://localhost:2222/public/compiled'
      app    : 'Google Chrome'

  grunt.config 'open', options
