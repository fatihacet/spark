### spark.core.Router and spark.core.HistoryManager

Router is one of core components of Spark Framework. It designed to handle page navigations for your single page applications with classical hash fragmented URLs or HTML5 style URLs in other word without hash fragment. It is powered by a built-in History Manager which will track the page navigation and tell Router to parse and handle the visited route. Usually you won't need to deal with HistoryManager. Router will handle all communication. However HistoryManager can be used as standalone. It emits `Navigated` event. All you need to do is listening that event and do what you want.

Default routes are hash fragment style. But it is optional. You can use HTML History API to get rid of the hash fragment. To use HTML5 History with Spark Router you need to pass `useHtml5History: yes` option when you create a Router. Remember that, your app server must serve the same index page for all routes. This is a must because since there is no hash (#) in pushState routes when user refreshed the page, they will land a 404 page unless you did the server configuration. [Here](http://www.josscrowcroft.com/2012/code/htaccess-for-html5-history-pushstate-url-routing/) and [also here](http://stackoverflow.com/a/15349745/480949) you can read about it more.

The main idea is you will add all your routes to Router then user navigated one of the routes, Router will do what you want. Probably the most common methods you may want to use are `addRoute` and `route`.

`addRoute` accepts a route string and a callback function. It allows you to define routes and handle them. Routes also be added in options object under `routes` key.

`route` accepts a string and tells HistoryManager to navigate the given URL. If the route doesn't match any routes which you added, route will still be changed. You should show a 404 page. Route callback will be called with two arguments. Both arguments are an object and first one will contain your route parameters and second one will contain the query string values if exists.

##### Routes
Currently you can only use `:` in routes when you want to set a keyword as variable. If the visited route contains a query string in it Router will also parse that query string and pass as an object as second argument to your callback method. Let's dig a sample route.

`/artist/:artistName/song/:songName`

This route will be handled when `/artist/Skrillex/song/Kyoto` url visited and your callback called with a `params` object as first argument which will be like this.

```
params: {
  artistName: 'Skrillex'
  songName  : 'Kyoto'
}
```

It will also work if there is query string in the visited URL. A route example for this case might be `/artist/Skrillex/song/Kyoto?autoplay=true&time=142`. When this route visited your callback will be called with two parameters and the objects will be like this.

```
params: {
  artistName: 'Skrillex'
  songName  : 'Kyoto'
}
query: {
  autoPlay: true
  time    : 142
}
```


##### Router with lazy routes.

```
router = new spark.core.Router

router.add '/books', ->
  console.log 'books page visited'

router.add '/book/:id', (params) ->
  console.log "display book with #{params.id}"

router.add '/preview/book/:bookId/page/:pageNumber', (params) ->
  console.log "preview requested for bookId #{params.bookId} at pageNumber #{params.pageNumber}"

router.add '/search/:keyword', (params, query) ->
  console.log "search requested for keyword #{params.keyword} and order value in query string is #{query.order}"


router.route '/books' # this will log 'books page visited'
router.route '/books/122141' # this will log 'display book with 122141'
router.route '/preview/book/122142/page/42' # this will log 'preview requested for bookId 122141 at pageNumber 42'
router.route '/search/tolkien?order=asc' # this will log 'search requested for keyword tolkien and order value in query string is asc'
```


##### Router with routes defined in options

```
router = new spark.core.Router
  options:
    routes:
      '/books', -> console.log 'books page visited'
      '/book/:id', (params) -> console.log "display book with #{params.id}"
      '/preview/book/:bookId/page/:pageNumber', (params) -> console.log "preview requested for bookId #{params.bookId} at pageNumber #{params.pageNumber}"
      '/search/:keyword', (params, query) -> console.log "search requested for keyword #{params.keyword} and order value in query string is #{query.order}"


router.route '/books' # this will log 'books page visited'
router.route '/books/122141' # this will log 'display book with 122141'
router.route '/preview/book/122142/page/42' # this will log 'preview requested for bookId 122141 at pageNumber 42'
router.route '/search/tolkien?order=asc' # this will log 'search requested for keyword tolkien and order value in query string is asc'
```
