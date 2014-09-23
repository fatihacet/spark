goog.provide 'spark.core.View'
goog.require 'spark.core.Object'
goog.require 'spark.utils'


###*
  Main View class of Spark Framework.
###
class spark.core.View extends spark.core.Object

  ###*
    @constructor
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.Object}
  ###

  constructor: (options = {}, data) ->

    options.cssClass     = "#{spark.utils.concatString 'view', options.cssClass}"
    options.tagName    or= 'div'
    options.domId      or= null
    options.template   or= null

    super options, data

    @children = []

    @createDomElement()
    @bindEventHandlers()


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
    Returns true if element has that class name.
    @param {!string} cssClass Name of the class which will be tested.
    @return {boolean} Whether element has a class name or not.
  ###
  hasClass: (cssClass) ->
    return @getElement().classList.contains cssClass


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


  ###*
    Appends a new view into this view's element as a child.
    @param {!spark.core.View} view A spark.View instance to append.
  ###
  appendView: (view) ->
    unless view instanceof spark.core.View
      error = 'View should be an instance of spark.core.View'
    else if @children.indexOf(view) > -1
      error = 'This view already appended to target view.'

    throw new Error error if error

    @children.push view
    @getElement().appendChild view.getElement()


  ###*
    Native setAttribute wrapper.
    @param {!string} name  Atrribute name.
    @param {!string} value Attribute value.
  ###
  setAttribute: (name, value) ->
    @getElement().setAttribute name, value


  ###*
    Native getAttribute wrapper.
    @param {!string} name  Atrribute name.
  ###
  getAttribute: (name) ->
    @getElement().getAttribute name


  ###*
    Native removeAttribute wrapper.
    @param {!string} name  Atrribute name.
  ###
  removeAttribute: (name) ->
    @getElement().removeAttribute name


  ###*
    @inheritDoc
    @override
    Override Object::on to support two way binding for DOM events.
  ###
  on: (eventName, callback) ->
    goog.events.listen this, eventName, callback

    if spark.core.View.EventTypes[eventName]
      goog.events.listen @getElement(), eventName, callback


  ###*
    @inheritDoc
    @override
    Override Object::once to support two way binding for DOM events.
  ###
  once: (eventName, callback) ->
    goog.events.listenOnce this, eventName, callback

    if spark.core.View.EventTypes[eventName]
      goog.events.listenOnce @getElement(), eventName, callback


  ###*
    @inheritDoc
    @override
    Override Object::off to remove events binded to DOM element.
  ###
  off: (eventName, callback) ->
    @unlisten eventName, callback
    goog.events.unlisten @getElement(), eventName, callback


  ###*
    This method is responsible from binding DOM events to the element of this view.
    It uses native DOM event names which is all lowercase. If your options
    has an event name and a callback function in eventHandlers object
    View will bind and listen those events automatically.
  ###
  bindEventHandlers: ->
    eventTypes = spark.core.View.EventTypes
    element    = @getElement()

    for key, callback of @getOptions().eventHandlers
      if eventTypes[key] and typeof callback is 'function'
        @on goog.events.EventType[eventTypes[key]], callback


  ###*
    A transposed map of goog.events.EventType
    @enum {string}
  ###
  @EventTypes = goog.object.transpose goog.events.EventType


# Example of export symbols

# goog.exportSymbol 'View', spark.core.View
# goog.exportSymbol 'View.prototype.setTemplate',  spark.core.View.prototype.setTemplate
# goog.exportSymbol 'View.prototype.removeClass',  spark.core.View.prototype.removeClass
# goog.exportSymbol 'View.prototype.getClassList', spark.core.View.prototype.getClassList
