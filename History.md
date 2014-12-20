0.0.1 / 2014-12-20
==================
  - HistoryManager: Implemented TokenTransformer to fix buggy query strings.


0.0.1 / 2014-12-19
==================
  - Router: Added destroy method.
  - Router: Destroy router instance after each test.
  - Router: Don't handle the route if it's already the path is same.
  - Router: Call route callback if a callback exists.


0.0.1 / 2014-12-18
==================
  - Router: Handle query string and pass them to route callback.


0.0.1 / 2014-12-17
==================
  - Router: Added tests.
  - Router: Added getHistoryManager and getRoutes methods.
  - Router: Passed route params to callback method.
  - HistoryManager: Added tests.
  - HistoryManager: Added setToken method.


0.0.1 / 2014-12-16
==================
##### Introduced HistoryManager and Router core components.

  - HistoryManager: Added initial version.
  - Router: Added initial version.


0.0.1 / 2014-11-16
==================
##### DraggableView supports axes.

  - DraggableView: Implemented axes for draggable view.


0.0.1 / 2014-11-15
==================
##### DraggableView now supports a handle to drag.

  - DraggableView: Added handle option.
  - DraggableView: Added enableDrag/disableDrag methods.
  - Modal: Make modal view draggable by its title.


0.0.1 / 2014-11-12
==================
  - Modal: Added modal tests.
  - Modal: Use good.bind to listen window resize.
  - Modal: Added exposed getter methods.


0.0.1 / 2014-11-10
==================
##### Introduced Modal component.

  - Modal: Introduced new component.
  - Overlay: Fixed overlay tests.


0.0.1 / 2014-11-09
==================
##### Introduced Overlay component.

  - Overlay: Introduced new component.
  - Theme: Added styling for core view and draggable view.


0.0.1 / 2014-11-08
==================
  - View: Implemented width, height options to set view size in constructor.
  - View: Added setWidth, setHeight, getWidth, getHeight methods and its tests.


0.0.1 / 2014-11-03
==================
##### Introduced DraggableView component and render method for View.

  - DraggableView: Introduced new component.
  - Examples: Added draggable view examples.
  - View: Emit ViewHasParent event.
  - View: Added render method with renderTo option.


0.0.1 / 2014-11-01
==================
##### Introduced Combobox component.

  - Components: Added combobox component.
  - Examples: Added ComboBox examples.


0.0.1 / 2014-10-29
==================
  - Gruntfile: Removed coverage task. Karma + Travis will handle it.


0.0.1 / 2014-10-28
==================
##### Introduced ToggleSwitch component.

  - ToggleSwitch: Introduced new component.
  - Checkbox: Emitted StateChanged event.
  - LabeledInput: Added getInput and getLabel methods.
  - LabeledInput: Allow appending input first.
  - LabeledInput: Now supports label for and input id attributes.
  - Utils: Added a method to create unique id.
  - Object: Use spark.utils.getUid method.
  - FieldFactory: Added test for empty option set.
  - Password: Added tests.


0.0.1 / 2014-10-27
==================
  - Utils: ConcatString method will always return unique class names.
  - ClosureLibrary: Bump Closure Library to its latest version.


0.0.1 / 2014-10-26
==================
##### Introduced Password component and sign up widget.

  - Password: Added input type password component.
  - FieldFactory: Handle Password component.
  - Form: Better testing.
  - Widgets: Added Sign Up form widget.
  - View: Added attributes option support to View.


0.0.1 / 2014-10-25
==================
##### Exported framework API, Gruntfile impovements, styling and licensing.

  - Gruntfile: Added --generate-exports and removed namespace.
  - Gruntfile: Merged CI tasks and it also covers compiled code.
  - Karma: Added new config file for testing compiled code.
  - Framework: Added export annotation to export framework methods.
  - View: Added getter method for isDisabled state.
  - Tests: Use getters in form test.
  - Examples: Added buttons example.
  - Examples: Added inputs example.
  - Theme: Added input styling.
  - License: Added MIT license.


0.0.1 / 2014-10-22
==================
  - Theme: Added buttons styling.


0.0.1 / 2014-10-21
==================
##### Implemented Theme and Examples.

  - Theme: Added color variables.
  - Gruntfile: Watch for test files.
  - Textarea: Added initial value test for Textarea.
  - Examples: Created first example for color palette.


