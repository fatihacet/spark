var createToggleSwitches;

createToggleSwitches = function() {
  var color, colors, container, d, e, s, _i, _len;
  container = new spark.core.View({
    attributes: {
      style: 'margin: 50px'
    }
  });
  colors = ['green', 'blue', 'yellow', 'red', 'black'];
  for (_i = 0, _len = colors.length; _i < _len; _i++) {
    color = colors[_i];
    s = new spark.components.ToggleSwitch({
      checked: true,
      cssClass: color
    });
    container.appendView(s);
    d = new spark.core.View({
      attributes: {
        style: 'height: 20px'
      }
    });
    container.appendView(d);
    e = new spark.components.ToggleSwitch({
      checked: true,
      cssClass: "solid " + color
    });
    container.appendView(e);
    d = new spark.core.View({
      attributes: {
        style: 'height: 50px'
      }
    });
    container.appendView(d);
  }
  return container.appendToDocumentBody();
};

window.addEventListener('load', function() {
  return createToggleSwitches();
}, false);
