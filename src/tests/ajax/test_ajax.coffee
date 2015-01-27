goog = goog or goog = require: ->

goog.require 'spark.ajax'


describe 'spark.ajax', ->

  it 'should return default options', ->
    return yes unless goog.DEBUG

    defaults = spark.ajax.getOptions_()

    expect(defaults.type).toBe 'GET'
    expect(defaults.url).toBe ''
    expect(defaults.data).toBeNull()
    expect(defaults.dataType).toBeNull()
    expect(typeof defaults.success).toBe 'function'
    expect(typeof defaults.error).toBe 'function'
    defaults.success()
    defaults.error()


  it 'should make request', (done) ->

    spark.ajax.request
      url     : 'http://reqr.es/api/users/12'
      success : (response) ->
        expect(response.data.id).toBe 12
        expect(response.data.first_name).toBe 'maeby'
        done()


  it 'should call error callback when request failed', (done) ->
    succeed = no

    spark.ajax.request
      url     : 'http://reqr.es/api/users/23'
      success : -> succeed = yes
      error   : ->
        expect(succeed).toBeFalsy()
        done()


  it 'should not try JSON.parse for html outputs', (done) ->
    spark.ajax.request
      url     : '/'
      success : (data) ->
        expect(typeof data is 'string').toBeTruthy()
        done()


  it 'should do request with POST method', (done) ->
    spark.ajax.request
      url     : 'http://reqr.es/api/users'
      type    : 'POST'
      success : (data) ->
        expect(data.id).toBeDefined()
        expect(data.createdAt).toBeDefined()
        done()


  it 'should do request with DELETE method', (done) ->
    spark.ajax.request
      url     : 'http://reqr.es/api/users/2'
      type    : 'DELETE'
      success : (data) -> done()


  it 'should do POST request with object data', (done) ->
    spark.ajax.request
      url : 'http://reqr.es/api/users'
      data: name: 'morpheus', job : 'leader'
      type: 'POST'
      success: (data) ->
        expect(data.id).toBeDefined()
        expect(data.createdAt).toBeDefined()
        expect(data.name).toBe 'morpheus'
        expect(data.job).toBe 'leader'
        done()


  it 'should do POST request with a string data', (done) ->
    spark.ajax.request
      url : 'http://reqr.es/api/users'
      data: 'hello'
      type: 'POST'
      success: (data) ->
        expect(data.id).toBeDefined()
        expect(data.hello).toBeDefined()
        done()


  it 'should add data url as query string if method is GET', (done) ->
    spark.ajax.request
      type    : 'GET'
      url     : 'http://reqr.es/api/users'
      data    : a: 1, b: 2, c: 3
      success : (data, e) ->
        expect(data).toBeDefined()
        expect(e.target.getLastUri()).toBe 'http://reqr.es/api/users?a=1&b=2&c=3' if goog.DEBUG
        done()
