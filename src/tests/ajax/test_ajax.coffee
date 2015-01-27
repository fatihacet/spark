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
