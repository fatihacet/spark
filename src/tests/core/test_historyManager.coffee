goog = goog or goog = require: ->
goog.history or= {}
goog.history.Html5History or= isSupported: ->

goog.require 'spark.core.HistoryManager'


describe 'spark.core.HistoryManager', ->


  historyManager  = null
  useHtml5History = -> goog.history.Html5History.isSupported = -> return yes
  useGoogHistory  = -> goog.history.Html5History.isSupported = -> return no
  getHtml5History = ->
    useHtml5History()
    return new spark.core.HistoryManager useHtml5History: yes

  getGoogHistory  = ->
    useGoogHistory()
    h = new spark.core.HistoryManager
    useHtml5History()
    return h

  beforeEach ->
    historyManager = getHtml5History()


  it 'should extend spark.core.Object', ->
    expect(historyManager instanceof spark.core.Object).toBeTruthy()


  it 'should have correct history instance for hashbang or pushstate', ->
    if goog.DEBUG
      expect(historyManager.history instanceof goog.history.Html5History).toBeTruthy()

      googHistoryManager = getGoogHistory()

      expect(googHistoryManager.history instanceof goog.History).toBeTruthy()


  it 'should change the url', ->
    historyManager.setToken 'hello-world'

    {href} = document.location
    expect(href.indexOf('#')).toBe -1
    expect(href.indexOf('hello-world')).toBeGreaterThan -1

    historyManager.setToken '/'
    {href} = document.location

    expect(href.indexOf('hello-world')).toBe -1

    if goog.DEBUG
      hashedHistory = getGoogHistory()
      hashedHistory.setToken 'hello-world'
      {href} = document.location

      expect(href.indexOf('#')).toBeGreaterThan -1
      expect(href.indexOf('hello-world')).toBeGreaterThan -1


  it 'should emit Navigated event with token as event.data', ->
    flag = null

    historyManager.on 'Navigated', (e) -> flag = e.data
    historyManager.setToken '/hello'

    expect(flag).toBe '/hello'


  it 'should have path prefix if a pathPrefix option passed', ->
    hm = new spark.core.HistoryManager
      pathPrefix: 'prefix'
      useHtml5History: yes

    hm.setToken '/world'

    expect(document.location.href.indexOf('/prefix/world')).toBeGreaterThan -1
