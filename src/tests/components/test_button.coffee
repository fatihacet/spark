goog.require 'spark.components.Button'
goog.require 'spark.core.View'

describe 'spark.components.Button', ->


  button  = null
  element = null


  beforeEach ->
    options =
      title : 'Spark Button'

    button  = new spark.components.Button options
    element = button.getElement()

  it 'should extend spark.core.View', ->
    expect(button instanceof spark.core.View).toBeTruthy()


  it 'should be a button element and has span as a child', ->
    expect(element.tagName).toBe 'BUTTON'

