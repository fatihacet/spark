goog = goog or goog = require: ->

goog.require 'spark.utils'


describe 'spark.utils.concatString', ->


  it 'should concat strings', ->
    str = spark.utils.concatString 'hello', 'world'

    expect(str).toBe 'hello world'


  it 'should not include undefined and null values while concatenating strings', ->
    str = spark.utils.concatString 'hello', undefined, 'awesome', [], {}, null, 'world', 5, [], {}

    expect(str).toBe 'hello awesome world'


  it 'should return unique array for string values', ->
    str = spark.utils.concatString 'a', 'a b', 'd', 'a b c d'

    expect(str).toBe 'a b d c'


describe 'spark.utils.getUid', ->


  it 'should return a string', ->
    uid = spark.utils.getUid()

    expect(typeof uid).toBe 'string'


  it 'should not same id when called more then once', ->
    uid = spark.utils.getUid()
    uie = spark.utils.getUid()

    expect(uid).not.toBe uie


describe 'spark.utils.parseTemplateTags', ->

  it 'should parse tags', ->
    template = '<div>{{name}}</div>'

    expect(spark.utils.parseTemplateTags(template, { name: 'acet' })).toBe '<div>acet</div>'


  it 'should return the same string if there is no tag in it', ->
    t = '<div></div>'

    expect(spark.utils.parseTemplateTags(t, {})).toBe t


  it 'should parse tags with trailing whitespace or whitespaces', ->
    template1 = '<div>{{name }}</div>'
    template2 = '<div>{{text         }}</div>'

    expect(spark.utils.parseTemplateTags(template1, { name: 'fatih' })).toBe '<div>fatih</div>'
    expect(spark.utils.parseTemplateTags(template2, { text: 'lorem' })).toBe '<div>lorem</div>'


  it 'should parse tags with facing whitespace or whitespaces', ->
    template1 = '<div>{{   name}}</div>'
    template2 = '<div>{{ text}}</div>'

    expect(spark.utils.parseTemplateTags(template1, { name: 'acet' })).toBe '<div>acet</div>'
    expect(spark.utils.parseTemplateTags(template2, { text: 'sit ' })).toBe '<div>sit </div>'


  it 'should parse tags with has whitespace or whitespaces', ->
    template1 = '<div>{{ name }}</div>'
    template2 = '<div>{{    text     }}</div>'

    expect(spark.utils.parseTemplateTags(template1, { name: 'didem' })).toBe '<div>didem</div>'
    expect(spark.utils.parseTemplateTags(template2, { text: 'ipsum' })).toBe '<div>ipsum</div>'


  it 'should parse multiple tags', ->
    template = '<div>{{firstName}} {{lastName}} - {{ city }}</div>'
    data     = firstName: 'Fatih', lastName: 'Acet', city: 'Istanbul'

    expect(spark.utils.parseTemplateTags(template, data)).toBe '<div>Fatih Acet - Istanbul</div>'


  it 'should parse complex templates', ->
    template = """
      <div class="user">
        <img class="avatar" src="/avatars/{{username}}.png" />
        <div class="details">
          <span>{{firstName}} {{lastName}}</span>
          <p>@{{username}}</p>
        </div>
    """

    expected = """
      <div class="user">
        <img class="avatar" src="/avatars/fatihacet.png" />
        <div class="details">
          <span>Fatih Acet</span>
          <p>@fatihacet</p>
        </div>
    """

    data =
      firstName: 'Fatih'
      lastName : 'Acet'
      username : 'fatihacet'

    expect(spark.utils.parseTemplateTags(template, data)).toBe expected


  it 'should put default text if key not exists in data', ->
    t = '<div>isOnline: {{isOnline}}</div>'

    expect(spark.utils.parseTemplateTags(t, {})).toBe '<div>isOnline: </div>'
    expect(spark.utils.parseTemplateTags(t, {}, 'N/A')).toBe '<div>isOnline: N/A</div>'


  it 'should html escape the value in data', ->
    t = '{{code}}'
    d = code: '<div></div>'

    expect(spark.utils.parseTemplateTags(t, d)).toBe '&lt;div&gt;&lt;/div&gt;'


  it 'should extract the value from nested variables', ->
    t = """
      <div>{{ a.b }}<div>
      <span>{{a.c}}</span>
      <p>{{      a.d.e }} </p>
      <p> {{ a.d.f}} </p>
    """

    e = """
      <div>hello<div>
      <span>world</span>
      <p>again </p>
      <p> and again </p>
    """

    d =
      a:
        b: 'hello'
        c: 'world'
        d:
          e: 'again'
          f: 'and again'

    expect(spark.utils.parseTemplateTags(t, d)).toBe e

