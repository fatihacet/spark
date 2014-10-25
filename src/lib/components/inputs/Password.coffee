goog.provide 'spark.components.Password'

goog.require 'spark.components.Input'


###*
  Input type password component of Spark Framework.
###
class spark.components.Password extends spark.components.Input

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.components.Input}
  ###
  constructor: (options = {}, data) ->

    options.type = options['type'] = 'password'

    super options, data
