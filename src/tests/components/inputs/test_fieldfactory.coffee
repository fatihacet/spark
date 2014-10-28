goog = goog or goog = require: ->

goog.require 'spark.components.FieldFactory'


describe 'spark.components.FieldFactory', ->


  it 'should return input[type=text] with empty option set', ->
    input = spark.components.FieldFactory()

    expect(input instanceof spark.components.Input).toBeTruthy()


  it 'should return spark.components.Input for text type', ->
    input = spark.components.FieldFactory type: 'text'

    expect(input instanceof spark.components.Input).toBeTruthy()


  it 'should return spark.components.Input for text input', ->
    input = spark.components.FieldFactory type: 'input'

    expect(input instanceof spark.components.Input).toBeTruthy()


  it 'should return spark.components.Radio for radio type', ->
    radio = spark.components.FieldFactory type: 'radio'

    expect(radio instanceof spark.components.Radio).toBeTruthy()


  it 'should return spark.components.Checkbox for checkbox type', ->
    checkbox = spark.components.FieldFactory type: 'checkbox'

    expect(checkbox instanceof spark.components.Checkbox).toBeTruthy()


  it 'should return spark.components.Label for label type', ->
    label = spark.components.FieldFactory type: 'label', label: 'Hello World'

    expect(label instanceof spark.components.Label).toBeTruthy()


  it 'should return spark.components.Button for button type', ->
    button = spark.components.FieldFactory type: 'button'

    expect(button instanceof spark.components.Button).toBeTruthy()
