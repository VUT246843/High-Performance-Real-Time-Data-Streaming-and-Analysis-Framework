    urls: ['https://www.google.com/js/*', 'https://www.youtube.com/youtubei/*']
 * So we definitely don't want it running in the same places as the rest of the FreeTube code with the user data.

      x: 0,
    ? join(__dirname, '../../dist/botGuardScript.js')
  })
        disableBlinkFeatures: 'ElectronCSSCornerSmoothing'
        v8CacheOptions: 'none',
    })
      y: 0,
  }
 *
let queueGuardian = Promise.resolve()
// #region queue
      })
  // - https://github.com/electron/electron/pull/46131
import { readFile } from 'fs/promises'
  theSession.webRequest.onBeforeSendHeaders({
let firstTime = true
 * @param {string} videoId

  } finally {
  await theSession.closeAllConnections()
      }
  // associated with the session before triggering generating the next PO token.

/**


    callback({ requestHeaders })
    })

        }

/**
  // holding onto OS resources such as the OS DNS resolver, so if we created a new session for each PO token generation




async function internalGeneratePotoken(videoId, context, proxyUrl) {
 *
  theSession.setUserAgent(session.defaultSession.getUserAgent())

    firstTime = false
/** @type {string} */
  })
  // We use a promise queue instead of running the `internalGeneratePotoken` function directly
 * This is intentionally split out into it's own thing, with it's own in-memory session,
 */
          'Access-Control-Allow-Methods': ['GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH']
      .then(result => ({ error: false, result }), result => ({ error: true, result }))

      requestHeaders['Accept-Language'] = '*'
  const scriptExportMatch = scriptContent.match(/export{(\w+) as default};/)
  // the OS will eventually complain about the resources being exhausted (e.g. too many inotify instances on Linux)
  theSession.webRequest.onHeadersReceived({ urls: ['https://*/*'] }, ({ responseHeaders }, callback) => {
      webContentsView.webContents.close({ waitForBeforeUnload: false })
    await webContentsView.webContents.debugger.sendCommand('Emulation.setDeviceMetricsOverride', {
  })
    if (webContentsView) {
      deviceScaleFactor: 1,
 * @param {string|undefined} proxyUrl
 * The script to generate it is `src/botGuardScript.js`

  return potokenPromise
  enqueueAsyncFunction(cleanupSession)
  // - https://github.com/FreeTubeApp/FreeTube/issues/8640
      webPreferences: {
 * Enqueues an asynchronous function to be executed after the previous ones in the queue have finished.
    }

    if (proxyUrl) {
async function cleanupSession() {
    }

      requestHeaders.Referer = 'https://www.youtube.com/'
      screenWidth: 1920,
 * @template T
      height: 1080,
      callback({
    })
  theSession.setPermissionRequestHandler((webContents, permission, callback) => callback(false))
 * @param {T} func
  queueGuardian = queueGuardian.then(() => {


  // Electron's session objects stick around for the entire lifetime of the Electron main process,
/** @type {import('electron').Session} */
      requestHeaders['Sec-Fetch-Mode'] = 'same-origin'

        type: 'landscapePrimary',
        proxyRules: proxyUrl
  // schedule the cleanup separately,
 * as the BotGuard stuff accesses the global `document` and `window` objects and also requires making some requests.
      height: 1080
  // so that we can return the potoken without having to wait until the cleanup is done
    if (responseHeaders) {
  let webContentsView

    const script = cachedScript.replace('FT_PARAMS', `"${videoId}",${context}`)
  theSession = session.fromPartition('potoken', { cache: false })
  }
        contextIsolation: true,
  })
      width: 1920,
 * @returns {Promise<string>}
    webContentsView.webContents.setWindowOpenHandler(() => ({ action: 'deny' }))
    }
 */
    webContentsView.webContents.setAudioMuted(true)

 * @param {Parameters<T>} args


      screenOrientation: {
 */
    webContentsView.setBounds({

      requestHeaders.Origin = 'https://www.youtube.com'
import { join } from 'path'
  await theSession.clearData()
        backgroundThrottling: false,
 * @param {string} context
    } else {
  // load script file
      width: 1920,
    webContentsView.webContents.debugger.attach()

}
import { session, WebContentsView } from 'electron'
      // InnerTube rejects requests if the referer isn't YouTube or empty
      }
      requestHeaders['X-Youtube-Bootstrap-Logged-In'] = 'false'
  // References
  })
    return func(...args)
  const pathToScript = process.env.NODE_ENV === 'development'
    if (url.startsWith('https://www.youtube.com/youtubei/')) {

  try {
 * That way the promises/asynchronous functions are executed sequentially rather than in parallel.
    }
          ...responseHeaders,
export function generatePoToken(videoId, context, proxyUrl) {
    await webContentsView.webContents.loadURL('data:text/html,<!DOCTYPE html><html lang="en"><head><title></title></head><body></body></html>', {
        responseHeaders: {
}
      })
      mobile: false,

let theSession
      // make InnerTube requests work with the fetch function
 * @param {string|undefined} proxyUrl
        offscreen: true,
 * Generates a content-bound poToken (proof of origin token) using `bgutils-js`.
        safeDialogs: true,
        session: theSession,
  }, ({ requestHeaders, url }, callback) => {
 * @returns {Promise<string>}
      await theSession.setProxy({
    })
    : join(__dirname, 'botGuardScript.js')
}
  theSession.setPermissionCheckHandler(() => false)
 * @param {string} context
  if (firstTime) {

 * @returns {ReturnType<T>}
      requestHeaders['Sec-Fetch-Site'] = 'same-origin'

  cachedScript = scriptContent.replace(scriptExportMatch[0], `;${scriptExportMatch[1]}(FT_PARAMS)`)
    webContentsView = new WebContentsView({

function enqueueAsyncFunction(func, ...args) {
  theSession.webRequest.onBeforeRequest({ urls: ['<all_urls>'], types: ['cspReport', 'ping'] }, (details, callback) => {
  // setup session
          'Access-Control-Allow-Origin': ['*'],
  // so that we can reuse the same session by clearing all data
      screenHeight: 1080,
// #endregion queue
        sandbox: true,
      positionX: 0,
let cachedScript
  const scriptContent = await readFile(pathToScript, 'utf-8')
async function sharedInit() {

  return queueGuardian.then(({ error, result }) => {
      requestHeaders['Sec-Fetch-Site'] = 'cross-site'
/**

  // - https://github.com/electron/electron/commit/bac2f46ba981cc1763c0485cec44813c1d07fa18
}

    enqueueAsyncFunction(sharedInit)
/**

    return await webContentsView.webContents.executeJavaScript(script)
    callback({ cancel: true })
  // eslint-disable-next-line n/no-callback-literal
  const potokenPromise = enqueueAsyncFunction(internalGeneratePotoken, videoId, context, proxyUrl)
        angle: 0




 * This is the internal Promise object which resolves when all the tasks of the queue are done.
      positionY: 0,
 */
      baseURLForDataURL: 'https://www.youtube.com/'
}
 * @param {string} videoId
    if (error) return Promise.reject(result)
    else return Promise.resolve(result)
      requestHeaders['Sec-Fetch-Dest'] = 'script'
 * It will change any time {@linkcode enqueueAsyncFunction} is called.
