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
    @param {string} key Key to be returned.
    @return {*}
  ###
  get: (key) ->
    return @map_.get key


  ###*
    Sets a new key value pair into store.

    @export
    @param {string} key Key to be returned.
    @param {*} value Value of the key.
  ###
  set: (key, value) ->
    @map_.set key, value if value?


  ###*
    Removes a key from strore.

    @export
    @param {string} key Key to be removed.
    @return {boolean} Whether the key removed or not.
  ###
  unset: (key) ->
    @map_.remove key


  ###*
    Removes all keys from store.

    @export
  ###
  clear:->
    @map_.clear()


  ###*
    Returns `true` if the store has the given key.

    @export
    @param {string} key Key to be searched in store.
    @return {boolean} Whether the store has the key or not.
  ###
  has: (key) ->
    @map_.containsKey key


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
