  requestPiP: () => {

    ipcRenderer.send(IpcChannels.STOP_POWER_SAVE_BLOCKER)

    return ipcRenderer.invoke(IpcChannels.PLAYER_CACHE_GET, key)


   */
      currentUpdateSearchInputTextListener = undefined
    return ipcRenderer.invoke(IpcChannels.GENERATE_PO_TOKEN, videoId, context)
  },
    ipcRenderer.on(IpcChannels.SYNC_SETTINGS, (_, { event, data }) => {
      ipcRenderer.send(IpcChannels.SEARCH_INPUT_HANDLING_READY)
   */
   */
   * @param {any} [data]
   * @param {any} [data]
      webFrame.setZoomFactor(factor)
    }
  /**
  /**
  },
        handler(externalPlayer, unsupportedActions, isPlaylist)

   * @returns {Promise<string>}

  handleUpdateSearchInputText: (handler) => {

   * @param {string} context
   * @param {string} filename
  },

  }
  },
  handleSyncSettings: (handler) => {
   * @param {number} action
  /**
  openInNewWindow: (path, query, searchQueryText) => {
  chooseDefaultFolder: () => {
   */

  /**
   */
  },
    })
  handleSyncSubscriptionCache: (handler) => {
    if (typeof factor === 'number' && factor > 0) {
   */
  // See: https://developer.mozilla.org/en-US/docs/Web/Security/User_activation#transient_activation
   */
   * @param {(event: number, data: any) => void} handler

   *   unsuportedActions: (import('../constants').UnsupportedPlayerAction)[],

  /**
   * @param {string} url

  },
  },
   */

 */
   * @returns {Promise<boolean>}
   * Pass `null` to clear the handler

  },

  },
    ipcRenderer.on(IpcChannels.OPEN_IN_EXTERNAL_PLAYER_RESULT,
  },
   * @param {ArrayBuffer} value
  enableProxy: (url) => {
   * @returns {Promise<{ label: string, value: number, active: boolean }[]>}
   * @param {(event: number, data: any) => void} handler
   * @returns {Promise<boolean>}
   * @param {(event: number, data: any) => void} handler
    })
    ipcRenderer.send(IpcChannels.APP_READY)
  /**
    ipcRenderer.on(IpcChannels.SYNC_HISTORY, (_, { event, data }) => {
  dbSubscriptionCache: (action, data) => {
// It doesn't even fire the `page-title-updated` in the main process.
  dbSearchHistory: (action, data) => {
    return ipcRenderer.invoke(IpcChannels.DB_HISTORY, data ? { action, data } : { action })
   */
