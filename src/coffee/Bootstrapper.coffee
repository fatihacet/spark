goog.provide 'spark.Bootstrapper'

goog.require 'spark.core.Object'
goog.require 'spark.core.View'
goog.require 'spark.utils'


class spark.Bootstrapper

  ###*
    @constructor
  ###
  constructor: ->
    o = new spark.core.Object
    v = new spark.core.View


window.addEventListener "load", (->
  new spark.Bootstrapper
  return yes
), no
