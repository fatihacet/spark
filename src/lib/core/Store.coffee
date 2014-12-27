goog.provide 'spark.core.Store'

goog.require 'spark.core.Object'
goog.require 'goog.structs.Map'


class spark.core.Store extends spark.core.Object

  ###*

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.Object}
  ###
  constructor: (options = {}, data) ->

    super options

    @map_ = new goog.structs.Map data


  ###*
    Returns value of the given key from the store.

    @export
    @param {!string} key Key to be returned.
    @return {*}
  ###
  get: (key) ->
    return @map_.get key


  ###*
    Sets a new key value pair into store.

    @export
    @param {!string} key Key to be returned.
    @param {*} value Value of the key.
  ###
  set: (key, value) ->
    @map_.set key, value if value?


  ###*
    Returns keys array.

    @export
    @return {Array} Keys array.
  ###
  getKeys: ->
    return @map_.getKeys()


  ###*
    Returns values array.

    @export
    @return {Array} Values array.
  ###
  getValues: ->
    return @map_.getValues()
