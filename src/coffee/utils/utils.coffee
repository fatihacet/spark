goog.provide 'spark.utils'


###*
  Concats strings together with a space.
  TODO: It adds an extra space for undefined and null. It shouldn't.

  @param {...*} var_args A list of strings to concatenate.
  @return {string} The concatenation of {@code var_args}.
###
spark.utils.concatString = (var_args) ->
  return Array.prototype.join.call arguments, ' '
