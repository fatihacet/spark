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


  afterEach ->
    router.destroy()


  it 'should extend spark.core.Object', ->
    expect(router instanceof spark.core.Object).toBeTruthy()


  it 'should have a class level HistoryManager instance', ->
    expect(router.getHistoryManager() instanceof spark.core.HistoryManager).toBeTruthy()


  it 'should work when HistoryManager token explicitly set', ->
    router.getHistoryManager().setToken '/profile'

    expect(flag).toBe 'profile'


  it 'should have routes', ->
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


  it 'should pass token values to callback method', ->
    router.addRoute '/books', (values) ->
      expect(values).toBeNull()

    router.addRoute '/book/:bookName/page/:pagenumber/line/:line', (values) ->
      expect(values).toBeDefined()
      expect(values.bookName).toBe 'thgttg'
      expect(values.pagenumber).toBe '42'
      expect(values.line).toBe '21'

    router.route '/books'
    router.route '/book/thgttg/page/42/line/21'


  it 'should parse query string and pass it to callback method as second argument', ->
    router.addRoute '/search', (params, query) ->
      expect(params).toBeNull()
      expect(query).toBeDefined()
      expect(query.sortBy).toBe 'name'
      expect(query.publishedBefore).toBe '2012'
      expect(query.author).toBe 'jrrtolkien'

    router.addRoute '/books/:author', (params, query) ->
      expect(params.author).toBe 'jrrtolkien'
      expect(query.sortBy).toBe 'name'

    router.route '/search?sortBy=name&publishedBefore=2012&author=jrrtolkien'
    router.route '/books/jrrtolkien?sortBy=name'


  it 'should not call handleRoute_ for currently active route', ->
    counter = 0
    router.addRoute '/apps', -> ++counter

    router.route '/apps'

    expect(counter).toBe 1

    router.route '/apps'

    expect(counter).toBe 1


  it 'should add routes in options.routes', ->
    visitedRoute = null
    paramsObject = null
    queryObject  = null

    r = new spark.core.Router
      routes:
        '/users': (params, query) ->
          visitedRoute = '/users'
          paramsObject = params
          queryObject  = query

        '/users/:username': (params, query) ->
          visitedRoute = "/users/#{params.username}"
          paramsObject = params
          queryObject  = query

    routes = r.getRoutes()
    expect(routes['/users']).toBeDefined()
    expect(routes['/users/:username']).toBeDefined()
    expect(visitedRoute).toBeNull()
    expect(paramsObject).toBeNull()
    expect(queryObject).toBeNull()

    r.route '/users'

    expect(visitedRoute).toBe '/users'
    expect(paramsObject).toBeNull()
    expect(queryObject).toBeNull()

    r.route '/users/acet'

    expect(visitedRoute).toBe '/users/acet'
    expect(paramsObject).toBeDefined()
    expect(paramsObject.username).toBe 'acet'
    expect(queryObject).toBeNull()

    r.route '/users/facet?page=settings'

    expect(visitedRoute).toBe '/users/facet'
    expect(paramsObject).toBeDefined()
    expect(paramsObject.username).toBe 'facet'
    expect(queryObject).toBeDefined()
    expect(queryObject.page).toBe 'settings'


  it 'should route back and forward', (done) ->

    visitedRoute = null

    r = new spark.core.Router
      routes:
        '/users'  : -> visitedRoute = '/users'
        '/profile': -> visitedRoute = '/profile'

    expect(visitedRoute).toBeNull()

    r.route '/users'
    expect(visitedRoute).toBe '/users'

    r.route '/profile'
    expect(visitedRoute).toBe '/profile'

    r.back()

    r.once 'RouteChanged', (e) =>
      expect(e.data).toBe '/users'

      r.forward()

      r.once 'RouteChanged', (e) =>
        expect(e.data).toBe '/profile'

        done()
