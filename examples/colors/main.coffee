createElements = ->
  colors  = [ 'green', 'blue', 'yellow', 'red', 'grey', 'black' ]
  palette = new spark.core.View cssClass: 'palette'

  for color in colors
    container = new spark.core.View cssClass: 'color'

    container.appendView new spark.core.View cssClass: "#{color} light"
    container.appendView new spark.core.View cssClass: "#{color}"
    container.appendView new spark.core.View cssClass: "#{color} dark"

    palette.appendView container

  palette.appendToDocumentBody()


listenClick = ->
  document.body.addEventListener 'click', (e) ->
    {target} = e
    bgColor  = '#FFF'

    if target.parentElement.classList.contains 'color'
      style    = window.getComputedStyle target
      bgColor  = style.getPropertyValue 'background-color'

    document.body.style.backgroundColor = bgColor

  , no



window.addEventListener 'load', ->

  createElements()
  listenClick()

, no
