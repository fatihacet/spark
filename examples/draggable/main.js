window.addEventListener('load', function() {
  var c, f, k, o;
  c = new spark.core.View({
    attributes: {
      style: 'height: 500px; width: 500px; background: grey;'
    }
  });
  c.appendToDocumentBody();
  k = new spark.components.DraggableView({
    container: c,
    attributes: {
      style: 'height: 200px; width: 100px; background: red; position: absolute;'
    }
  });
  c.appendView(k);
  f = new spark.components.DraggableView({
    container: document.body,
    attributes: {
      style: 'height: 100px; width: 100px; background: blue; top: 300px; left: 800px; position: absolute;'
    }
  });
  f.appendToDocumentBody();
  o = new spark.components.DraggableView({
    attributes: {
      style: 'height: 50px; width: 50px; background: green; top: 100px; left: 200px; position: absolute;'
    }
  });
  return o.appendToDocumentBody();
}, false);
