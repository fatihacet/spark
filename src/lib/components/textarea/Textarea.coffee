goog.provide 'spark.components.Textarea'

goog.require 'spark.components.Field'
goog.require 'goog.ui.Textarea'


class spark.components.Textarea extends spark.components.Field

  ###*
    Texarea component of the framework.
    Extended from Field component to be consistent with rest of the framework.
    However it uses `goog.ui.Textarea` in the background. This is because
    goog handles resizing the textarea to fit its content pretty good. This
    might be a disadvantage for the filesize. I need to consider it in the future.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.components.Field}
  ###
  constructor: (options = {}, data) ->

    options.tagName = options['tagName'] = 'textarea'
    @getCssClass options, 'textarea'

    super options, data

    @decorate_()
    @resize()


  ###*
    Decore our textarea from `goog.ui.Textarea`.
    This is the painless way to resize the textarea to fit its content.

    @protected
  ###
  decorate_: ->
    @textarea_ = new goog.ui.Textarea @getOptions().value
    @textarea_.decorate @getElement()


  ###*
    Sets the value and calls the resize method to adjust height of the textarea.

    @export
    @override
  ###
  setValue: (value) ->
    super

    @resize()


  ###*
    Helper method to resize textarea to fit height for the value inside.

    @export
  ###
  resize: ->
    return unless @textarea_

    @textarea_.resize()


  ###*
    Disposes the goog.ui.Textarea instance and calls the super to continue.

    @export
    @override
  ###
  destroy: ->

    unless @isDestroyed()
      @textarea_.disposeInternal()
      @textarea_ = null

    super
