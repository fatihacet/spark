window.addEventListener 'load', ->

  header = new spark.core.View
    tagName  : 'h3'
    template : 'Create your own modal'
    renderTo : document.body

  form = new spark.components.Form
    renderTo: document.body
    inputs: [
      {
        type  : 'text'
        name  : 'title'
        label : 'Modal title'
        placeholder: 'What is your modal title...'

      }
      {
        type  : 'text'
        label : 'Modal content'
        name  : 'content'
        placeholder: 'Tell me your modal content...'
      }
      {
        type     : 'combobox'
        label    : 'Button set'
        name     : 'buttons'
        cssClass : 'blue'
        items    : [
          { title: 'Yes',           value: spark.components.Modal.Buttons.YES           }
          { title: 'No',            value: spark.components.Modal.Buttons.NO            }
          { title: 'Yes/No',        value: spark.components.Modal.Buttons.YES_NO        }
          { title: 'Yes/No/Cancel', value: spark.components.Modal.Buttons.YES_NO_CANCEL }
        ]
        selectedItemValue: spark.components.Modal.Buttons.YES_NO
      }
      {
        type : 'checkbox'
        name : 'draggable'
        label: 'Is draggable'
        checked: yes
      }
      {
        type : 'checkbox'
        name : 'closable'
        label: 'Is closable'
        checked: yes
      }
      {
        type : 'checkbox'
        name : 'removeOnOverlayClick'
        label: 'Is removable when overlay clicked'
        checked: yes
      }
    ]
    buttons: [
      {
        title    : 'Show Modal'
        cssClass : 'blue small dark'
        callback : => new spark.components.Modal form.getData()
      }
    ]

, no
