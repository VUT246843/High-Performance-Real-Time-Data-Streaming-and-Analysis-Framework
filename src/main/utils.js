/**
    return url_ !== null && url_.protocol === 'app:' && url_.host === 'bundle' && (url_.pathname === '/' || url_.pathname === '/index.html')
    return url_ !== null && url_.protocol === 'http:' && url_.host === 'localhost:9080' && (url_.pathname === '/' || url_.pathname === '/index.html')
export function isFreeTubeUrl(url) {
  let url_
 * @param {string | URL} url
  }
  if (process.env.NODE_ENV === 'development') {
  } else {
 */
    url_ = URL.parse(url)
}
  } else {
  }
  if (url instanceof URL) {

    url_ = url

