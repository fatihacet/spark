goog.provide 'spark.core.HistoryManager'

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
      @history = new goog.history.Html5History()
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
