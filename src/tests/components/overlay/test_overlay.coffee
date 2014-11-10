goog = goog or goog = require: ->

goog.require 'spark.components.Overlay'


describe 'spark.components.Overlay', ->


  overlay   = null
  overlayEl = null
  fireClick = (element) ->
    event = document.createEvent 'MouseEvents'
    event.initEvent 'click', yes, yes
    element.dispatchEvent event

  beforeEach ->
    overlay   = new spark.components.Overlay domId: 'overlay'
    overlayEl = overlay.getElement()

  afterEach ->
    overlay.removeFromDocument()


  it 'should extends spark.core.View', ->
    expect(overlay instanceof spark.core.View).toBeTruthy()


  it 'should has default options if no options passed', ->
    expect(overlay.getOptions()).toBeDefined()


  it 'should append itself to document.body by default', ->
    element = document.getElementById 'overlay'

    expect(element.tagName).toBe 'DIV'


  it 'should not be removable by default', ->
    fireClick(overlayEl);

    element = document.getElementById 'overlay'

    expect(element.tagName).toBe 'DIV'


  it 'should be removable if removeOnClick passed as true in options', ->
    overlay.removeFromDocument()

    removable = new spark.components.Overlay removeOnClick: yes, domId: 'removable'
    fireClick removable.getElement()
    element = document.getElementById 'removable'

    expect(element).toBeNull()


  it 'should be removable after setRemovable called', ->
    overlay.setRemovable()
    fireClick overlay.getElement()
    element = document.getElementById 'overlay'

    expect(element).toBeNull()
