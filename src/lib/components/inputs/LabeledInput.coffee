goog.provide 'spark.components.LabeledInput'

goog.require 'spark.components.Input'
goog.require 'spark.components.Label'


###*
  Input with label component of Spark Framework.
###
class spark.components.LabeledInput extends spark.core.View

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    @getCssClass options, 'labeled-input'

    super options, data

    labelOptions = options.labelOptions or options['labelOptions']
    inputOptions = options.inputOptions or options['inputOptions']

    @label = new spark.components.Label    labelOptions, data
    @input = spark.components.FieldFactory inputOptions, data

    @appendView @label
    @appendView @input
  ###*
    Returns input component.
    @export
    @return {spark.components.Input}
  ###
  getInput: ->
    return @input


    @label.on 'click', =>
      @input.focus()
  ###*
    Returns label component.
    @export
    @return {spark.components.Label}
  ###
  getLabel: ->
    return @label
