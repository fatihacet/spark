goog.provide 'spark.core.Router'

goog.require 'spark.core.Object'
goog.require 'spark.core.HistoryManager'
goog.require 'goog.Uri'


class spark.core.Router extends spark.core.Object

  ###*
    Router manager class with built-in HistoryManager. Add routes to router and
    let Router to handle those routes along with HistoryManager.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.Object}
  ###
  constructor: (options = {}, data) ->

    options.useHtml5History ?= options['useHtml5History'] ? no
    options.routes or= options['routes'] or {}

    super options, data

    @historyManager = new spark.core.HistoryManager
      useHtml5History: options.useHtml5History

    @routes = {}
    @routeRegexes = {}
    @latestHandledRoute = null

    @historyManager.on 'Navigated', (e) =>
      path = e.data

      unless @latestHandledRoute is path
        @handleRoute_ path
        @latestHandledRoute = path

    {routes} = options

    for route, callback of routes
      @addRoute route, callback

    @init()

  ###*
    Add route with callback function to handle it.

    @export
    @param {!string} route Route path.
    @param {!Function} callback Callback to handle route action.
  ###
  addRoute: (route, callback) ->
    @routes[route] = callback
    @createRegexRoute_ route


  ###*
    Sets HistoryManager's token to update URL. When history token is changed
    HistoryManager will emit Navigated event. It's handled in here and it will
    call the correct callback for that route.

    @export
    @param {string} path Path to change the active route.
  ###
  route: (path) ->
    @historyManager.setToken path


  ###*
    Handle route for current page path. This is useful for handling the initial
    route of the page when page reload. This method should be called by user
    because Router doesn't actually know when all routes are added.

    TODO: Rename this method.
    @export
  ###
  init: ->
    {href, host, protocol} = document.location
    route = href.replace "#{protocol}//#{host}", ''

    @handleRoute_ route.replace '/#', ''


  ###*
    Returns the currently added routes.

    @export
    @return {Object} Routes object.
  ###
  getRoutes: ->
    return @routes


  ###*
    Returns spark.core.HistoryManager instance.

    @export
    @return {spark.core.HistoryManager} HistoryManager instance of the Router.
  ###
  getHistoryManager: ->
    return @historyManager


  ###*
    Execute callback function for particular route path.

    @private
  ###
  handleRoute_: (path) ->
    uri         = new goog.Uri path
    path        = uri.getPath()
    params      = null
    query       = null
    queryData   = uri.getQueryData()
    queryKeys   = queryData.getKeys()
    queryValues = queryData.getValues()

    if queryKeys.length
      query = {}
      for key, index in queryKeys
        query[key] = queryValues[index]

    cb = @routes[path] # basic route no param in it. so it will match directly
    return cb.call this, params, query if cb

    for route, regex of @routeRegexes
      values = regex.exec path # check if the route matches actual path
      continue unless values # this is not the route we are looking for

      cb     = @routes[route] # get callback of the route
      tokens = route.match /(:\w+)/g # get tokens like [ ':id', ':name' ]
      params = {}

      values.shift() # get token values, shift the full path rest will be values

      for token, index in tokens
        token = token.replace /:/g, '' # replace the `:` for correct token name
        params[token] = values[index]  # match token with values

      cb?.call this, params, query


  ###*
    Creates a regex for route to match actual page link with our routes.
    This method create a regex like `\/activity\/post\/(\w+)\/comment\/(\w+)$`
    to match this route `/activity/post/1/comment/2`. Here is the regex101
    https://www.regex101.com/r/wX2kB6/1

    @private
    @param {!string} route Actual page route.
    @return {RegExp|undefined} RegExp to match page URL.
  ###
  createRegexRoute_: (route) ->
    return if route.indexOf(':') is -1

    escapeSlashes = /\//g
    captureParams = /:(\w+)/g

    routeRegex = route
                   .replace escapeSlashes, '\/'
                   .replace captureParams, '(\\w+)'

    @routeRegexes[route] = new RegExp "#{routeRegex}$"


  ###*
    Destroy the router instance. If you want to create a new router instance
    for some reason, you have to destroy previously created instances. Otherwise
    HistoryManager events will be triggered multiple times.

    @expose
  ###
  destroy: ->
    @historyManager.disposeInternal()
