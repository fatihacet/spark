taskLoader = require 'load-grunt-tasks'
targets    = require './build/tasks/targets.coffee'

module.exports = (grunt) ->

  grunt.loadTasks 'build/tasks'
  taskLoader grunt

  { ci, build, examples, defaults } = targets()

  grunt.registerTask 'ci',       ci.desc,       -> grunt.task.run ci.tasks
  grunt.registerTask 'build',    build.desc,    -> grunt.task.run build.tasks
  grunt.registerTask 'examples', examples.desc, -> grunt.task.run examples.tasks
  grunt.registerTask 'default',  defaults.desc, -> grunt.task.run defaults.tasks
