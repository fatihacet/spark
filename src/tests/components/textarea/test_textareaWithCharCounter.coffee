goog = goog or goog = require: ->

goog.require 'spark.components.TextareaWithCharCounter'
goog.require 'spark.components.Textarea'


describe 'spark.components.TextareaWithCharCounter', ->

  textarea = null
  options  = null
  customTextarea = null

  beforeEach ->
    options  =
      value  : 'Fatih Acet'
      name   : 'name'

    textarea = new spark.components.TextareaWithCharCounter options

  afterEach ->
    textarea.destroy()
    customTextarea?.destroy()


  it 'should extends spark.components.Textarea', ->
    expect(textarea instanceof spark.components.Textarea).toBeTruthy()


  it 'should have default options', ->
    if goog.debug
      customTextarea = new spark.components.TextareaWithCharCounter
      {charLimit, counterContainer} = customTextarea.getOptions()
      expect(charLimit).toBe 140
      expect(counterContainer).toBe document.body


  it 'should have char counter', ->
    customTextarea = new spark.components.TextareaWithCharCounter

    counter = document.querySelector('.textarea-counter')
    expect(counter.innerHTML).toBe '130'

    textarea.setValue 'fatih'

    expect(counter.innerHTML).toBe '135'


  it 'should truncate the content by char limit', ->
    customTextarea = new spark.components.TextareaWithCharCounter charLimit: 10

    customTextarea.setValue 'hello world this is long'

    expect(customTextarea.getValue()).toBe 'hello worl'


  it 'should have hidden counter', ->
    customTextarea = new spark.components.TextareaWithCharCounter
      isCounterVisible: no

    counter = document.querySelectorAll('.textarea-counter')[1]
    expect(counter.classList.contains('hidden')).toBeTruthy()


  it 'should show incremental count on counter', ->
    customTextarea = new spark.components.TextareaWithCharCounter
      showRemainingCount: no
      value: 'lorem ipsum dolor'

    counter = document.querySelectorAll('.textarea-counter')[1]
    expect(counter.innerHTML).toBe '17'


  it 'should set/update char limit', ->
    customTextarea = new spark.components.TextareaWithCharCounter
      charLimit: 20
      value: 'lorem ipsum dolor'

    counter = document.querySelectorAll('.textarea-counter')[1]
    expect(counter.innerHTML).toBe '3'

    customTextarea.setCharLimit 10
    expect(counter.innerHTML).toBe '0'
    expect(customTextarea.getValue()).toBe 'lorem ipsu'

    customTextarea.setCharLimit 50
    customTextarea.setValue 'lorem ipsum dolor sit amet'
    expect(counter.innerHTML).toBe '24'
    expect(customTextarea.getValue()).toBe 'lorem ipsum dolor sit amet'
