goog.provide 'spark.components.Textarea'

goog.require 'goog.ui.Textarea'


class spark.components.Textarea extends spark.components.Field

  ###*
    Texarea component of the framework.
    Extended from Field component to be consistent with rest of the framework.
    However it uses `goog.ui.Textarea` in the background. This is because
    goog handles resizing the textarea to fit its content pretty good. This
    might be a disadvantage for the filesize. I need to consider it in the future.

    @constructor
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.components.Field}
  ###
  constructor: (options = {}, data) ->

    options.tagName = 'textarea'

    super options, data

    @decorate_()
    @resize()


  ###*
    Decore our textarea from `goog.ui.Textarea`.
    This is the painless way to resize the textarea to fit its content.
  ###
  decorate_: ->
    @textarea_ = new goog.ui.Textarea @getOptions().value
    @textarea_.decorate @getElement()


  ###*
    Sets the value and calls the resize method to adjust height of the textarea.
    @override
  ###
  setValue: (value) ->
    super

    @resize()


  ###*
    Helper method to resize textarea.
  ###
  resize: ->
    return unless @textarea_

    @textarea_.resize()
