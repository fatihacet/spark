goog = goog or goog = require: ->

goog.require 'spark.components.Checkbox'
goog.require 'spark.components.Field'


describe 'spark.components.Checkbox', ->

  checkbox = null
  options  = null

  beforeEach ->
    options   =
      value   : 'Fatih Acet'
      name    : 'name'
      checked : yes

    checkbox  = new spark.components.Checkbox options


  it 'should extends spark.components.Field', ->
    expect(checkbox instanceof spark.components.Field).toBeTruthy()


  it 'should be checked if checked option passed truthy in options', ->
    expect(checkbox.isChecked()).toBeTruthy()
    expect(checkbox.getElement().checked).toBeTruthy()


  it 'should be type checkbox', ->
    expect(checkbox.getAttribute('type')).toBe 'checkbox'


  it 'should check/uncheck the element and return actual state', ->
    cb = new spark.components.Checkbox

    expect(cb.isChecked()).toBeFalsy()

    cb.check()

    expect(cb.isChecked()).toBeTruthy()

    cb.uncheck()

    expect(cb.isChecked()).toBeFalsy()


  it 'should emit StateChanged event with proper state', ->
    state = null

    checkbox.on 'StateChanged', (e) ->
      state = e.data

    checkbox.check()

    expect(state).toBeTruthy()

    checkbox.check() # try to check again to test state change

    expect(state).toBeTruthy()

    checkbox.uncheck()

    expect(state).toBeFalsy()
