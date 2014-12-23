window.addEventListener('load', function() {
  var form, header;
  header = new spark.core.View({
    tagName: 'h3',
    template: 'Create your own modal',
    renderTo: document.body
  });
  return form = new spark.components.Form({
    renderTo: document.body,
    inputs: [
      {
        type: 'text',
        name: 'title',
        label: 'Modal title',
        placeholder: 'What is your modal title...'
      }, {
        type: 'text',
        label: 'Modal content',
        name: 'content',
        placeholder: 'Tell me your modal content...'
      }, {
        type: 'combobox',
        label: 'Button set',
        name: 'buttons',
        cssClass: 'blue',
        items: [
          {
            title: 'Yes',
            value: spark.components.Modal.Buttons.YES
          }, {
            title: 'No',
            value: spark.components.Modal.Buttons.NO
          }, {
            title: 'Yes/No',
            value: spark.components.Modal.Buttons.YES_NO
          }, {
            title: 'Yes/No/Cancel',
            value: spark.components.Modal.Buttons.YES_NO_CANCEL
          }
        ],
        selectedItemValue: spark.components.Modal.Buttons.YES_NO
      }, {
        type: 'toggle',
        name: 'draggable',
        label: 'Should be draggable?',
        cssClass: 'small blue',
        checked: true
      }, {
        type: 'toggle',
        name: 'closable',
        label: 'Should have a close icon?',
        cssClass: 'small blue',
        checked: true
      }, {
        type: 'toggle',
        name: 'removeOnOverlayClick',
        label: 'Should be removed after overlay clicked?',
        cssClass: 'small blue',
        checked: true
      }
    ],
    buttons: [
      {
        title: 'Create your modal',
        cssClass: 'blue small dark',
        callback: (function(_this) {
          return function() {
            return new spark.components.Modal(form.getData());
          };
        })(this)
      }
    ]
  });
}, false);
