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

    options.tagName     = options['tagName']  = 'label'
    options.cssClass    = options['cssClass'] = "#{spark.utils.concatString 'label', options.cssClass or options['cssClass']}"
    options.label     or= options['label'] or 'Input Label'
    options.template    = options.label

    super options, data
