goog = goog or goog = require: ->

goog.require 'spark.components.Modal'

describe 'spark.components.Modal', ->

  modal     = null
  modalId   = null
  overlay   = null
  overlayId = null
  fireClick = (element) ->
    event = document.createEvent 'MouseEvents'
    event.initEvent 'click', yes, yes
    element.dispatchEvent event


  beforeEach ->
    modal       = null
    overlay     = null
    modalId     = "modal#{spark.utils.getUid()}"
    overlayId   = "overlay#{spark.utils.getUid()}"
    modal       = new spark.components.Modal
      'domId'   : modalId
      'title'   : 'Are you sure you want to logout?'
      'content' : 'Your session will be ended and you will not be able to restore your cart.'
      'buttons' : spark.components.Modal.Buttons.YES_NO

    overlay = modal.getOverlay()
    overlay.setDomId overlayId


  afterEach ->
    modal.destroy()


  it 'should extends spark.components.DraggableView', ->
    expect(modal instanceof spark.components.DraggableView).toBeTruthy()


  it 'should have default options', ->
    m = new spark.components.Modal null
    o = m.getOptions()

    expect(o).toBeDefined()
    expect(o['title']).toBe   'Default modal title'
    expect(o['content']).toBe 'Default modal content'

    m.removeFromDocument()


  it 'should position itself to center the page', ->
    el = modal.getElement()

    expect(el.offsetLeft).toBeGreaterThan 0
    expect(el.offsetTop).toBeGreaterThan  0


  it 'should have title and content views', ->
    contentView = modal.getContentView()
    titleView   = modal.getTitleView()

    expect(contentView instanceof spark.core.View).toBeTruthy()
    expect(titleView   instanceof spark.core.View).toBeTruthy()

    expect(contentView.getElement().innerHTML).toBe 'Your session will be ended and you will not be able to restore your cart.'
    expect(titleView.getElement().innerHTML).toBe   'Are you sure you want to logout?'


  it 'should not have overlay if overlay option is no', ->
    m = new spark.components.Modal overlay: no

    expect(m.getOverlay()).toBeNull()

    m.removeFromDocument()


  it 'should have default buttons', ->
    {Button} = spark.components

    expect(modal.getButtonByTitle('Yes') instanceof Button).toBeTruthy()
    expect(modal.getButtonByTitle('No')  instanceof Button).toBeTruthy()
    expect(modal.getButtonByTitle('Cancel')).toBeNull()


  it 'should have custom buttons', ->
    B = spark.components.Button
    m = new spark.components.Modal
      buttons: [
        { title: 'Hello' }
        { title: 'World' }
      ]

    expect(m.getButtonByTitle('Hello') instanceof B).toBeTruthy()
    expect(m.getButtonByTitle('World') instanceof B).toBeTruthy()

    m.removeFromDocument()


  it 'should remove itself when overlay is clicked', ->
    expect(document.getElementById(modalId)).toBeDefined()

    fireClick(overlay.getElement())

    expect(document.getElementById(modalId)).toBeNull()


  it 'should emit event for preset buttons', ->
    isClicked = no
    button    = modal.getButtonByTitle 'Yes'

    modal.on 'ModalButtonClicked', -> isClicked = yes

    button.emit 'click'

    expect(isClicked).toBeTruthy()


  it 'should not be removable if blocking is passed truthy', ->
    m = new spark.components.Modal blocking: yes
    o = m.getOverlay()

    fireClick o.getElement()

    expect(document.getElementById(overlayId)).not.toBeNull()

    m.removeFromDocument()


  it 'should have Yes, No, Cancel buttons', ->
    B = spark.components.Button
    m = new spark.components.Modal
      buttons: spark.components.Modal.Buttons.YES_NO_CANCEL

    expect(m.getButtonByTitle('Yes')    instanceof B).toBeTruthy()
    expect(m.getButtonByTitle('No')     instanceof B).toBeTruthy()
    expect(m.getButtonByTitle('Cancel') instanceof B).toBeTruthy()

    m.removeFromDocument()


  it 'should be not be draggable if draggable passed as no', ->

    mm = new spark.components.Modal draggable: no
    t  = mm.getTitleView()

    expect(mm.hasClass('draggable')).toBeFalsy()

    t.setDomId 'my-modal-title'

    left = mm.getElement().offsetLeft
    top  = mm.getElement().offsetTop

    $('#my-modal-title').simulate 'drag', { dx: 300, dy: 100 }

    newLeft = mm.getElement().offsetLeft
    newTop  = mm.getElement().offsetTop

    expect(left).toBe newLeft
    expect(top).toBe  newTop

    mm.removeFromDocument()


  it 'should have close icon by default', ->
    element   = modal.getElement()
    closeIcon = element.querySelector '.modal-close'

    expect(closeIcon).not.toBeNull()


  it 'should not have close icon when closable passed false', ->
    modal = new spark.components.Modal closable: no

    element   = modal.getElement()
    closeIcon = element.querySelector '.modal-close'

    expect(closeIcon).toBeNull()


  it 'should be destroyable with close icon', ->
    expect(document.getElementById(modalId)).not.toBeNull()
    expect(document.getElementById(overlayId)).not.toBeNull()

    closeIcon = modal.getElement().querySelector '.modal-close'
    fireClick closeIcon

    expect(document.getElementById(modalId)).toBeNull()
    expect(document.getElementById(overlayId)).toBeNull()


  it 'should be destroyed after calling destoy method', ->
    expect(document.getElementById(modalId)).not.toBeNull()
    expect(document.getElementById(overlayId)).not.toBeNull()

    modal.destroy()

    expect(document.getElementById(modalId)).toBeNull()
    expect(document.getElementById(overlayId)).toBeNull()
