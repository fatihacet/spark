window.addEventListener 'load', ->

  document.body.addEventListener 'click', (e) ->
    {target} = e
    bgColor  = '#FFF'

    if target.parentElement.classList.contains 'color'
      style    = window.getComputedStyle target
      bgColor  = style.getPropertyValue 'background-color'

    document.body.style.backgroundColor = bgColor

  , no
, no
