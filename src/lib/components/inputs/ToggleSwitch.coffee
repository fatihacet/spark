goog.provide 'spark.components.ToggleSwitch'

goog.require 'spark.components.LabeledInput'


class spark.components.ToggleSwitch extends spark.components.LabeledInput

  ###*
    iOS style on-off switch for Spark Framework.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.components.LabeledInput}
  ###
  constructor: (options = {}, data) ->

    options.cssClass     = @getCssClass options, 'toggle-switch'
    options.inputFirst   = yes
    options.name       or= options['name']    or null
    options.checked     ?= options['checked']  ? no

    labelOptions = options.labelOptions or options['labelOptions'] or {}
    labelOptions.label = ''

    inputOptions = options.inputOptions or options['inputOptions'] or {}
    inputOptions.type = 'checkbox'

    inputOptions.name = options.name if options.name

    options.labelOptions = labelOptions
    options.inputOptions = inputOptions

    super options, data

    if options.checked
      @check()

    @input.on 'StateChanged', (e) =>
      @emit 'StateChanged', e.data


  ###*
    Check the element.
    @export
  ###
  check: ->
    @input.check()


  ###*
    Uncheck the element.
    @export
  ###
  uncheck: ->
    @input.uncheck()


  ###*
    Returns element's checked state.
    @export
    @return {boolean} Checked state.
  ###
  isChecked: ->
    @input.isChecked()
