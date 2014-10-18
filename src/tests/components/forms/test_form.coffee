goog.require 'spark.components.Form'
goog.require 'spark.components.Input'
goog.require 'spark.components.Button'
goog.require 'spark.components.LabeledInput'


describe 'spark.components.Form', ->

  form      = null
  f         = null
  cancelled = null
  submitted = null
  options   = null

  beforeEach ->
    f = new spark.components.Form null, null
    options =
      inputs              : [
        {
          type            : 'text'
          placeholder     : 'Enter your name'
          name            : 'name'
          value           : 'Fatih'
        }
        {
          type            : 'text'
          placeholder     : 'Enter your surname'
          name            : 'surname'
          value           : 'Acet'
        }
      ]
      buttons             : [
        { title           : 'Cancel'  }
        { title           : 'Confirm' }
      ]

    form = new spark.components.Form options


  it 'should extend spark.core.View', ->
    expect(form instanceof spark.core.View).toBeTruthy()


  it 'should have default options', ->
    expect(f.options).toBeDefined()


  it 'should have containers even no options passed', ->
    expect(f.inputsContainer).toBeDefined()
    expect(f.buttonsContainer).toBeDefined()


  it 'should have correct amount of inputs', ->
    expect(form.inputs.length).toBe 2


  it 'should have correct amount of buttons', ->
    expect(form.buttons.length).toBe 2


  it 'should have inputs as an instance of spark.components.Input if no label passed in input options', ->
    for input in form.inputs
      expect(input instanceof spark.components.Input).toBeTruthy()


  it 'should have buttons as instance of spark.components.Button', ->
    for button in form.buttons
      expect(button instanceof spark.components.Button).toBeTruthy()


  it 'should have named inputs object', ->
    expect(form.inputsByName.surname instanceof spark.components.Input).toBeTruthy()


  it 'should set and update form data', ->
    form.setData { name: 'John', surname: 'Doe' }

    expect(form.inputsByName.name.getValue()).toBe 'John'
    expect(form.inputsByName.surname.getValue()).toBe 'Doe'


  it 'should have spark.components.LabeledInput element if label options passed in input options', ->
    f = new spark.components.Form inputs: [ { label: 'Your Name..?', name: 'hello' } ]

    expect(f.inputsContainer.getElement().firstChild.tagName).toBe 'DIV'


  it 'should return latest form data', ->
    defaults = name: 'Fatih', surname: 'Acet'
    newData  = name: 'John',  surname: 'Doe'

    expect(form.getData().name).toBe 'Fatih'

    form.setData newData

    expect(form.getData().name).toBe 'John'


  it 'should set data from constructor', ->
    options =
      inputs : [
        { name  : 'email', value : 'fatih@fatihacet.com' }
        { name  : 'password' }
      ]

    data = { email: 'fatih@fatihacet.com.', password: '123' }

    f = new spark.components.Form options, data

    expect(f.inputsByName.email.getValue()).toBe    'fatih@fatihacet.com.'
    expect(f.inputsByName.password.getValue()).toBe '123'
