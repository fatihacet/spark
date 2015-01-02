goog = goog or goog = require: ->

goog.require 'spark.validation'


describe 'spark.validation', ->

  describe 'hasText', ->


    it 'should return true for a string', ->
      expect(spark.validation.hasText('Fatih')).toBeTruthy()


    it 'should return false for an empty string', ->
      expect(spark.validation.hasText('')).toBeFalsy()


    it 'should return false if the given value is not a string', ->
      expect(spark.validation.hasText(5)).toBeFalsy()
      expect(spark.validation.hasText({})).toBeFalsy()
      expect(spark.validation.hasText([])).toBeFalsy()
      expect(spark.validation.hasText(no)).toBeFalsy()


  describe 'isNumeric', ->


      it 'should return true for a number', ->
        expect(spark.validation.isNumeric(12)).toBeTruthy()
        expect(spark.validation.isNumeric('1907')).toBeTruthy()


      it 'should return false for string and mixed values and other types', ->
        expect(spark.validation.isNumeric('12a')).toBeFalsy()
        expect(spark.validation.isNumeric('st12')).toBeFalsy()
        expect(spark.validation.isNumeric('acet')).toBeFalsy()
        expect(spark.validation.isNumeric({})).toBeFalsy()
        expect(spark.validation.isNumeric([])).toBeFalsy()
        expect(spark.validation.isNumeric(no)).toBeFalsy()


  describe 'isAlphabetic', ->


    it 'should return true for an alphabetic string', ->
      expect(spark.validation.isAlphabetic('Fatih')).toBeTruthy()
      expect(spark.validation.isAlphabetic('fatihacet')).toBeTruthy()


    it 'should return false if string has a number in it', ->
      expect(spark.validation.isAlphabetic('1988')).toBeFalsy()
      expect(spark.validation.isAlphabetic(2015)).toBeFalsy()
      expect(spark.validation.isAlphabetic('Fatih1988')).toBeFalsy()


    it 'should return false if string has punctuation chars', ->
      expect(spark.validation.isAlphabetic('score!!')).toBeFalsy()
      expect(spark.validation.isAlphabetic('=+!,;')).toBeFalsy()
      expect(spark.validation.isAlphabetic('fatih@fatihacet.com')).toBeFalsy()


  describe 'isEmail', ->


    it 'should return true for a valid email', ->
      expect(spark.validation.isEmail('acetfatih@gmail.com')).toBeTruthy()
      expect(spark.validation.isEmail('acetfatih@gmail.com.tr')).toBeTruthy()
      expect(spark.validation.isEmail('fatih@fatihacet.com')).toBeTruthy()
      expect(spark.validation.isEmail('th1sISVERYLONGname4ANemailAddressButItsVALID@thisisalsoveryLONGDOMA1NnamebutitISALSOValid.com')).toBeTruthy()

      # FIXME: + char is valid in email addresses
      # expect(spark.validation.isEmail('acetfatih+valid@gmail.com')).toBeTruthy()


    it 'should return false for not valid email', ->
      expect(spark.validation.isEmail('acetfatih')).toBeFalsy()
      expect(spark.validation.isEmail('acetfatih@')).toBeFalsy()
      expect(spark.validation.isEmail('acetfatih@gmail')).toBeFalsy()
      expect(spark.validation.isEmail('acetfatih.com')).toBeFalsy()


  describe 'hasLength', ->


    it 'should check string length correctly', ->
      expect(spark.validation.hasLength('spark', 5)).toBeTruthy()
      expect(spark.validation.hasLength('spark', 8)).toBeFalsy()
      expect(spark.validation.hasLength(123123123, 9)).toBeFalsy()


  describe 'hasMinLength', ->


    it 'should check string length correctly', ->
      expect(spark.validation.hasMinLength('spark', 3)).toBeTruthy()
      expect(spark.validation.hasMinLength('spark', 8)).toBeFalsy()
      expect(spark.validation.hasMinLength(1907, 2)).toBeFalsy()



  describe 'hasMaxLength', ->


    it 'should check string length correctly', ->
      expect(spark.validation.hasMaxLength('spark', 12)).toBeTruthy()
      expect(spark.validation.hasMaxLength('spark', 4)).toBeFalsy()
      expect(spark.validation.hasMaxLength(12345678, 20)).toBeFalsy()


  describe 'isEqual', ->


    it 'should return correct value for isEqual checks', ->
      expect(spark.validation.isEqual(3, 3)).toBeTruthy()
      expect(spark.validation.isEqual('3', '3')).toBeTruthy()
      expect(spark.validation.isEqual('fatih', 'fatih')).toBeTruthy()
      expect(spark.validation.isEqual(no, no)).toBeTruthy()
      expect(spark.validation.isEqual('fatih', 'acet')).toBeFalsy()
      expect(spark.validation.isEqual('3', 3)).toBeFalsy()
      expect(spark.validation.isEqual('3', '5')).toBeFalsy()


  describe 'isNotEqual', ->


    it 'should return true for same types', ->
      expect(spark.validation.isNotEqual(3, 3)).toBeFalsy()
      expect(spark.validation.isNotEqual('3', '3')).toBeFalsy()
      expect(spark.validation.isNotEqual('fatih', 'fatih')).toBeFalsy()
      expect(spark.validation.isNotEqual('fatih', 333)).toBeTruthy()
      expect(spark.validation.isNotEqual(no, no)).toBeFalsy()
      expect(spark.validation.isNotEqual(no, yes)).toBeTruthy()
      expect(spark.validation.isNotEqual('fatih', 'acet')).toBeTruthy()
      expect(spark.validation.isNotEqual('3', 5)).toBeTruthy()
      expect(spark.validation.isNotEqual('3', '5')).toBeTruthy()


  describe 'regex', ->


    it 'should test regexes for the given value', ->

      expect(spark.validation.regex('fatih', /\w+/)).toBeTruthy()
      expect(spark.validation.regex(1212311, /\d+/)).toBeTruthy()
