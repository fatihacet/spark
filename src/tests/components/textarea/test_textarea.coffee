goog = goog or goog = require: ->

goog.require 'spark.components.Textarea'
goog.require 'spark.components.Field'
goog.require 'goog.ui.Textarea'

describe 'spark.components.Textarea', ->

  textarea = null
  options  = null

  beforeEach ->
    options  =
      value  : 'Fatih Acet'
      name   : 'name'

    textarea = new spark.components.Textarea options


  it 'should extends spark.components.Field', ->
    expect(textarea instanceof spark.components.Field).toBeTruthy()


  it 'should have initial value passed from options', ->
    expect(textarea.getElement().value).toBe 'Fatih Acet'


  it 'should has default options', ->
    textarea = new spark.components.Textarea null
    options  = textarea.getOptions()

    expect(options.tagName).toBe 'textarea'
    expect(options.type).toBe 'text'


  it 'should has textarea as tag name', ->
    expect(textarea.getElement().tagName).toBe 'TEXTAREA'


  it 'should has an `@textarea_` which is an instance of goog.ui.Textarea', ->
    expect(textarea.textarea_ instanceof goog.ui.Textarea).toBeTruthy()


  it 'should be resized after setting a new content', ->
    textarea.appendToDocumentBody()

    height = textarea.getElement().offsetHeight

    expect(height).toBeLessThan 40

    textarea.setValue 'a\nb\nc\nd\ne\nf\ng\nh\n'

    expect(textarea.getElement().offsetHeight).not.toBe height
