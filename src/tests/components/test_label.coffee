goog.require 'spark.components.Label'

describe 'spark.components.Label', ->


  label   = null
  element = null


  beforeEach ->
    label   = new spark.components.Label label: 'Name'
    element = label.getElement()


  it 'should extend spark.core.View', ->
    expect(label instanceof spark.core.View).toBeTruthy()


  it 'should have label element', ->
    expect(element.tagName).toBe 'LABEL'


  it 'should have default label value if label option not passed', ->
    label = new spark.components.Label

    expect(label.options.label).toBe 'Input Label'


  it 'should have label on element innerHTML', ->
    expect(element.innerHTML).toBe 'Name'
