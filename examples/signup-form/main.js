window.addEventListener('load', function() {
  var w;
  w = new spark.widgets.SignUp({
    cssClass: 'hello',
    buttonColor: 'blue',
    callback: function() {
      return console.log('post form');
    },
    forgotPasswordCallback: function() {
      return console.log('forgot password');
    },
    alreadyRegisteredCallback: function() {
      return console.log('already registered');
    }
  });
  w.appendToDocumentBody();
  w = new spark.widgets.SignUp({
    cssClass: 'hello',
    withImage: false,
    title: 'Register',
    buttonText: 'Register',
    callback: function() {
      return console.log('post form');
    }
  });
  return w.appendToDocumentBody();
}, false);
