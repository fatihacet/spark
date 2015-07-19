module.exports = (grunt) ->

  options      =
    src        : '**/*'
    options    :
      base     : 'dist/docs'
      message  : 'Same as last commit with changes'
      repo     : "https://#{process.env.GH_TOKEN}@github.com/fatihacet/spark.git"
      silent   : yes
      dotfiles : no
      user     :
        name   : 'Fatih Acet'
        email  : 'fatih@fatihacet.com'

  grunt.config 'gh-pages', options
