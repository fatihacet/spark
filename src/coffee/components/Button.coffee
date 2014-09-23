goog.provide 'spark.components.Button'
goog.require 'spark.core.View'


###*
  Button component of Spark Framework.
###
class spark.components.Button extends spark.core.View

  ###*
    @constructor
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###

  constructor: (options = {}, data) ->

    options.tagName          = 'button'
    options.cssClass         = "#{spark.utils.concatString 'button', options.cssClass}"
    options.title          or= 'Button Title'
    options.callback       or= null
    options.template       or= "<span>#{options.title}</span>"
    options.eventHandlers  or= {}

    {callback} = options
    if typeof callback is 'function'
      options.eventHandlers.click = callback

    super options, data


  ###*
    Disable button.
  ###
  disable: ->
    disabled = 'disabled'
    @addClass disabled
    @setAttribute disabled, disabled
    @isDisabled = yes


  ###*
    Enable button.
  ###
  enable: ->
    disabled = 'disabled'
    @removeClass disabled
    @removeAttribute disabled
    delete @isDisabled


  ###*
    Toggle button. Disable if enabled, enable if disabled.
  ###
  toggle: ->
    if @isDisabled then @enable() else @disable()
