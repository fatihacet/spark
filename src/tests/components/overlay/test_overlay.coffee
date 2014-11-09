goog = goog or goog = require: ->

goog.require 'spark.components.Overlay'


describe 'spark.components.Overlay', ->


  overlay     = null
  overlayEl   = null
  fireClick   = (element) ->
    event = document.createEvent 'MouseEvents'
    event.initEvent 'click', yes, yes
    element.dispatchEvent event

  beforeEach ->
    overlay     = new spark.components.Overlay
    overlayEl   = overlay.getElement()

  afterEach ->
    overlay.removeFromDocument()


  it 'should extends spark.core.View', ->
    expect(overlay instanceof spark.core.View).toBeTruthy()


  it 'should has default options if no options passed', ->
    expect(overlay.getOptions()).toBeDefined()


  it 'should append itself to document.body by default', ->
    el = document.querySelectorAll '.overlay'

    expect(el.length).toBeGreaterThan 0


  it 'should not be removable by default', ->
    fireClick(overlayEl);

    elements = document.querySelectorAll '.overlay'

    expect(elements.length).toBeGreaterThan 0


  it 'should be removable if removeOnClick passed as true in options', ->
    overlay.removeFromDocument()

    removable = new spark.components.Overlay removeOnClick: yes
    fireClick removable.getElement()
    elements = document.querySelectorAll '.overlay'

    expect(elements.length).toBe 0


  it 'should be removable after setRemovable called', ->
    overlay.setRemovable()
    fireClick overlay.getElement()
    elements = document.querySelectorAll '.overlay'

    expect(elements.length).toBe 0
