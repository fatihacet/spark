goog.provide 'spark.components.Checkbox'

goog.require 'spark.components.Field'


###*
  Checkbox component of Spark Framework.
###
class spark.components.Checkbox extends spark.components.Field

  ###*
    @constructor
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.components.Field}
  ###
  constructor: (options = {}, data) ->

    options.type     or= 'checkbox'
    options.checked  or= no

    super options, data

    if options.checked is yes
      @check()


  check: ->
    @getElement().checked = yes


  uncheck: ->
    @getElement().checked = no


  isChecked: ->
    return @getElement().checked
