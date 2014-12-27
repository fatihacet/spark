goog = goog or goog = require: ->

goog.require 'spark.core.Store'


describe 'spark.core.Store', ->

  store = null

  beforeEach ->
    store = new spark.core.Store {},
      firstName : 'Fatih'
      lastName  : 'Acet'
      age       : 27
      isMarried : yes


  it 'should extends spark.core.Object', ->
    expect(store instanceof spark.core.Object).toBeTruthy()


  it 'should create a goog.structs.Map with given data', ->
    if goog.structs?.Map
      expect(store.map_ instanceof goog.structs.Map).toBeTruthy()

  describe 'get', ->

    it 'should return the value of a given key', ->
      expect(store.get('firstName')).toBe 'Fatih'
      expect(store.get('lastName')).toBe 'Acet'
      expect(store.get('isMarried')).toBeTruthy()
      expect(store.get('age')).toBe 27


    it 'should return undefined for a non exists key', ->
      expect(store.get('realName')).not.toBeDefined()
      expect(store.get('realName')).toBeUndefined()


  describe 'set', ->

    it 'should set a key with value', ->
      store.set 'hasCar', no

      expect(store.get('hasCar')).toBeDefined()
      expect(store.get('hasCar')).toBeFalsy()


    it 'should not set a key without a value', ->
      store.set 'isDoctor'

      expect(store.get('isDoctor')).not.toBeDefined()


  it 'should return all keys', ->
    keys = store.getKeys()

    expect(keys.length > 3).toBeTruthy()
    expect(keys.indexOf('firstName') > -1).toBeTruthy()
    expect(keys.indexOf('isDoctor') is -1).toBeTruthy()


  it 'should return all values', ->
    values = store.getValues()

    expect(values.length > 3).toBeTruthy()
    expect(values.indexOf('Fatih') > -1).toBeTruthy()
    expect(values.indexOf('32') is -1).toBeTruthy()
