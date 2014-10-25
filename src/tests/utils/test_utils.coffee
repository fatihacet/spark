goog = goog or goog = require: ->

goog.require 'spark.utils'


describe 'spark.utils', ->


  it 'should concat strings', ->
    str = spark.utils.concatString 'hello', 'world'
    expect(str).toBe 'hello world'


  it 'should not include undefined and null values while concatenating strings', ->
    str = spark.utils.concatString 'hello', undefined, 'awesome', null, 'world'
    expect(str).toBe 'hello awesome world'
