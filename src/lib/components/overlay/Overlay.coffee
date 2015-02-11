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

    options.blocking  ?= options['blocking']  ? yes
    options.renderTo or= options['renderTo'] or document.body

    @getCssClass options, 'overlay'

    super options, data

    unless options.blocking
      @setRemovable()


  ###*
    Binds click handler to overlay element to remove it once clicked.

    @export
  ###
  setRemovable: ->
    @on 'click', => @destroy()
