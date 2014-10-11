goog.require 'spark.components.Input'
goog.require 'spark.core.View'

describe 'spark.components.Input', ->

  input   = null
  options = null

  beforeEach ->
    options       =
      placeholder : 'What is your name?'
      value       : 'Fatih Acet'

    input = new spark.components.Input options


  it 'should extends spark.core.View', ->
    expect(input instanceof spark.core.View).toBeTruthy()


  it 'should has input as tag name', ->
    expect(input.getElement().tagName).toBe 'INPUT'


  it 'should be checkbox if type passed as checkbox in options', ->
    checkbox = new spark.components.Input type: 'checkbox'

    expect(input.getElement().type).toBe    'text'
    expect(checkbox.getElement().type).toBe 'checkbox'


  it 'should set value if passed in options', ->
    expect(input.getValue()).toBe 'Fatih Acet'


  it 'should set value and update value', ->
    input.setValue('fatihacet')

    expect(input.getValue()).toBe 'fatihacet'
    expect(input.getElement().value).toBe 'fatihacet'


  it 'should set placeholder if passed in options', ->
    expect(input.getElement().placeholder).toBe options.placeholder


  it 'should set and update placeholder', ->
    newPlaceholder = 'name please?'
    input.setPlaceholder newPlaceholder

    expect(input.getElement().placeholder).toBe newPlaceholder


  it 'should clear placeholder', ->
    input.clearPlaceholder()

    expect(input.getElement().placeholder).toBe ''
