module.exports = ->

  ci      :
    desc  : 'Compile code and run tests for compiled and uncompiled code.'
    tasks : [
        'clean', 'mkdir', 'stylus', 'coffee', 'coffee2closure'
        'deps', 'karma:headless', 'builder', 'karma:compiled'
        'jsdoc', 'copy', 'gh-pages'
      ]


  build   :
    desc  : 'Compile code and run tests.'
    tasks : [
        'clean', 'mkdir', 'stylus', 'templates', 'coffee', 'coffee2closure'
        'deps', 'builder', 'karma:compiled'
        'open:build', 'http-server:compiled'
      ]


  examples :
    desc   : 'Compile and open examples directory'
    tasks  : [
        'coffee', 'coffee2closure', 'deps', 'builder', 'jsdoc',
        'coffee:examples', 'stylus', 'copy'
        'open:examples', 'http-server:debug', 'watch:examples'
      ]


  defaults :
    desc   : 'Run tests and watch the stack for changes'
    tasks  : [
        'clean', 'mkdir', 'stylus', 'templates',
        'coffee', 'coffee2closure', 'deps', 'karma:headless'
        'http-server:debug', 'open:dev', 'open:coverage', 'watch'
      ]
