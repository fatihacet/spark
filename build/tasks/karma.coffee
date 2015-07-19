module.exports = (grunt) ->

  options        =
    headless     :
      configFile : 'karma.headless.conf.js'
    local        :
      configFile : 'karma.local.conf.js'
    sauceLabs    :
      configFile : 'karma.saucelabs.conf.js'
    compiled     :
      configFile : 'karma.compiled.conf.js'

  grunt.config 'karma', options
