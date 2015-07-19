module.exports = (grunt) ->

  options                =
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

  grunt.config 'builder', options
