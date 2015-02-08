goog.provide 'spark.components.Button'

goog.require 'spark.core.View'
goog.require 'spark.validation'


class spark.components.Button extends spark.core.View

  ###*
    Button component of Spark Framework.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    options.tagName      = options['tagName']     = 'button'
    options.title      or= options['title']      or null
    options.callback   or= options['callback']   or null
    options.iconClass  or= options['iconClass']  or null
    options.events     or= options['events']     or {}
    @getCssClass options, 'button'

    if spark.validation.isFunction options.callback
      options.events.click = options.callback

    super options, data

    @createIcon_()
    @createTitle_()


  ###*
    Creates the icon view.

    @private
  ###
  createIcon_: ->
    { iconClass } = @getOptions()

    @iconView  = new spark.core.View
      tagName  : 'span'
      renderTo : this
      cssClass : spark.utils.concatString 'icon', iconClass

    unless iconClass
      @iconView.addClass 'hidden'


  ###*
    Creates the title view.

    @private
  ###
  createTitle_: ->
    { title } = @getOptions()

    @titleView = new spark.core.View
      tagName  : 'span'
      renderTo : this
      template : title

  ###*
    Returns the icon view instance.

    @export
    @return {spark.core.View} The icon view.
  ###
  getIconView: ->
    return @iconView


  ###*
    Returns the title view instance.

    @export
    @return {spark.core.View} The title view.
  ###
  getTitle: ->
    return @title
