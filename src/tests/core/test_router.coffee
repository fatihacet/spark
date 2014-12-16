goog = goog or goog = require: ->

goog.require 'spark.core.Router'


describe 'spark.core.Router', ->

  flag   = null
  router = null

  beforeEach ->
    flag   = null
    router = new spark.core.Router
    router.addRoute '/activity',    -> flag = 'activity'
    router.addRoute '/profile',     -> flag = 'profile'
    router.addRoute '/profile/:id', -> flag = 'profile with id'


  it 'should extend spark.core.Object', ->
    expect(router instanceof spark.core.Object).toBeTruthy()


  it 'should have a class level HistoryManager instance', ->
    expect(router.getHistoryManager() instanceof spark.core.HistoryManager).toBeTruthy()


  it 'should work when HistoryManager token explicitly set', ->
    router.getHistoryManager().setToken '/profile'

    expect(flag).toBe 'profile'


  it 'should have routes', ->
    router.init()
    routes = router.getRoutes()

    expect(routes['/activity']).toBeDefined()
    expect(routes['/profile/:id']).toBeDefined()


  it 'should have regexes for routes', ->
    routes  = router.getRoutes()
    regexes = router.routeRegexes

    if regexes
      expect(regexes['/activity']).not.toBeDefined()
      expect(regexes['/profile/:id']).toBeDefined()
      expect(regexes['/profile/:id'].toString().indexOf('(\\w+)')).toBeGreaterThan -1


  it 'should route', ->
    expect(flag).toBeNull()

    router.route '/activity'

    expect(flag).toBe 'activity'

    router.route '/profile/fatihacet'

    expect(flag).toBe 'profile with id'

    router.route '/this/route/is/not/added/to/router'

    expect(flag).toBe 'profile with id'
