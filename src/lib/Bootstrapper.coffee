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
      tagName   : 'header'
      cssClass  : 'main'
      domId     : 'big-header'
      template  : '<h3>HELLO SPARK</h3>'

    b = new spark.components.Button

    goog.exportSymbol 'obj', o
    goog.exportSymbol 'vvv', v
    goog.exportSymbol 'bbb', b


window.addEventListener "load", (->
  new spark.Bootstrapper
  return yes
), no
