goog.provide 'spark.utils'
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

  ```coffee
    template = '<span>{{firstName}} {{lastName}} - @{{userName}}</span>'
    data     = firstName: 'Fatih', lastName: 'Acet', userName: 'fatihacet'

    spark.utils.parseTemplateTags template, data
  ```

  The code is above returns the following result.

  ```html
    <span>Fatih Acet - @fatihacet</span>
  ```

  @export
  @param {!string} template Template string will the parser executed on.
  @param {!Object} data Data of the template.
  @param {string=} defaultText Default text which will be replaced if the tag
  keyword doesn't exist in the given data.
  @return {string} Template with parsed and replaced data.
###
spark.utils.parseTemplateTags = (template, data, defaultText) ->
  TAG_REGEX_GLOBAL = /{{\s*(\w+)\s*}}/g
  TAG_REGEX_SINGLE = /{{\s*(\w+)\s*}}/
  defaultText    or= ''

  tags = template.match TAG_REGEX_GLOBAL

  return template unless tags

  tags.forEach (tag) ->
    keyword  = tag.match(TAG_REGEX_SINGLE)[1]
    value    = goog.string.htmlEscape(data[keyword]) or defaultText
    template = template.replace tag, value

  return template
