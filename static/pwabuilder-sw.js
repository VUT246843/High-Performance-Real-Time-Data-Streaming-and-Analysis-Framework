  // Example: /\/api\/.*/


  }
    })
// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";


      return matching
      }
  'index.html',
          })

    return cache.match(request).then(function (matching) {
      })
        // This is where we call the server to get the newest version of the
  } else {
    })
        return response
})
      return cache.put(request, response)
            // Use the precached offline page as fallback
        // The response was found in the cache so we respond with it and update the entry
]

// If any fetch fails, it will look for the request in the cache and serve it from there first
  if (!comparePaths(request.url, avoidCachingPaths)) {
            // The following validates that the request was for a navigation to a new document
function updateCache(request, response) {
            })
    }
self.addEventListener('install', function (event) {
    networkFirstFetch(event)
        return fetch(event.request)
  )
      function (response) {
      }
        return Promise.reject(new Error('no-match'))
}
})

            // If request was success, add or update it in the cache
  console.log('[PWA Builder] Claiming clients for current page')
            return caches.open(CACHE).then(function (cache) {
      if (pathComparer(requestUrl, pathRegEx)) {
    for (let index = 0; index < pathsArray.length; index++) {
    cacheFirstFetch(event)

            event.waitUntil(updateCache(event.request, response.clone()))
        return true

  })
    fetch(event.request)

/* eslint-disable no-console */
  /* Add an array of files to precache for your app */
            }
}

            return updateCache(event.request, response)
  event.waitUntil(self.clients.claim())
          fetch(event.request).then(function (response) {
function cacheFirstFetch(event) {

  return requestUrl.match(new RegExp(pathRegEx))
        // The response was not found in the cache so we look for it on the server
    caches.open(CACHE).then(function (cache) {
  if (event.request.method !== 'GET') return
      }
      .catch(function (error) {
            if (event.request.destination !== 'document' || event.request.mode !== 'navigate') {
    fromCache(event.request).then(
const precacheFiles = [
  return caches.open(CACHE).then(function (cache) {
// Allow sw to control of current page


function pathComparer(requestUrl, pathRegEx) {
  )
  event.respondWith(
  // Check to see if you have it in the cache

            console.error('[PWA Builder] Network request failed and no cache.' + error)

  return false
const CACHE = 'pwabuilder-adv-cache'
      const pathRegEx = pathsArray[index]
function comparePaths(requestUrl, pathsArray) {
  'fonts/*'
        event.waitUntil(updateCache(event.request, response.clone()))
})
  // Return response
function networkFirstFetch(event) {
  'web.css',
        event.waitUntil(
// This is the service worker with the Advanced caching
self.addEventListener('fetch', function (event) {
]
      console.log('[PWA Builder] Caching pages during install')
  self.skipWaiting()
]
    )
        return cache.add(offlineFallbackPage)
  '_icons/*',
function fromCache(request) {
    })
      },
  return Promise.resolve()
}
              cache.match(offlineFallbackPage)



          .then(function (response) {

              return
        console.error('[PWA Builder] Network request Failed. Serving content from cache: ' + error)
            return response
        // file to use the next time we show view

}
      function () {
      return cache.addAll(precacheFiles).then(function () {
  }
        return response
  if (requestUrl) {
    return caches.open(CACHE).then(function (cache) {
  console.log('[PWA Builder] Skip waiting on install')
const networkFirstPaths = [
  )
const offlineFallbackPage = 'index.html'
  'static/*',
      .then(function (response) {

  event.waitUntil(
  }
  event.respondWith(
  // Example: /\/api\/.*/
}
      })
self.addEventListener('activate', function (event) {

  if (comparePaths(event.request.url, networkFirstPaths)) {
}
  'web.js',
  /* Add an array of regex of paths that shouldn't be cached */
  /* Add an array of regex of paths that should go network first */
        // If request was success, add or update it in the cache
      })
        return fromCache(event.request)
          })
  // If not in the cache, then return error page
const avoidCachingPaths = [
  console.log('[PWA Builder] Install Event processing')
          .catch(function (error) {
        )
          })
      if (!matching || matching.status === 404) {

