goog = goog or goog = require: ->

goog.require 'spark.utils'


describe 'spark.utils.concatString', ->


  it 'should concat strings', ->
    str = spark.utils.concatString 'hello', 'world'

    expect(str).toBe 'hello world'


  it 'should not include undefined and null values while concatenating strings', ->
    str = spark.utils.concatString 'hello', undefined, 'awesome', [], {}, null, 'world', 5, [], {}

    expect(str).toBe 'hello awesome world'


  it 'should return unique array for string values', ->
    str = spark.utils.concatString 'a', 'a b', 'd', 'a b c d'

    expect(str).toBe 'a b d c'


describe 'spark.utils.getUid', ->


  it 'should return a string', ->
    uid = spark.utils.getUid()

    expect(typeof uid).toBe 'string'


  it 'should not same id when called more then once', ->
    uid = spark.utils.getUid()
    uie = spark.utils.getUid()

    expect(uid).not.toBe uie
