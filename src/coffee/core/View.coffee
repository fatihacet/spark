goog.provide 'spark.core.View'
goog.require 'spark.core.Object'
goog.require 'spark.utils'


###*
  Main View class of Spark Framework.
###
class spark.core.View extends spark.core.Object

  ###*
    @constructor
    @param   {Object} options Class options.
    @param   {*} data Class data
    @extends {goog.object.Object}
  ###

  constructor: (options, data) ->

    options.cssClass     = "#{spark.utils.concatString 'view', options.cssClass}"
    options.tagName    or= 'div'
    options.domId      or= null
    options.template   or= null

    super options, data

    @createDomElement()


  ###*
    Creates the element with the configuration passed to constructor.
  ###
  createDomElement: ->
    {tagName, domId, cssClass, template} = @getOptions()

    @element = document.createElement tagName
    @setClass cssClass
    @setDomId domId if domId
    @setTemplate template if template


  ###*
    Sets DOM id.
    @param {!string} domId Id of the element.
  ###
  setDomId: (domId) ->
    @getElement().id = domId


  ###*
    Returns the DOM id if exists, otherwise it will return null
    @return {string|null}
  ###
  getDomId: ->
    return @getElement().id or null


  ###*
    Sets the class name of element. This will override existing class names.
    Use `@addClass` if you want to add new class name to the element.
    @param {!string} cssClass Class name.
  ###
  setClass: (cssClass) ->
    @getElement().className = cssClass if cssClass


  ###*
    Returns class name of the element.
    @return {string} Class name.
  ###
  getClass: ->
    return @getElement().className


  ###*
    Returns class list of the element.
    @return {Array} List of class names.
  ###
  getClassList: ->
    return @getElement().classList


  ###*
    Adds new class name to element.
    @param {!string} cssClass New class name for the element.
  ###
  addClass: (cssClass) ->
    @getElement().classList.add cssClass if cssClass


  ###*
    Remove a class name from the element.
    @param {!string} cssClass Name of the class which will be removed.
  ###
  removeClass: (cssClass) ->
    @getElement().classList.remove cssClass if cssClass


  ###*
    Returns the DOM element.
    @return {Node} DOM element of this view.
  ###
  getElement: ->
    return @element


  ###*
    Very basic support of templating. Spark Framework will provide much more
    powerful templating solution but that's better than nothing for now.
    @param {!string} template HTML markup of the element.
  ###
  setTemplate: (template) ->
    @getElement().innerHTML = template
