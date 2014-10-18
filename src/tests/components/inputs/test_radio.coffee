goog.require 'spark.components.Radio'
goog.require 'spark.components.Checkbox'

describe 'spark.components.Radio', ->

  radio   = null
  options = null

  beforeEach ->
    options = name: 'name'
    radio   = new spark.components.Radio options


  it 'should extends spark.components.Checkbox', ->
    expect(radio instanceof spark.components.Checkbox).toBeTruthy()


  it 'should have default options', ->
    radio = new spark.components.LabeledInput null, null

    expect(radio.getOptions().cssClass).toBeDefined()


  it 'should be type radio', ->
    expect(radio.getAttribute('type')).toBe 'radio'