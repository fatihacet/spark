goog.require 'spark.object.Object'
goog.require 'spark.view.View'
goog.require 'spark.utils'


describe 'spark.view.View', ->


  view    = null
  element = null


  beforeEach ->
    options    =
      tagName  : 'span'
      cssClass : 'hello'
      domId    : 'world'
      template : '<p>Hello World</p>'

    view       = new spark.view.View options
    element    = view.getElement()


  it 'should create a DOM element with passed options', ->
    expect(element).toBeDefined()
    expect(element.id).toBe 'world'
    expect(element.classList.contains('hello')).toBeTruthy()
    expect(element.firstChild.tagName).toBe 'P'


  it 'should be appendable to document body', ->
    # it will throw an error if it couldn't append it to dom
    # there is not assertion needed
    document.body.appendChild element
