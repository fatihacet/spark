goog.provide 'spark.widgets.SignUp'

goog.require 'spark.core.View'
goog.require 'spark.components.Form'


class spark.widgets.SignUp extends spark.core.View

  ###*
    Ready to use customizable user sign up widget of Spark Framework.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    options.withImage    ?= options['withImage']    ? yes
    options.imageUrl    or= options['imageUrl']    or 'http://lorempixel.com/460/144/city/4'
    options.title       or= options['title']       or 'Sign Up'
    options.buttonTitle or= options['buttonTitle'] or 'Sign Up'
    options.buttonColor or= options['buttonColor'] or 'green'
    options.callback    or= options['callback']    or null

    options.forgotPasswordCallback    or= options['forgotPasswordCallback']    or null
    options.alreadyRegisteredCallback or= options['alreadyRegisteredCallback'] or null

    @getCssClass options, 'sign-up-widget'

    super options, data

    @createImage_() if options.withImage
    @createTitle_()

    @form = new spark.components.Form @getFormOptions_()
    @appendView @form

    @createLinks_()


  ###*
    Creates form title element.
  ###
  createTitle_: ->
    title      = new spark.core.View
      template : @getOptions().title
      cssClass : 'title'

    @appendView title


  ###*
    Creates form header image if `withImage` option is set to true.
  ###
  createImage_: ->
    image        = new spark.core.View
      tagName    : 'img'
      attributes :
        src      : @getOptions().imageUrl

    @appendView image
    @addClass 'with-image'


  ###*
    Creates Forgot Password and Already Registered links.
  ###
  createLinks_: ->
    {forgotPasswordCallback, alreadyRegisteredCallback} = @getOptions()

    registered      = new spark.core.View
      tagName       : 'a'
      template      : 'Already Registered?'
      cssClass      : 'already-registered'
      attributes    : href: '#'
      eventHandlers :
        click       : =>
          alreadyRegisteredCallback.call this  if alreadyRegisteredCallback
          @emit 'AlreadyRegisteredLinkClicked'

    forgotPassword  = new spark.core.View
      tagName       : 'a'
      template      : 'Forgot password?'
      cssClass      : 'forgot-password'
      attributes    : href: '#'
      eventHandlers :
        click       : =>
          forgotPasswordCallback.call this  if forgotPasswordCallback
          @emit 'ForgotPasswordLinkClicked'

    @appendView registered
    @form.getInputsContainer().appendView forgotPassword


  ###*
    Returns form options.
    @private
    @return {Object} Form options.
  ###
  getFormOptions_: ->
    options           = @getOptions()
    formOptions       =
      inputs          : [
        {
          type        : 'text'
          placeholder : 'Email or username'
          name        : 'username'
        }
        {
          type        : 'password'
          placeholder : 'Password'
          name        : 'password'
        }
      ]
      buttons         : [
        {
          title       : options.buttonTitle
          cssClass    : options.buttonColor
          callback    : =>
            options.callback.call this if options.callback
            @emit 'SignUpFormPosted'
        }
      ]

    return formOptions


  ###*
    Returns form instance.
    @export
    @return {spark.components.Form}
  ###
  getForm: ->
    return @form
