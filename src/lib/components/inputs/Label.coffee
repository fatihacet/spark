goog.provide 'spark.components.Label'

goog.require 'spark.core.View'


###*
  Label component of Spark Framework.
###
class spark.components.Label extends spark.core.View

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    options.tagName     = options['tagName'] = 'label'
    options.label      ?= options['label']   ? 'Input Label'
    options.template    = options.label
    @getCssClass options, 'label'

    super options, data
