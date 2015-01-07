window.addEventListener 'load', ->

  # Default textarea

  new spark.core.View
    tagName  : 'h3'
    template : 'Expanding textarea'
    renderTo : document.body

  new spark.components.Textarea
    value    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    renderTo : document.body


  # Default textarea with char counter
  new spark.core.View
    tagName  : 'h3'
    template : 'Textarea with char counter which has 200 char limit'
    renderTo : document.body

  new spark.components.TextareaWithCharCounter
    value    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    renderTo : document.body
    charLimit: 200


  # Textarea with incremental char counter
  new spark.core.View
    tagName  : 'h3'
    template : 'Textarea with incremental char counter which has 100 char limit'
    renderTo : document.body

  new spark.components.TextareaWithCharCounter
    value    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    renderTo : document.body
    charLimit: 100
    showRemainingCount: no


  # Textarea with invisible char counter
  new spark.core.View
    tagName  : 'h3'
    template : 'Textarea with invisible char counter which has 100 char limit'
    renderTo : document.body

  new spark.components.TextareaWithCharCounter
    value    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    renderTo : document.body
    charLimit: 100
    isCounterVisible: no

, no
