goog.require 'spark.components.Button'
goog.require 'spark.core.View'

describe 'spark.components.Button', ->


  button    = null
  element   = null
  isClicked = null
  fireClick = ->
    event   = document.createEvent 'MouseEvents'
    event.initEvent 'click', yes, yes
    element.dispatchEvent event


  beforeEach ->
    isClicked = null
    options   = title: 'Spark Button', callback: -> isClicked = yes
    button    = new spark.components.Button options
    element   = button.getElement()


  describe 'extends', ->

    it 'should extend spark.core.View', ->
      expect(button instanceof spark.core.View).toBeTruthy()


  describe 'template', ->

    it 'should be a button element and has span as a child', ->
      expect(element.tagName).toBe 'BUTTON'


  it 'should call callback when clicked', ->
    flag = no

    expect(isClicked).toBeNull()

    fireClick()

    expect(isClicked).toBeTruthy()

    button.on   'click', -> flag = !flag
    button.emit 'click'

    expect(flag).toBeTruthy()


  describe 'disable', ->

    it 'should add class `disabled` to button element', ->
      expect(button.hasClass 'disabled').toBeFalsy()

      button.disable()
      expect(button.hasClass 'disabled').toBeTruthy()


    it 'should set `isDisabled` property to true', ->
      expect(button.isDisabled).toBeUndefined()

      button.disable()
      expect(button.isDisabled).toBeTruthy()


    it 'should set `disabled` attribute', ->
      expect(button.getAttribute 'disabled').toBeNull()

      button.disable()
      expect(button.getAttribute 'disabled').toBe 'disabled'


    it 'should not fire click listener when disabled', ->
      button.disable()
      fireClick()
      expect(isClicked).toBeNull()


  describe 'enable', ->

    it 'should not has `disabled` class, attribute and isDisabled flag', ->
      assertions = ->
        expect(button.hasClass 'disabled').toBeFalsy()
        expect(button.getAttribute 'disabled').toBeNull()
        expect(button.isDisabled).toBeUndefined()

      assertions()

      button.disable()
      expect(button.hasClass 'disabled').toBeTruthy()
      expect(button.getAttribute 'disabled').toBe 'disabled'
      expect(button.isDisabled).toBeTruthy()

      button.enable()
      assertions()

