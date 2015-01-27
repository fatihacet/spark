goog.provide 'spark.ajax'
goog.require 'goog.net.XhrIo'


###*
  Ajax request manager of Spark Framework. API is almost the same with jQuery's
  `$.ajax`. This means in most cases, changing `$.ajax` to `spark.ajax.request`
  would work.

  Your `options` object may contain `type`, `url`, `data`, `success`, `error`
  like keys to customize your Ajax request as would be in jQuery's `$.ajax`.

  The request method tries to be clever enough. If your response's content type
  header is `'application/json'` it will parse the response to be a JSON.
  Otherwise it won't touch the response. If your response header misses the
  correct content type header for JSON and you are sure that the response is a
  valid JSON, you are free to use `dataType: 'json'` in your options object to
  parse your data as JSON.

  Here is a sample Ajax request in Spark Framework.

  ```coffee
    spark.ajax.request
      url      : 'http://reqr.es/api/users/12'
      dataType : 'json' # optional if the JSON response header set.
      success  : (response) -> console.log response.data.first_name
      error    : -> console.log 'error'
  ```

  @export
  @param {Object=} options Options object to configure the Ajax request.
###
spark.ajax.request = (options) ->
  options = spark.ajax.getOptions_ options

  { type, url, data, dataType, success, error } = options

  callbackWrapper = (e) =>
    target   = e.target
    reqError = target.getLastError()

    if reqError
      return error.call spark.ajax, error, e

    contentType = target.getResponseHeader goog.net.XhrIo.CONTENT_TYPE_HEADER
    isJSON      = contentType.indexOf('application/json') > -1
    response    = if isJSON then target.getResponseJson() else target.getResponse()

    success.call spark.ajax, response, e

  goog.net.XhrIo.send url, callbackWrapper, type


###*
  Returns default options for spark.ajax.request method.

  @private
  @param {Object=} options Config object.
  @returns {Object} Final object fallbacked with defaults.
###
spark.ajax.getOptions_ = (options = {}) ->
  options    =
    type     : options.type     or= options['type']     or 'GET'
    url      : options.url      or= options['url']      or ''
    data     : options.data     or= options['data']     or null
    dataType : options.dataType or= options['dataType'] or null
    success  : options.success  or= options['success']  or ->
    error    : options.error    or= options['error']    or ->

  return options
