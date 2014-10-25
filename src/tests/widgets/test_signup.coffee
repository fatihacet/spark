goog = goog or goog = require: ->

goog.require 'spark.widgets.SignUp'


describe 'spark.widgets.SignUp', ->

  fireClick = (element) ->
    event   = document.createEvent 'MouseEvents'
    event.initEvent 'click', yes, yes
    element.dispatchEvent event


  it 'should have a form instance', ->
    widget = new spark.widgets.SignUp
    form   = widget.getForm()

    expect(form).toBeDefined()
    expect(form instanceof spark.components.Form).toBeTruthy()


  it 'should have default options', ->
    widget = new spark.widgets.SignUp null, null

    expect(widget.getOptions().title).toBe 'Sign Up'


  it 'should have an image element and that image element should have correct src attribute ', ->
    widget = new spark.widgets.SignUp imageUrl: 'lolo.png'
    img    = widget.getElement().firstChild

    expect(img.tagName).toBe 'IMG'
    expect(img.src.indexOf('lolo.png') > -1).toBeTruthy()


  it 'should not have an image element if withImage option passed as false', ->
    widget = new spark.widgets.SignUp withImage: no

    expect(widget.getElement().firstChild.tagName).not.toBe 'IMG'


  it 'should have customized form title', ->
    widget = new spark.widgets.SignUp withImage: no, title: 'Hello World Form'

    expect(widget.getElement().firstChild.innerHTML).toBe 'Hello World Form'


  it 'should have customized button title', ->
    widget = new spark.widgets.SignUp buttonTitle: 'Register'
    button = widget.getForm().getButtons()[0]

    expect(button.getElement().firstChild.innerHTML).toBe 'Register'


  it 'should have two anchor elements', ->
    widget = new spark.widgets.SignUp cssClass: 'my-widget'
    widget.appendToDocumentBody()

    anchors = document.querySelectorAll '.my-widget a'
    expect(anchors.length).toBe 2


  it 'should execute callback for sign up button', (done) ->
    flag   = no
    widget = new spark.widgets.SignUp callback: -> flag = yes
    button = widget.getForm().getButtons()[0].getElement()

    fireClick button

    expect(flag).toBeTruthy()

    widget.on 'SignUpFormPosted', -> flag = 42

    fireClick button

    expect(flag).toBe 42


  it 'should execute Forgot Password link callback', ->
    flag   = no
    widget = new spark.widgets.SignUp
      cssClass: 'widget'
      forgotPasswordCallback: -> flag = yes

    widget.appendToDocumentBody()

    link  = document.querySelectorAll('.widget a')[0]
    event = document.createEvent 'MouseEvents'
    event.initEvent 'click', yes, yes
    link.dispatchEvent event

    expect(flag).toBeTruthy()

    widget.on 'ForgotPasswordLinkClicked', -> flag = no
    link.dispatchEvent event

    expect(flag).toBeFalsy()


  it 'should execute Already Registered link callback', ->
    flag   = no
    widget = new spark.widgets.SignUp
      cssClass: 'cool-widget'
      alreadyRegisteredCallback: -> flag = yes

    widget.appendToDocumentBody()

    link  = document.querySelectorAll('.cool-widget a')[1]
    event = document.createEvent 'MouseEvents'
    event.initEvent 'click', yes, yes
    link.dispatchEvent event

    expect(flag).toBeTruthy()

    widget.on 'AlreadyRegisteredLinkClicked', -> flag = no
    link.dispatchEvent event

    expect(flag).toBeFalsy
