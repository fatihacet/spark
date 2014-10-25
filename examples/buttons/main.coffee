createButtons = ->
  designs  = [ 'flat',  '', 'rounded', 'outline' ]
  sizes    = [ 'small', '', 'big' ]
  variants = [ 'light', '', 'dark' ]
  colors   = [ 'blue',  'green', 'red', 'yellow', 'grey', 'black' ]
  titles   = [ 'Load more', 'Sign up', 'Order now', 'Download', 'Register', 'Sign in' ]
  counter  = 0

  for color, index in colors
    for size in sizes
      for variant in variants
        for design in designs

          title    = titles[index]
          cssClass = "#{color} #{design} #{size} #{variant}"
          callback = -> alert "This is '#{this.getAttribute('class').replace('view button ', '')}' button."
          button   = new spark.components.Button { title, cssClass, callback }

          button.appendToDocumentBody()

        placeholder = new spark.core.View({ cssClass: 'separator' }).appendToDocumentBody()


window.addEventListener 'load', ->

  new spark.core.View({ tagName: 'h2', template: 'Spark Buttons' }).appendToDocumentBody()
  createButtons()

, no
