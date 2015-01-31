goog.provide 'spark.core.RemoteStore'

goog.require 'spark.core.Store'
goog.require 'spark.validation'
goog.require 'spark.ajax'


class spark.core.RemoteStore extends spark.core.Store

  ###*
    RemoteStore implementation of the Spark Framework. Makes HTTP GET, POST
    PUT or DELETE request to manage the data on the server. Use fetch to get or
    update the data, use save to write data back to server or remove to delete
    the data from the server.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.Store}
  ###
  constructor: (options = {}, data) ->

    options.url   or= options['url']   or null
    options.idKey or= options['idKey'] or '_id'

    super options, data


  ###*
    Saves the data to server or updates it on the server. If your data has
    `options.idKey` property it will make a PUT request to update the data
    otherwise it will make a `POST` request to save it to server. If server
    response includes an `options.idKey` RemoteStore will save the id and use
    it to update the data.

    @export
    @param {Function=} callback Callback function to handle the request.
  ###
  save: (callback) ->

    { PUT, POST } = spark.ajax.RequestTypes
    { idKey }     = @getOptions()
    method        = if @get idKey then PUT else POST
    object        = @toObject()

    delete object[idKey]

    spark.ajax.request
      type    : method
      url     : @getUrl_ method
      data    : object
      success : (data) =>
        @set idKey, data[idKey] if method is 'POST'
        @emit spark.core.RemoteStore.EventTypes.SAVED, data
        callback.call this, null, data if callback
      error: (err) =>
        @emit spark.core.RemoteStore.EventTypes.SAVE_FAILED, err
        callback.call this, err, null if callback


  ###*
    Fetches the store data from server. Uses idKey property to find the store
    on the server. You can use fetch to populate the store from the server or
    when you want to update store data with latest data on the server.
    Callback is optional. Depending the result `EventTypes.FETCHED` or
    `EventTypes.FETCH_FAILED` events will be triggered.

    @export
    @param {Function=} callback Callback function to handle the request.
  ###
  fetch: (callback) ->
    method = spark.ajax.RequestTypes.GET

    spark.ajax.request
      type    : method
      url     : @getUrl_ method
      success : (data) =>
        for key, value of data
          @set key, value

        @emit spark.core.RemoteStore.EventTypes.FETCHED, data
        callback.call this, null, data if callback
      error: (err) =>
        @emit spark.core.RemoteStore.EventTypes.FETCH_FAILED, err
        callback.call this, err, null if callback


  ###*
    Removes a store on the server by making a HTTP DELETE request. Handle the
    response with a callback or emitted events. Depending the response
    `EventTypes.REMOVED` or `EventTypes.REMOVE_FAILED` events will be emitted.

    @export
    @param {Function=} callback Callback function to handle the request.
  ###
  remove: (callback) ->
    method = spark.ajax.RequestTypes.DELETE

    spark.ajax.request
      type    : method
      url     : @getUrl_ method
      success : (data) =>
        @emit spark.core.RemoteStore.EventTypes.REMOVED, data
        callback.call this, null, data if callback
      error: (err) =>
        @emit spark.core.RemoteStore.EventTypes.REMOVE_FAILED, err
        callback.call this, err, null if callback


  ###*
    This method allows RemoteStore to work with customized urls for different
    request types. If the `url` in `options` is string then RemoteStore will
    use it and don't touch it. It may also be a function which will return
    different urls for different request types. See the following example.

    ```coffee
      new spark.core.RemoteStore
        url: (type) ->
          if type is 'GET'
            return '/user/list'
          else if type is 'POST'
            return '/user'
    ```

    @private
    @param {string} method Request type to customize request url.
    @return {string} The request url.
  ###
  getUrl_: (method) ->
    { url } = @getOptions()

    if spark.validation.isFunction url
      url = url.call this, method

    return url


  ###*
    Emitted event types.

    @enum {string}
  ###
  @EventTypes =
    SAVED          : 'Saved'
    SAVE_FAILED    : 'SaveFailed'
    FETCHED        : 'Fetched'
    FETCH_FAILED   : 'FetchFailed'
    REMOVED        : 'Removed'
    REMOVE_FAILED  : 'RemoveFailed'
