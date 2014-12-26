goog.provide 'spark.core.View'

goog.require 'spark.core.Object'
goog.require 'spark.utils'
goog.require 'goog.dom'
goog.require 'goog.style'


class spark.core.View extends spark.core.Object

  ###*
    Main View class of Spark Framework. It is basically a div element. But it's
    configurable to be any kind of element. It's event driven. This means you
    can attach and listen custom events with your data. It also supports native
    DOM events.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.Object}
  ###
  constructor: (options = {}, data) ->

    options.tagName       or= options['tagName']       or 'div'
    options.width         or= options['width']         or null
    options.height        or= options['height']        or null
    options.domId         or= options['domId']         or null
    options.template      or= options['template']      or null
    options.renderTo      or= options['renderTo']      or null
    options.attributes    or= options['attributes']    or {}
    options.events        or= options['events']        or {}
    options.disabled       ?= options['disabled']       ? no
    @getCssClass options

    super options, data

    @children = []

    @createDomElement()
    @bindEvents()

    @disable() if options.disabled

    @setWidth  options.width    if options.width
    @setHeight options.height   if options.height
    @render    options.renderTo if options.renderTo


  ###*
    Creates the element with the configuration passed to constructor.
  ###
  createDomElement: ->
    {tagName, domId, cssClass, template, attributes} = @getOptions()

    @element = document.createElement tagName
    @setClass cssClass
    @setDomId domId if domId
    @setTemplate template if template
    @setAttribute key, value for key, value of attributes


  ###*
    Sets DOM id.

    @export
    @param {!string} domId Id of the element.
  ###
  setDomId: (domId) ->
    @getElement().id = domId


  ###*
    Returns the DOM id if exists, otherwise it will return null.

    @export
    @return {string|null}
  ###
  getDomId: ->
    return @getElement().id or null


  ###*
    Sets the class name of element. This will override existing class names.
    Use `@addClass` if you want to add new class name to the element.

    @export
    @param {!string} cssClass Class name.
  ###
  setClass: (cssClass) ->
    @getElement().className = cssClass


  ###*
    Returns class name of the element.

    @export
    @return {string} Class name.
  ###
  getClass: ->
    return @getElement().className


  ###*
    Returns class list of the element.

    @export
    @return {Array} List of class names.
  ###
  getClassList: ->
    return @getElement().classList


  ###*
    Adds new class name to element.

    @export
    @param {!string} cssClass New class name for the element.
  ###
  addClass: (cssClass) ->
    @getElement().classList.add cssClass


  ###*
    Remove a class name from the element.

    @export
    @param {!string} cssClass Name of the class which will be removed.
  ###
  removeClass: (cssClass) ->
    @getElement().classList.remove cssClass


  ###*
    Returns true if element has that class name.

    @export
    @param {!string} cssClass Name of the class which will be tested.
    @return {boolean} Whether element has a class name or not.
  ###
  hasClass: (cssClass) ->
    return @getElement().classList.contains cssClass


  ###*
    Returns the DOM element.

    @export
    @return {Element} DOM element of this view.
  ###
  getElement: ->
    return @element


  ###*
    Very basic support of templating. Spark Framework will provide much more
    powerful templating solution but that's better than nothing for now.

    @export
    @param {!string} template HTML markup of the element.
  ###
  setTemplate: (template) ->
    @getElement().innerHTML = template


  ###*
    Appends view into document's body.

    @export
  ###
  appendToDocumentBody: ->
    document.body.appendChild @getElement()
    @emit 'ViewHasParent'


  ###*
    Removes element from DOM if it is in DOM.

    @export
    @return {boolean} Whether element removed from document or not.
  ###
  removeFromDocument: ->
    element = @getElement()
    parent  = element.parentNode

    return no unless parent

    parent.removeChild element
    return yes


  ###*
    Appends a new view into this view's element as a child.

    @export
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
    view.emit 'ViewHasParent'


  ###*
    Native setAttribute wrapper.

    @export
    @param {!string} name  Atrribute name.
    @param {!string} value Attribute value.
  ###
  setAttribute: (name, value) ->
    @getElement().setAttribute name, value


  ###*
    Native getAttribute wrapper.

    @export
    @param {!string} name  Atrribute name.
  ###
  getAttribute: (name) ->
    @getElement().getAttribute name


  ###*
    Native removeAttribute wrapper.

    @export
    @param {!string} name  Atrribute name.
  ###
  removeAttribute: (name) ->
    @getElement().removeAttribute name


  ###*
    Disable view.

    @export
  ###
  disable: ->
    disabled = 'disabled'
    @addClass disabled
    @setAttribute disabled, disabled
    @disabled = yes


  ###*
    Enable view.

    @export
  ###
  enable: ->
    disabled = 'disabled'
    @removeClass disabled
    @removeAttribute disabled
    @disabled = no


  ###*
    Toggle view state. Disable if enabled, enable if disabled.

    @export
  ###
  toggle: ->
    if @isDisabled() then @enable() else @disable()


  ###*
    Returns the current disabled state of the button.

    @export
  ###
  isDisabled: ->
    return @disabled or no



  ###*
    Sets width of this view's DOM element.

    @export
    @param {string|number} width Width of the element. It can be string with
    'px' value or just number.
  ###
  setWidth: (width) ->
    goog.style.setWidth @getElement(), width


  ###*
    Sets height of this view's DOM element.

    @export
    @param {string|number} height Height of the element. It can be string with
    'px' value or just number.
  ###
  setHeight: (height) ->
    goog.style.setHeight @getElement(), height


  ###*
    Returns the width of the element.

    @export
    @return {number} View element width.
  ###
  getWidth: ->
    size = goog.style.getSize @getElement()
    return size.width


  ###*
    Returns the height of the element.

    @export
    @return {number} View element height.
  ###
  getHeight: ->
    size = goog.style.getSize @getElement()
    return size.height


  ###*
    Renders element into another View instance or a DOM element. Be aware that
    this method only appends the element of this class into another element.
    If the parent element is not in DOM, this method will not append the parent
    into DOM. Also you can use this method with `renderTo` option. If you pass
    `renderTo` as a View instance or DOM element, View will call render method
    by default.

    @export
    @param {spark.core.View|Element} target Target view or element to be rendered.
  ###
  render: (target) ->
    if target instanceof spark.core.View
      target.appendView this

    else if goog.dom.isElement target
      if target is document.body
        @appendToDocumentBody()
      else
        target.appendChild @getElement()
        @emit 'ViewHasParent'

    else
      throw new Error 'Render target should be View instance or a DOM element.'


  ###*
    Override Object::on to support two way binding for DOM events.

    @export
    @override
  ###
  on: (eventName, callback) ->
    if spark.core.View.EventTypes[eventName]
      goog.events.listen @getElement(), eventName, callback

    return goog.events.listen this, eventName, callback


  ###*
    Override Object::once to support two way binding for DOM events.

    @export
    @override
  ###
  once: (eventName, callback) ->
    if spark.core.View.EventTypes[eventName]
      goog.events.listenOnce @getElement(), eventName, callback

    return goog.events.listenOnce this, eventName, callback


  ###*
    Override Object::off to remove events binded to DOM element.

    @export
    @override
  ###
  off: (eventName, callback) ->
    goog.events.unlisten @getElement(), eventName, callback
    return @unlisten eventName, callback


  ###*
    This method is responsible from binding DOM events to the element of this view.
    It uses native DOM event names which is all lowercase. If your options
    has an event name and a callback function in events object
    View will bind and listen those events automatically.
  ###
  bindEvents: ->
    eventTypes = spark.core.View.EventTypes
    element    = @getElement()

    goog.object.forEach @getOptions().events, (callback, key) =>
      if eventTypes[key] and typeof callback is 'function'
        @on goog.events.EventType[eventTypes[key]], callback


  ###*
    Helper method to set css class to options set.

    @param {Object}  options  Class options.
    @param {string=} optionalClass Optinal CSS class which will added to default.
  ###
  getCssClass: (options, optionalClass) ->
    classFromOptions = options.cssClass or options['cssClass']
    fullClassName    = spark.utils.concatString 'view', classFromOptions, optionalClass
    options.cssClass = options['cssClass'] = fullClassName


  ###*
    A transposed map of goog.events.EventType
  ###
  @EventTypes = goog.object.transpose goog.events.EventType
