goog.provide 'spark.components.DraggableView'

goog.require 'spark.core.View'
goog.require 'goog.fx.Dragger'
goog.require 'goog.style'
goog.require 'goog.dom'


class spark.components.DraggableView extends spark.core.View


  ###*
    Draggable view for Spark Framework. It uses battle tested goog.fx.Dragger
    as a drag engine but comes with more fancy methods like containers.
    If you pass a container parameter which should be a DOM element or a View
    instance then the drag will only be allowed inside that container element
    or view. Draggable view listens for window resize and sets its limit again
    to not allow dragging offset of the container. You can also want to unset
    the container if you don't want to force dragging inside an element.
    By default, dragging will be allowed for all element. If you want to use a
    handle pass handle option either a view instance or an element.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    @getCssClass options, 'draggable'

    ###*
      If you want to constrain drag inside an element, pass this option either
      a View instance or a DOM element.
    ###
    options.container or= options['container'] or null

    ###*
      To create a handle for draggable element, pass a View instance or DOM
      element to handle option. Make sure that, you appended handle view/element
      to this component. For now Spark won't append it for you.
    ###
    options.handle or= options['handle'] or null


    ###*
      To constrain dragging only one axis, pass this option either x or y.
      Orientation can be `x` or `y`. If you want to allow dragging in both way
      you can call `@setAxis` with `null` parameter.
    ###
    options.axis or= options['axis'] or null

    super options, data

    @createDragger_()

    @setAxis options.axis

    if options.container
      @setContainer options.container

    goog.events.listen window, 'resize', =>
      @setLimits_()

    @once 'ViewHasParent', =>
      @setLimits_()


  ###*
    Sets drag limits relative to container element. This means dragging won't be
    available outside of that container element.

    @private
  ###
  setLimits_: ->
    return unless @getContainer()

    element = @getElement()

    return unless element.parentNode

    container     = @getContainer()
    sizes         = goog.style.getSize   element
    bounds        = goog.style.getBounds container
    bounds.width  = bounds.width  - sizes.width
    bounds.height = bounds.height - sizes.height

    @dragger_.setLimits bounds


  ###*
    Set container to force dragging inside that container element.

    @export
    @param {spark.core.View|Node} container Container to force dragging.
  ###
  setContainer: (container) ->
    if container instanceof spark.core.View
      @container = container.getElement()

    else if goog.dom.isElement container
      @container = container

    else
      throw new Error 'Drag container must be a View instance or a DOM element.'

    @setLimits_()


  ###*
    Unset container to free dragging area.

    @export
  ###
  unsetContainer: ->
    @container = null
    @dragger_.setLimits new goog.math.Rect NaN, NaN, NaN, NaN


  ###*
    Returns drag container.

    @export
    @return {Element}
  ###
  getContainer: ->
    return @container


  ###*
    Set dragging enabled.

    @export
  ###
  enableDrag: ->
    @dragger_.setEnabled yes


  ###*
    Set dragging disabled. Users won't be able to drag the element unless
    `enableDrag` called.

    @export
  ###
  disableDrag: ->
    @dragger_.setEnabled no


  ###*
    Returns handle element if exists.

    @private
    @return {Element|null}
  ###
  getHandleElement_: ->
    handle = @getOptions().handle

    if handle instanceof spark.core.View
      return handle.getElement()

    else if goog.dom.isElement handle
      return handle

    return handle


  ###*
    Creates an instance of `goog.fx.Dragger` to operate on it.

    @private
  ###
  createDragger_: ->
    @dragger_ = new goog.fx.Dragger @getElement(), @getHandleElement_()
    element   = @getElement()

    ###
      Override default action to constrain dragging in only one axis.
    ###
    @dragger_.defaultAction = (dragX, dragY) =>
      axis     = @getAxis()
      {x, y}   = spark.components.DraggableView.Axes
      position = goog.style.getPosition element

      if axis is y
        dragX = position.x

      else if axis is x
        dragY = position.y

      goog.style.setPosition element, dragX, dragY


  ###*
    Set allowed drag axis. Orientation should be `x` or `y`.
    If you want to remove axis lock after set the axis you can
    call this method with a `null` parameter.

    @export
    @param {spark.components.DraggableView.Axes|null} axis Allowed
    drag axis. Use `null` to remove axis lock.
  ###
  setAxis: (axis) ->
    @axis = axis or null


  ###*
    Returns draw allowed axis. If it returns `null` drag will be allowed
    in both way.

    @export
    @return {spark.components.DraggableView.Axes|null} axis Drag
    allowed axis.
  ###
  getAxis: ->
    return @axis


  ###*
    Orientatons enum.

    @enum {string}
    @export
  ###
  @Axes =
    'x': 'x'
    'y': 'y'
