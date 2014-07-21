goog.require 'spark.object.Object'
goog.require 'goog.events'
goog.require 'goog.events.EventTarget'

describe 'spark.object.Object', ->

  # beforeEach ->
  #   object = new spark.object.Object

  it 'should set options passed to constructor', ->
    options = name: 'Fatih', age: 27
    object  = new spark.object.Object options

    expect(object.options).toBe options
    expect(object.options.name).toBe 'Fatih'


  it 'should set data passed to constructor', ->
    data   = name: 'Fatih', age: 27
    object = new spark.object.Object null, data

    expect(object.data).toBe data
    expect(object.data.name).toBe 'Fatih'
    expect(object.data.age).not.toBe 20


  it 'should set options with setOptions method', ->
    options = name: 'Fatih'
    object  = new spark.object.Object

    expect(object.options.name).toBeUndefined()

    object.setOptions options

    expect(object.options.name).toBe 'Fatih'


  it 'should set data with setData method', ->
    data   = name: 'Fatih'
    object = new spark.object.Object

    expect(object.data).toBeUndefined()

    object.setData data

    expect(object.data.name).toBe 'Fatih'


  it 'should get options with getOptions method', ->
    options = name: 'Fatih'
    object  = new spark.object.Object options

    expect(object.getOptions()).toBe options


  it 'should get an option with getOption method', ->
    options = name: 'Fatih'
    object  = new spark.object.Object options

    expect(object.getOption('name')).toBe 'Fatih'


  it 'should get data with getData method', ->
    data   = name: 'Fatih'
    object = new spark.object.Object null, data

    expect(object.getData()).toBe data
