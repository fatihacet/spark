goog.provide 'spark.Bootstrapper'

goog.require 'spark.core.Object'
goog.require 'spark.core.View'
goog.require 'spark.components.Button'
goog.require 'spark.components.Checkbox'
goog.require 'spark.components.Label'
goog.require 'spark.components.LabeledInput'
goog.require 'spark.components.Form'
goog.require 'spark.components.FieldFactory'
goog.require 'spark.utils'
goog.require 'spark.components.Textarea'
goog.require 'spark.widgets.SignUp'
goog.require 'spark.components.ToggleSwitch'
goog.require 'spark.components.ComboBox'


class spark.Bootstrapper

  ###*
    @constructor
  ###
  constructor: ->

    k = new spark.components.ComboBox {}, [
      { title: 'Fiat', value: 'fiat' }
      { title: 'Ford', value: 'ford' }
      { title: 'Mazda', value: 'mazda' }
      { title: 'BMW', value: 'bmw' }
      { title: 'Honda', value: 'honda' }
      { title: 'Ferrari', value: 'ferrari' }
    ]

    k.appendToDocumentBody()

    k.on 'selected', (event) ->
      {title, value, data} = event.data

      console.log title, value, data


    window.k = k


window.addEventListener "load", (->
  new spark.Bootstrapper
  return yes
), no
