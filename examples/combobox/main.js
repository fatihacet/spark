window.addEventListener('load', function() {
  var c, d, k;
  new spark.core.View({
    tagName: 'h2',
    template: 'Spark Combobox'
  }).appendToDocumentBody();
  k = new spark.components.ComboBox({}, [
    {
      title: 'Fiat',
      value: 'fiat'
    }, {
      title: 'Ford',
      value: 'ford'
    }, {
      title: 'Mazda',
      value: 'mazda'
    }, {
      title: 'BMW',
      value: 'bmw'
    }, {
      title: 'Honda',
      value: 'honda'
    }, {
      title: 'Ferrari',
      value: 'ferrari'
    }
  ]);
  k.appendToDocumentBody();
  c = new spark.components.ComboBox({
    cssClass: 'blue'
  }, [
    {
      title: 'Fiat',
      value: 'fiat'
    }, {
      title: 'Ford',
      value: 'ford'
    }, {
      title: 'Mazda',
      value: 'mazda'
    }, {
      title: 'BMW',
      value: 'bmw'
    }, {
      title: 'Honda',
      value: 'honda'
    }, {
      title: 'Ferrari',
      value: 'ferrari'
    }
  ]);
  c.appendToDocumentBody();
  d = new spark.components.ComboBox({
    cssClass: 'yellow'
  }, [
    {
      title: 'Fiat',
      value: 'fiat'
    }, {
      title: 'Ford',
      value: 'ford'
    }, {
      title: 'Mazda',
      value: 'mazda'
    }, {
      title: 'BMW',
      value: 'bmw'
    }, {
      title: 'Honda',
      value: 'honda'
    }, {
      title: 'Ferrari',
      value: 'ferrari'
    }
  ]);
  d.appendToDocumentBody();
  return k.on('selected', function(event) {
    var data, title, value, _ref;
    _ref = event.data, title = _ref.title, value = _ref.value, data = _ref.data;
    return console.log(title, value, data);
  });
}, false);
