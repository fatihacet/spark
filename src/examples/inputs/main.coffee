window.addEventListener 'load', ->

  new spark.core.View({ tagName: 'h2', template: 'Spark Inputs' }).appendToDocumentBody()

  new spark.components.Input({placeholder: 'Email'}).appendToDocumentBody()
  new spark.components.Input({value: 'fatih@fatihacet.com', cssClass: 'has-text'}).appendToDocumentBody()
  new spark.components.Input({value: 'fatih@fatihacet.com', cssClass: 'success'}).appendToDocumentBody()
  new spark.components.Input({value: 'fatih@fatihacet.', cssClass: 'fail'}).appendToDocumentBody()

  new spark.core.View().appendToDocumentBody()

  new spark.components.Input({placeholder: 'Email', cssClass: 'big'}).appendToDocumentBody()
  new spark.components.Input({value: 'fatih@fatihacet.com', cssClass: 'big has-text'}).appendToDocumentBody()
  new spark.components.Input({value: 'fatih@fatihacet.com', cssClass: 'big success'}).appendToDocumentBody()
  new spark.components.Input({value: 'fatih@fatihacet.', cssClass: 'big fail'}).appendToDocumentBody()

, no