0.0.1 / 2014-10-20
==================
##### Introduced Texarea component and impovements for Grunt watchers.

  - Textarea: Added textarea component.
  - Gruntfile: Added spriteGenerator task and watch for image file changes.
  - Gruntfile: Better file selectors for watch targets.
  - Travis: Install imagemagick and graphicsmagick before build.


0.0.1 / 2014-10-19
==================
##### Introduced FieldFactory class. Added code documentation and moar Karma test environments.

  - Checkbox: Added test for checkbox.
  - Radio: Added radio tests.
  - FieldFactory: Added FieldFactory class to create inputs.
  - FieldFactory: LabeledInput and Form now uses FieldFactory to create input elements.
  - Tests: Added input test, fixed radio test.
  - Documentation: Documentation matters.
  - Karma: Advanced testing. Multiple Karma configuration files to run tests on PhantomJS, Chrome, Firefox, Safari and even SauceLabs.


0.0.1 / 2014-10-18
==================
##### Introduced Checkbox, Radio and Field components. Created documentation from JSDoc and created gh-pages branch.

  - Inputs: Input classes are now extends from Field base class.
  - JSDoc: Integrated jsDoc support.
  - CI: Update docs on gh-pages branch after new build.


0.0.1 / 2014-10-12
=================
##### Form tests and impovements.

  - Form: Added form tests.
  - Form: Call setData on constructor to populate form.
  - Form: Override setData and getData to work with form.
  - Form: Cache inputs by name.


0.0.1 / 2014-10-12
=================
##### Introduced Label, LabeledInput and Form components. Improvements for Button and Input.

  - Button: Implemented icon buttons.
  - Button: Allow creating icon only button.
  - Input: Added focus method.
  - Label: Added label component.
  - LabeledInput: Added labeled input component.
  - Form: Added initial state of form component.


0.0.1 / 2014-10-11
=================

  - Input: Added test suite.
  - View: Added test for options.


0.0.1 / 2014-10-10
=================
##### Travis and Coveralls integrations. New tests for core components.

  - CI: Use Travis as CI tool.
  - CI: Integrated code coverage with Coveralls.io.
  - Core: Added new tests.


0.0.1 / 2014-10-07
=================

  - Use lib folder instead of coffee.


0.0.1 / 2014-10-06
=================

  - View: Added `appendToDocumentBody` and `removeFromDocument` methods.
  - Button: Added click related test to button.


0.0.1 / 2014-10-03
==================
##### Introduced Input component.

  - Input: Added Input component.


0.0.1 / 2014-09-24
==================
##### Implemented two-way event binding for DOM events in View.

  - View: Override Object::on, Object::off and Object::once to support two way binding for DOM events.
  - Build: Compiler fixes.


0.0.1 / 2014-09-23
==================
  - Button: Added disable, enable and toggle methods.
  - View: Added setAttribute, getAttribute and removeAttribute wrappers.
  - Utils: Concat only strings in concatString method.


0.0.1 / 2014-09-22
==================
  - Object: `on` and `once` methods now accept target argument.
  - View: Fixed binding event handlers.
  - View: Added appendView method.

0.0.1 / 2014-09-16
==================
##### Introduced Button component and improved View.

  - View: Added hasClass method and tests for it.
  - View: Added more tests.
  - View: Added bindEventHandlers method.
  - Button: Added new component and its tests.
  - Gruntfile: Added tasks for CI.
  - Added build badge.


0.0.1 / 2014-08-31
==================
  - README: Updated README.
  - Gruntfile: Implemented an http server with live reload watcher.


0.0.1 / 2014-08-04
==================
  - Index: Include Bootstrapper file.


0.0.1 / 2014-07-27
==================
  - View: Options should be an empty object.
  - View: Put some example export statements.


0.0.1 / 2014-07-23
==================
##### Introduced core View.

  - View: Added View class and its tests.
  - Utils: Added utils.concatString and its tests.
  - Build: Added a dummy bootstrapper file to build framework.


0.0.1 / 2014-07-21
==================
##### Introduced core Object.

  - Object: Added initial version of spark.Object.
  - Gruntfile: Added file watcher for coffee and styl files.
  - Test: Added more test for Object class.
  - Object: Implemented on, once, off, emit methods.
  - Gruntfile: Added file watcher for coffee and styl files.
  - Karma: Updated karma.conf for karma-closure.


0.0.1 / 2014-07-19
==================
##### Initial release.

  - Added initial files.
  - Test: Added testing framework which uses Jasmine with Karma.
  - Grunt: Add grunt task to run and watch the tests.
