goog.provide 'spark.object.Object'
goog.require 'goog.events.EventTarget'


###*
  Base object class which provides custom event management.
  In theory, every framework class should extend this class.
###
class spark.object.Object extends goog.events.EventTarget

  ###*
    @constructor
    @param   {Object} options Class options
    @param   {*} data Class data
    @extends {goog.events.EventTarget}
  ###
  constructor: (options = {}, data) ->

    super options, data

    @setOptions options  if options
    @setData data        if data

  setOptions: (options) -> @options = options

  getOptions: -> return @options

  getOption: (key) -> return @options[key] or null

  setData: (data) -> @data = data

  getData: -> return @data

  on: (eventName, callback) ->
    goog.events.listen this, eventName, callback

  once: (eventName, callback) ->
    goog.events.listenOnce this, eventName, callback

  emit: (eventName, data) ->
    @dispatchEvent { type: eventName, data }

  off: (eventName, callback) ->
    return @unlisten eventName, callback
