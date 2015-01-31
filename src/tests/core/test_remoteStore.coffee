goog = goog or goog = require: ->

goog.require 'spark.core.RemoteStore'


apiKey = window.__env__.MONGOLAB_API_KEY
url    = "https://api.mongolab.com/api/1/databases/spark-fw/collections/users/{{_id}}?apiKey=#{apiKey}"

urlGetter = (type) ->
  _id = ''

  if type in [ 'GET', 'PUT', 'DELETE']
    if @get('_id')
      _id = @get('_id')['$oid']
    else if @options._id
      _id = @options._id

  return url.replace('{{_id}}', _id)

options = url: urlGetter


describe 'spark.core.RemoteStore', ->


  it 'should extends spark.core.Store', ->
    rs = new spark.core.RemoteStore

    expect(rs instanceof spark.core.Store).toBeTruthy()


  it 'should save a new store with empty data', (done) ->
    rs = new spark.core.RemoteStore options

    rs.save (err, data) ->
      expect(err).toBeNull()
      expect(data).toBeDefined()
      expect(data._id).toBeDefined()
      rs.remove()
      done()


  it 'should save a store with initial data', (done) ->
    rs = new spark.core.RemoteStore options, name: 'Fatih', username: 'facet'

    rs.save (err, data) ->
      expect(data.name).toBe 'Fatih'
      expect(data.username).toBe 'facet'
      rs.remove()
      done()


  it 'should update the store after saved', (done) ->
    rs = new spark.core.RemoteStore options, age: 25

    rs.save (err, data) ->
      expect(data.age).toBe 25

      rs.set 'age', 26

      rs.save (err, newData) ->
        expect(newData.age).toBe 26
        expect(rs.get('age')).toBe 26
        rs.remove()
        done()


  it 'should fetch store data', (done) ->
    rs = new spark.core.RemoteStore options, age: 25

    rs.save (err, data) ->
      options._id = data._id.$oid

      rs2 = new spark.core.RemoteStore options
      rs2.fetch (err, data) ->
        expect(data.age).toBe 25
        rs.remove()
        rs2.remove()
        done()


  it 'should remove a store', (done) ->
    rs = new spark.core.RemoteStore options, name: 'acetz'

    rs.save (err, data) ->
      options._id = data._id.$oid

      rs.remove (err, data) ->
        rs2 = new spark.core.RemoteStore options

        rs2.fetch (err, data) ->
          expect(data).toBeNull()
          expect(err).toBe 'Not Found [404]'
          rs.remove()
          rs2.remove()
          done()


  it 'should handle error for save', (done) ->
    rs = new spark.core.RemoteStore { url: 'http://not-valid.com' }

    rs.save (err, data) =>
      expect(err).toBeDefined()
      done()


  it 'should handle error for remove', (done) ->
    rs = new spark.core.RemoteStore { url: 'http://not-valid.com' }

    rs.remove (err, data) =>
      expect(err).toBeDefined()
      done()


  it 'should emit events for results', (done) ->
    a  = no
    b  = no
    rs = new spark.core.RemoteStore options, { name: 'acet', userid: 1 }
    rs.save()

    rs.on 'Saved', ->
      rs.remove()
      a = yes

      rs2 = new spark.core.RemoteStore { url: 'http://not-valid.com' }
      rs2.save()
      rs2.on 'SaveFailed', ->
        b = yes

        expect(a).toBeTruthy()
        expect(b).toBeTruthy()
        done()
