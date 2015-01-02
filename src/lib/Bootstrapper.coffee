goog.provide 'spark.Bootstrapper'

goog.require 'spark.core.Object'
goog.require 'spark.core.View'
goog.require 'spark.core.Router'
goog.require 'spark.core.Store'

goog.require 'spark.validation'

goog.require 'spark.components.Button'
goog.require 'spark.components.Checkbox'
goog.require 'spark.components.Label'
goog.require 'spark.components.LabeledInput'
goog.require 'spark.components.Form'
goog.require 'spark.components.FieldFactory'
goog.require 'spark.components.Textarea'
goog.require 'spark.components.ToggleSwitch'
goog.require 'spark.components.ComboBox'
goog.require 'spark.components.DraggableView'
goog.require 'spark.components.Overlay'
goog.require 'spark.components.Modal'

goog.require 'spark.utils'

goog.require 'spark.widgets.SignUp'


class spark.Bootstrapper

  ###*
    @constructor
  ###
  constructor: ->


window.addEventListener "load", (->
  new spark.Bootstrapper
  return yes
), no
