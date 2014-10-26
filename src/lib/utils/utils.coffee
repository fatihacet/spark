goog.provide 'spark.utils'


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

  return Array.prototype.join.call strings, ' '
