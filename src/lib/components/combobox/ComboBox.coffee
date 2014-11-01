goog.provide 'spark.components.ComboBox'

goog.require 'spark.core.View'
goog.require 'goog.ui.Menu'
goog.require 'goog.ui.MenuItem'


class spark.components.ComboBox extends spark.core.View

  ###*
    Traditional select element replacement for Spark Framework.

    @constructor
    @export
    @param   {Object=}  options Class options.
    @param   {Array=} data Combobox item data.
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data = []) ->

    options.valueField    or= options['valueField']    or 'value'
    options.titleField    or= options['titleField']    or 'title'
    options.selectionText or= options['selectionText'] or 'Select one...'

    @getCssClass options, 'combobox'

    super options, data

    @items = []

    @createMenu_()
    @createItems_()

    @title = new spark.core.View
      cssClass : 'title'
      template : options.selectionText

    arrow = new spark.core.View
      cssClass : 'arrow'
      template : 'v'

    @appendView @title
    @appendView arrow

    @menu_.render @getElement()

    @on 'click', => @toggleMenu()


  ###*
    Creates menu and binds action event to menu to emit selected event.

    @private
  ###
  createMenu_: ->
    @menu_ = new goog.ui.Menu
    @menu_.setVisible no

    goog.events.listen @menu_, goog.ui.Component.EventType.ACTION, (e) =>
      @handleSelection_ e.target


  handleSelection_: (item) ->
    @selectedItem = item
    selectedData  = @selectedItem.getModel()
    options       = @getOptions()
    eventData     = {
      title : selectedData[options.titleField]
      value : selectedData[options.valueField]
      data  : selectedData
    }

    @getTitle().setTemplate eventData.title
    @emit spark.components.ComboBox.EventTypes.SELECTED, eventData


  ###*
    Creates all items using class data.

    @private
  ###
  createItems_: ->
    @getData().forEach (item) =>
      @createItem item, yes


  ###*
    Creates and return a new goog.ui.MenuItem. You can use this method to create
    and add item to menu.

    @export
    @param {!Object} data Data of the meni item. It should have valueField and
    titleField keys in it. Default keys are value and title.
    @param {boolean=} shouldAdd If you pass should add as true, it will create
    and append the menu item at the end of the menu.
    @return {goog.ui.MenuItem} Created menu item.
  ###
  createItem: (data, shouldAdd) ->
    {titleField} = @getOptions()
    item = new goog.ui.MenuItem data[titleField], data

    @addItem item if shouldAdd

    return item


  ###*
    If item is an instance of goog.ui.MenuItem it will be added to menu
    otherwise the data is consistent enough a MenuItem instance will be created
    and added to menu. index parameter is optional. If it's not passed item will
    be appended at the end of the menu otherwise it will be appended into that
    position.

    @export
    @param {goog.ui.MenuItem|Object} item MenuItem instance or plain object.
    If the item is an instanceof goog.ui.MenuItem then it will be added to menu.
    If it's just an object and it has titleField and valueField in it,
    a goog.ui.Menu instance will be taken on the fly and added to the menu.
    @param {number=} index Index to insert the menu item. It's optional, if you
    don't pass it the item will be appended at the end of the menu.
  ###
  addItem: (item, index) ->
    {titleField, valueField} = @getOptions()

    unless item instanceof goog.ui.MenuItem
      if item[titleField] and item[valueField]
        item = @createItem item

    return unless item instanceof goog.ui.MenuItem

    if index?
      @menu_.addItemAt item, index
    else
      @menu_.addItem item

    @items.push item


  ###*
    Removes an item from menu.

    @export
    @param {goog.ui.MenuItem} item Menu item to be removed.
  ###
  removeItem: (item) ->
    @menu_.removeItem item
    @items.splice @items.indexOf(item), 1


  ###*
    Removes an item at the index.

    @export
    @param {number} index Item index to be removed.
  ###
  removeItemAt: (index) ->
    @menu_.removeItemAt index
    @items.splice index, 1


  ###*
    Returns the item at given index.

    @export
    @param {number} index Item index to be removed.
  ###
  getItemAt: (index) ->
    return @items[index]


  ###*
    Returns the item by given value.

    @export
    @param {string} value Item value to be checked to find the item instance.
  ###
  getItemByValue: (value) ->
    menuItem = null

    @getItems().forEach (item) ->
      if item.getModel().value is value
        menuItem = item

    return menuItem


  ###*
    Returns components items.

    @export
  ###
  getItems: ->
    return @items


  ###*
    Selects an item in the menu.

    @export
    @param {goog.ui.MenuItem} item Item to be selected.
  ###
  selectItem: (item) ->
    if item instanceof goog.ui.MenuItem
      @handleSelection_ item


  ###*
    Selects an item at the index.

    @export
    @param {number} index Index to be used to select item.
    @return {goog.ui.MenuItem|undefined} Returns item or undefined.
  ###
  selectItemAt: (index) ->
    item = @getItems()[index]

    if item
      @selectItem item

    return item


  ###*
    Selects an item with the given menu.

    @export
    @param {string} value Value of the item to be selected.
    @return {goog.ui.MenuItem|undefined} Returns item or undefined.
  ###
  selectItemByValue: (value) ->
    item = @getItemByValue value

    if item
      @selectItem item

    return item


  ###*
    Returns selected item's value.

    @export
    @return {string} Selected item value.
  ###
  getValue: ->
    value = ''

    if @selectedItem
      valueField = @getOptions().valueField
      value      = @selectedItem.getModel()[valueField]

    return value


  ###*
    Set value to select an item. Uses `selectItemByValue`. `setValue` is
    implemented because API should consistent with field components.

    @export
    @param {string} value Value of the item to be selected.
    @return {goog.ui.MenuItem|undefined} Returns item or undefined.
  ###
  setValue: (value) ->
    return @selectItemByValue value


  ###*
    Returns selected item.

    @export
    @return {goog.ui.MenuItem|null} Selected item.
  ###
  getSelectedItem: ->
    return @selectedItem or null


  ###*
    Returns selected item data.

    @export
    @return {Object|null} Selected item data or null if not an item is selected.
  ###
  getSelectedItemData: ->
    return null unless @selectedItem
    return @selectedItem.getModel()


  ###*
    Returns an item data.

    @export
    @return {Object}
  ###
  getItemData: (item) ->
    return item.getModel()


  ###*
    Returns title element.

    @export
  ###
  getTitle: ->
    return @title


  ###*
    Shows menu.

    @export
  ###
  showMenu: ->
    @isMenuVisible = yes
    @menu_.setVisible yes
    @addClass 'menu-visible'


  ###*
    Hide menu.

    @export
  ###
  hideMenu: ->
    @isMenuVisible = no
    @menu_.setVisible no
    @removeClass 'menu-visible'


  ###*
    Toggles menu visibility.

    @export
  ###
  toggleMenu: ->
    if @isMenuVisible then @hideMenu() else @showMenu()


  ###*
    Event types map

    @enum {string}
  ###
  @EventTypes =
    SELECTED  : 'selected'
