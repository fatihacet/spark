goog.provide 'spark.components.FieldFactory'

goog.require 'spark.components.Field'
goog.require 'spark.components.Input'
goog.require 'spark.components.Radio'
goog.require 'spark.components.Checkbox'
goog.require 'spark.components.Button'
goog.require 'spark.components.LabeledInput'


###*
  This class is a helper factory class to create inputs, checbox, selects vs.
  from a set of options. If you are not sure which instance should be created
  with your input options, this class will take care of the problem. If you
  pass `type: 'checbox'` in your options this class will return an instance of
  spark.components.Checkbox for you.

  @param {Object=} options Field options to create input.
  @param {*=} data Field data to set.
###
spark.components.FieldFactory = (options = {}, data) ->

  options.type or= 'text'

  map   = spark.components.FieldFactory.typeToClassMap
  input = new map[options.type] options, data

  return input


###*
  Map for type and component classes.

  @enum {string}
###
spark.components.FieldFactory.typeToClassMap =
  text     : spark.components.Input
  input    : spark.components.Input
  radio    : spark.components.Radio
  checkbox : spark.components.Checkbox
  label    : spark.components.Label
  button   : spark.components.Button
