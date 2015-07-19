goog.provide 'spark.components.Loader'

goog.require 'spark.core.View'


class spark.components.Loader extends spark.core.View

  ###*
    Loader component for Spark Framework. There are six different type of
    loader is implemented right now. Ported from tobiasahlin.com/spinkit
    Loader size can be configurable. With current implementation background
    color customization is missing. However you can customize your loader's
    background color using CSS.

    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    options.type     or= options['type']   or spark.components.Loader.LoaderTypes.CIRCLE
    options.size      ?= options['size']    ? 50
    options.template   = @getLoaderTemplate_ options

    @getCssClass options, 'loader'

    super options, data

    loaderEl = @getElement().firstChild
    { size } = @getOptions()

    goog.style.setWidth  loaderEl, size
    goog.style.setHeight loaderEl, size


  ###*
    Creates and returns loader template.

    @param {Object} options Options object for loader template
    @private
  ###
  getLoaderTemplate_: (options) ->

    configs = spark.components.Loader.TemplateConfigs
    type    = spark.components.Loader.LoaderTypes[options.type]

    { baseClass, itemCount } = configs[type]

    base = """<div class="#{baseClass}">"""

    if itemCount
      for i in [1..itemCount]
        base += """<div class="item item#{i}"></div>"""

    return "#{base}</div>"


  ###*
    Enum for template configs.

    @enum {string}
    @export
  ###
  @TemplateConfigs =
    'SPINNER'     : { baseClass: 'spinner', itemCount: 12 }
    'CIRCLE'      : { baseClass: 'circle',  itemCount: 3  }
    'BOUNCE'      : { baseClass: 'bounce',  itemCount: 2  }
    'BAR'         : { baseClass: 'bar',     itemCount: 5  }
    'PULSE'       : { baseClass: 'pulse'  }
    'SQUARE'      : { baseClass: 'square' }


  ###*
    Enum for loader types.

    @enum {string}
    @export
  ###
  @LoaderTypes =
    'CIRCLE'   : 'CIRCLE'
    'SPINNER'  : 'SPINNER'
    'PULSE'    : 'PULSE'
    'SQUARE'   : 'SQUARE'
    'BOUNCE'   : 'BOUNCE'
    'BAR'      : 'BAR'
