goog.provide 'spark.validation'


###*
  Validates the given string has length.

  @export
  @param {string} value The string to be tested.
  @return {boolean} The validation result.
###
spark.validation.isText = (value) ->
  if goog.isString value
    return value.length > 0

  return no


###*
  Validates the given value is number only.

  @export
  @param {string|number} value The number to be tested.
  @return {boolean} The validation result.
###
spark.validation.isNumeric = (value) ->
  return spark.validation.NUMBER_ONLY_REGEX.test value


###*
  Validates the given string has only alphabetic charactes in it.
  FIXME: Current implementation will not work for non English chars like ç, ü or
  Chinnese, Russian letters. It will also normalize whitespaces.

  @export
  @param {string} value The value to be tested.
  @return {boolean} The validation result.
###
spark.validation.isAlphabetic = (value) ->
  if goog.isString value
    return spark.validation.WORD_ONLY_REGEX.test value.split(' ').join('')

  return no


###*
  Validates email addresses.
  FIXME: Current implementation will not work email addresses which contains
  plus in it like acet+fatih@gmail.com. It's valid email bug my RegExp sucks!

  @export
  @param {string} value The email to be tested.
  @return {boolean} The validation result.
###
spark.validation.isEmail = (value) ->
  if goog.isString value
    return spark.validation.EMAIL_REGEX.test value

  return no


###*
  Validates that the given string has the exact length.

  @export
  @param {string} value The string to be tested.
  @return {boolean} The validation result.
###
spark.validation.hasLength = (value, length) ->
  if goog.isString value
    return value.length is length

  return no


###*
  Validates that the given string has minimum length.

  @export
  @param {string} value The string to be tested.
  @return {boolean} The validation result.
###
spark.validation.hasMinLength = (value, minLength) ->
  if goog.isString value
    return value.length >= minLength

  return no


###*
  Validates that the given string has maximum length.

  @export
  @param {string} value The string to be tested.
  @return {boolean} The validation result.
###
spark.validation.hasMaxLength = (value, maxLength) ->
  if goog.isString value
    return value.length <= maxLength

  return no


###*
  Validates that the given string is equal with another string.

  @export
  @param {string} value1 The base string to be compared with another.
  @param {string} value2 The string to be compared with the base one.
  @return {boolean} The validation result.
###
spark.validation.isEqual = (value1, value2) ->
  return value1 is value2


###*
  Validates that the given string is equal with another string.

  @export
  @param {string} value1 The base string to be compared with another.
  @param {string} value2 The string to be compared with the base one.
  @return {boolean} The validation result.
###
spark.validation.isNotEqual = (value1, value2) ->
  return value1 isnt value2


###*
  Tests the given RegExp with given string.

  @export
  @param {string} value The string which will be tested with the regex.
  @param {RegExp} regex RegExp to be tested with the given string.
  @return {boolean} The validation result.
###
spark.validation.regex = (value, regex) ->
  if regex instanceof RegExp
    return regex.test value

  return no


###*
  Validates the given value is a string.

  @export
  @param {*} value The value to be tested.
  @return {boolean} Whether the value is a string or not.
###
spark.validation.isString = (value) ->
  return goog.isString value


###*
  Validates the given value is a number.

  @export
  @param {*} value The value to be tested.
  @return {boolean} Whether the value is a number or not.
###
spark.validation.isNumber = (value) ->
  return goog.isNumber value


###*
  Validates the given value is a boolean.

  @export
  @param {*} value The value to be tested.
  @return {boolean} Whether the value is a boolean or not.
###
spark.validation.isBoolean = (value) ->
  return goog.isBoolean value


###*
  Validates the given value is a function.

  @export
  @param {*} value The value to be tested.
  @return {boolean} Whether the value is a function or not.
###
spark.validation.isFunction = (value) ->
  return goog.isFunction value


###*
  Validates the given value is an array.

  @export
  @param {*} value The value to be tested.
  @return {boolean} Whether the value is an array or not.
###
spark.validation.isArray = (value) ->
  return goog.isArray value


###*
  Validates the given value is an object.

  @export
  @param {*} value The value to be tested.
  @return {boolean} Whether the value is an object or not.
###
spark.validation.isObject = (value) ->
  return value and typeof value is 'object' and not value.length?


###*
  Returns validator function by type.

  @param {string} type Validation type. See `spark.validation.TYPE_TO_METHOD`
  @return {Function|null}
###
spark.validation.getValidator = (type) ->
  return spark.validation.TYPE_TO_METHOD[type] or null


spark.validation.EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
spark.validation.NUMBER_ONLY_REGEX = /^\d+$/
spark.validation.WORD_ONLY_REGEX = /^([a-zA-z]+)$/


spark.validation.TYPE_TO_METHOD =
  'required'   : spark.validation.isText
  'numeric'    : spark.validation.isNumeric
  'alphabetic' : spark.validation.isAlphabetic
  'email'      : spark.validation.isEmail
  'length'     : spark.validation.hasLength
  'minLength'  : spark.validation.hasMinLength
  'maxLength'  : spark.validation.hasMaxLength
  'equal'      : spark.validation.isEqual
  'notEqual'   : spark.validation.isNotEqual
  'regex'      : spark.validation.regex
