goog.provide 'spark.core.HistoryManager'
goog.provide 'spark.core.HistoryManager.TokenTransformer'

goog.require 'spark.core.Object'
goog.require 'spark.components.Input'
goog.require 'goog.History'
goog.require 'goog.history.Html5History'


class spark.core.HistoryManager extends spark.core.Object

  ###*
    HistoryManager class for Spark Framework to handle hashbang or push state
    navigations. This class uses classic hashbang routes but if you want to
    use HTML5 History API you can also use it. Pass `useHtml5History` option as
    true. Make sure your browser supports HTML5 History API. HistoryManager can
    be used as standalone but it's more powerful with Router. You should listen
    `Navigated` event to use HistoryManager when you use it standalone.

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
    options.pathPrefix      or= options['pathPrefix']      or ''
    options.useHtml5History or= options['useHtml5History']  ? no

    super options, data

    isHtml5HistorySupported = goog.history.Html5History.isSupported()
    {useHtml5History} = options

    if isHtml5HistorySupported and useHtml5History
      @tokenTransformer = new spark.core.HistoryManager.TokenTransformer
      @history = new goog.history.Html5History null, @tokenTransformer
      @history.setPathPrefix  options.pathPrefix
      @history.setUseFragment no
    else
      @history = new goog.History undefined, undefined, @getHistoryInput_()

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
    Returns a input element to give goog's History class. This prevents Firefox
    to reload the page. Also Firefox was throwing a security error on localhost
    when HistoryManager constructed. So this trick will also fix that issue too.

    @private
  ###
  getHistoryInput_: ->
    @historyInput_ = new spark.components.Input()
    return @historyInput_.getElement()


  ###*
    Destroys the HistoryManager and goog.history instance.

    @export
    @override
  ###
  destroy: ->
    unless @isDestroyed()
      @history.disposeInternal()
      @history = null

      @historyInput_.destroy()
      @tokenTransformer = null

    super


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
class spark.core.HistoryManager.TokenTransformer

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
