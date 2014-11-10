goog.provide 'spark.components.Modal'

goog.require 'spark.core.View'
goog.require 'spark.components.Overlay'


class spark.components.Modal extends spark.core.View


  ###*
    Modal view with overlay option for Spark Framework.

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
      @setOverlay()

    @createTitle   options.title
    @createContent options.content
    @createButtons options.buttons


  createTitle: (title) ->
    @title = new spark.core.View
      template : title
      cssClass : 'modal-title'
      renderTo : this


  createContent: (content) ->
    @content   = new spark.core.View
      template : content
      cssClass : 'modal-content'
      renderTo : this


  createButtons: (buttons) ->
    @buttonsContainer = new spark.core.View
      cssClass : 'buttons-container'
      renderTo : this

    presetButtons = goog.object.getValues spark.components.Modal.Buttons

    if presetButtons.indexOf(buttons) > -1
      buttons.forEach (title) =>
        new spark.components.Button
          cssClass : spark.components.Modal.ButtonCssClasses[title]
          title    : title
          renderTo : @buttonsContainer
          callback : => @emit 'ModalButtonClicked', title
    else
      buttons.forEach (options) =>
        options.renderTo = @buttonsContainer
        new spark.components.Button options


  setOverlay: ->
    @overlay = new spark.components.Overlay
      removeOnClick: @getOptions().removeOnOverlayClick

    @overlay.once 'OverlayRemoved', =>
      @removeFromDocument()


  @Buttons        =
    YES           : [ 'Yes' ]
    NO            : [ 'No'  ]
    YES_NO        : [ 'Yes', 'No' ]
    YES_NO_CANCEL : [ 'Yes', 'No', 'Cancel' ]


  @ButtonCssClasses =
    Yes    : 'green'
    No     : 'red'
    Cancel : 'grey'
