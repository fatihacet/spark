goog.provide 'spark.components.Input'
goog.require 'spark.core.View'


###*
  Input component of Spark Framework.
###
class spark.components.Input extends spark.core.View

  ###*
    @constructor
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###

  constructor: (options = {}, data) ->

    options.tagName          = 'input'
    options.cssClass         = "#{spark.utils.concatString 'input', options.cssClass}"
    options.type           or= 'text'
    options.placeholder    or= null
    options.callback       or= null
    options.eventHandlers  or= {}
    options.value          or= ""

    {callback} = options
    if typeof callback is 'function'
      options.eventHandlers.keypress = (event) =>
        if event.charCode is 13
          callback.call this, event

    super options, data

    @setAttribute 'type', options.type

    if options.placeholder
      @setPlaceholder options.placeholder

    if options.value
      @setValue options.value


  ###*
    Sets input value.
    @param {!string} value Input value.
  ###
  setValue: (value) ->
    @getElement().value = value


  ###*
    Return input value.
  ###
  getValue: ->
    return @getElement().value


  ###*
    Sets placeholder attribute.
    @param {!string} value Placeholder value.
  ###
  setPlaceholder: (value) ->
    @setAttribute 'placeholder', value


  ###*
    Clears placeholder attribute.
  ###
  clearPlaceholder: ->
    @removeAttribute 'placeholder'
