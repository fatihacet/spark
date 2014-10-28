createToggleSwitches = ->

    container = new spark.core.View attributes: style: 'margin: 50px'
    colors    = [ 'blue', 'green', 'yellow', 'red', 'black' ]

    for color in colors
      s = new spark.components.ToggleSwitch checked: yes, cssClass: color
      container.appendView s

      d = new spark.core.View attributes: style: 'height: 20px'
      container.appendView d

      e = new spark.components.ToggleSwitch checked: yes, cssClass: "solid #{color}"
      container.appendView e

      d = new spark.core.View attributes: style: 'height: 50px'
      container.appendView d

    container.appendToDocumentBody()


window.addEventListener 'load', ->

  createToggleSwitches()

, no