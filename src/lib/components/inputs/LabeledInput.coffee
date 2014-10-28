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

    @getCssClass options, options.cssClass or options['cssClass'] or 'labeled-input'

    super options, data

    labelOptions = options.labelOptions or options['labelOptions'] or {}
    inputOptions = options.inputOptions or options['inputOptions'] or {}
    inputDomId   = inputOptions.domId   or inputOptions['domId']
    uniqueId     = @getUid()

    labelOptions.attributes or= {}
    inputOptions.attributes or= {}

    labelOptions.attributes.for  = inputDomId or uniqueId
    inputOptions.attributes.name = inputDomId or uniqueId
    inputOptions.attributes.id = inputDomId or uniqueId

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


  ###*
    Returns label component.
    @export
    @return {spark.components.Label}
  ###
  getLabel: ->
    return @label
