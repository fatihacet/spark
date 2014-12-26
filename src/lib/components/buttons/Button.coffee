goog.provide 'spark.components.Button'

goog.require 'spark.core.View'


###*
  Button component of Spark Framework.
###
class spark.components.Button extends spark.core.View

  ###*
    @constructor
    @export
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    options.tagName       = options['tagName']        = 'button'
    options.title       or= options['title']         or null
    options.callback    or= options['callback']      or null
    options.iconClass   or= options['iconClass']     or null
    options.events      or= options['events'] or {}
    @getCssClass options, 'button'

    {callback} = options
    if typeof callback is 'function'
      options.events.click = callback

    icon  = ''
    title = ''

    if options.iconClass
      icon  = "<span class='icon #{options.iconClass}'></span>"

    if options.title
      title = "<span>#{options.title}</span>"

    options.template = "#{icon}#{title}"

    super options, data
