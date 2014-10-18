goog.provide 'spark.components.LabeledInput'
goog.require 'spark.components.Input'
goog.require 'spark.components.Label'

###*
  Input with label component of Spark Framework.
###
class spark.components.LabeledInput extends spark.core.View

  ###*
    @constructor
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###

  constructor: (options = {}, data) ->

    options.cssClass = "#{spark.utils.concatString 'labeled-input', options.cssClass}"

    super options, data

    @label = new spark.components.Label options.labelOptions, data
    @input = new spark.components.Input options.inputOptions, data

    @appendView @label
    @appendView @input

    @label.on 'click', =>
      @input.focus()
