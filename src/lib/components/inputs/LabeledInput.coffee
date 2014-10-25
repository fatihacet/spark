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

    options.cssClass = options['cssClass'] = "#{spark.utils.concatString 'labeled-input', options.cssClass}"

    super options, data

    labelOptions = options.labelOptions or options['labelOptions']
    inputOptions = options.inputOptions or options['inputOptions']

    @label = new spark.components.Label    labelOptions, data
    @input = spark.components.FieldFactory inputOptions, data

    @appendView @label
    @appendView @input

    @label.on 'click', =>
      @input.focus()
