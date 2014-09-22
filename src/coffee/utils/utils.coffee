goog.provide 'spark.utils'


###*
  Concats strings together with a space.

  @param {...*} var_args A list of strings to concatenate.
  @return {string} The concatenation of {@code var_args}.
###
spark.utils.concatString = (var_args) ->
  strings = []

  for arg in arguments when typeof arg is 'string'
    strings.push arg

  return Array.prototype.join.call strings, ' '
