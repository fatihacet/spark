goog.provide 'spark.components.Modal'

goog.require 'spark.components.DraggableView'
goog.require 'spark.components.Overlay'
goog.require 'goog.dom'
goog.require 'goog.style'


class spark.components.Modal extends spark.components.DraggableView


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
    @extends {spark.components.DraggableView}
  ###
  constructor: (options = {}, data) ->

    @getCssClass       options, 'modal'
    options.title      or= options['title']     or 'Default modal title'
    options.content    or= options['content']   or 'Default modal content'
    options.renderTo   or= options['renderTo']  or document.body
    options.buttons    or= options['buttons']   or spark.components.Modal.Buttons.YES_NO
    options.draggable   ?= options['draggable']  ? yes
    options.overlay     ?= options['overlay']    ? yes
    options.closable    ?= options['closable']   ? yes

    options.removeOnOverlayClick  ?= options['removeOnOverlayClick'] ? yes

    @createTitleView_ options.title

    if options.draggable
      options.handle = @titleView

    super options, data

    @buttons = {}

    if options.overlay
      @setOverlay_()

    unless options.draggable
      @disableDrag()
      @removeClass 'draggable'

    @appendView @titleView
    @createContentView_ options.content
    @createButtons_ options.buttons

    if options.closable
      @createCloseButton_()

    @setPosition()

    resizeCallback     = goog.bind @setPosition, this
    @resizeListenerKey = goog.events.listen window, 'resize', resizeCallback

  ###*
    Creates modal content.

    @private
    @param {string} title Modal title.
  ###
  createTitleView_: (title) ->
    @titleView = new spark.core.View
      template : title
      cssClass : 'modal-title'


  ###*
    Creates modal content.

    @private
    @param {string} content Modal content.
  ###
  createContentView_: (content) ->
    @contentView = new spark.core.View
      template   : content
      cssClass   : 'modal-content'
      renderTo   : this


  ###*
    Creates a close button to top right of the modal.

    @private
  ###
  createCloseButton_: ->
    @closeButton = new spark.core.View
      cssClass      : 'modal-close'
      template      : 'x'
      renderTo      : this
      eventHandlers :
        click       : => @destroy()


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
    Sets left and top values to center modal in the viewport.

    @export
  ###
  setPosition: ->
    viewportSize = goog.dom.getViewportSize window
    modalElement = @getElement()
    modalSize    = goog.style.getSize modalElement
    positionLeft = Math.max (viewportSize.width /  2 - modalSize.width  / 2), 0
    positionTop  = Math.max (viewportSize.height / 2 - modalSize.height / 2), 0

    goog.style.setPosition modalElement, positionLeft, positionTop


  ###*
    Destroys the modal. Removes all elements from DOM and also unlistens resize
    event handler binded to window to set positions correctly. If your modal
    don't closable or you want to handle close action programatically, when you
    want to remove the modal you should call this method.
  ###
  destroy: ->
    @overlay?.removeFromDocument()
    @removeFromDocument()
    goog.events.unlistenByKey @resizeListenerKey


  ###*
    Returns Overlay instance if exists.

    @export
    @return {spark.components.Overlay|null}
  ###
  getOverlay: ->
    return @overlay or null


  ###*
    Returns button instance by its title.

    @export
    @param {!string} title Button title.
    @return {spark.components.Button|null}
  ###
  getButtonByTitle: (title) ->
    return @buttons[title] or null


  ###*
    Returns title view.

    @export
    @return {spark.core.View}
  ###
  getTitleView: ->
    return @titleView


  ###*
    Returns content view.

    @export
    @return {spark.core.View}
  ###
  getContentView: ->
    return @contentView


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
