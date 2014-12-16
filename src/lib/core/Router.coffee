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

    super options, data

    @historyManager = new spark.core.HistoryManager
    @routes = {}
    @routeRegexes = {}

    @historyManager.on 'Navigated', (e) =>
      @handleRoute_ e.data


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
    Creates a regex for route to match actual page link with our routes.
    This method create a regex like `\/activity\/post\/(\w+)\/comment\/(\w+)$`
    to match this route `/activity/post/1/comment/2`. Here is the regex101
    https://www.regex101.com/r/wX2kB6/1

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
    Sets HistoryManager's token to update URL. When history token is changed
    HistoryManager will emit Navigated event. It's handled in here and it will
    call the correct callback for that route.

    @export
    @param {string} path Path to change the active route.
  ###
  route: (path) ->
    @historyManager.history.setToken path


  ###*
    Execute callback function for particular route path.

    @export
    @private
  ###
  handleRoute_: (path) ->
    cb = @routes[path]
    return cb() if cb

    for route, regex of @routeRegexes when regex.exec path
      cb = @routes[route]

    cb() if cb # TODO: Pass route params.


  ###*
    Handle route for current page path. This is useful for handling the initial
    route of the page when page reload. This method should be called by user
    because Router doesn't actually know when all routes are added.

    TODO: Rename this method.
    @export
  ###
  init: ->
    uri = new goog.Uri document.location.href
    @handleRoute_ uri.getPath()
