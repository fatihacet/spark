goog = goog or goog = require: ->

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


  it 'should have default options', ->
    b = new spark.components.Button null, null
    expect(b.hasClass('view')).toBeTruthy()


  describe 'template', ->

    it 'should be a button element', ->
      expect(element.tagName).toBe 'BUTTON'


    it 'should have hidden icon element if iconClass is not passed', ->
      child = element.firstChild

      expect(child.tagName).toBe 'SPAN'
      expect(child.classList.contains('icon')).toBeTruthy()
      expect(child.classList.contains('hidden')).toBeTruthy()


    it 'should have a visible icon element if iconClass passed', ->
      button  = new spark.components.Button iconClass: 'arrow'
      element = button.getElement()
      child   = element.firstChild

      expect(child.tagName).toBe 'SPAN'
      expect(child.classList.contains('icon')).toBeTruthy()
      expect(child.classList.contains('hidden')).toBeFalsy()


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
      expect(button.isDisabled()).toBeFalsy()

      button.disable()
      expect(button.isDisabled()).toBeTruthy()


    it 'should set `disabled` attribute', ->
      expect(button.getAttribute 'disabled').toBeNull()

      button.disable()
      expect(button.getAttribute 'disabled').toBe 'disabled'


    it 'should not fire click listener when disabled', ->
      button.disable()
      button.appendToDocumentBody()
      fireClick()
      expect(isClicked).toBeNull()


  describe 'enable', ->

    it 'should not has `disabled` class, attribute and isDisabled flag', ->
      assertions = ->
        expect(button.hasClass 'disabled').toBeFalsy()
        expect(button.getAttribute 'disabled').toBeNull()
        expect(button.isDisabled()).toBeFalsy()

      assertions()

      button.disable()
      expect(button.hasClass 'disabled').toBeTruthy()
      expect(button.getAttribute 'disabled').toBe 'disabled'
      expect(button.isDisabled()).toBeTruthy()

      button.enable()
      assertions()
