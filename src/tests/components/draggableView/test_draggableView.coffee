goog = goog or goog = require: ->

goog.require 'spark.components.DraggableView'
goog.require 'spark.core.View'


describe 'spark.components.DraggableView', ->

  draggable = null
  element   = null
  domId     = null
  initial   = null


  getPositions = (element) ->
    return {
      left: element.offsetLeft
      top : element.offsetTop
    }


  beforeEach ->
    draggable    = new spark.components.DraggableView
      attributes :
        style    : 'width: 100px; height: 100px; position: absolute; background: red'

    domId   = draggable.getUid()
    element = draggable.getElement()

    draggable.setDomId domId
    draggable.appendToDocumentBody()
    initial = getPositions element


  it 'should extend spark.core.View', ->
    expect(draggable instanceof spark.core.View).toBeTruthy()


  it 'should have default options', ->
    d = new spark.components.DraggableView null, null

    expect(d.getOptions()).toBeDefined()


  it 'should be draggable around the page', ->
    $('#' + domId).simulate 'drag', { dx: 300, dy: 100 }

    latest = getPositions element

    expect(latest.left - initial.left).toBe 300
    expect(latest.top -  initial.top).toBe  100


  it 'should have only resize inside the container', ->
    c = new spark.core.View
      attributes:
        style   : 'height: 500px; width: 500px; background: grey;'

    c.appendToDocumentBody()

    k = new spark.components.DraggableView
      container : c
      domId     : 'dragInContainer'
      attributes:
        style   : 'height: 50px; width: 100px; background: red; position: absolute;'

    c.appendView k

    initial = getPositions k.getElement()

    $('#dragInContainer').simulate 'drag', { dx: 800, dy: 800 }

    latest = getPositions k.getElement()

    expect(latest.left - initial.left + 100).toBe 500
    expect(latest.top  - initial.top  + 50).toBe  500


  it 'should set container as DOM element', ->

    draggable = new spark.components.DraggableView
      container : document.body
      domId     : 'dragInDOM'
      attributes:
        style   : 'height: 50px; width: 50px; background: red; position: absolute;'


    draggable.appendToDocumentBody()


    $('#dragInDOM').simulate 'drag', { dx: 8000, dy: 8000 }
    latest = getPositions draggable.getElement()

    expect(latest.left < 8000).toBeTruthy()
    expect(latest.top  < 8000).toBeTruthy()


  it 'should throw error for invalid container parameter', ->
    error  = new Error 'Drag container must be a View instance or a DOM element.'

    expect( -> new spark.components.DraggableView container : 2).toThrow error


  it 'should unset container to free the draggable area', ->
    draggable = new spark.components.DraggableView
      container : document.body
      domId     : 'dragEverywhere'
      attributes:
        style   : 'height: 50px; width: 50px; background: red; position: absolute;'

    draggable.appendToDocumentBody()

    $('#dragEverywhere').simulate 'drag', { dx: 8000, dy: 8000 }
    latest = getPositions draggable.getElement()

    expect(latest.left < 8000).toBeTruthy()
    expect(latest.top  < 8000).toBeTruthy()

    draggable.unsetContainer()
    $('#dragEverywhere').simulate 'drag', { dx: 8000, dy: 8000 }
    latest = getPositions draggable.getElement()

    expect(latest.left > 7800).toBeTruthy()
    expect(latest.top  > 7800).toBeTruthy()
