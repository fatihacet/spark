goog.provide 'spark.core.Object'

goog.require 'spark.utils'
goog.require 'goog.events.EventTarget'


###*
  Base object class which provides custom event management.
  In theory, every framework class should extend this class.
###
class spark.core.Object extends goog.events.EventTarget

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {goog.events.EventTarget}
  ###
  constructor: (options = {}, data) ->

    super

    @setOptions options  if options
    @setData data        if data

    @setUid_()


  ###*
    Sets options object of this class.
    @export
    @param {!Object} options Options object.
  ###
  setOptions: (options) ->
    @options = options


  ###*
    Returns all options object.
    @export
    @return {Object} Options object.
  ###
  getOptions: ->
    return @options


  ###*
    Returns value of a key in options object.
    @export
    @return {*} Value of key or null.
  ###
  getOption: (key) ->
    return @options[key] or null


  ###*
    Sets data of this class.
    @export
    @param {*} data Data passed to class.
  ###
  setData: (data) ->
    @data = data


  ###*
    Returns class data.
    @export
    @return {*} Class data.
  ###
  getData: ->
    return @data


  ###*
    Sets uid.
    @private
  ###
  setUid_: ->
    @uid_ = spark.utils.getUid()


  ###*
    Return unique id.

    @export
    @return {string} Unique id of this component.
  ###
  getUid: ->
    return @uid_


  ###*
    Adds an event listener.
    See also {@link goog.events.Listenable.prototype.listen}
    @export
    @param {!string} eventName Name of the event.
    @param {!Function} callback Callback function for the event.
    @return {goog.events.ListenableKey|number} Unique key for the listener.
  ###
  on: (eventName, callback) ->
    return goog.events.listen this, eventName, callback


  ###*
    Adds an event listener that is removed automatically after the listener
    fired once. See also {@link goog.events.Listenable.prototype.listenOnce}
    @export
    @param {!string} eventName Name of the event.
    @param {!Function} callback Callback function for the event.
    @return {goog.events.ListenableKey|number} Unique key for the listener.
  ###
  once: (eventName, callback) ->
    return goog.events.listenOnce this, eventName, callback


  ###*
    Dispatches an event and calls all listeners listening for events of this
    event. See also {@link goog.events.Listenable.prototype.dispatchEvent}
    @export
    @param {!string} eventName Name of the event.
    @param {*=} data Data which will passed to listeners
  ###
  emit: (eventName, data) ->
    @dispatchEvent { type: eventName, data }


  ###*
    Removes an event listener which was added with @on or @once.
    See also {@link goog.events.Listenable.prototype.unlisten}
    @export
    @param {!string} eventName Name of the event.
    @param {!Function} callback Callback function for the event.
    @return {boolean} Whether any listener was removed.
  ###
  off: (eventName, callback) ->
    return @unlisten eventName, callback
