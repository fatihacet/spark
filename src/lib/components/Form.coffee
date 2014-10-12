goog.provide 'spark.components.Form'

goog.require 'spark.core.View'
goog.require 'spark.components.Input'
goog.require 'spark.components.Button'
goog.require 'spark.components.LabeledInput'


###*
  Form component.
###
class spark.components.Form extends spark.core.View

  ###*
    @constructor
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    options.cssClass = "#{spark.utils.concatString 'form', options.cssClass}"

    super options, data

    @inputs           = []
    @buttons          = []
    {inputs, buttons} = options

    @createContainers()

    if inputs
      inputs.forEach (options) =>  @createInput options

    if buttons
      buttons.forEach (options) => @createButton options


  createContainers: ->
    @inputsContainer  = new spark.core.View cssClass: 'input-container'
    @buttonsContainer = new spark.core.View cssClass: 'buttons-container'

    @appendView @inputsContainer
    @appendView @buttonsContainer


  createInput: (options) ->
    if options.label
      # FIXME: Passing options should be separated
      input = new spark.components.LabeledInput
        labelOptions : options
        inputOptions : options
    else
      input = new spark.components.Input options

    @inputs.push input
    @inputsContainer.appendView input


  createButton: (options) ->
    button = new spark.components.Button options

    @buttons.push button
    @buttonsContainer.appendView button
