goog.require 'spark.object.Object'
goog.require 'goog.events'
goog.require 'goog.events.EventTarget'

describe 'spark.object.Object', ->

  # beforeEach ->
  #   object = new spark.object.Object

  it 'should set options', ->
    options =
      name  : 'Fatih'
      age   : 27

    object  = new spark.object.Object options

    expect(object.options).toBe(options)
    expect(object.options.name).toBe('Fatih')
