goog.provide 'spark.components.Checkbox'

goog.require 'spark.components.Field'


###*
  Checkbox component of Spark Framework.
###
class spark.components.Checkbox extends spark.components.Field

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.components.Field}
  ###
  constructor: (options = {}, data) ->

    options.type     or= options['type']    or 'checkbox'
    options.checked   ?= options['checked']  ? no

    super options, data

    if options.checked is yes
      @check()


  ###*
    Check the element.
    @export
  ###
  check: ->
    @getElement().checked = yes


  ###*
    Uncheck the element.
    @export
  ###
  uncheck: ->
    @getElement().checked = no


  ###*
    Returns element's checked state.
    @export
    @return {boolean} Checked state.
  ###
  isChecked: ->
    return @getElement().checked
