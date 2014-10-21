window.addEventListener('load', function() {
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
}, false);
