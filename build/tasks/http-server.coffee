module.exports = (grunt) ->

  options             =
    debug             :
      host            : '127.0.0.1'
      port            : 1111
      runInBackground : yes
    compiled          :
      host            : '127.0.0.1'
      port            : 2222

  grunt.config 'http-server', options
