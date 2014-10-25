goog = goog or goog = require: ->

goog.require 'spark.core.Object'
goog.require 'goog.events'
goog.require 'goog.events.EventTarget'


describe 'spark.core.Object', ->

  it 'should set options passed to constructor', ->
    options = name: 'Fatih', age: 27
    object  = new spark.core.Object options

    expect(object.options).toBe options
    expect(object.options.name).toBe 'Fatih'


  it 'should set data passed to constructor', ->
    data   = name: 'Fatih', age: 27
    object = new spark.core.Object null, data

    expect(object.data).toBe data
    expect(object.data.name).toBe 'Fatih'
    expect(object.data.age).not.toBe 20


  it 'should set options with setOptions method', ->
    options = name: 'Fatih'
    object  = new spark.core.Object

    expect(object.options.name).toBeUndefined()

    object.setOptions options

    expect(object.options.name).toBe 'Fatih'


  it 'should set data with setData method', ->
    data   = name: 'Fatih'
    object = new spark.core.Object

    expect(object.data).toBeUndefined()

    object.setData data

    expect(object.data.name).toBe 'Fatih'


  it 'should get options with getOptions method', ->
    options = name: 'Fatih'
    object  = new spark.core.Object options

    expect(object.getOptions()).toBe options


  it 'should get an option with getOption method', ->
    options = name: 'Fatih'
    object  = new spark.core.Object options

    expect(object.getOption('name')).toBe 'Fatih'
    expect(object.getOption('age')).toBeNull()


  it 'should get data with getData method', ->
    data   = name: 'Fatih'
    object = new spark.core.Object null, data

    expect(object.getData()).toBe data


  it 'should return uid', ->
    object = new spark.core.Object
    expect(object.getUid()).toBeGreaterThan 0


  it 'should listen and fire events', ->
    object = new spark.core.Object
    value  = null
    data   = hello: 'world'

    object.on   'EventName', -> value = 12
    object.emit 'EventName'

    expect(value).toBe 12

    object.on   'AnotherEvent', (e) -> value = e.data
    object.emit 'AnotherEvent', data

    expect(value).toBe data


  it 'should listen and immediately unlisten the event if listened by once', ->
    object = new spark.core.Object
    value  = null

    object.on   'EventName', -> value = 12
    object.emit 'EventName'

    expect(value).toBe 12

    object.once 'AnotherEvent', -> value = 22
    object.emit 'AnotherEvent'

    expect(value).toBe 22

    object.emit 'EventName'
    expect(value).toBe 12

    object.emit 'AnotherEvent'
    expect(value).not.toBe 22
    expect(value).toBe 12


  it 'should unlisten event with off', ->
    object = new spark.core.Object
    value  = null
    cb     = -> value = 12

    object.on   'EventName', cb
    object.emit 'EventName'

    expect(value).toBe 12

    shouldNotUnlistened = object.off 'EventName' # cb is missing
    expect(shouldUnlistened).toBeFalsy()

    shouldUnlistened = object.off 'EventName', cb
    expect(shouldUnlistened).toBeTruthy()

  it 'should call multiple listeners', ->
    object  = new spark.core.Object
    results = []

    object.on 'Add', -> results.push 1
    object.on 'Add', -> results.push 2
    object.on 'Add', -> results.push 3

    object.emit 'Add'
    object.emit 'Add'

    expect(results.length).toEqual 6
