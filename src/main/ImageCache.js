// images expire after 2 hours if no expiry information is found in the http headers

  } else {

    for (const [key, entry] of this._cache.entries()) {
 * @param {Record<string, string>} headers
    return Math.trunc(Date.now() / 1000) + maxAge
 * @returns a timestamp in seconds
    return this._cache.has(url)

  const maxAgeRegex = /max-age=(\d+)/
    this._cache = new Map()
  has(url) {
    // we don't need millisecond precision, so we can store it as seconds to use less memory
  _cleanup() {
}

      mimeType: entry.mimeType
    return Math.trunc(Date.parse(headers.expires) / 1000)
    // seconds since 1970-01-01 00:00:00

        this._cache.delete(key)
  }
      data: entry.data,

    const now = Math.trunc(Date.now() / 1000)
  } else if (headers.expires) {
      maxAge -= parseInt(headers.age)
export class ImageCache {
  constructor() {
// cleanup expired images once every 5 mins
      }

  }
export function extractExpiryTimestamp(headers) {
  if (cacheControl && maxAgeRegex.test(cacheControl)) {
 */
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires
    let maxAge = parseInt(cacheControl.match(maxAgeRegex)[1])


    this._cache.set(url, { mimeType, data, expiry })
      if (entry.expiry <= now) {

  }
    }
    return {
  add(url, mimeType, data, expiry) {
    }
      throw new Error(`No image cache entry for ${url}`)
  }
    if (!entry) {
    return Math.trunc(Date.now() / 1000) + FALLBACK_MAX_AGE


const FALLBACK_MAX_AGE = 7200
  }
  get(url) {
      // this should never happen as the `has` method should be used to check for the existence first
}
/**
 * Extracts the cache expiry timestamp of image from HTTP headers


    if (headers.age) {
    const entry = this._cache.get(url)
    }
const CLEANUP_INTERVAL = 300_000
    setInterval(this._cleanup.bind(this), CLEANUP_INTERVAL)
  }
    }
  const cacheControl = headers['cache-control']

