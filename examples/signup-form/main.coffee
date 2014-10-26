window.addEventListener 'load', ->

  w = new spark.widgets.SignUp
    cssClass                  : 'hello'
    buttonColor               : 'blue'
    callback                  : -> console.log 'post form'
    forgotPasswordCallback    : -> console.log 'forgot password'
    alreadyRegisteredCallback : -> console.log 'already registered'

  w.appendToDocumentBody()

  w = new spark.widgets.SignUp
    cssClass    : 'hello'
    withImage   : no
    title       : 'Register'
    buttonText  : 'Register'
    callback    : -> console.log 'post form'

  w.appendToDocumentBody()

, no