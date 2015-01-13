### spark.core.Store

Store is one of the core classes in Spark Framework. It is a JavaScript representation of your data. It comes with powerful methods to operate on your data. You can create new data in your store and also update and delete it in the runtime.

Store is powered with data validations by default. There are lots of validation types already implemented and more will come. You can set validation rules for your data to be like email, numeric or has minimum length etc. When you set a validation rule, Store will validate the data when it is constructed. This is optional btw, you can disable it. And whenever you want to set or update the data will be validated. If validation passed store will emit `PropertySet` and return true otherwise Store will emit `PropertyRejected` and return false.

Store also provides basic data type validation. You can set data type validations for your data like string, object etc. It will work the same way as validations.

Store will provide an API to make properties read only by using `Object.freeze`. This will make your data much more solid.

#### Talk is cheap, show me the code
All Spark classes accepts two arguments. First one is options and the second one is data. In store, validation rules should be in the options object under `validations` key. Your real store data should be in data object named with keys.

Here is a sample Store creation.

```coffee
options =
  validations :
    firstName : required: yes, alphabetic: yes
    lastName  : required: yes, alphabetic: yes
    age       : numeric : yes
    email     : email   : yes
    userId    : length  : 8

data =
  firstName   : 'Fatih'
  lastName    : 'Acet'
  age         : 27
  email       : 'acetfatih@gmail.com'
  userId      : '123ab678'

store = new spark.core.Store options, data
```

You can also mix `dataType` in the objects in `validations`. Something like that.

```coffee
storeOptions  =
  validations :
    userId    : dataType: 'string', readOnly: yes
    username  : dataType: 'string', minLength: 4, maxLength: 23, readOnly: yes
    pageIds   : dataType: 'array'
    meta      : dataType: 'object'
    isOnline  : dataType: 'boolean'
    likeCount : dataType: 'number'
    fetch     : dataType: 'function'

storeData =
  userId    : '123456'
  username  : 'fatihacet'
  pageIds   : [ 34, 42, 70 ]
  meta      : { registedAt: 1420323019571 }
  isOnline  : yes
  likeCount : 22
  fetch     : -> console.log 'fetch called'

store2 = new spark.core.Store storeOptions, storeData
```

`set` method does the create and update work. When you want to update an existing key in your Store you should use `set` method. `set` will return true or false which will be the result of the set. Also set will emit `PropertSet` or `PropertyRejected` events.


#### Future of the Store
The next big improvement for Store will be `RESTfulStore`. This means store will support REST APIs by default. You will be able to read, update and delete records via your REST API. Update and Insert will also be automated.

Another big improvement would be `RealtimeStore` implementation which probably will use Firebase to provide a solid real time backend. This will be extremely useful to show real time notifications and interactions with your users.

There might be a `OfflineStore` implementation which will use browser's LocalStorage to persist the data. You will be able to save the local data to DB if you want.


#### Store vs Model?
I wanted to name it as Store. But I will also add an alias for Model. So spark.core.Model will also be available.
