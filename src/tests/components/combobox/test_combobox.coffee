goog = goog or goog = require: ->

goog.require 'spark.components.ComboBox'
goog.require 'goog.ui.MenuItem'


describe 'spark.components.ComboBox', ->

  combobox = null
  element  = null


  beforeEach ->
    options = {}
    data    = [
      { title: 'Fiat',    value: 'fiat'    }
      { title: 'Ford',    value: 'ford'    }
      { title: 'Mazda',   value: 'mazda'   }
      { title: 'BMW',     value: 'bmw'     }
      { title: 'Honda',   value: 'honda'   }
      { title: 'Ferrari', value: 'ferrari' }
    ]
    combobox = new spark.components.ComboBox options, data
    element  = combobox.getElement()


  it 'should extends spark.core.View', ->
    expect(combobox instanceof spark.core.View).toBeTruthy()


  it 'should have default options', ->
    combo   = new spark.components.ComboBox null
    expect(combo.getOptions()).toBeDefined()


  it 'should have items array and its length should be correct', ->
    items = combobox.getItems()

    expect(items.length).toBe 6


  it 'should appended into element and have correct DOM elements', ->
    children = element.childNodes

    expect(children[0].classList.contains('title')).toBeTruthy()
    expect(children[1].classList.contains('arrow')).toBeTruthy()
    expect(children[2].classList.contains('goog-menu')).toBeTruthy()


  it 'should toggle menu when toggle is clicked', ->
    menuElement = element.childNodes[element.childNodes.length - 1]

    expect(menuElement.style.display).toBe 'none'

    combobox.toggleMenu()

    expect(menuElement.style.display).toBe ''

    combobox.toggleMenu()

    expect(menuElement.style.display).toBe 'none'

    combobox.getArrow().emit 'click'

    expect(menuElement.style.display).toBe ''

    combobox.getArrow().emit 'click'

    expect(menuElement.style.display).toBe 'none'


  describe 'createItem', ->


    it 'should create item from data', ->
      item = combobox.createItem { title: 'hello', value: 'acet' }

      expect(combobox.getItems().length).toBe 6


    it 'should create and append the item', ->
      item = combobox.createItem { title: 'hello', value: 'acet' }, yes

      expect(combobox.getItems().length).toBe 7


  describe 'addItem', ->


    it 'should create goog.ui.MenuItem instance and append it to menu', ->
      data = { title: 'hello', value: 'acet' }
      combobox.addItem data

      expect(combobox.getItems().length).toBe 7


    it 'should create instance and add it to given index', ->
      data = { title: 'Spark', value: 'spark' }
      combobox.addItem data, 4

      menuElement = element.childNodes[element.childNodes.length - 1]
      fourthItem  = menuElement.childNodes[4].childNodes[0]

      expect(fourthItem.innerHTML).toBe 'Spark'


    it 'should handle not valid parameter for item', ->
      combobox.addItem 'string'

      expect(combobox.getItems().length).toBe 6


  it 'should remove item', ->
    item = combobox.getItems()[3]
    combobox.removeItem item
    items = combobox.getItems()

    expect(items.length).toBe 5
    expect(items.indexOf(item)).toBe -1


  it 'should remove item at given index', ->
    fourth = combobox.getItemAt 4
    fourthData = combobox.getItemData fourth
    combobox.removeItemAt 4

    newFourth = combobox.getItemAt 4
    newFourthData = combobox.getItemData newFourth

    expect(fourthData.title).not.toBe newFourthData.title


  it 'should return item at given index', ->
    second = combobox.getItemAt 2

    expect(combobox.getItemData(second).title).toBe 'Mazda'


  it 'should return item with value', ->
    ferrari = combobox.getItemByValue 'ferrari'
    ferrariData = combobox.getItemData ferrari

    expect(ferrariData.title).toBe 'Ferrari'


  it 'should select item', ->
    item = combobox.getItemAt 2
    combobox.selectItem item

    expect(combobox.getValue()).toBe 'mazda'


  it 'should select item at index', ->
    combobox.selectItemAt 4

    expect(combobox.getValue()).toBe 'honda'


  it 'should select item by value', ->
    combobox.selectItemByValue 'bmw'

    expect(combobox.getValue()).toBe 'bmw'


  it 'should select item with setValue method', ->
    combobox.setValue 'honda'

    expect(combobox.getValue()).toBe 'honda'


  it 'should return selected item', ->
    expect(combobox.getSelectedItemData()).toBeNull()
    expect(combobox.getSelectedItem()).toBeNull()

    combobox.selectItemAt 2

    expect(combobox.getSelectedItemData().title).toBe 'Mazda'


  it 'should emit selected event when an item is selected', ->
    flag = no
    data = null

    combobox.on 'selected', (e) ->
      flag = yes
      data = e.data

    combobox.selectItemAt 2

    expect(flag).toBeTruthy()
    expect(data.value).toBe 'mazda'
    expect(data.title).toBe 'Mazda'
    expect(data.data).toBeDefined()


  it 'should dispatch event with uncompiled code', ->

    if goog.events?.dispatchEvent?
      combobox.selectItemAt 1
      try
        goog.events.dispatchEvent combobox.menu_, 'action'
