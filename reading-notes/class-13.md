# Reading Assignment 13 / July 28

## [http://diveinto.html5doctor.com/storage.html](http://diveinto.html5doctor.com/storage.html)

### HTML5 [Web Storage](http://dev.w3.org/html5/webstorage/), aka "Local Storage" aka "DOM Storage"

- Allows web pages to locally store persistent named key/value pairs in the client browser.

- Accessed through the `localStorage` object.

- Checking for browser support:

  - ```javascript
      function supports_html5_storage() {
        try {
          return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
          return false;
        }
      }
    ```

  - or use [Modernizr](http://diveinto.html5doctor.com/detect.html#modernizr)

    ```javascript
      if (Modernizr.localstorage) {
        // window.localStorage is available!
      } else {
        // no native support for HTML5 storage :(
        // maybe try dojox.storage or a third-party solution
      }
    ```

- Data can be any type, and is stored as a string
- `setItem()`, `getItem()`, `removeItem()` are the CRUD operators.
- Square brackets can be used in place of setItem and getItem
  - `let x = localStorage[''];` - get
  - `localStorage[''] = x` - set
- `removeItem()` removes the value of a named key, and does nothing if key is non-existent
- `key()` gets the total number of values in the storage area
- changes to the storage area trigger a `storage` event
- default 5MB of storage space
