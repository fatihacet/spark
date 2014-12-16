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
            'src/themes/edge'
            'src/templates'
            'src/third-party'
            'build/css'
            'build/compiled'
            'build/images'
          ]

    copy                 :
      examples           :
        expand           : yes
        cwd              : 'src/examples'
        src              : '**'
        dest             : 'build/docs/examples'
      allJS              :
        src              : 'build/compiled/compiled.js'
        dest             : 'build/docs/compiled.js'
      allCSS             :
        src              : 'build/css/spark.css'
        dest             : 'build/docs/spark.css'

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
        'include css'    : yes
      all                :
        files            : [
          compress       : no
          expand         : yes
          cwd            : 'src/themes/edge'
          src            : [ '**/*.styl', '!imports.styl' ]
          dest           : 'build/css'
          ext            : '.css'
        ]
      concat             :
        files            : [
          expand         : yes
          cwd            : 'src/themes/edge'
          src            : 'imports.styl'
          dest           : 'build/css/'
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
        src              : 'src/templates/**/*.soy'
        dest             : 'build/templates/'

    deps                 :
      all                :
        options          :
          outputFile     : 'build/deps.js'
          prefix         : '../../../../'
          root           : [
            'bower_components/closure-library'
            # 'bower_components/closure-templates'
            'build'
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
          outputFilePath : 'build/compiled/compiled.js'
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
          '--create_source_map="build/compiled/source_map.js"'
          '--property_renaming_report="build/compiled/properties.out"'
          '--variable_renaming_report="build/compiled/variables.out"'
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
        path             : 'http://localhost:1111/build/coverage/PhantomJS 1.9.8 (Mac OS X)/lcov-report/index.html'
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
        tasks            : [ 'spriteGenerator', 'stylus:all', 'styl:concat' ]
      examples           :
        files            : [ 'src/examples/**/*.styl', 'src/examples/**/*.coffee' ]
        tasks            : [ 'stylus:examples', 'coffee:examples', 'copy' ]

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
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-mkdir'
  grunt.loadNpmTasks 'grunt-open'
  grunt.loadNpmTasks 'grunt-jsdoc'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-closure-coffee-stack'
  grunt.loadNpmTasks 'grunt-http-server'
  grunt.loadNpmTasks 'node-sprite-generator'
  grunt.loadNpmTasks 'grunt-gh-pages'
  grunt.loadNpmTasks 'grunt-npm'


  grunt.registerTask 'ci', 'Compile code and run tests for compiled and uncompiled code.', (app = 'app') ->
    grunt.task.run [
      'clean'
      'mkdir'
      'spriteGenerator'
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


  grunt.registerTask 'build', 'Compile code and run tests.', (app = 'app') ->
    grunt.task.run [
      'clean'
      'mkdir'
      'spriteGenerator'
      'stylus'
      'coffee'
      'coffee2closure'
      'deps'
      'builder'
      'karma:compiled'
      'open:build'
      'http-server:compiled'
    ]


  grunt.registerTask 'default', 'Run tests and watch the stack for changes', (app = 'app') ->
    grunt.task.run [
      'clean'
      'mkdir'
      'spriteGenerator'
      'stylus'
      'coffee'
      'coffee2closure'
      'deps'
      'karma:headless'
      'http-server:debug'
      'open:dev'
      'open:coverage'
      'watch'
    ]
