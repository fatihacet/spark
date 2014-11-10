goog.provide 'spark.components.Modal'

goog.require 'spark.core.View'
goog.require 'spark.components.Overlay'


class spark.components.Modal extends spark.core.View


  ###*
    Modal view with overlay option for Spark Framework. By default modal will be
    appended to document body and it will have an overlay. When overlay clicked
    the modal will be destroyed. You should pass title and content params of the
    modal in your options. You can also customize buttons. See `@createButtons_`
    for more information.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    @getCssClass     options, 'modal'
    options.title    or= options['title']    or 'Modal title'
    options.content  or= options['content']  or 'Modal content'
    options.renderTo or= options['renderTo'] or document.body
    options.buttons  or= options['buttons']  or spark.components.Modal.Buttons.YES_NO
    options.overlay   ?= options['overlay']   ? yes
    options.removeOnOverlayClick  ?= options['removeOnOverlayClick'] ? yes

    super options, data

    @buttons = {}

    if options.overlay
      @setOverlay_()

    @createTitle_   options.title
    @createContent_ options.content
    @createButtons_ options.buttons


  ###*
    Creates modal content.

    @private
    @param {string} title Modal title.
  ###
  createTitle_: (title) ->
    @title = new spark.core.View
      template : title
      cssClass : 'modal-title'
      renderTo : this


  ###*
    Creates modal content.

    @private
    @param {string} content Modal content.
  ###
  createContent_: (content) ->
    @content   = new spark.core.View
      template : content
      cssClass : 'modal-content'
      renderTo : this


  ###*
    Creates modal buttons. You can use preset buttons like YES, YES_NO or you
    can pass custom array which contains button options in it. Preset buttons
    will emit `ModalButtonClicked` with button title. You can programatically
    listen that event and look for button title to understand which button is
    clicked. Custom buttons should contain its callback. No other events will be
    fired for custom buttons. All buttons will be stored in `buttons` object
    with its names.

    @private
    @param {spark.components.Modal.Buttons|Array.<Object>} buttons Preset button
    value in Buttons enum or custom buttons array.
  ###
  createButtons_: (buttons) ->
    @buttonsContainer = new spark.core.View
      cssClass : 'buttons-container'
      renderTo : this

    presetButtons = goog.object.getValues spark.components.Modal.Buttons

    buttons.forEach (options) =>
      options.renderTo = @buttonsContainer
      button = new spark.components.Button options

      @buttons[options.title] = button

      if presetButtons.indexOf(buttons) > -1
        button.on goog.events.EventType.CLICK, =>
          @emit 'ModalButtonClicked', options.title


  ###*
    Sets overlay for modal. Overlay and modal will be destroyed when overlay
    clicked if `removeOnOverlayClick` options is passed true in modal options.

    @private
  ###
  setOverlay_: ->
    isRemovable = @getOptions().removeOnOverlayClick
    @overlay    = new spark.components.Overlay
      removeOnClick: isRemovable

    if isRemovable
      @overlay.once 'OverlayRemoved', =>
        @removeFromDocument()


  ###*

    @export
  ###


  ###*
    Preset button options.

    @private
  ###
  @ButtonOptions =
    YES    : { title: 'Yes',    cssClass: 'small green' }
    NO     : { title: 'No',     cssClass: 'small red'   }
    CANCEL : { title: 'Cancel', cssClass: 'small grey'  }


  ###*
    Preset buttons enum. Created buttons will emit 'ModalButtonClicked' event
    width button value.

    @export
    @enum {Array.<string>}
  ###
  @Buttons =
    'YES'           : [ spark.components.Modal.ButtonOptions.YES ]
    'NO'            : [ spark.components.Modal.ButtonOptions.NO  ]
    'YES_NO'        : [
      spark.components.Modal.ButtonOptions.NO
      spark.components.Modal.ButtonOptions.YES
    ]
    'YES_NO_CANCEL' : [
      spark.components.Modal.ButtonOptions.NO
      spark.components.Modal.ButtonOptions.CANCEL
      spark.components.Modal.ButtonOptions.YES
    ]
