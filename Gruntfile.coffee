module.exports = (grunt) ->

  grunt.initConfig

    clean                :
      all                :
        options          :
          force          : yes
        src              : 'build'

    mkdir                :
      all                :
        options          :
          create         : [
            'src/lib'
            'src/externs'
            'src/images'
            'src/styl'
            'src/templates'
            'src/third-party'
            'build/css'
            'build/compiled'
            'build/images'
          ]

    coffee               :
      all                :
        options          :
          bare           : yes
        files            : [
          expand         : yes
          cwd            : 'src'
          src            : [ 'lib/**/*.coffee', 'tests/**/*.coffee' ]
          dest           : 'build/js/'
          ext            : '.js'
        ]

    spriteGenerator      :
      sprite             :
        src              : [ 'src/images/**/*.png' ]
        spritePath       : 'build/images/icons.png'
        stylesheet       : 'css'
        stylesheetPath   : 'build/css/icons.css'

    coffee2closure       :
      all                :
        files            : [
          expand         : yes
          src            : 'build/js/**/*.js'
          ext            : '.js'
        ]

    stylus               :
      options            :
        'include css'    : true
        'compress'       : false
      all                :
        files            : [
          expand         : true
          src            : [ '*.styl' ]
          ext            : '.css'
          cwd            : 'src/styl'
          dest           : 'build/css'
        ]

    templates            :
      all                :
        src              : 'src/templates/**/*.soy'
        dest             : 'build/templates/'

    deps                 :
      all                :
        options          :
          outputFile     : 'build/deps.js'
          prefix         : '../../../../'
          root           : [
            'bower_components/closure-library'
            'bower_components/closure-templates'
            'build'
          ]

    karma                :
      headless           :
        configFile       : 'karma.headless.conf.js'
      local              :
        configFile       : 'karma.local.conf.js'
      sauceLabs          :
        configFile       : 'karma.saucelabs.conf.js'

    coveralls            :
      options            :
        src              : 'build/coverage/**/lcov.info'
        force            : no

    builder              :
      all                :
        options          :
          namespace      : '*'
          outputFilePath : 'build/compiled/compiled.js'
      options            :
        root             : '<%= deps.all.options.root %>'
        depsPath         : '<%= deps.all.options.outputFile %>'
        namespace        : 'spark.Bootstrapper'
        compilerFlags    : [
          '--output_wrapper="(function(){%output%})();"'
          '--compilation_level="ADVANCED_OPTIMIZATIONS"'
          '--warning_level="VERBOSE"'
          '--create_source_map="build/compiled/source_map.js"'
          '--property_renaming_report="build/compiled/properties.out"'
          '--variable_renaming_report="build/compiled/variables.out"'
          # '--externs=src/externs/externs.js'
          '--jscomp_error=accessControls'
          '--jscomp_error=checkRegExp'
          '--formatting=PRETTY_PRINT'
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

    "http-server"        :
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
      coverage           :
        path             : 'http://localhost:1111/build/coverage/PhantomJS 1.9.7 (Mac OS X)/lcov-report/index.html'
        app              : 'Google Chrome'
      build              :
        path             : 'http://localhost:2222/public/compiled'
        app              : 'Google Chrome'

    watch                :
      options            :
        livereload       : yes
      configFiles        :
        files            : [ 'Gruntfile.coffee', 'karma.conf.js' ]
        options          :
          reload         : yes
      html               :
        files            : [ '*.html' ]
      src                :
        files            : [ '**/*.coffee' ]
        tasks            : [ 'clean', 'mkdir', 'coffee', 'coffee2closure', 'deps', 'karma:headless' ]
      styl               :
        files            : [ '*.styl' ]
        tasks            : [ 'stylus' ]

    jsdoc                :
      dist               :
        src              : [ 'build/js/lib/**/*.js', 'README.md', '!build/js/lib/Bootstrapper.js' ],
        options          :
          destination    : 'build/docs'
          template       : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
          configure      : 'jsdoc.conf.json'

    'gh-pages'           :
      src                : '**/*'
      options            :
        base             : 'build/docs'
        message          : 'Same as last commit with changes'
        repo             : "https://#{process.env.GH_TOKEN}@github.com/fatihacet/spark.git"
        silent           : yes
        dotfiles         : no
        user             :
          name           : 'Fatih Acet'
          email          : 'fatih@fatihacet.com'


  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-mkdir'
  grunt.loadNpmTasks 'grunt-open'
  grunt.loadNpmTasks 'grunt-jsdoc'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-coveralls'
  grunt.loadNpmTasks 'grunt-closure-coffee-stack'
  grunt.loadNpmTasks 'grunt-http-server'
  grunt.loadNpmTasks 'node-sprite-generator'
  grunt.loadNpmTasks 'grunt-gh-pages'
  grunt.loadNpmTasks 'grunt-npm'


  grunt.registerTask 'ci-test-only', 'Run tests for CI tools.', (app = 'app') ->
    grunt.task.run [
      'clean'
      'mkdir'
      'spriteGenerator'
      'coffee'
      'coffee2closure'
      'stylus'
      'deps'
      'karma:headless'
      'coveralls'
      'jsdoc'
      'gh-pages'
    ]


  grunt.registerTask 'ci-build-only', 'Build task for CI tools.', (app = 'app') ->
    grunt.task.run [
      'clean'
      'mkdir'
      'spriteGenerator'
      'coffee'
      'coffee2closure'
      'stylus'
      'deps'
      'karma:headless'
      'builder'
    ]


  grunt.registerTask 'build', 'Run tests and compile code with Closure Compiler.', (app = 'app') ->
    grunt.task.run [
      'clean'
      'mkdir'
      'spriteGenerator'
      'coffee'
      'coffee2closure'
      'stylus'
      'deps'
      'karma:headless'
      'builder'
      'open:build'
      'http-server:compiled'
    ]


  grunt.registerTask 'default', 'Run tests and watch the stack for changes', (app = 'app') ->
    grunt.task.run [
      'clean'
      'mkdir'
      'spriteGenerator'
      'coffee'
      'coffee2closure'
      'stylus'
      'deps'
      'karma:headless'
      'http-server:debug'
      'open:dev'
      'open:coverage'
      'watch'
    ]
