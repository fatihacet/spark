goog.provide 'spark.utils'


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
