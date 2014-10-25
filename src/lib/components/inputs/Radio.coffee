goog.provide 'spark.components.Radio'

goog.require 'spark.components.Checkbox'


###*
  Radio element of Spark Framework.
###
class spark.components.Radio extends spark.components.Checkbox

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.components.Checkbox}
  ###
  constructor: (options = {}, data) ->

    options.type = 'radio'

    super options, data
