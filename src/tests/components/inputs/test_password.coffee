goog = goog or goog = require: ->

goog.require 'spark.components.Password'
goog.require 'spark.components.Input'


describe 'spark.components.Password', ->

  field   = null
  options = null

  beforeEach ->
    options = name: 'name'
    field   = new spark.components.Password options


  it 'should extends spark.components.Input', ->
    expect(field instanceof spark.components.Input).toBeTruthy()


  it 'should have default options', ->
    field = new spark.components.Password null, null

    expect(field.getOptions().type).toBe 'password'


  it 'should be type password', ->
    expect(field.getAttribute('type')).toBe 'password'
