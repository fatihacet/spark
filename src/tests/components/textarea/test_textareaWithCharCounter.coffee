goog = goog or goog = require: ->

goog.require 'spark.components.TextareaWithCharCounter'
goog.require 'spark.components.Textarea'


describe 'spark.components.TextareaWithCharCounter', ->

  textarea = null

  beforeEach ->
    options  =
      value  : 'Fatih Acet'
      name   : 'name'

    textarea = new spark.components.TextareaWithCharCounter options

  afterEach ->
    textarea.destroy()


  it 'should extends spark.components.Textarea', ->
    expect(textarea instanceof spark.components.Textarea).toBeTruthy()


  it 'should have default options', ->
    if goog.debug
      textarea = new spark.components.TextareaWithCharCounter
      {charLimit, counterContainer} = textarea.getOptions()
      expect(charLimit).toBe 140
      expect(counterContainer).toBe document.body


  it 'should have char counter', ->
    counterView = textarea.getCounterView()
    counterEl   = counterView.getElement()

    expect(counterView).toBeDefined()
    expect(counterView instanceof spark.core.View).toBeTruthy()
    expect(counterEl.innerHTML).toBe '130'

    textarea.setValue 'fatih'

    expect(counterEl.innerHTML).toBe '135'


  it 'should truncate the content by char limit', ->
    textarea    = new spark.components.TextareaWithCharCounter
      charLimit : 10

    textarea.setValue 'hello world this is long'

    expect(textarea.getValue()).toBe 'hello worl'


  it 'should have hidden counter', ->
    textarea = new spark.components.TextareaWithCharCounter
      isCounterVisible: no

    expect(textarea.getCounterView().hasClass 'hidden').toBeTruthy()


  it 'should show incremental count on counter', ->
    textarea = new spark.components.TextareaWithCharCounter
      showRemainingCount: no
      value: 'lorem ipsum dolor'

    expect(textarea.getCounterView().getElement().innerHTML).toBe '17'


  it 'should set/update char limit', ->
    textarea = new spark.components.TextareaWithCharCounter
      charLimit: 20
      value: 'lorem ipsum dolor'

    counterEl = textarea.getCounterView().getElement()
    expect(counterEl.innerHTML).toBe '3'

    textarea.setCharLimit 10
    expect(counterEl.innerHTML).toBe '0'
    expect(textarea.getValue()).toBe 'lorem ipsu'

    textarea.setCharLimit 50
    textarea.setValue 'lorem ipsum dolor sit amet'
    expect(counterEl.innerHTML).toBe '24'
    expect(textarea.getValue()).toBe 'lorem ipsum dolor sit amet'
