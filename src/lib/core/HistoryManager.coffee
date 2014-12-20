goog.provide 'spark.core.HistoryManager'
goog.provide 'spark.core.HistorManager.TokenTransformer'

goog.require 'spark.core.Object'
goog.require 'goog.History'
goog.require 'goog.history.Html5History'


class spark.core.HistoryManager extends spark.core.Object

  ###*
    HistoryManager class for Spark Framework to handle hashbang or push state
    navigations. This class uses goog.history.Html5History if supported and
    fallbacks to goog.History. HistoryManager can be used as standalone but it's
    more powerful with Router. They will developerd to provide a fully working
    routing mechanism. You should listen `Navigated` event to use HistoryManager
    as standalone.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.Object}
  ###
  constructor: (options = {}, data) ->

    ###*
      Add a prefix to all routes. Only available for Html5History.
    ###
    options.pathPrefix or= options['pathPrefix'] or ''

    super options, data

    isHtml5HistorySupported = goog.history.Html5History.isSupported()

    if isHtml5HistorySupported
      tokenTransformer = new spark.core.HistorManager.TokenTransformer
      @history = new goog.history.Html5History null, tokenTransformer
      @history.setPathPrefix  options.pathPrefix
      @history.setUseFragment no
    else
      @history = new goog.History()

    goog.events.listen @history, goog.history.EventType.NAVIGATE, (e) =>
      @emit 'Navigated', e.token

    @history.setEnabled yes


  ###*
    Set token method to update history token and change the page url.

    @export
    @param {!string} token Token to change page url.
  ###
  setToken: (token) ->
    @history.setToken token



###*
  This class is an implementation of goog.history.Html5History.TokenTransformer.
  I needed to create a new TokenTransformer, because goog's TokenTransformer
  always appends the query string end of the created url. See http://goo.gl/8q40Cc
  That behaviour creates URLs like which has multiple `?` in it somethig like
  that `/books?sortBy=name&order=asc?query=alex?section=sci-fi`.
  I thought it's a bug and created my own TokenTransformer.

  @constructor
  @implements {goog.history.Html5History.TokenTransformer}
###
class spark.core.HistorManager.TokenTransformer

  ###*
    @override
  ###
  createUrl: (token, pathPrefix, location) ->
    return pathPrefix + token


  ###*
    @override
  ###
  retrieveToken: (pathPrefix, location) ->
    return location.pathname.substr pathPrefix.length
