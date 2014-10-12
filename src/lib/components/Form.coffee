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
    @inputsByName     = {}
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
    {name, label} = options

    if label
      # FIXME: Passing options should be separated
      labeledInput   = new spark.components.LabeledInput
        labelOptions : options
        inputOptions : options

      @inputsContainer.appendView labeledInput
      @inputs.push input = labeledInput.input

    else
      input = new spark.components.Input options
      @inputsContainer.appendView input
      @inputs.push input

    @inputsByName[name] = input if name


  createButton: (options) ->
    button = new spark.components.Button options

    @buttons.push button
    @buttonsContainer.appendView button


  setData: (data) ->
    return unless @inputsByName

    for name, value of data
      input = @inputsByName[name]
      input.setValue value if input


  getData: ->
    dataSet = {}

    for input in @inputs
      dataSet[input.getName()] = input.getValue()

    return dataSet
