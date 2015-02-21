goog.provide 'spark.utils'

goog.require 'spark.validation'
goog.require 'goog.string'


counter = Math.floor Math.random() * 2147483648


###*
  Returns a unique id. Ported from TartJS.
  https://github.com/tart/tartJS/blob/master/tart/tart.js#L26 -- amcalar <3

  @export
  @return {string} Unique id.
###
spark.utils.getUid = ->
  return (counter++).toString 36


###*
  Concats strings together with a space.

  @export
  @param {...*} var_args A list of strings to concatenate.
  @return {string} The concatenation of {@code var_args}.
###
spark.utils.concatString = (var_args) ->
  strings = []

  for arg in arguments when typeof arg is 'string'
    if arg.indexOf(' ') > -1
      for item in arg.split ' '
        strings.push item if strings.indexOf(item) is -1
    else
      strings.push arg

  return strings.join ' '


###*
  Replaces mustache like template tags with the value in the given data.
  Currently only parses variable tags like `{{name}}`. I am planning to make it
  more powerful with upcoming releases. Tags are not whitespace sensitive.
  So `{{ name }}` and `{{name}}` and `{{   name   }}` are the same. Here is a
  usage example. Replaced values are html escaped to avoid possible XSS attempt.
  You can also use nested variables to walk in your object keys.

  ```coffee
    template = """
      <img src="{{ details.avatar.full }}" />
      <span>{{firstName}} {{lastName}} - @{{userName}}</span>
    """
    data     =
      firstName   : 'Fatih'
      lastName    : 'Acet'
      userName    : 'fatihacet'
      details     :
        avatar    :
          full    : 'fatihacet.png'

    spark.utils.parseTemplate template, data
    # will return "<img src="fatihacet.png" />\n<span>Fatih Acet - @fatihacet</span>"
  ```

  @export
  @param {!string} template Template string will the parser executed on.
  @param {*=} data Data of the template. # FIXME: annotation, should be `{Object}`
  @param {string=} defaultText Default text which will be replaced if the tag
  keyword doesn't exist in the given data.
  @return {string} Template with parsed and replaced data.
###
spark.utils.parseTemplate = (template, data, defaultText) ->
  TAG_MATCHER_REGEX = /({{\s*[a-zA-z0-9.]+\s*}})/g
  TAG_CAPTURE_REGEX = /(\s*[a-zA-z0-9.]+\s*)/
  defaultText    or= ''

  tags = template.match TAG_MATCHER_REGEX

  return template unless tags

  tags.forEach (tag) ->
    keyword  = goog.string.trim tag.match(TAG_CAPTURE_REGEX)[1]
    parts    = keyword.split '.'
    value    = data[parts.shift()]

    if parts.length
      for part, index in parts
        value = value[part]

    value    = if spark.validation.isString value then value else defaultText
    template = template.replace tag, goog.string.htmlEscape value or defaultText

  return template
