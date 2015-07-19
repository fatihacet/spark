goog = goog or goog = require: ->

goog.require 'spark.components.Loader'
goog.require 'spark.core.View'


describe 'spark.components.Loader', ->

  loader = null

  beforeEach ->
    loader = new spark.components.Loader


  afterEach: ->
    loader.destroy()


  it 'should extend spark.core.View', ->
    expect(loader instanceof spark.core.View).toBeTruthy()


  describe 'getLoaderTemplate_', ->

    it 'should return correct template', ->
      return unless goog.DEBUG

      output1   = loader.getLoaderTemplate_ type: 'BOUNCE'
      expected1 = '<div class="bounce"><div class="item item1"></div><div class="item item2"></div></div>'

      expect(output1).toBe expected1

      output2   = loader.getLoaderTemplate_ type: 'PULSE'
      expected2 = '<div class="pulse"></div>'

      expect(output2).toBe(expected2)

    it 'should return error for invalid loader type', ->

      error = new Error 'Invalid loader type, hello'

      expect( -> new spark.components.Loader type: 'hello' ).toThrow error


  it 'should have correct amount of elements', ->

    customLoader = new spark.components.Loader
      type : spark.components.Loader.LoaderTypes.BAR
      size : 120

    firstChild = customLoader.getElement().firstChild

    expect(customLoader.hasClass('loader')).toBeTruthy()
    expect(firstChild.classList.contains('bar')).toBeTruthy()
    expect(firstChild.style.width).toBe '120px'
    expect(firstChild.children.length).toBe 5
    expect(firstChild.children[4].classList.contains('item')).toBeTruthy()
    expect(firstChild.children[4].classList.contains('item5')).toBeTruthy()

    customLoader.destroy()
