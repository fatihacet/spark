var createElements, listenClick;

createElements = function() {
  var color, colors, container, palette, _i, _len;
  colors = ['green', 'blue', 'yellow', 'red', 'grey', 'black'];
  palette = new spark.core.View({
    cssClass: 'palette'
  });
  for (_i = 0, _len = colors.length; _i < _len; _i++) {
    color = colors[_i];
    container = new spark.core.View({
      cssClass: 'color'
    });
    container.appendView(new spark.core.View({
      cssClass: "" + color + " light"
    }));
    container.appendView(new spark.core.View({
      cssClass: "" + color
    }));
    container.appendView(new spark.core.View({
      cssClass: "" + color + " dark"
    }));
    palette.appendView(container);
  }
  return palette.appendToDocumentBody();
};

listenClick = function() {
  return document.body.addEventListener('click', function(e) {
    var bgColor, style, target;
    target = e.target;
    bgColor = '#FFF';
    if (target.parentElement.classList.contains('color')) {
      style = window.getComputedStyle(target);
      bgColor = style.getPropertyValue('background-color');
    }
    return document.body.style.backgroundColor = bgColor;
  }, false);
};

window.addEventListener('load', function() {
  createElements();
  return listenClick();
}, false);
