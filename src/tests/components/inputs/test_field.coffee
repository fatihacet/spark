goog = goog or goog = require: ->

goog.require 'spark.components.Field'
goog.require 'spark.core.View'

describe 'spark.components.Field', ->

  field   = null
  options = null

  beforeEach ->
    options  =
      value  : 'Fatih Acet'
      name   : 'name'

    field = new spark.components.Field options


  it 'should extends spark.core.View', ->
    expect(field instanceof spark.components.Field).toBeTruthy()
    expect(field instanceof spark.core.View).toBeTruthy()


  it 'should has default options', ->
    field = new spark.components.Field null
    options = field.getOptions()

    expect(options.tagName).toBe 'input'
    expect(options.type).toBe 'text'


  it 'should has input as tag name', ->
    expect(field.getElement().tagName).toBe 'INPUT'


  it 'should set value if passed in options', ->
    expect(field.getValue()).toBe 'Fatih Acet'


  it 'should set name if passed in options', ->
    expect(field.getName()).toBe 'name'


  it 'should set name and update name', ->
    field.setName('firstname')

    expect(field.getName()).toBe 'firstname'


  it 'should set value and update value', ->
    field.setValue('fatihacet')

    expect(field.getValue()).toBe 'fatihacet'
    expect(field.getElement().value).toBe 'fatihacet'
