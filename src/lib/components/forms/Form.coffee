goog.provide 'spark.components.Form'

goog.require 'spark.core.View'
goog.require 'spark.components.FieldFactory'
goog.require 'spark.components.LabeledInput'


###*
  Form component.
###
class spark.components.Form extends spark.core.View

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    @getCssClass options, 'form'

    super options, data

    @inputs        = []
    @buttons       = []
    @inputsByName  = {}
    inputs         = options.inputs  or options['inputs']
    buttons        = options.buttons or options['buttons']

    @createContainers_()

    if inputs
      inputs.forEach (options) =>  @createInput options

    if buttons
      buttons.forEach (options) => @createButton options

    @setData data


  ###*
    Creates DOM element to hold input and button elements.

    @private
  ###
  createContainers_: ->
    @inputsContainer  = new spark.core.View cssClass: 'input-container'
    @buttonsContainer = new spark.core.View cssClass: 'buttons-container'

    @appendView @inputsContainer
    @appendView @buttonsContainer


  ###*
    Creates field component from passed option using FieldFactory.
    FIXME: Creating LabeledInput should be handled in FieldFactory.

    @export
    @param {!Object} options Field options to create a field component.
  ###
  createInput: (options) ->
    {name, label, type} = options

    if type is 'combobox'
      data = options.items

    if label
      labelOptions = {}
      inputOptions = {}

      # Copy objects to make them separate since objects are passed by reference
      for key, value of options
        inputOptions[key] = value
        labelOptions[key] = value

      allOptions = { labelOptions, inputOptions }

      if type is 'checkbox' or type is 'radio'
        allOptions.inputFirst = yes

      labeledInput = new spark.components.LabeledInput allOptions, data

      @inputsContainer.appendView labeledInput
      @inputs.push input = labeledInput.input

    else
      input = spark.components.FieldFactory options, data
      @inputsContainer.appendView input
      @inputs.push input

    @inputsByName[name] = input if name


  ###*
    Creates button with the options.

    @export
    @param {!Object} options Options to create a button component.
  ###
  createButton: (options) ->
    button = new spark.components.Button options

    @buttons.push button
    @buttonsContainer.appendView button


  ###*
    Sets form data and update fields with the data.
    Data should be an object and keys should match field names in this form.
    Values should be string.
    @export
  ###
  setData: (data) ->

    if @inputsByName
      for name, value of data
        input = @inputsByName[name]
        input.setValue value if input

    super


  ###*
    Returns form data from DOM elements.
    This method may be useful for serializing the form data.
    @export
  ###
  getData: ->
    dataSet = {}

    for input in @inputs
      dataSet[input.getName()] = input.getValue()

    return dataSet


  ###*
    Returns input container
    @export
    @return {spark.core.View}
  ###
  getInputsContainer: ->
    return @inputsContainer


  ###*
    Returns buttons container
    @export
    @return {spark.core.View}
  ###
  getButtonsContainer: ->
    return @buttonsContainer


  ###*
    Returns inputs
    @export
    @return {Array.<spark.components.Field>}
  ###
  getInputs: ->
    return @inputs


  ###*
    Returns inputs
    @export
    @return {Array.<spark.components.Button>}
  ###
  getButtons: ->
    return @buttons


  ###*
    Returns a field by name.
    @export
    @param {string} name Field name.
    @return {Array.<spark.components.Field>|null}
  ###
  getInputByName: (name) ->
    return @inputsByName[name] or null
