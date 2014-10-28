goog = goog or goog = require: ->

goog.require 'spark.components.LabeledInput'


describe 'spark.components.LabeledInput', ->

  labeledInput = null
  element      = null


  beforeEach ->
    options         =
      labelOptions  :
        label       : 'Name'
      inputOptions  :
        placeholder : 'Enter your name...'
        valeu       : 'Fatih Acet'

    labeledInput    = new spark.components.LabeledInput options
    element         = labeledInput.getElement()


  it 'should extend spark.core.View', ->
    expect(labeledInput instanceof spark.core.View).toBeTruthy()


  it 'should have default options', ->
    li = new spark.components.LabeledInput null, null
    expect(li.getOptions().cssClass).toBeDefined()


  it 'should have label and input elements', ->
    expect(element.firstChild.tagName).toBe 'LABEL'
    expect(element.lastChild.tagName).toBe  'INPUT'


  it 'should have focus class', ->
    labeledInput.getInput().emit 'focus'

    expect(labeledInput.getInput().hasClass('focus')).toBeTruthy()

    labeledInput.getInput().emit 'blur'

    expect(labeledInput.getInput().hasClass('focus')).toBeFalsy()



