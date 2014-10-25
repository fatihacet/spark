goog.provide 'spark.components.Input'

goog.require 'spark.components.Field'


###*
  Input component of Spark Framework.
###
class spark.components.Input extends spark.components.Field

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.components.Field}
  ###
  constructor: (options = {}, data) ->

    options.type        or= 'text'
    options.placeholder or= null

    super options, data

    if options.placeholder
      @setPlaceholder options.placeholder

    @on 'focus', => @addClass 'focus'
    @on 'blur',  => @removeClass 'focus'


  ###*
    Sets placeholder attribute.
    @export
    @param {!string} value Placeholder value.
  ###
  setPlaceholder: (value) ->
    @setAttribute 'placeholder', value


  ###*
    Clears placeholder attribute.
    @export
  ###
  clearPlaceholder: ->
    @removeAttribute 'placeholder'


  ###*
    Focus input.
    @export
  ###
  focus: ->
    @getElement().focus()
    @addClass 'focus'
