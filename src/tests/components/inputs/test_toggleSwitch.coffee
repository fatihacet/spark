goog = goog or goog = require: ->

goog.require 'spark.components.ToggleSwitch'

describe 'spark.components.ToggleSwitch', ->


  toggle  = null
  element = null


  beforeEach ->
    toggle  = new spark.components.ToggleSwitch name: 'agreed'
    element = toggle.getElement()


  it 'should extend spark.components.LabeledInput', ->
    expect(toggle instanceof spark.components.LabeledInput).toBeTruthy()

    options = toggle.getOptions()

    expect(options.name).toBe 'agreed'


  it 'should default options', ->
    toggle  = new spark.components.ToggleSwitch

    expect(toggle.getOptions()).toBeDefined()
    expect(toggle.getOptions().checked).toBe no


  it 'should be checked if checked passed in options', ->
    toggle = new spark.components.ToggleSwitch checked: yes

    expect(toggle.input.isChecked()).toBeTruthy()


  it 'should check/uncheck input and return the correct state', ->
    expect(toggle.isChecked()).toBeFalsy()

    toggle.check()

    expect(toggle.input.isChecked()).toBeTruthy()

    toggle.uncheck()

    expect(toggle.isChecked()).toBeFalsy()


  it 'should has extra class names', ->
    toggle = new spark.components.ToggleSwitch cssClass: 'blue custom'

    expect(toggle.hasClass('blue')).toBeTruthy()
    expect(toggle.hasClass('custom')).toBeTruthy()


  it 'should emit StateChanged event with proper state', ->
    state = null

    toggle.on 'StateChanged', (e) ->
      state = e.data

    toggle.check()

    expect(state).toBeTruthy()

    toggle.check() # try to check again to test state change

    expect(state).toBeTruthy()

    toggle.uncheck()

    expect(state).toBeFalsy()
