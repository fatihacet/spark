module.exports = (grunt) ->

  grunt.initConfig

    clean                :
      all                :
        options          :
          force          : yes
        src              : 'dist'


    mkdir                :
      all                :
        options          :
          create         : [
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


    copy                 :
      examples           :
        expand           : yes
        cwd              : 'src/examples'
        src              : '**'
        dest             : 'dist/docs/examples'
      allJS              :
        src              : 'dist/compiled/compiled.js'
        dest             : 'dist/docs/compiled.js'
      allCSS             :
        src              : 'dist/css/spark.css'
        dest             : 'dist/docs/spark.css'


    coffee               :
      all                :
        options          :
          bare           : yes
        files            : [
          expand         : yes
          cwd            : 'src'
          src            : [ 'lib/**/*.coffee', 'tests/**/*.coffee' ]
          dest           : 'dist/js/'
          ext            : '.js'
        ]
      examples           :
        options          :
          bare           : yes
        files            : [
          expand         : yes
          cwd            : 'src/examples'
          src            : [ '**/*.coffee' ]
          dest           : 'src/examples'
          ext            : '.js'
        ]


    coffee2closure       :
      all                :
        files            : [
          expand         : yes
          src            : [ 'dist/js/lib/**/*.js', '!dist/js/lib/templates/**/*.js' ]
          ext            : '.js'
        ]


    stylus               :
      options            :
        'include css'    : yes
      all                :
        files            : [
          compress       : no
          expand         : yes
          cwd            : 'src/themes/edge'
          src            : [ '**/*.styl', '!imports.styl' ]
          dest           : 'dist/css'
          ext            : '.css'
        ]
      concat             :
        files            : [
          expand         : yes
          cwd            : 'src/themes/edge'
          src            : 'imports.styl'
          dest           : 'dist/css/'
          ext            : '.css'
        ]
      examples           :
        files            : [
          compress       : yes
          expand         : yes
          cwd            : 'src/examples'
          src            : [ '**/*.styl' ]
          dest           : 'src/examples'
          ext            : '.css'
        ]


    templates            :
      all                :
        src              : 'src/lib/templates/**/*.soy'
        dest             : 'dist/js/lib/templates/'


    deps                 :
      all                :
        options          :
          outputFile     : 'dist/deps.js'
          prefix         : '../../../../'
          root           : [
            'bower_components/closure-library'
            'bower_components/closure-templates'
            'dist/js/'
          ]


    karma                :
      headless           :
        configFile       : 'karma.headless.conf.js'
      local              :
        configFile       : 'karma.local.conf.js'
      sauceLabs          :
        configFile       : 'karma.saucelabs.conf.js'
      compiled           :
        configFile       : 'karma.compiled.conf.js'


    builder              :
      all                :
        options          :
          namespace      : '*'
          outputFilePath : 'dist/compiled/compiled.js'
      options            :
        root             : '<%= deps.all.options.root %>'
        depsPath         : '<%= deps.all.options.outputFile %>'
        # namespace        : 'spark.Bootstrapper'
        compilerFlags    : [
          '--output_wrapper="(function(){%output%})();"'
          '--compilation_level="ADVANCED_OPTIMIZATIONS"'
          '--warning_level="VERBOSE"'
          '--generate_exports'
          # '--formatting=PRETTY_PRINT'
          # '--externs=src/externs/externs.js'
          '--create_source_map="dist/compiled/source_map.js"'
          '--property_renaming_report="dist/compiled/properties.out"'
          '--variable_renaming_report="dist/compiled/variables.out"'
          '--jscomp_error=accessControls'
          '--jscomp_error=checkRegExp'
          '--jscomp_error=checkTypes'
          '--jscomp_error=checkVars'
          '--jscomp_error=invalidCasts'
          '--jscomp_error=missingProperties'
          '--jscomp_error=nonStandardJsDocs'
          '--jscomp_error=strictModuleDepCheck'
          '--jscomp_error=undefinedVars'
          '--jscomp_error=unknownDefines'
          '--jscomp_error=visibility'
        ]


    'http-server'        :
      debug              :
        host             : '127.0.0.1'
        port             : 1111
        runInBackground  : yes
      compiled           :
        host             : '127.0.0.1'
        port             : 2222


    open                 :
      dev                :
        path             : 'http://localhost:1111/public/debug'
        app              : 'Google Chrome'
      examples           :
        path             : 'http://localhost:1111/dist/docs/examples/'
        app              : 'Google Chrome'
      coverage           :
        path             : 'http://localhost:1111/dist/coverage/PhantomJS 1.9.8 (Mac OS X)/lcov-report/index.html'
        app              : 'Google Chrome'
      build              :
        path             : 'http://localhost:2222/public/compiled'
        app              : 'Google Chrome'


    watch                :
      options            :
        livereload       : yes
        interrupt        : yes
      configFiles        :
        files            : [ 'Gruntfile.coffee', 'karma.conf.js' ]
        options          :
          reload         : yes
      html               :
        files            : [ 'public/**/*.html' ]
      src                :
        files            : [ 'src/lib/**/*.coffee', 'src/tests/**/*.coffee' ]
        tasks            : [ 'coffee:all', 'coffee2closure', 'deps', 'karma:headless' ]
      styl               :
        files            : [ 'src/themes/edge/**/*.styl' ]
        tasks            : [ 'stylus:all', 'stylus:concat' ]
      images             :
        files            : [ 'src/images/**/*.png' ]
        tasks            : [ 'stylus:all', 'styl:concat' ]
      examples           :
        files            : [ 'src/examples/**/*.styl', 'src/examples/**/*.coffee' ]
        tasks            : [ 'stylus:examples', 'coffee:examples', 'copy' ]


    jsdoc                :
      dist               :
        src              : [ 'dist/js/lib/**/*.js', 'README.md', '!dist/js/lib/Bootstrapper.js' ],
        options          :
          destination    : 'dist/docs'
          template       : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
          configure      : 'jsdoc.conf.json'


    'gh-pages'           :
      src                : '**/*'
      options            :
        base             : 'dist/docs'
        message          : 'Same as last commit with changes'
        repo             : "https://#{process.env.GH_TOKEN}@github.com/fatihacet/spark.git"
        silent           : yes
        dotfiles         : no
        user             :
          name           : 'Fatih Acet'
          email          : 'fatih@fatihacet.com'


  require('load-grunt-tasks')(grunt)


  grunt.registerTask 'ci', 'Compile code and run tests for compiled and uncompiled code.', ->
    grunt.task.run [
      'clean'
      'mkdir'
      'stylus'
      'coffee'
      'coffee2closure'
      'deps'
      'karma:headless'
      'builder'
      'karma:compiled'
      'jsdoc'
      'copy'
      'gh-pages'
    ]


  grunt.registerTask 'build', 'Compile code and run tests.', ->
    grunt.task.run [
      'clean'
      'mkdir'
      'stylus'
      'templates'
      'coffee'
      'coffee2closure'
      'deps'
      'builder'
      'karma:compiled'
      'open:build'
      'http-server:compiled'
    ]


  grunt.registerTask 'examples', 'Compile and open examples directory', ->
    grunt.task.run [
      'coffee'
      'coffee2closure'
      'deps'
      'builder'
      'jsdoc'
      'coffee:examples'
      'stylus'
      'copy'
      'open:examples'
      'http-server:debug'
      'watch:examples'
    ]


  grunt.registerTask 'default', 'Run tests and watch the stack for changes', ->
    grunt.task.run [
      'clean'
      'mkdir'
      'stylus'
      'templates'
      'coffee'
      'coffee2closure'
      'deps'
      'karma:headless'
      'http-server:debug'
      'open:dev'
      'open:coverage'
      'watch'
    ]
