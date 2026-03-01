
          trayWindows = [window]


      end = length - 1
        if (isFreeTubeUrl(url)) {
        case 'black':
              imageCache.add(url, mimeType, data, expiryTimestamp)
    if (!isFreeTubeUrl(event.senderFrame.url)) {
      // hold a value.
              if (browserWindow == null) { return }
          return '#f3ead3'
          await baseHandlers.history.delete(data)
        let redirectURL = `imagecache://${encodeURIComponent(details.url)}`
          // TODO: Syncing (implement only when it starts being used)
        window.webContents.send(IpcChannels.SYNC_SETTINGS, syncPayload)

    const windowBackground = await baseHandlers.settings._findOne('baseTheme').then((setting) => {
        // are allowed through, as their resourceType is 'other'
            copy(parameters.linkURL)
                show: true,
            case 'hidePlaylists':
      }
      currentPath = app.getPath('pictures')
    let newArg = arg.replace('freetube://', '')
    })
    }
  ipcMain.handle(IpcChannels.DB_HISTORY, async (event, { action, data }) => {
              })
          return '#fdf6e3'
    // to prevent any files outside of the player_cache directory,

    }
            visible = ['/channel', '/watch', '/hashtag', '/post'].some(p => path.startsWith(p)) ||
            accelerator: 'Alt+Left',
  ipcMain.handle(IpcChannels.DB_SEARCH_HISTORY, async (event, { action, data }) => {
      scheme: 'app',
            event,
          },
          return '#2d353b'
            IpcChannels.SYNC_SUBSCRIPTION_CACHE,
   * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
            { event: SyncEvents.GENERAL.DELETE_ALL, data }
      newWindow.setFullScreen(true)
import { generatePoToken } from './poTokenGenerator'
import * as baseHandlers from '../datastores/handlers/base'
        // the requests made by the imagecache:// handler to fetch the image,
          )


        case DBActions.GENERAL.FIND:
    if (
            }))
          })
            IpcChannels.SYNC_HISTORY,
            event,

            createWindow({
              navigateTo('/subscriptions', browserWindow)

    let disableSmoothScrolling = false
    const fixedUserAgent = session.defaultSession.getUserAgent()
  })
  /** @type {Set<string>} */
  // Playlists
            event,
          return
            accelerator: 'CmdOrCtrl+Shift+C',
                  return `${origin}/post/${id}?ucid=${authorId}`
    }
          )
            selector: 'paste:'
  })
        ]
}
          },
  const isDebug = process.argv.includes('--debug')
            { event: SyncEvents.SUBSCRIPTION_CACHE.UPDATE_VIDEOS_BY_CHANNEL, data }
          { role: 'zoomin', accelerator: 'CmdOrCtrl+=', visible: false },
          return null
    }

    const allWindows = BrowserWindow.getAllWindows()
        } else if (
          syncOtherWindows(
      newWindow.once('ready-to-show', showWindow)

        delete responseHeaders['set-cookie']
    // FreeTube only needs a few permissions, so we reject requests for other permissions
  }

      // Let app quit when the cleanup is finished
          window.show()
      .filter(part => !part.includes('Electron') && !part.includes(packageDetails.productName))
    if (!APPIMAGE) {
          // This one is only allowed to be changed by the CHOOSE_DEFAULT_FOLDER IPC action
          if (newStartupUrl) startupUrl = newStartupUrl
            }
      stopPowerSaveBlockerForWindow(browserWindow)
  })
  })
  let startupUrl

      await asyncFs.rm(REPLACE_HTTP_CACHE_PATH)
            trayWindows.push(window)
        }

  // https://www.electronjs.org/docs/latest/api/app#event-activate-macos
  }
    }
            click: () => trayClick(window)

      const contents = await asyncFs.readFile(filePath)
    }
          syncOtherWindows(
      }

          visible: visible && isInAppUrl,



  if (process.env.NODE_ENV !== 'development') {
    } catch (err) {
        callback(false)
        permission === 'fullscreen' ||
    if (disableSmoothScrolling) {
            })
    ]
  function handleQuit() {
    if (!openDeepLinksInNewWindow) {
  }
      case 'js':
    showSaveImageAs: true,
            accelerator: process.platform === 'darwin' ? 'Cmd+Y' : 'Ctrl+H',

    session.defaultSession.setUserAgent(fixedUserAgent)
          )
  })
            type: 'normal'
    const filePath = playerCachePathForKey(key)
          syncOtherWindows(
  function stopPowerSaveBlockerForWindow(window) {
      protocol.handle('app', async (request) => {
    }
        requestHeaders.Referer = 'https://www.youtube.com/sw.js'
    if (!isFreeTubeUrl(event.senderFrame.url)) {
        case DBActions.GENERAL.DELETE_ALL:

              browserWindow.webContents.navigationHistory.goBack()
          return null
    // because `process.execPath` points at the temporarily extracted
  app.on('open-url', async (event, url) => {
    })
                window.webContents.openDevTools()
      if (!isFreeTubeUrl(details.origin)) {
      if (trayWindows.length === BrowserWindow.getAllWindows().length) { mainWindow = window }
    } else if (trayWindows.length > 0) {
import asyncFs from 'fs/promises'
        // make InnerTube requests work with the fetch function
            { role: 'services' }
import cp from 'child_process'
                { role: 'services' },
          !hidePlaylists && {
        default:
    if (browserWindow == null || !isFreeTubeUrl(browserWindow.webContents.getURL())) {

          },

      BrowserWindow.fromWebContents(event.sender)?.setTitle(title)
      if (url.startsWith('https://www.youtube.com/youtubei/')) {
    }
import { brotliDecompress } from 'zlib'
        app.quit()
            } else {
            break
          url.protocol === 'mailto:' ||
    if (browserWindow) {
          { type: 'separator' },
        value: 'YES+',
      properties: ['openDirectory']
  })
              await setMenu()
          return '#1e1e2e'
    browserWindow.webContents.send(IpcChannels.CHANGE_VIEW, path)
      {
          label: 'Copy Lin&k',
          { role: 'delete' },

            // MacOS: Command + Y
      if (responseHeaders) {
      if (typeof err === 'string') throw err
          return null

  ipcMain.handle(IpcChannels.GET_REPLACE_HTTP_CACHE, (event) => {
          visible = true
  /**
    trayWindows.forEach(window => {

                newParams.set('list', params.get('playlistId'))
            },
  ipcMain.handle(IpcChannels.GENERATE_PO_TOKEN, (event, videoId, context) => {
          await baseHandlers.playlists.deleteAll()
function printHelp() {

      {

      defaultPath: currentPath,
          {
    return result.filePaths[0]
        ? [

    const folderPath = (await baseHandlers.settings._findOne('screenshotFolderPath'))?.value
      case 'json':
            event,
          await baseHandlers.playlists.upsert(data)
    cleanUpResources().finally(() => {
  ipcMain.on(IpcChannels.APP_READY, (event) => {
    if (!isFreeTubeUrl(event.senderFrame.url)) {
          { role: 'zoomout', accelerator: 'CmdOrCtrl+numsub', visible: false },
        } else {
      menuItems.push({
    })
  KeyboardShortcuts,
            click: () => trayClick(window, true)
      window.minimize()
            label: 'Back',
          )
          )
          'serviceworkers',
          return await baseHandlers.searchHistory.find()
                    if (browserWindow == null) { return }
      }
        if (!(mainWindow && mainWindow.webContents)) {
  SEARCH_CHAR_LIMIT,
    runApp()
        callback({
      newArg = 'https:' + newArg.substring(5)
        mainWindow.webContents.send(IpcChannels.OPEN_URL, startupUrl)
      await baseHandlers.settings._updateBounds(value)
            { event: SyncEvents.PROFILES.ADD_CHANNEL, data }
            { event: SyncEvents.GENERAL.DELETE_ALL }

    showSelectAll: false,
    })
            })
              }
          return null
  // DB related IPC calls

    newWindow.once('closed', () => {
      })
      if (tray) { tray.destroy() }
              }
      default:
        name: 'CONSENT',
            { event: SyncEvents.GENERAL.DELETE, data }
              newRequest.setHeader(header, request.headers[header])
        return false
  app.exit()

    newWindow.webContents.setWindowOpenHandler((details) => {
      !(arrayBuffer instanceof ArrayBuffer)) {
    if (useProxy) {
        }
          )
    } else {
          }
          )
            },
        }
    }
          {
          await baseHandlers.settings.upsert(data._id, data.value)
            IpcChannels.SYNC_SEARCH_HISTORY,
   * Uncomment the following code below and install `electron-updater` to
          await baseHandlers.history.updateWatchProgress(data.videoId, data.watchProgress)

            { event: SyncEvents.GENERAL.DELETE, data }
              navigateTo('/history', browserWindow)
              headers: { 'content-type': cached.mimeType }
        const contents = await asyncFs.readFile(path.join(__dirname, pathname))
          }

      return
          // eslint-disable-next-line no-throw-literal

     * @param {import('electron').IpcMainEvent} event
   * @param {string | undefined} [currentPath]
        // Calling hide() inside minimize is broken for some Linux distros (window minimizes again when trying to drag,
    } else {
            label: 'Playlists',
        case DBActions.HISTORY.UPDATE_PLAYLIST:
    if (!isFreeTubeUrl(event.senderFrame.url)) {

        {
        submenu: [
      {
      showWindowNow = false,
  // doing it synchronously ensures that we add it before the event fires

          // Use while loop instead of for loop as trayClick modifies the trayWindows array

    showCopyLink: false,
        }
          }
            resolve(new Response(cached.data, {
            type: 'normal'
                },
  console.log(`v${packageDetails.version} Beta`) // eslint-disable-line no-console
      session.defaultSession.cookies.set({
              replaceMainWindow: false,

    // and reject all requests on non-FreeTube URLs.
          case 'hashtag':
            { event: SyncEvents.GENERAL.UPSERT, data }
      const { maximized, fullScreen, ...bounds } = boundsDoc.value
      replaceMainWindow = true,
        // Only show the option for in-app URLs and not external ones
    await baseHandlers.settings.upsert(settingId, result.filePaths[0])
      if (windowVisible) {

    if (!isFreeTubeUrl(event.senderFrame.url)) {
                { role: 'quit' }
    }
      },
          await baseHandlers.subscriptionCache.updateLiveStreamsByChannelId(data.channelId, data.entries, data.timestamp)

      if (parameters.linkURL.length > 0) {
  })
        requestHeaders.Origin = 'https://www.youtube.com'
            return `${origin}/post/${id}`

        newWindow.webContents.ipc.off(IpcChannels.APP_READY, readyHandler)
      await asyncFs.writeFile(filePath, new DataView(arrayBuffer))

    }
            x: savedBounds.x,

            IpcChannels.SYNC_HISTORY,


      })
      }
      app.commandLine.appendSwitch('enable-smooth-scrolling')
    })
      e.preventDefault()
    }
        case DBActions.PLAYLISTS.DELETE_ALL_VIDEOS:

    }
    }
        case 'catppuccin-mocha':
      if (window.id in trayMaximizedWindows) {
  /*
    try {
        arguments: '--new-window',
          { role: 'zoomin', accelerator: 'CmdOrCtrl+Plus' },
  // *********** //
                trayOnMinimize = data.value
          syncOtherWindows(
          { role: 'resetzoom', accelerator: 'CmdOrCtrl+num0', visible: false },

  }
            accelerator: 'CmdOrCtrl+N',


    }
            role: 'copy',
      },
      return { action: 'deny' }
      (query != null && typeof query !== 'object') ||
      searchQueryText

      windowStartupUrl = null,


          return null
        case DBActions.SUBSCRIPTION_CACHE.UPDATE_SHORTS_BY_CHANNEL:
            })

          return new Response(null, {
      // Show when loaded
    // add support for authority free url
  })
            }
  })



    })
            event.reply(IpcChannels.OPEN_URL, newStartupUrl)

      return
        case 'catppuccin-latte':
    session.defaultSession.on('file-system-access-restricted', (event, details, callback) => {
          clipboard.writeText(url)
          }
      if (resourcesCleanUpDone) { return }

              }))

        backgroundThrottling: false,

          }
  if (process.platform === 'win32') {
            status: 200,
  --help, -h           show this message, then exit
  function relaunch() {
  // Profiles
    await createWindow()
      }
    newWindow.once('close', async () => {
      case 'html':
          createTrayContextMenu()

            : []),
        window.webContents.send(IpcChannels.NATIVE_THEME_UPDATE, nativeTheme.shouldUseDarkColors)
    }
                hasParams = true
        permission === 'clipboard-sanitized-write' ||
      const proxyPassword = (await baseHandlers.settings._findOne('proxyPassword'))?.value


          await createWindow({
    if (!isFreeTubeUrl(event.senderFrame.url)) {

        // Only show search in new window for

      session.defaultSession.clearStorageData({
            height: 800
        }
      windowStartupUrl,
      // Only handle valid URLs that came from a FreeTube page

          })
       * @param {import('electron').IpcMainEvent} event

    if (!isFreeTubeUrl(event.senderFrame.url)) {
      })
    const dropdownOptions = []

      await asyncFs.mkdir(directory, { recursive: true })

                webPreferences: {
    const onBeforeSendHeadersRequestFilter = {
          throw 'invalid history db action'

          return null
            copy(transformURL(false))
          while (trayWindows.length > 0) {
        }
    const menu = Menu.buildFromTemplate(template)
    })
  ipcMain.on(IpcChannels.START_POWER_SAVE_BLOCKER, (event) => {
      mainWindow.webContents.send(IpcChannels.OPEN_URL, newStartupUrl)
                { type: 'separator' },
            }

            { event: SyncEvents.GENERAL.UPSERT, data }
        }
   * Callback when processing a freetube:// link (macOS)
   * @param {string} extension
    }

            if (query) {

            url,
        case 'pastel-pink':
    const menu = Menu.buildFromTemplate(menuItems)
              resolve(new Response(data, {
  function navigateTo(path, browserWindow) {
  /** @type {Map<number, number>} */
            replaceMainWindow: false,
            headers
    app.quit()
        return 'font/woff2'
    // - "clipboard-sanitized-write": To allow the user to copy video URLs and error messages
    } catch (err) {
        return 'text/html'
          await baseHandlers.playlists.deleteAllVideosByPlaylistId(data)
      if (typeof commandLine !== 'undefined') {
function runApp() {
    } else {
      throw new Error('Invalid save location')
  /*
    }
        const [route, id] = path.split('/').filter(p => p)
    } catch (error) {
        default:
    // not having write access can happen if the user copies their settings to different machines
    } catch (err) {
            {
          replaceMainWindow: false,

            return
            const cached = imageCache.get(url)

          {
        }
          }
      })
            headers: {
            })
    if (process.env.NODE_ENV === 'development') {


                  label: 'Forward',
        requestHeaders['Sec-Fetch-Mode'] = 'same-origin'
    for (const window of otherWindows) {
          syncOtherWindows(
            type: 'normal',
                { type: 'separator' },
    tray.setContextMenu(menu)
            label: 'GPU Internals (chrome://gpu)',
      data: {
    },
    const filePath = playerCachePathForKey(key)
        case DBActions.GENERAL.DELETE_ALL:
  async function setMenu() {
    if (replaceMainWindow) {

    } else {
            proxyHostname = doc.value
      const handle = await asyncFs.open(REPLACE_HTTP_CACHE_PATH, 'w')
      return
    const window = BrowserWindow.fromWebContents(webContents)
    })
      // Default to nativeTheme settings if nothing is found.
  })
          }
  let mainWindow
          return '#282828'
        }
} from 'electron'
    ]
          return '#272e33'
      })
        requestHeaders['Sec-Fetch-Site'] = 'same-origin'
      return
              trayClick(mainWindow)
        },
    const boundsDoc = await baseHandlers.settings._findOne('bounds')
      }
      const value = {

      if (app.isReady()) await createWindow()
            case 'backendPreference':
          requestHeaders.Authorization = invidiousAuthorization.authorization
            break
      case 'ttf':

        supportFetchAPI: true
              if (newMainWindow) { mainWindow = newMainWindow }
          syncOtherWindows(
            headers: {
    // https://www.electronjs.org/docs/latest/api/app#event-window-all-closed
    session.defaultSession.webRequest.onBeforeSendHeaders(onBeforeSendHeadersRequestFilter, ({ requestHeaders, url, webContents }, callback) => {

    } else if (length - activeIndex < HALF_OF_NAV_HISTORY_DISPLAY_LIMIT + 1) {
  const PLAYER_CACHE_PATH = `${userDataPath}/player_cache`
            return `${origin}/playlist?list=${id}`
    }
        if (parameters.linkText) {
    const newWindow = await createWindow({
      switch (setting.value) {
      if (process.platform !== 'darwin' && trayOnMinimize && trayWindows.length > 0) {
          }

        case DBActions.GENERAL.DELETE_MULTIPLE:
    // FreeTube needs the following permissions:
      return
          )
          { role: 'selectall' }
      )
          case 'disableSmoothScrolling':
    // https://github.com/electron/electron/blob/14-x-y/docs/api/window-open.md#native-window-example
              windowStartupUrl: `${ROOT_APP_URL}#/search/${encodeURIComponent(queryText)}`,
        }
      })
            event,
          throw 'invalid search history db action'
            accelerator: 'CmdOrCtrl+C',

      }
    // Set the path of electron.exe and your app.
        type: 'separator'



          { role: 'cut' },
  })

      }
        window.show()
  const trayMaximizedWindows = {}
      minHeight: 380,
    relaunch()
  const REPLACE_HTTP_CACHE_PATH = `${userDataPath}/experiment-replace-http-cache`
        return false
          }
    const activeIndex = sender.navigationHistory.getActiveIndex()
  if (replaceHttpCache) {
        if (isFreeTubeUrl(event.senderFrame.url)) {
    proxyUrl = url
      .replace('freetube:', '')
            status: 200,
          // Email address on the about page and Autolinker detects and links email addresses
        label: 'Navigate',
}
        switch (doc._id) {
        case DBActions.GENERAL.DELETE_ALL:
        value: result.filePaths[0]
    }
  const ALLOWED_RENDERER_FILES = process.env.NODE_ENV === 'production'
          click: () => {
          { role: 'togglefullscreen' },
    // - "fileSystem" Needed for the Web File System API (e.g. importing and exporting data)
          label: 'New Window',
            proxyProtocol = doc.value

        ? {
  function playerCachePathForKey(key) {
    }

          }
      result = await dialog.showOpenDialog(window, dialogOptions)
    // when we create a real session on the watch page, youtube returns tracking cookies, which we definitely don't want
    // - "fullscreen": So that the video player can enter full screen
          await baseHandlers.searchHistory.upsert(data)
        // Which raises "Object has been destroyed" error
        // NOT link for timestamp
    if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
          await baseHandlers.profiles.addChannelToProfiles(data.channel, data.profileIds)
            }
          // Just focus the main window (instead of starting a new instance)
      const powerSaveBlockerId = powerSaveBlocker.start('prevent-display-sleep')
    ],

    }
      app.exit(parseInt(process.env.FREETUBE_RELAUNCH_EXIT_CODE))
              chunks.push(chunk)
            : path.join(__dirname, '..', '_icons', 'iconColor.png')
            IpcChannels.SYNC_SEARCH_HISTORY,
            type: 'normal'
        urlObj.origin.endsWith('.ytimg.com')
    if (isFreeTubeUrl(event.senderFrame.url)) {
      })
          return null

          {
    }
          await baseHandlers.playlists.create(data)
        case 'dark':
          await baseHandlers.playlists.deleteMultiple(data)
      return
          // TODO: Syncing (implement only when it starts being used)
          })
    }
    autoUpdater.quitAndInstall()
          syncOtherWindows(

        proxyRules: proxyUrl
          },
            },
      result = await dialog.showOpenDialog(dialogOptions)
              if (window.webContents.isDevToolsOpened()) {

            event,
        directory = folderPath
            backendPreference = doc.value
              const newParams = new URLSearchParams(url.search)

      },
        }
      startupUrl = null

            break
      if (typeof directory !== 'string' || directory.length === 0) {
  })
      const imageCache = new ImageCache()
            headers: {
  }
    } catch (err) {
        },
  }
            IpcChannels.SYNC_SUBSCRIPTION_CACHE,

              trayOnMinimize = doc.value
        // eslint-disable-next-line n/no-callback-literal
      webPreferences: {
            default:
        }
      if (typeof err === 'string') throw err
      // Only show select all in text fields
  }
      htmlFullscreenWindowIds.add(newWindow.id)
      callback({ responseHeaders })
          const blacklistedHeaders = ['content-length', 'host', 'trailer', 'te', 'upgrade', 'cookie2', 'keep-alive', 'transfer-encoding', 'origin', 'referrer']
      autoHideMenuBar: true,
            selector: 'copy:'
    consentCookieDomains.forEach(url => {
  // ************************************************* //
}
    // Not using `before-quit` since that one is fired before windows are closed
      await handle.close()
        case 'solarized-light':
      callback(proxyUsername, proxyPassword)
            { event: SyncEvents.SUBSCRIPTION_CACHE.UPDATE_COMMUNITY_POSTS_BY_CHANNEL, data }
      if (process.platform !== 'darwin') {

      const windowVisible = screen.getAllDisplays().some(display => {
          )
              const authorId = new URLSearchParams(query).get('authorId')
          }
              headers = {
      docArray.forEach((doc) => {

            IpcChannels.SYNC_SUBSCRIPTION_CACHE,
          'websql',
          return null
          return new Response(null, {
    if (!authorization) {
          redirectURL
          )
          if (!removeWindow) {
        click: () => {
  function trayClick(window, close = false) {
    await asyncFs.mkdir(PLAYER_CACHE_PATH, { recursive: true })
      }
          })
      proxyRules: url
    if (path.charAt(0) !== '/') {
            case 'backendFallback':

            IpcChannels.SYNC_PLAYLISTS,
          return null

      .split(' ')

  })
  // ************************************************* //
    const powerSaveBlockerId = activePowerSaveBlockers.get(window.id)
        case DBActions.PLAYLISTS.DELETE_VIDEO_IDS:
                replaceMainWindow: false,
      switch (action) {
                })
        // only open the dev tools if they aren't already open
    const browserWindow = BrowserWindow.fromWebContents(event.sender)
          // The user wants to create a new window in the existing instance
    }
  ipcMain.once(IpcChannels.RELAUNCH_REQUEST, () => {
      }
        })

    return newWindow
          // syncOtherWindows(IpcChannels.SYNC_PLAYLISTS, event, { event: '_', data })
          { role: 'zoomout' },
          for (const header of Object.keys(request.headers)) {
        webSecurity: false,
  }

          })
            event,
usage: ${process.argv0} [options...] [url]

                  },
  })
      window.close()
      ])
                autoHideMenuBar: true,
    if (browserWindow && !activePowerSaveBlockers.has(browserWindow.id)) {
  })

    return dropdownOptions

          syncOtherWindows(

  let trayWindows = []
    if (savedMaximized) {
            windowStartupUrl: details.url
              break
      if (!setting) {
      })
    Menu.setApplicationMenu(menu)
              'Content-Type': 'application/json',
          : path.resolve(__dirname, 'preload.js')
  })
        visible: parameters.linkURL.split('#')[0] === browserWindow.webContents.getURL().split('#')[0],
  let proxyUrl
      }
              if (params.has('playlistId') && params.get('playlistType') !== 'user') {

  })
          throw 'invalid settings db action'
          await baseHandlers.playlists.deleteVideoIdByPlaylistId(data._id, data.lastUpdatedAt, data.videoId, data.playlistItemId)
  ipcMain.handle(IpcChannels.WRITE_TO_DEFAULT_FOLDER, async (event, filename, arrayBuffer) => {
    })
            proxyPort = doc.value
    allWindows.forEach((window) => {
  const HALF_OF_NAV_HISTORY_DISPLAY_LIMIT = (NAV_HISTORY_DISPLAY_LIMIT / 2) | 0
        if (trayOnMinimize) { trayMaximizedWindows[newWindow.id] = true }
            event,
          return await baseHandlers.playlists.find()
      return (
          return newProfile
            event,
        execPath: PORTABLE_EXECUTABLE_FILE || process.execPath
  function getLinkUrl(argv) {
  // #endregion navigation history
  app.on('activate', () => {
              ]
      // Spawn a new process using the APPIMAGE env variable
            response.on('data', (chunk) => {
    }
      newWindow.on('minimize', () => {
  })
      session.defaultSession.setProxy({
    }
      mainWindow.webContents.openDevTools()
      case 'css':
            }, 100)
   */

        switch (route) {
        : [],

                { role: 'hideothers' },
            IpcChannels.SYNC_SEARCH_HISTORY,
      return
      return replaceHttpCache
          const icon = process.env.NODE_ENV === 'development'
              'Content-Encoding': 'br'
    BrowserWindow.getAllWindows().forEach((window) => {
          return '#000000'
  }
    })
    const hidePlaylists = (await sidenavSettings.hidePlaylists)?.value
      // returns true if the element existed in the set
          await baseHandlers.subscriptionCache.deleteAll()
      // eslint-disable-next-line n/no-callback-literal
      }
} else if (process.argv.includes('--help') || process.argv.includes('-h')) {
          ...(process.platform === 'darwin'
        }
    trayWindows.splice(trayWindows.findIndex(item => item.id === window.id), 1)
      })
            return `${origin}/hashtag/${id}`
    session.defaultSession.setProxy({
              navigateTo('/settings/profile/', browserWindow)
          )
            },
          return null

      tray.setContextMenu(menu)
    app.setAsDefaultProtocolClient('freetube', process.execPath, [path.resolve(process.argv[1])])
          return null
        return 'application/json'
    })

      {
      return null
      session.defaultSession.webRequest.onBeforeRequest(imageRequestFilter, (details, callback) => {
      // Otherwise, `process.execPath` should be used instead.
            event,
          syncOtherWindows(

          case 'post': {
        }
          },
    app.on('second-instance', async (_, commandLine, __) => {

    // `window-all-closed` doesn't fire for Cmd+Q
  powerSaveBlocker, screen, session, shell,
          visible: visible && !isInAppUrl,
            event,
        return nativeTheme.shouldUseDarkColors ? '#212121' : '#f1f1f1'
            }
                newParams.set('t', params.get('timestamp'))
    } else if (typeof authorization === 'string' && typeof url === 'string') {
              navigateTo('/popular', browserWindow)
    // endregion Ensure child windows use same options since electron 14
              const expiryTimestamp = extractExpiryTimestamp(response.headers)
            }
    // The AppImage and Windows portable formats must be accounted for
    const otherWindows = BrowserWindow.getAllWindows().filter((window) => {
            trayClick(trayWindows[0])
          if (rawWebContentsId) {
  // ************** //
      }
        return new Promise((resolve, reject) => {
              break
    relaunch()
        requestHeaders.Referer = 'https://www.youtube.com/'
                hasParams = true
    }
    }
            event,


      // throw a new error so that we don't expose the real error to the renderer

            click: (_menuItem, browserWindow, _event) => {
      if (e.code !== 'ENOENT') {
            : []),
            backendFallback = doc.value
      switch (action) {

            label: 'Close',
   */

    if (isDebug) {
          if (data._id === 'screenshotFolderPath') {
  // *********** //
            IpcChannels.SYNC_HISTORY,
            accelerator: 'CmdOrCtrl+,',
  function syncOtherWindows(channel, event, payload) {
        case DBActions.GENERAL.DELETE_MULTIPLE:
    } else {
        ) {
            label: 'New Window',
  })
          },
          { role: 'pasteandmatchstyle' },
          case 'proxyHostname':

  ABOUT_BITCOIN_ADDRESS,
      switch (action) {
          },
            tray.on('click', (event) => {
    destroyTray()

          newWindow.webContents.openDevTools({ activate: false })
        requestHeaders['Sec-Fetch-Mode'] = 'same-origin'

            accelerator: 'Alt+Right',
              gpuWindow.loadURL('chrome://gpu')
    if (replaceMainWindow) {
            if (query) {
          const path = urlParts[1]
      // Someone tried to run a second instance
          syncOtherWindows(
            createTrayContextMenu()
      }
      {
    try {
              let hasParams = false
      typeof path !== 'string' ||

          return '#de1c85'
    if (typeof currentPath !== 'string' || currentPath.length === 0) {
    const { env: { APPIMAGE, PORTABLE_EXECUTABLE_FILE } } = process
      destroyTray()
        // resize or maximize it, among other shenanigans). It seems to work as intended with this workaround.
          if (mainWindow.isMinimized()) {
        maximized: newWindow.isMaximized(),
        newWindow.show()
          enabled: textShortEnoughForSearch,
        default:
        : {
        enabled: parameters.editFlags.canSelectAll,
  app.on('login', async (event, webContents, request, authInfo, callback) => {

  if (url) {
      },
      startupUrl = newStartupUrl
        standard: true,

  let backendFallback = true
          },
  console.log(`\

    // the /playlist, /channel and /watch in-app URLs get transformed to their equivalent YouTube or Invidious URLs
              }
      }
  nativeTheme, net, protocol, clipboard,

              })
    if (replaceHttpCache) {
        case DBActions.GENERAL.DELETE_ALL:
            IpcChannels.SYNC_PLAYLISTS,
      .join(' ')
      callback(details.isDirectory ? 'deny' : 'allow')
   * Auto Updater
      }


          })
          await baseHandlers.history.upsert(data)
      }
          ? path.resolve(__dirname, '../../dist/preload.js')
      }
  function destroyTray() {
      docArray = await baseHandlers.settings._findAppReadyRelatedSettings()


    directory = path.normalize(directory)
    const newWindow = new BrowserWindow({

  function contentTypeFromFileExtension(extension) {
    }])
            IpcChannels.SYNC_PROFILES,
              'Content-Type': contentTypeFromFileExtension(pathname.split('.').at(-1))
      const subprocess = cp.spawn(APPIMAGE, { detached: true, stdio: 'ignore' })
          await baseHandlers.playlists.upsertVideosByPlaylistId(data._id, data.lastUpdatedAt, data.videos)
          })
            }
      },
  })
        }


      minWidth: 340,
        }
      }
import { constants as fsConstants, existsSync } from 'fs'

          browserWindow.webContents.selectAll()
   */
    }
              navigateTo('/settings', browserWindow)
        const [requestUrl, rawWebContentsId] = request.url.split('#')
        case 'everforest-dark-medium':
          }
  ipcMain.handle(IpcChannels.DB_PLAYLISTS, async (event, { action, data }) => {
      if (typeof err === 'string') throw err
      }
              ]

  // command line switches need to be added before the app ready event first
      }
        return 'text/css'
      if (BrowserWindow.getAllWindows().length !== 1) {
    // experimental as it increases RAM use in favour of reduced disk use
      const textShortEnoughForSearch = parameters.selectionText.trim().length <= SEARCH_CHAR_LIMIT
    }
    }
    app.on('before-quit', () => {
    {
        {
          let headers


        : path.join(__dirname, '../_icons/iconColor.png'),
    // or if they revoke a previously permitted folder in flatseal
    if (!isFreeTubeUrl(event.senderFrame.url)) {
            disableSmoothScrolling = doc.value
    if (!isFreeTubeUrl(event.senderFrame.url)) {
        case DBActions.GENERAL.FIND:
        await asyncFs.access(path.normalize(folderPath), fsConstants.W_OK)
          await baseHandlers.subscriptionCache.updateShortsWithChannelPageShortsByChannelId(data.channelId, data.entries)
    // It's possible to detect these formats and identify their
        if (trayOnMinimize) { delete trayMaximizedWindows[newWindow.id] }
    if (argv.length > 1) {
      case 'txt':
          shell.openExternal(details.url)
          case 'backendFallback':
  import { autoUpdater } from 'electron-updater'

    return newArg
      /**
    if (path.dirname(filePath) !== directory) {
    }
        newWindow.webContents.openDevTools({ activate: false })
            return url.toString()
        args: process.argv.slice(1),

  app.on('ready', async (_, __) => {


            event,
      console.error('WRITE_TO_DEFAULT_FOLDER failed', error)

            newWindow.webContents.ipc.off(IpcChannels.APP_READY, readyHandler)
        url: url,
          manageTray(newWindow)

    }
    if (isFreeTubeUrl(event.senderFrame.url)) {

      return
          createWindow({ replaceMainWindow: false, windowStartupUrl: parameters.linkURL, showWindowNow: true })
        case DBActions.PLAYLISTS.DELETE_VIDEO_ID:
  ipcMain.on(IpcChannels.SET_INVIDIOUS_AUTHORIZATION, (event, authorization, url) => {
            { event: SyncEvents.PROFILES.REMOVE_CHANNEL, data }

        default:
      } else if (url === 'https://www.youtube.com/sw.js_data' || url.startsWith('https://www.youtube.com/api/timedtext')) {
    // If called multiple times

      // `app.relaunch` doesn't work because of FUSE limitations
    }
        (permission === 'fileSystem' && !details.isDirectory)
      {

  } else {

      else throw err.toString()
        newWindow.focus()
            })
                  devTools: false
            },

        return 'image/png'
          case 'proxyPort':
    const sanitizedKey = `${key}`.replaceAll(/[./\\]/g, '__')
  }
          )


  const url = getLinkUrl(process.argv)
          await baseHandlers.searchHistory.delete(data)
      {
    showCopyImageAddress: true,
            IpcChannels.SYNC_HISTORY,
    let proxyPort = '9050'
  ipcMain.on(IpcChannels.DISABLE_PROXY, (event) => {
      } else if (webContents) {

  })
  ipcMain.handle(IpcChannels.DB_PROFILES, async (event, { action, data }) => {

      powerSaveBlocker.stop(powerSaveBlockerId)
  if (process.env.NODE_ENV === 'development' && process.platform === 'win32') {
              // Only show copy link entry for non user playlists
    } catch (err) {
          )

      })
                  click: (_menuItem, browserWindow, _event) => {

  }
      if (allWindows.length !== 0 && newWindow === mainWindow) {
      replaceMainWindow: false,

          click: () => {
          'shadercache',
            if (process.platform !== 'darwin') {
    }
  /*
    }
    // These two additional parameters are only available on windows.
            width: 1200,
    const browserWindow = BrowserWindow.fromWebContents(event.sender)
      app.exit()
      savedFullScreen = fullScreen
  // Profiles
      // Don't log the error if the file doesn't exist as we'll just fetch it from YouTube
    const settingId = 'screenshotFolderPath'
    append: (defaultActions, parameters, browserWindow) => {
  // remove so we can register each time as we run the app.
          await baseHandlers.subscriptionCache.updateCommunityPostsByChannelId(data.channelId, data.entries, data.timestamp)
  if (process.platform !== 'darwin') {
              if (hasParams) {
        label: window.title,
        // eslint-disable-next-line n/no-callback-literal
    let result
            if (!blacklistedHeaders.includes(header.toLowerCase())) {
      callback(
      // If it's an AppImage, things must be done the "hard way"
            }

      ) {
  Tray

      }
            createWindow({
            { event: SyncEvents.GENERAL.DELETE_MULTIPLE, data }

          return null
      if (process.env.NODE_ENV === 'development') {

      if (newWindow.isVisible()) {
    // executables, not the executables themselves
          { role: 'zoomin', accelerator: 'CmdOrCtrl+numadd', visible: false },
        })
                  label: 'Back',

          await baseHandlers.searchHistory.overwrite(data)
  }
        case DBActions.PLAYLISTS.UPSERT_VIDEO:
            text: url
    for (let index = end; index >= Math.max(0, end + 1 - NAV_HISTORY_DISPLAY_LIMIT); --index) {
    }
      if (url !== null && isFreeTubeUrl(newWindow.webContents.getURL())) {
          await baseHandlers.history.deleteAll()
        }
        description: 'Open New Window'
  // Settings
          return '#f1f1f1'
        trayClick(newWindow)
        const newStartupUrl = getLinkUrl(commandLine)
    }
    session.defaultSession.closeAllConnections()
      return nativeTheme.shouldUseDarkColors ? '#212121' : '#f1f1f1'
            IpcChannels.SYNC_SETTINGS,

          )

  }
  ipcMain.handle(IpcChannels.PLAYER_CACHE_GET, async (event, key) => {
          syncOtherWindows(
  /**
    const length = sender.navigationHistory.length()
    }
    if (!isFreeTubeUrl(event.senderFrame.url)) {
            !parameters.isEditable &&
            event,
      invidiousAuthorizations.set(event.sender.id, { authorization, url })
          case 'useProxy':

            IpcChannels.SYNC_SUBSCRIPTION_CACHE,
        case DBActions.GENERAL.OVERWRITE:
  ipcMain.handle(IpcChannels.GET_SYSTEM_LOCALE, (event) => {

          }
        newWindow.webContents.ipc.on(IpcChannels.APP_READY, readyHandler)
          syncOtherWindows(
        }
      if (startupUrl) {
  // History
  app.on('ready', () => {
            click: (_menuItem, browserWindow, _event) => {
    // we've got a custom image cache to make up for disabling the http cache
                Authorization: invidiousAuthorization.authorization
    } else {
    if (!close) {
            { event: SyncEvents.GENERAL.OVERWRITE, data }

          (!hidePopularVideos && (backendFallback || backendPreference === 'invidious')) && {
    showSearchWithGoogle: false,
            { event: SyncEvents.HISTORY.UPDATE_PLAYLIST, data }
       */

            { event: SyncEvents.GENERAL.DELETE, data }
            },

          await baseHandlers.profiles.removeChannelFromProfiles(data.channelId, data.profileIds)
import { extractExpiryTimestamp, ImageCache } from './ImageCache'
          'cachestorage'
      if (typeof err === 'string') throw err


          return null
        if (host !== 'bundle' || !ALLOWED_RENDERER_FILES.has(pathname)) {
      return app.getSystemLocale()
    switch (extension) {
    }
    newWindow.on('enter-html-full-screen', () => {
      })
        return !(bounds.x > x + width || bounds.x + bounds.width < x || bounds.y > y + height || bounds.y + bounds.height < y)
        case 'everforest-light-hard':
    } else {
  ipcMain.on(IpcChannels.OPEN_IN_EXTERNAL_PLAYER, handleOpenInExternalPlayer)
  }
          {
      createWindow()
          switch (data._id) {

  ipcMain.handle(IpcChannels.DB_SUBSCRIPTION_CACHE, async (event, { action, data }) => {
          syncOtherWindows(
          return null
  }
        active: index === activeIndex
    }
    const filePath = path.resolve(directory, filename)
} else {
          return null
          syncOtherWindows(
            height: savedBounds.height
      darkTheme: nativeTheme.shouldUseDarkColors,
          syncOtherWindows(
    // Ensure that we are only writing inside of the expected directory
          {
          return '#ffd1dc'
  // *********** //
          return '#fbf1c7'
    newWindow.on('leave-html-full-screen', () => {
      return baseUrl(argv[argv.length - 1])
        },
    } else {
      {
    resourcesCleanUpDone = true
    })
    })
  nativeTheme.on('updated', () => {
  let trayOnMinimize = false
      'https://youtube.com'
    if (newArg.startsWith('https') && newArg.charAt(5) !== ':') {
      return
      icon: process.env.NODE_ENV === 'development'

      case 'svg':
    // from being read or written
          // eslint-disable-next-line no-throw-literal

          return null
    })
          })

  }





    })
              }
            event,
      if (mainWindow.isMinimized()) mainWindow.restore()

            break
    let proxyProtocol = 'socks5'
      path = `/${path}`
        label: routeLabel,
          origin = 'https://www.youtube.com'
   */
  /*

            if (invidiousAuthorization && url.startsWith(invidiousAuthorization.url)) {
          url.protocol === 'http:' || url.protocol === 'https:' ||
    // https://github.com/electron/electron/issues/48859
                {

          syncOtherWindows(
        app.quit()
      const allWindows = BrowserWindow.getAllWindows()
        }
                    browserWindow.webContents.navigationHistory.goBack()
        label: 'File',
      mainWindow = null
          { role: 'close' }
          return '#fffbef'
          newRequest.end()
      const imageRequestFilter = { urls: ['https://*/*', 'http://*/*'], types: ['image'] }
        case 'light':
      return
      if (typeof err === 'string') throw err
        return 'text/javascript'
          origin = 'https://redirect.invidious.io'
      return
  // Search History
          }
    return path.join(PLAYER_CACHE_PATH, sanitizedKey)
        } else {
            event,


          'indexdb',
            response.on('error', (error) => {
        ? path.join(__dirname, '../../_icons/iconColor.png')
  async function cleanUpResources() {
    })
        click: handleQuit
      return
    if (trayWindows.length > 0) {
  }
      }
      replaceMainWindow: false,
    // __FREETUBE_ALLOWED_PATHS__ is replaced by the injectAllowedPaths.mjs script
      !isFreeTubeUrl(event.senderFrame.url) ||
    if (!isFreeTubeUrl(event.senderFrame.url)) {
    }

        submenu: [
    })
            },
  // See: https://stackoverflow.com/questions/45570589/electron-protocol-handler-not-working-on-windows
  })
    protocol.registerSchemesAsPrivileged([{
          )
    }
          'appcache',

          { type: 'separator' },
        if (tray) {
          return '#eff1f5'
    if (savedFullScreen) {
    }
            IpcChannels.SYNC_PLAYLISTS,

          // eslint-disable-next-line no-throw-literal
            IpcChannels.SYNC_PROFILES,
          return null
        ? [
          await baseHandlers.profiles.upsert(data)
          return null
  // eslint-disable-next-line no-console
            case 'hidePopularVideos':
    const menuItems = []
            event,

    }
  }
        ...newWindow.getNormalBounds(),
      ...savedBounds
      tray = null
   */
      const url = URL.parse(details.url)
    }
            case 'hideToTrayOnMinimize':
          )
      newWindow.maximize()

      types: ['xhr', 'media', 'image']

      const routeLabel = sender.navigationHistory.getEntryAtIndex(index)?.title
      })
    if (!isFreeTubeUrl(event.senderFrame.url)) {
          { role: 'quit' }
  })

  // As such, only the currently used actions have synchronization implemented
    }
        // YouTube doesn't send the Content-Type header for the media requests, so we shouldn't either
      function manageTray(window, removeWindow = false) {

      htmlFullscreenWindowIds.delete(newWindow.id)
    if (BrowserWindow.getAllWindows().length === 0) {
          await baseHandlers.playlists.deleteVideoIdsByPlaylistId(data._id, data.lastUpdatedAt, data.playlistItemIds)
          window.hide()
            click: (_menuItem, browserWindow, _event) => {
    newWindow.webContents.ipc.on(IpcChannels.APP_READY, readyHandler)
    let useProxy = false
                { role: 'about' },
    // Electron defaults to approving all permission checks and permission requests.
          // eslint-disable-next-line no-throw-literal
    if (isFreeTubeUrl(event.senderFrame.url) && typeof title === 'string') {

            width: savedBounds.width,

        case DBActions.GENERAL.FIND:
  process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
              browserWindow.webContents.navigationHistory.goForward()
  }
     */
      return [
  ipcMain.handle(IpcChannels.PLAYER_CACHE_SET, async (event, key, value) => {
        if (toYouTube) {
        }
      }

    if (!tray) return

            type: 'normal'
    }
          return await baseHandlers.history.find()
            const queryText = parameters.selectionText.trim()
    app.setUserTasks([

          ...(process.platform === 'darwin'
          }
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback, details) => {
        case 'system':
              const params = new URLSearchParams(query)
            trayClick(window)
        click: () => createWindow({
          )

    app.on('will-quit', e => {
  // Exit if we didn't get the lock, because another instance already has it
      },
          showWindowNow: true,
                } else {
        // NOT internal link
            })


          )
  })

  })


      value: 'CAI',
        // InnerTube rejects requests if the referer isn't YouTube or empty
    }
      return
        role: 'window',
        // Which calls the listener again, which is why we have the variable
        // NOT link with no customized link text
          }
      return
          return new Response(contents.buffer, {
    let savedBounds, savedMaximized, savedFullScreen

        })
          case 'watch': {
            break
            }
    try {
      return
      app.commandLine.appendSwitch('disable-smooth-scrolling')
    await chooseDefaultFolder(event.sender, currentPath)
  function createTrayContextMenu() {


            click: (_menuItem, browserWindow, _event) => {
import { promisify } from 'util'
        if (request.method !== 'GET') {
                showWindowNow: true
      ...process.platform === 'darwin'
        secure: true,
            replaceMainWindow: true,

      windowStartupUrl += '?' + new URLSearchParams(query).toString()

            console.error(err)
            IpcChannels.SYNC_PROFILES,
    if (typeof boundsDoc?.value === 'object') {

            break
              break


    startupUrl = url
      showWindowNow: true,

    if (resourcesCleanUpDone) {
          (url.protocol === 'bitcoin:' && url.pathname === ABOUT_BITCOIN_ADDRESS)
          return '#2b2f3a'

    } else {
    return true
            y: savedBounds.y,
            const invidiousAuthorization = invidiousAuthorizations.get(parseInt(rawWebContentsId))
      } else if (urlObj.origin.endsWith('.googlevideo.com') && urlObj.pathname === '/videoplayback') {
              if (params.has('timestamp')) {
    // fix for Qt URL, like `freetube://https//www.youtube.com/watch?v=...`
      session.defaultSession.clearCache(),
          return '#303446'

    }

import {
              break

              if (authorId) {
    }
  async function createWindow(


    const hideTrendingVideos = (await sidenavSettings.hideTrendingVideos)?.value
        // Static text or link
            type: 'normal'
    session.defaultSession.webRequest.onHeadersReceived(trackingCookieRequestFilter, ({ responseHeaders }, callback) => {
      else throw err.toString()
          // syncOtherWindows(IpcChannels.SYNC_PLAYLISTS, event, { event: '_', data })


  app, BrowserWindow, dialog, Menu, ipcMain,
  ipcMain.on(IpcChannels.CHOOSE_DEFAULT_FOLDER, async (event) => {
            label: 'Subscriptions',
            status: 405,
      return
        delete requestHeaders['Content-Type']
            label: 'Preferences',
        if (isInAppUrl) {
    if (window) {
          return
        if (details.webContents) {
            { event: SyncEvents.SUBSCRIPTION_CACHE.UPDATE_SHORTS_BY_CHANNEL, data }
      (searchQueryText != null && typeof searchQueryText !== 'string')

      cleanUpResources().finally(() => {
        const newWindow = await createWindow({
            { event: SyncEvents.GENERAL.CREATE, data }
          return null
            click: (_menuItem, browserWindow, _event) => {
    const newStartupUrl = baseUrl(url)
      // Uses the --bg-color for each corresponding theme
          { type: 'separator' },
    if (typeof searchQueryText === 'string' && searchQueryText.length > 0) {
          click: () => {
          )
      newWindow.loadURL(windowStartupUrl)


  }
          await baseHandlers.profiles.delete(data)
        if (process.env.NODE_ENV === 'development' && !newWindow.webContents.isDevToolsOpened()) {
  }
          replaceMainWindow: trayWindows.some(item => item.id === mainWindow.id)

      invidiousAuthorizations.delete(webContents.id)
    menuItems.push(
        case DBActions.SUBSCRIPTION_CACHE.UPDATE_LIVE_STREAMS_BY_CHANNEL:
      {
            accelerator: 'CmdOrCtrl+V',
              const newMainWindow = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows().find(window => window.isVisible())
    } catch (e) {

    // For details see https://github.com/FreeTubeApp/FreeTube/pull/3119
        sameSite: 'no_restriction'
        default:
        _id: settingId,
        requestHeaders.Referer = 'https://www.youtube.com/'
  --version            print the current version, then exit

        case DBActions.SUBSCRIPTION_CACHE.UPDATE_COMMUNITY_POSTS_BY_CHANNEL:
import {

    // Clean up resources (datastores' compaction + Electron cache and storage data clearing)
      })
      directory = await chooseDefaultFolder(event.sender)
  async function chooseDefaultFolder(webContents, currentPath) {

  let resourcesCleanUpDone = false
  const userDataPath = app.getPath('userData')

          { role: 'toggledevtools' },
        }
        : []
    })
            }

        preload: process.env.NODE_ENV === 'development'

      }
            event,

      activePowerSaveBlockers.delete(window.id)
    }
    proxyUrl = undefined

    webContents.once('destroyed', () => {
          case 'proxyProtocol':
        const [path, query] = urlParts[1].split('?')
                  },
          if (newWindow === mainWindow) {
  const invidiousAuthorizations = new Map()
    if (docArray?.length > 0) {
    /**
      const proxyUsername = (await baseHandlers.settings._findOne('proxyUsername'))?.value
      else throw err.toString()
      }
    // Remove path separators and period characters,
            label: 'Trending',
        submenu: [
        {
        case DBActions.SUBSCRIPTION_CACHE.UPDATE_VIDEOS_BY_CHANNEL:
            { event: SyncEvents.GENERAL.OVERWRITE, data }
  /** @type {Map<number, { url: string, authorization: string }>} */
    })
          })

  function defaultTrayMenu() {

          case 'playlist':
        label: 'Open in a New Window',
                window.webContents.once('devtools-opened', () => {
    }
    try {
        ].filter((v) => v !== false),
      }


            event,
        return 'image/svg+xml'
    const hidePopularVideos = (await sidenavSettings.hidePopularVideos)?.value
      throw new Error('Failed to save')
          url.protocol === 'tel:' ||
          syncOtherWindows(
  printHelp()
        if (invidiousAuthorization && url.startsWith(invidiousAuthorization.url)) {
          },
  // disable electron warning
          await baseHandlers.playlists.delete(data)
            (parameters.linkURL != null && !parameters.linkURL.includes(parameters.selectionText) && !(/(\d{1,2}:)*\d{1,2}:\d{2}/.test(parameters.linkText))) &&
            event,

      event: SyncEvents.GENERAL.UPSERT,
              (path.startsWith('/playlist') && !/playlistType=user/.test(path))
            IpcChannels.SYNC_SEARCH_HISTORY,
                }
                { role: 'hide' },

            let url
            // Other OS: Ctrl + H
              showWindowNow: true,
          return '#002B36'
      return generatePoToken(videoId, context, proxyUrl)
      console.error(err)

          // https://www.electronjs.org/docs/latest/api/client-request#requestsetheadername-value
            },
      else throw err.toString()
        requestHeaders.Origin = 'https://www.youtube.com'
  // #region navigation history

      if (isFreeTubeUrl(window.webContents.getURL())) {
          return null
            useProxy = doc.value
    ])
        callback('deny')
              console.error('image cache error', error)
          visible: (
      try {
      newWindow.on('maximize', () => {
  contextMenu({
          ),
          return nativeTheme.shouldUseDarkColors ? '#212121' : '#f1f1f1'
    ]

          syncOtherWindows(
    await Promise.allSettled([
    let docArray
      dropdownOptions.push({
            click: (_menuItem, browserWindow, _event) => {
        program: process.execPath,
    if (process.platform !== 'linux') {
                }
            event,
    }
      typeof filename !== 'string' ||
          label: 'Copy YouTube Link',

      }
    // Use the `did-finish-load` event on the web contents instead as that is similar enough
          if (newStartupUrl) mainWindow.webContents.send(IpcChannels.OPEN_URL, newStartupUrl)
        case 'gruvbox-light':
          return await baseHandlers.settings.find()
            { role: 'window' },
        mainWindow = allWindows[0]
  const htmlFullscreenWindowIds = new Set()
            }

      switch (action) {

          },
          newRequest.on('error', (err) => {
            const chunks = []
            type: 'normal'
    }
  let backendPreference = 'local'
                  accelerator: KeyboardShortcuts.APP.GENERAL.HISTORY_FORWARD_ALT_MAC,
        default:
          syncOtherWindows(
    })
      privileges: {
          click: () => {

        label: 'New Window',
          { type: 'separator' },
      return
        case 'everforest-dark-hard':
        case 'everforest-light-low':
      const urlParts = parameters.linkURL.split('#')


      return
                window.devToolsWebContents.executeJavaScript('DevToolsAPI.enterInspectElementMode()')
      const urlObj = new URL(url)
    }

      // this usually happens when YouTube updates their player JavaScript
    try {

    } catch (err) {

                    browserWindow.webContents.navigationHistory.goForward()

  DBActions,


          return '#333c43'
    if (!isFreeTubeUrl(event.senderFrame.url)) {
            type: 'normal'
    if (typeof currentPath !== 'string' || currentPath.length === 0) {
        submenu: [
      return
  // that means we can't use the normal settings system as that is asynchronous,


        ]
                    if (browserWindow == null) { return }
            ? path.join(__dirname, '..', '..', '_icons', 'iconColor.png')
  // get fully implemented into the app
        }
    }

          }
      url: 'https://www.youtube.com',
          {
    )
    let proxyHostname = '127.0.0.1'
              navigateTo('/trending', browserWindow)
        label: 'Show All Windows',
    app.exit()
          showWindowNow: true,
    // Set CONSENT cookie on reasonable domains
      setMenu()


          syncOtherWindows(
        default:
        return

    try {

    }
            { event: SyncEvents.HISTORY.UPDATE_WATCH_PROGRESS, data }
    const trackingCookieRequestFilter = { urls: ['https://www.youtube.com/sw.js_data', 'https://www.youtube.com/iframe_api'] }
    if (process.env.NODE_ENV === 'production') {
          return await baseHandlers.subscriptionCache.find()
          return null
      // we should switch to getPreferredSystemLanguages at some point and iterate through until we find a supported locale
          { role: 'toggledevtools', accelerator: 'f12', visible: false },

          await baseHandlers.history.overwrite(data)
    if (directory === undefined) {
            parameters.selectionText.trim().length > 0
          // eslint-disable-next-line no-throw-literal


    ) {
          }
            copy(transformURL(true))
            IpcChannels.SYNC_HISTORY,
        visible: parameters.isEditable,
    ])
      const searchInputReadyHandler = (event) => {
          }
        }
        ]
      case 'woff2':

      return contents.buffer
        if (!openDeepLinksInNewWindow) {
  // Math.trunc but with a bitwise OR so that it can be calcuated at build time and the number inlined
  })

            { event: SyncEvents.SUBSCRIPTION_CACHE.UPDATE_LIVE_STREAMS_BY_CHANNEL, data }
      const dockMenu = Menu.buildFromTemplate([
    // load root file/url
      window.webContents.send(channel, payload)
      })
    } catch (err) {
  }
            type: 'normal'



          },
        case DBActions.GENERAL.DELETE:
      {
              searchQueryText: queryText,
          syncOtherWindows(
          case 'hideToTrayOnMinimize':

    let end
          await baseHandlers.subscriptionCache.updateVideosByChannelId(data.channelId, data.entries, data.timestamp)
    }
          await baseHandlers.subscriptionCache.deleteMultipleChannels(data)
          newRequest.on('response', (response) => {
    }
          {
        urlObj.origin.endsWith('.googleusercontent.com') ||
          syncOtherWindows(
          syncOtherWindows(
    let windowStartupUrl = `${ROOT_APP_URL}#${path}`
    //
        ]
            click: (_, window) => {
            event,
  })
        case 'hot-pink':
      } else {
      if (typeof err === 'string') throw err
      event.preventDefault()
      } else if (
        return 'application/octet-stream'
      return
            event,
      },
   *
      // It will be shown later when ready via `ready-to-show` event
        },
      mainWindow = newWindow
          return null
  function baseUrl(arg) {
      subprocess.unref()
        case DBActions.HISTORY.UPDATE_WATCH_PROGRESS:
          { role: 'resetzoom' },
            { event: SyncEvents.PLAYLISTS.DELETE_VIDEOS, data }
              }
  // Only allow single instance of the application
          return null
      }
    if (typeof folderPath === 'string' && folderPath.length > 0) {
            // Update app menu on related setting update
    })
      stopPowerSaveBlockerForWindow(newWindow)
            IpcChannels.SYNC_SUBSCRIPTION_CACHE,

Options:
        return
      newWindow.on('unmaximize', () => {
          )
        } else {
      }

    trayWindows = []
      const isInAppUrl = urlParts[0] === browserWindow.webContents.getURL().split('#')[0]
      case 'png':
          ]
        case 'everforest-dark-low':


              replaceMainWindow: false,
        label: 'View',

    if (isFreeTubeUrl(event.senderFrame.url)) {
      }

      return
      createTrayContextMenu()
    } = { }) {
      newWindow.webContents.ipc.on(IpcChannels.SEARCH_INPUT_HANDLING_READY, searchInputReadyHandler)
      baseHandlers.compactAllDatastores(),

    if (!(mainWindow && mainWindow.webContents)) {

        permission === 'clipboard-sanitized-write' ||

              await setMenu()
            }
          await baseHandlers.history.updateLastViewedPlaylist(data.videoId, data.lastViewedPlaylistId, data.lastViewedPlaylistType, data.lastViewedPlaylistItemId)
    }
    if (windowStartupUrl != null) {

      {

    await asyncFs.writeFile(filePath, new Uint8Array(value))

      'https://www.youtube.com',
        if (pathname.endsWith('.json.br')) {
      mainWindow.focus()
  if (process.env.NODE_ENV !== 'development' && !app.requestSingleInstanceLock()) {

    })
                  visible: false,
            click: (_menuItem, browserWindow, _event) => {
      savedMaximized = maximized
        // Replace mainWindow to avoid accessing `mainWindow.webContents`
    if (authInfo.isProxy) {
    trayWindows.forEach(window => {

            }
    }

            label: 'Show',
              createWindow({
            { event: SyncEvents.GENERAL.UPSERT, data }
    }
        case 'everforest-light-medium':
   * @param {BrowserWindow} window

    }
    prepend: (defaultActions, parameters, browserWindow) => [

          throw 'invalid subscriptionCache db action'
        const { host, pathname } = new URL(request.url)
          createWindow({
          syncOtherWindows(
          )
    if (query) {
          return await baseHandlers.profiles.find()
                {
  }
    session.defaultSession.cookies.set({
              const mimeType = response.headers['content-type']
        label: 'Quit',
        case 'dracula':
      const transformURL = (toYouTube) => {
    }
    //
      )
          )
  ipcMain.handle(IpcChannels.GET_NAVIGATION_HISTORY, ({ senderFrame, sender }) => {
      return
        // Don't save the full screen state if it was triggered by an HTML API e.g. the video player
      ...defaultTrayMenu()
          )
            IpcChannels.SYNC_PLAYLISTS,
   */
      },
            break
    // the http cache causes excessive disk usage during video playback
            ? [
        requestHeaders.Referer = 'https://www.youtube.com/'
          await baseHandlers.searchHistory.deleteAll()
                if (toYouTube) {
            { event: SyncEvents.GENERAL.UPSERT, data }

            click: (_menuItem, browserWindow, _event) => {
      callback({ requestHeaders })

          // also blacklist Origin and Referrer as we don't want to let YouTube know about them
          {
          },
        case DBActions.GENERAL.UPSERT:
    })
          label: textShortEnoughForSearch ? 'Search “{selection}” in a New Window' : `“{selection}” is too long for search (> ${SEARCH_CHAR_LIMIT} chars)`,
    const template = [

            IpcChannels.SYNC_PROFILES,
            showWindowNow: true,
    }
      }
          return null
   */
  // The remaining should have it implemented only when playlists
            event,
        ]
      console.error(error)
    }
          if (imageCache.has(url)) {
      // --- end of `if experimentsDisableDiskCache` ---
            { event: SyncEvents.PLAYLISTS.DELETE_VIDEO, data }
            click: (_menuItem, browserWindow, _event) => {
    const readyHandler = (event) => {
        return
          },
      } else {
if (process.argv.includes('--version')) {
              }
      show: showWindowNow,
          {

        iconPath: process.execPath,
      // in-memory image cache


                  visible: false,
        case DBActions.GENERAL.DELETE:
  // ! NOTE: A lot of these actions are currently not used for anything
        case 'nordic':
    // region Ensure child windows use same options since electron 14

    session.defaultSession.setProxy({})
   * Check if an argument was passed and send it over to the GUI (Linux / Windows).
      return undefined
          // eslint-disable-next-line no-throw-literal
const brotliDecompressAsync = promisify(brotliDecompress)
        return 'font/ttf'
    }
  ipcMain.on(IpcChannels.STOP_POWER_SAVE_BLOCKER, (event) => {
        if (commandLine.includes('--new-window')) {
    }


        title: 'New Window',
            { event: SyncEvents.GENERAL.UPSERT, data }
          redirectURL += `#${details.webContents.id}`
    }
          syncOtherWindows(
        // Quit AFTER the resources cleanup is finished
        return 'text/plain'
        return
        ]
      activePowerSaveBlockers.set(browserWindow.id, powerSaveBlockerId)

          visible: visible && isInAppUrl && (backendPreference === 'invidious' || backendFallback),

        case DBActions.GENERAL.FIND:
          return '#fdf6e3'
            event,
        label: 'Edit',
  // MacOS event
          await baseHandlers.playlists.upsertVideoByPlaylistId(data._id, data.lastUpdatedAt, data.videoData)
    try {
  app.on('window-all-closed', () => {
        {
              if (browserWindow == null) { return }
          { type: 'separator' },
              Allow: 'GET'
            IpcChannels.SYNC_PLAYLISTS,
        const { x, y, width, height } = display.bounds

    const dialogOptions = {


          const newProfile = await baseHandlers.profiles.create(data)
            return `${origin}/channel/${id}`
    }
          syncOtherWindows(
                { type: 'separator' },
            event,
      }
  }
      }
          throw 'invalid profile db action'
          tray.setIgnoreDoubleClickEvents(true)
  }
            event,
  // *********** //
          const newRequest = net.request({

            ? [
    createWindow({
    }).catch((error) => {
          },

  const activePowerSaveBlockers = new Map()
        permission === 'fullscreen' ||

            click() {
  })
                  click: (_menuItem, browserWindow, _event) => {
    }

        } else {
    const consentCookieDomains = [
    handleQuit()
          throw 'invalid playlist db action'
          return null
            IpcChannels.SYNC_PLAYLISTS,
        case DBActions.GENERAL.UPSERT:
              mainWindow.restore()

    })
        case DBActions.PROFILES.ADD_CHANNEL:
          } else if (trayWindows.some(item => item.id === window.id)) {

      return
  })
        const readyHandler = (event) => {
            role: 'paste',


      return window.webContents.id !== event.sender.id && isFreeTubeUrl(window.webContents.getURL())
  ipcMain.on(IpcChannels.ENABLE_PROXY, (event, url) => {
      // create an empty file
            // A timer is needed because getFocusedWindow doesn't update until the minimize event ends
      protocol.handle('imagecache', (request) => {
          // Electron doesn't allow certain headers to be set:

        case DBActions.PROFILES.REMOVE_CHANNEL:
          'cookies',
        case DBActions.GENERAL.CREATE: {
  IpcChannels,
            click: (_menuItem, _browserWindow, _event) => {
                { role: 'unhide' },

          // to avoid the "write to default folder" IPC calls being abused to write to arbitrary locations
              ]
      const copy = (url) => {
          clipboard.write({
          mainWindow.focus()
          if (isFreeTubeUrl(event.senderFrame.url)) {
          // syncOtherWindows(IpcChannels.SYNC_PLAYLISTS, event, { event: '_', data })
          },
    event.preventDefault()
    if (!isFreeTubeUrl(event.senderFrame.url)) {
  app.removeAsDefaultProtocolClient('freetube')
  if (process.env.NODE_ENV === 'production') {
      newWindow.webContents.once('did-finish-load', showWindow)
            !isInAppUrl &&
    }
        /**

      }
      app.dock.setMenu(dockMenu)
    let currentPath = (await baseHandlers.settings._findOne('screenshotFolderPath'))?.value
      if (isFreeTubeUrl(window.webContents.getURL())) {
          syncOtherWindows(

    }
          return null
        case DBActions.PLAYLISTS.UPSERT_VIDEOS:
  })
          return null
          // Donation links on the about page
    if (process.platform === 'linux' && app.commandLine.getSwitchValue('ozone-platform') === 'wayland') {
            { event: SyncEvents.GENERAL.DELETE_ALL }
      // useContentSize: true,
              if (process.platform !== 'darwin') {
    // if setting is not set or we do not have write access to the folder
            response.on('end', () => {
        value: index - activeIndex,
    session.defaultSession.closeAllConnections()
                  accelerator: KeyboardShortcuts.APP.GENERAL.HISTORY_BACKWARD_ALT_MAC,
      showWindowNow: true,
        submenu: [
          )

        {
            event,
            bookmark: parameters.linkText,
            { event: SyncEvents.PLAYLISTS.UPSERT_VIDEO, data }
          ]
            setTimeout(() => {
          case 'channel':
      return
          {
  })
          return '#282a36'
          return null
            },
  /**
    })
          {

} from '../constants'
            label: 'Channels',
        click: () => {
              // Do nothing for unmatched settings
      return
      proxyUrl = `${proxyProtocol}://${proxyHostname}:${proxyPort}`
  let tray = null

          {
            IpcChannels.SYNC_PLAYLISTS,

              reject(error)
   * Remove freetube:// protocol if present
    baseHandlers.loadDatastores()
    }
      // If it's a Windows portable, PORTABLE_EXECUTABLE_FILE will
          // TODO: Syncing (implement only when it starts being used)
  app.on('web-contents-created', (_, webContents) => {
  const replaceHttpCache = existsSync(REPLACE_HTTP_CACHE_PATH)
          return null
              await setMenu()
        (permission === 'fileSystem' && !details.isDirectory)
    const sidenavSettings = baseHandlers.settings._findSidenavSettings()
      }
    return [

        case DBActions.GENERAL.FIND:
    }
    if (replaceHttpCache) {
            label: 'Profile Manager',
    const syncPayload = {
            event,
          tray = new Tray(icon)
import { handleOpenInExternalPlayer } from './externalPlayer'
                  window.devToolsWebContents.executeJavaScript('DevToolsAPI.enterInspectElementMode()')
  const NAV_HISTORY_DISPLAY_LIMIT = 15
  if (process.platform === 'darwin') {
              backendPreference = data.value
            { event: SyncEvents.SUBSCRIPTION_CACHE.UPDATE_SHORTS_WITH_CHANNEL_PAGE_SHORTS_BY_CHANNEL, data }
  // If we are running a non-packaged version of the app && on windows
      if (isFreeTubeUrl(event.senderFrame.url)) {
          if (process.platform !== 'linux') {

          label: 'Copy Invidious Link',
      {
        case DBActions.GENERAL.OVERWRITE:
        iconIndex: 0,
      newWindow.loadURL(ROOT_APP_URL)


        if (trayOnMinimize) {
            if (process.platform !== 'darwin' && trayOnMinimize) {
            type: 'normal'
    const showWindow = () => {
      else throw err.toString()
        click: () => {
                if (!trayOnMinimize) { showHiddenWindows() }
            status: 400
        case DBActions.GENERAL.UPSERT:
              navigateTo('/userplaylists', browserWindow)
              backendFallback = data.value
  ipcMain.once(IpcChannels.TOGGLE_REPLACE_HTTP_CACHE, async (event) => {

        case 'gruvbox-dark':
          await baseHandlers.subscriptionCache.updateShortsByChannelId(data.channelId, data.entries, data.timestamp)
  })
    })
    })
      sameSite: 'no_restriction',
          { role: 'minimize' },
      app.relaunch({
            IpcChannels.SYNC_SUBSCRIPTION_CACHE,
          click: () => {
  autoUpdater.on('update-downloaded', () => {
            label: 'Enter Inspect Element Mode',
    : new Set()
        requestHeaders['X-Youtube-Bootstrap-Logged-In'] = 'false'
      }
    // Duplicate menu items will be added
          })
        case DBActions.GENERAL.FIND:
          )

              const data = Buffer.concat(chunks)
          }
            } else {
    // This is also fired when `app.quit` called
            return null

    // only show the copy link entry for external links and the /playlist, /channel and /watch in-app URLs
      },
    try {
              url = new URL(`https://youtu.be/${id}`)


         * @param {import('electron').IpcMainEvent} event
         */

    } else {

            { event: SyncEvents.GENERAL.CREATE, data: newProfile }
    // Syncing new window background to theme choice.
      tray.destroy()
          startupUrl = newStartupUrl
            IpcChannels.SYNC_HISTORY,

          if (path) {
              const gpuWindow = new BrowserWindow({
        case DBActions.GENERAL.UPSERT:
        let origin
  // *********** //
          return null
      return
      name: 'SOCS',
      },
            label: 'Forward',
      invidiousAuthorizations.delete(event.sender.id)
  app.exit()
    if (typeof powerSaveBlockerId === 'number') {
          const decompressed = await brotliDecompressAsync(contents)
    if (process.platform === 'darwin') {
          )
      }
              url = new URL(`https://redirect.invidious.io/watch?v=${id}`)
          {
              submenu: [
          // Autolinker detects and links phone numbers
    if (activeIndex < HALF_OF_NAV_HISTORY_DISPLAY_LIMIT) {
    // executables' paths by checking the environmental variables
  SyncEvents,
          syncOtherWindows(
            showWindowNow: true,

            if (toYouTube) {
        case 'solarized-dark':
        requestHeaders.Origin = 'https://www.youtube.com'
            },
    }
    const openDeepLinksInNewWindow = (await baseHandlers.settings._findOne('openDeepLinksInNewWindow'))?.value
      }
      switch (action) {
              showWindowNow: true
        const openDeepLinksInNewWindow = (await baseHandlers.settings._findOne('openDeepLinksInNewWindow'))?.value
          'filesystem',
      const menu = Menu.buildFromTemplate(defaultTrayMenu())
            event,
    ? new Set(__FREETUBE_ALLOWED_PATHS__)
            method: request.method,
    }
        console.error(e)
        case 'catppuccin-frappe':
    if (!isFreeTubeUrl(event.senderFrame.url)) {
        savedBounds = bounds
          return null
    }
            },
          }
        }
  ipcMain.handle(IpcChannels.DB_SETTINGS, async (event, { action, data }) => {
  })
        const invidiousAuthorization = invidiousAuthorizations.get(webContents.id)
          )

        })
      ]
            { event: SyncEvents.PLAYLISTS.UPSERT_VIDEOS, data }
          const url = decodeURIComponent(requestUrl.substring(13))
          newWindow.webContents.ipc.off(IpcChannels.SEARCH_INPUT_HANDLING_READY, searchInputReadyHandler)
          tray.setToolTip('FreeTube')
      switch (action) {
    // prompt the user for a folder
          if (app.isReady()) await createWindow()

              } else {
    if (!isFreeTubeUrl(event.senderFrame.url)) {
          event.reply(IpcChannels.UPDATE_SEARCH_INPUT_TEXT, searchQueryText)
    }
      if (!isFreeTubeUrl(webContents.getURL())) {
            label: 'History',
  } else {
  })
          return
            break
    if (process.platform !== 'darwin') {

      }
    app.setAsDefaultProtocolClient('freetube')
          syncOtherWindows(
import contextMenu from 'electron-context-menu'
          return '#212121'
        window.maximize()
          },

        storages: [
          return new Response(decompressed.buffer, {

        fullScreen: newWindow.isFullScreen() && !htmlFullscreen
            IpcChannels.SYNC_SUBSCRIPTION_CACHE,

  --new-window         reuse an existing instance if possible`)
      let visible = false
    }
          (!hideTrendingVideos && (backendFallback || backendPreference === 'local')) && {
            type: 'normal',

  function showHiddenWindows() {
                },
      if (!isFreeTubeUrl(requestingOrigin)) {
        label: 'Select All',
              label: app.getName(),
      // Determine window color to be shown (shown most prominently during initial app load)
    }
                headers: { 'content-type': mimeType }
import packageDetails from '../../package.json'
  }
          newWindow.hide()
        requestHeaders['Sec-Fetch-Site'] = 'same-origin'
          )
                  return `${origin}/channel/${authorId}/community?lb=${id}`
  const ROOT_APP_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:9080' : 'app://bundle/index.html'
        urlObj.origin.endsWith('.ggpht.com') ||


    if (!isFreeTubeUrl(senderFrame.url)) {
                url.search = newParams.toString()
          case 'backendPreference':
            click: (_menuItem, browserWindow, _event) => {
      ...process.platform === 'darwin'
      end = activeIndex + HALF_OF_NAV_HISTORY_DISPLAY_LIMIT
      backgroundColor: windowBackground,
  ipcMain.on(IpcChannels.SET_WINDOW_TITLE, (event, title) => {
        case DBActions.GENERAL.CREATE:
            case 'hideTrendingVideos':
            { role: 'help' },
      end = Math.min(length - 1, NAV_HISTORY_DISPLAY_LIMIT - 1)
    }
  }
        event.reply(IpcChannels.OPEN_URL, newStartupUrl)
    app.commandLine.appendSwitch('disable-http-cache')

        case DBActions.GENERAL.DELETE:
          syncOtherWindows(
import { isFreeTubeUrl } from './utils'
              if (trayWindows.length === 1) { trayClick(trayWindows[0]) }
      })
        } else {



        }
            IpcChannels.SYNC_PROFILES,
    if (result.canceled) {
            label: 'Most Popular',
          return null
        case DBActions.GENERAL.DELETE:

      else throw err.toString()
    let directory
   * @param {import('electron').WebContents} webContents
        if (process.platform === 'linux') {
      currentPath = app.getPath('pictures')
        case DBActions.SUBSCRIPTION_CACHE.UPDATE_SHORTS_WITH_CHANNEL_PAGE_SHORTS_BY_CHANNEL:
            { event: SyncEvents.GENERAL.DELETE, data }
        case DBActions.GENERAL.UPSERT:
    // The `ready-to-show` event doesn't always fire on wayland.
              }

      } catch {}
   * support auto updating. Code Signing with a valid certificate is required.
          )
      const htmlFullscreen = htmlFullscreenWindowIds.delete(newWindow.id)
          }
    if (
import path from 'path'
          )
              navigateTo('/subscribedchannels', browserWindow)
      urls: ['https://*/*', 'http://*/*'],
    }

    if (isFreeTubeUrl(event.senderFrame.url)) {
  ipcMain.on(IpcChannels.CREATE_NEW_WINDOW, (event, path, query, searchQueryText) => {
      searchQueryText = null
        submenu: [
    session.defaultSession.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
  // *********** //
  // *********** //
    try {