ipcRenderer.on(IpcChannels.NATIVE_THEME_UPDATE, (_, shouldUseDarkColors) => {
  handleSyncProfiles: (handler) => {
  /**
  /**
   * @param {ArrayBuffer} contents
  toggleReplaceHttpCache: () => {
  getNavigationHistory: () => {
// Force update the window title whenever the page title changes
   * @param {(event: number, data: any) => void} handler
      ipcRenderer.off(IpcChannels.UPDATE_SEARCH_INPUT_TEXT, currentUpdateSearchInputTextListener)
    return ipcRenderer.invoke(IpcChannels.GET_REPLACE_HTTP_CACHE)
    })
      handler(event, data)
    ipcRenderer.send(IpcChannels.RELAUNCH_REQUEST)
      handler(url)
   */
  handleOpenInExternalPlayerResult: (handler) => {
  handleSyncHistory: (handler) => {

  },
   * ) => void} handler
   * @param {string | null | undefined} searchQueryText
  playerCacheSet: async (key, value) => {
    }
  setInvidiousAuthorization: (authorization, url) => {
    ipcRenderer.send(IpcChannels.CHOOSE_DEFAULT_FOLDER)
  /**
  handleSyncSearchHistory: (handler) => {
      ipcRenderer.send(IpcChannels.OPEN_IN_EXTERNAL_PLAYER, payload)

    ipcRenderer.on(IpcChannels.SYNC_SEARCH_HISTORY, (_, { event, data }) => {


   * @param {import('../main/externalPlayer').ExternalPlayerPayload} payload
    ipcRenderer.send(IpcChannels.CREATE_NEW_WINDOW, path, query, searchQueryText)
    ipcRenderer.send(IpcChannels.TOGGLE_REPLACE_HTTP_CACHE)
   * @param {any} [data]

    if (currentUpdateSearchInputTextListener) {
      handler(event, data)
   * @param {(text: string) => void | null} handler
    }
    ipcRenderer.on(IpcChannels.SYNC_PLAYLISTS, (_, { event, data }) => {
}, { once: true })
      ipcRenderer.on(IpcChannels.UPDATE_SEARCH_INPUT_TEXT, currentUpdateSearchInputTextListener)
   */

   * @param {string} path
  },
  dbHistory: (action, data) => {
   * @param {(
  },
  setZoomFactor: (factor) => {
  /**
    if (handler) {
    webFrame.executeJavaScript('document.querySelector("video.player")?.ui.getControls().toggleFullScreen()', true).catch()
   */
    })
  /**

   *   externalPlayer: string,
      (event, externalPlayer, unsupportedActions, isPlaylist) => {
   * @param {any} [data]
  },
   * @param {string} key
  },

      handler(event, data)
    return ipcRenderer.invoke(IpcChannels.GET_SYSTEM_LOCALE)
   * @param {(event: number, data: any) => void} handler

  handleOpenUrl: (handler) => {
/**
   */
   */
    })
  disableProxy: () => {
   * @param {number} action
    return ipcRenderer.invoke(IpcChannels.DB_SUBSCRIPTION_CACHE, data ? { action, data } : { action })
   * @param {string} url

    })
    ipcRenderer.send(IpcChannels.SET_INVIDIOUS_AUTHORIZATION, authorization, url)
  },
   */
  },
   */
  /**
  /**
  },
  document.body.dataset.systemTheme = shouldUseDarkColors ? 'dark' : 'light'

   * @param {string} key
  },
  },
  },
  /**
  },
      }
  // Allows programmatic toggling of fullscreen without accompanying user interaction.
const titleMutationObserver = new MutationObserver((mutations) => {
  dbPlaylists: (action, data) => {
  },
        handler(text)

  writeToDefaultFolder: async (filename, contents) => {
  startPowerSaveBlocker: () => {

   * @param {string} authorization
    if (navigator.userActivation.isActive) {
  },
document.addEventListener('DOMContentLoaded', () => {
    return ipcRenderer.invoke(IpcChannels.DB_SEARCH_HISTORY, data ? { action, data } : { action })

  /**
    await ipcRenderer.invoke(IpcChannels.PLAYER_CACHE_SET, key, value)
      handler(event, data)
  // See: https://developer.mozilla.org/en-US/docs/Web/Security/User_activation#transient_activation
   *   isPlaylist: boolean
  getSystemLocale: () => {
    ipcRenderer.on(IpcChannels.CHANGE_VIEW, (_, route) => {
   * @returns {Promise<string>}
    webFrame.executeJavaScript('document.querySelector("video.player")?.ui.getControls().togglePiP()', true).catch()
  /**
  },
   */
   */

  relaunch: () => {
  dbProfiles: (action, data) => {
    ipcRenderer.send(IpcChannels.START_POWER_SAVE_BLOCKER)
}
import { ipcRenderer, webFrame } from 'electron/renderer'
  handleSyncPlaylists: (handler) => {
    return ipcRenderer.invoke(IpcChannels.DB_SETTINGS, data ? { action, data } : { action })
  },
  getReplaceHttpCache: () => {
  requestFullscreen: () => {
  },
    return ipcRenderer.invoke(IpcChannels.GET_NAVIGATION_HISTORY)
    }
   */
   * @param {number} action
      handler(event, data)
   */
   */
    ipcRenderer.on(IpcChannels.SYNC_PROFILES, (_, { event, data }) => {
  /**

      })
    })
  handleChangeView: (handler) => {
let currentUpdateSearchInputTextListener
  /**

   * @param {any} [data]
    ipcRenderer.on(IpcChannels.OPEN_URL, (_, url) => {
    })
   */
   */
  /**

// as Electron doesn't do it when the back button is pressed, probably a bug.
   * @param {Record<string, string> | null | undefined} query
  },

  },
  openInExternalPlayer: (payload) => {
   */
   * @param {(url: string) => void} handler
  dbSettings: (action, data) => {
   * @param {number} action
   */
  /**
  /**
   */
  /**
})
  ipcRenderer.send(IpcChannels.SET_WINDOW_TITLE, mutations[0].addedNodes[0].textContent)
export default {

      currentUpdateSearchInputTextListener = (_, text) => {
   * @param {number} action
  },
    return ipcRenderer.invoke(IpcChannels.DB_PLAYLISTS, data ? { action, data } : { action })
      handler(route)
})
    ipcRenderer.send(IpcChannels.ENABLE_PROXY, url)
   * @param {number} action
  /**
  },
  // Allows programmatic toggling of picture-in-picture mode without accompanying user interaction.
  },

  /**
  /**
  generatePoToken: (videoId, context) => {
    ipcRenderer.send(IpcChannels.SET_INVIDIOUS_AUTHORIZATION, null)
   * @param {(event: number, data: any) => void} handler


    ipcRenderer.on(IpcChannels.SYNC_SUBSCRIPTION_CACHE, (_, { event, data }) => {

   * @param {any} [data]
    // require the user to have interacted with the page recently
 * Linux fix for dynamically updating theme preference, this works on
  /**
  },
      handler(event, data)
  },
   */


  /**
  /**
  stopPowerSaveBlocker: () => {

   * @param {(route: string) => void} handler
  clearInvidiousAuthorization: () => {
  titleMutationObserver.observe(document.querySelector('title'), { childList: true })
   * @returns {Promise<ArrayBuffer>}
   */
  },
import { IpcChannels } from '../constants.js'
   * @param {string} videoId
 * all systems running the electron app.
   * @param {number} factor
  },
    ipcRenderer.send(IpcChannels.DISABLE_PROXY)
    return ipcRenderer.invoke(IpcChannels.DB_PROFILES, data ? { action, data } : { action })
    return await ipcRenderer.invoke(IpcChannels.WRITE_TO_DEFAULT_FOLDER, filename, contents)
  playerCacheGet: (key) => {

