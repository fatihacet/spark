goog.provide 'spark.components.Overlay'

goog.require 'spark.core.View'


class spark.components.Overlay extends spark.core.View


  ###*
    Overlay view of Spark Framework.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    @getCssClass options, 'overlay'
    options.removeOnClick ?= options['removeOnClick'] ? no
    options.renderTo      or= options['renderTo']    or document.body

    super options, data

    if options.removeOnClick
      @setRemovable()


  ###*
    Binds click handler to overlay element to remove it once clicked.

    @export
  ###
  setRemovable: ->
    @on 'click', =>
      @removeFromDocument()
      @emit 'OverlayRemoved'
