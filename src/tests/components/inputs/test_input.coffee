goog.require 'spark.components.Input'
goog.require 'spark.components.Field'

describe 'spark.components.Input', ->

  input   = null
  options = null

  beforeEach ->
    options       =
      placeholder : 'What is your name?'
      value       : 'Fatih Acet'
      name        : 'name'

    input = new spark.components.Input options


  it 'should extends spark.components.Field', ->
    expect(input instanceof spark.components.Field).toBeTruthy()


  it 'should set placeholder if passed in options', ->
    expect(input.getElement().placeholder).toBe options.placeholder


  it 'should set and update placeholder', ->
    newPlaceholder = 'name please?'
    input.setPlaceholder newPlaceholder

    expect(input.getElement().placeholder).toBe newPlaceholder


  it 'should clear placeholder', ->
    input.clearPlaceholder()

    expect(input.getElement().placeholder).toBe ''


  it 'should has focus class when focussed', ->
    input.focus()

    expect(input.hasClass('focus')).toBeTruthy()
