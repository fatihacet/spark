var createButtons;

createButtons = function() {
  var button, callback, color, colors, counter, cssClass, design, designs, index, placeholder, size, sizes, title, titles, variant, variants, _i, _len, _results;
  designs = ['flat', '', 'rounded', 'outline'];
  sizes = ['small', '', 'big'];
  variants = ['light', '', 'dark'];
  colors = ['blue', 'green', 'red', 'yellow', 'grey', 'black'];
  titles = ['Load more', 'Sign up', 'Order now', 'Download', 'Register', 'Sign in'];
  counter = 0;
  _results = [];
  for (index = _i = 0, _len = colors.length; _i < _len; index = ++_i) {
    color = colors[index];
    _results.push((function() {
      var _j, _len1, _results1;
      _results1 = [];
      for (_j = 0, _len1 = sizes.length; _j < _len1; _j++) {
        size = sizes[_j];
        _results1.push((function() {
          var _k, _l, _len2, _len3, _results2;
          _results2 = [];
          for (_k = 0, _len2 = variants.length; _k < _len2; _k++) {
            variant = variants[_k];
            for (_l = 0, _len3 = designs.length; _l < _len3; _l++) {
              design = designs[_l];
              title = titles[index];
              cssClass = "" + color + " " + design + " " + size + " " + variant;
              callback = function() {
                return alert("This is '" + (this.getAttribute('class').replace('view button ', '')) + "' button.");
              };
              button = new spark.components.Button({
                title: title,
                cssClass: cssClass,
                callback: callback
              });
              button.appendToDocumentBody();
            }
            _results2.push(placeholder = new spark.core.View({
              cssClass: 'separator'
            }).appendToDocumentBody());
          }
          return _results2;
        })());
      }
      return _results1;
    })());
  }
  return _results;
};

window.addEventListener('load', function() {
  new spark.core.View({
    tagName: 'h2',
    template: 'Spark Buttons'
  }).appendToDocumentBody();
  return createButtons();
}, false);
