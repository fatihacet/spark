goog.require 'spark.core.Object'
goog.require 'spark.core.View'
goog.require 'spark.utils'


describe 'spark.core.View', ->


  view    = null
  element = null


  beforeEach ->
    options    =
      tagName  : 'span'
      cssClass : 'hello'
      domId    : 'world'
      template : '<p>Hello World</p>'

    view       = new spark.core.View options
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
  it 'should set element template', ->
    expect(element.firstChild.tagName).toBe 'P'

    view.setTemplate '<div><span></span></div>'

    expect(element.firstChild.tagName).toBe 'DIV'
    expect(element.firstChild.firstChild.tagName).toBe 'SPAN'


  it 'should add new class', ->
    expect(element.classList.contains 'new-class').toBeFalsy()

    view.addClass 'new-class'

    expect(element.classList.contains 'new-class').toBeTruthy()


  it 'should remove a class name', ->
    expect(element.classList.contains 'hello').toBeTruthy()

    view.removeClass 'hello'

    expect(element.classList.contains 'hello').toBeFalsy()


  it 'should return class list as an array like', ->
    classList = view.getClassList()
    expect(classList.length).toBe 3 # view, hello, buddy


  it 'should return all class names', ->
    expect(view.getClass()).toBe 'view hello buddy'


  it 'should update class name', ->
    expect(element.classList.contains 'new-class-name').toBeFalsy()

    view.setClass 'new-class-name'

    expect(element.getAttribute 'class').toBe 'new-class-name'


  it 'should return true if element has a class name', ->
    expect(view.hasClass 'class-name').toBeFalsy()
    expect(view.hasClass 'hello').toBeTruthy()

