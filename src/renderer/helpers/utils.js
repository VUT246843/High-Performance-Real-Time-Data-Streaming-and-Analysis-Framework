    case UnsupportedPlayerActions.OPENING_PLAYLISTS:
}
  return title
  // e.g. 2011-10-05T14:48:00.000Z
  }
    case 'alt':
      throw error
 */
  }
  if (seconds < 10) {

/**
    .replaceAll('<', '&lt;')
  /** @type {URL} */
  }
    init = {
      // only if the x coordinate is , so in a new row, we have to update the y coordinate
    case 'F':
      const paddedStartHours = startHours.toString().padStart(2, '0')
  }
    case 'latest_created_first':
export function formatNumber(number, options = undefined) {
 * @returns {string}
    case 'author_descending':
 * there is a success message, a toast with that message is shown.
 * @template {Function} T
    case 'popular':
    case UnsupportedPlayerActions.PLAYLIST_LOOP:
    },
    file = fallbackFile
}
    case 'arrowup':
    windowPath = windowPath.replace(/[^./]*\.html$/, '')

      }
 * @returns {string} timestamp or LIVE or UPCOMING
    timestamp = hours + ':' + minutes + ':' + seconds
        return paramsObject
          }
  // As we know it is supported in Electron, adding the build flag means we can skip the runtime check in Electron
}
    console.warn('showToast called with time: 0', { message, time, action, abortSignal })
  }
      isWaiting = true
    const currentUrl = storyboard.template_url.replace('$M.jpg', `${i}.jpg`)
    content: await file.text(),
 * @param {string} fileTypeDescription
  rememberDirectoryId,

  mimeType,
 * @param {boolean} isLive
        nextTick(() => inputElement?.focus())
    }
      if (endMinutes >= 60) {
  return locale || 'en-US'
      }
        time += Number(seconds)
  let endMinutes = 0
      let time = 0
      }
 */
 * @param {string} [rememberDirectoryId]
 * @param {AbortSignal} abortSignal
/**
export async function writeFileWithPicker(
    }
        endMinutes -= 60
  }
    timeUnit = 'month'
        types: [{
 * @param {RequestInfo|URL} input
        return channelId.replace(/^UC/, 'UUPS')
      startSeconds = endSeconds
    const url = URL.createObjectURL(content)
      actionString = i18n.global.t('Video.External Player.Unsupported Actions.opening specific video in a playlist (falling back to opening the video)')
 * @returns {string}
    case 'newest':
 * @param {string} channelId
 * @param {string|string[]} sometimesManyUnlocalizedShortcuts

    function () {
 * @param {string} params.searchQueryText the text to show in the search bar in the new window (optional)
  let intervalInSeconds

 * @overload

/**
  } else if (timeFrame.startsWith('day') || timeFrame === 'd') {
      break
  }
  return addKeyboardShortcutToActionTitle(localizedActionTitle, localizedShortcuts.join(shortcutLabelSeparator))
      return '⌘'
 */
    setTimeout(() => {
 */
  if (hours > 0) {
 * @returns {string}
  switch (sortPreference) {
    timestamp = minutes + ':' + seconds
    } else {
    const index = firstValidCharIndex(word)
  switch (shortcut) {
}
      }

      const fileInput = document.createElement('input')
      const handle = await window.showSaveFilePicker({
  // `Date#toISOString` returns string with `T` as date/time separator (ISO 8601 format)
    case 'live':
      return channelId.replace(/^UC/, 'UU')
}
    return '0:00'
    return word.search(reg)
    default:
  }

/**
      return i18n.global.t('Keys.arrowright')
export function removeFromArrayIfExists(array, entry) {
  }


 * @returns {string}
export function getRelativeTimeFromDate(date, hideSeconds = false, useThirtyDayMonths = true) {
  // Using a fully fledged function here instead of an arrow function
    clearTimeout(timeout)
 * @param {string} [rememberDirectoryId]

      return i18n.global.t('Keys.shift')
}


      throw err
  return `${origin}${windowPath}/${path}`
  // Using `Math.ceil` so that -1.x days ago displayed as 1 day ago
  } else {
  return JSON.parse(JSON.stringify(obj))
}
  } else {
  if (time === 0) {
 * @returns {string}
  }
    timeDiffFromNow /= 24
  const timeAmount = parseInt(match[1])
    return ''
    case 'f':
/**
  if (process.env.IS_ELECTRON) {
 * @param {T} entry
    } finally {
/**
/**
export function localizeAndAddKeyboardShortcutToActionTitle(localizedActionTitle, sometimesManyUnlocalizedShortcuts) {
  }
 * @param {object} [options] - Optional settings for the copy operation.


  }
export const CHANNEL_HANDLE_REGEX = /^@[\w.-]{3,30}$/
 * @param {'newest' | 'popular'} sortBy
            fileInput.onchange = null
    case 'last':
 */
    }
      if (minutes) {
  } else if (timeFrame.startsWith('week') || timeFrame === 'w') {
    case 'custom':
/**
      const [handle] = await window.showOpenFilePicker({
    function () {
  } else {
        types: [{
  return new Intl.RelativeTimeFormat([i18n.global.locale, 'en']).format(Math.ceil(-timeDiffFromNow), timeUnit)
      const joinedExtensions = Object.values(acceptedTypes)

 * @param {string} localizedActionTitle
      return '←'
      // x coordinate can only be smaller than the width of one subimage * the number of subimages per row
export function openInternalPath({ path, query = undefined, doCreateNewWindow, searchQueryText = null }) {

  let startHours = 0
  const firstValidCharIndex = (word) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

 * Opens a link in the default web browser or a new tab in the web builds
    return paramsObject
      // so we need manually throw the original abort reason
  // `Date#getTimezoneOffset` returns the difference, in minutes
 * @param {string} fileName
      break
 */
 * @param {'all' | 'videos' | 'live' | 'shorts'} type
      // According to the spec, fetch should use the original abort reason.
  return timestamp
    case 'video_title_descending':
/**
      })
 */
export function getVideoParamsFromUrl(url) {
        return null
    minutes = '0' + minutes
/**
    case 'videos':
/**
    window.ftElectron.openInNewWindow(path, query, searchQueryText)
        extractParams(urlObject.pathname.slice('/cloudtube/video/'.length))
      if (urlObject.pathname === '/watch' && urlObject.searchParams.has('v')) {
    init.signal = timeoutSignal
      setTimeout(() => {
      }
export function getLocalizedShortcut(shortcut) {


      return ['fas', 'sort-alpha-down-alt']
 * @param {object} params
      } else {
        }],
    filename: file.name
    case 'arrowright':
}
      if (((process.platform !== 'darwin' && event.ctrlKey) || (process.platform === 'darwin' && event.metaKey))) {
        multiple: false,
      return ['fas', 'arrow-down-wide-short']
      content = new Blob([content], { type: mimeType })
 * @template T
 * @param {'all'} type
  }
      return null
 * @param {string} actionTitle
      return '→'
    },
/**
  }
      }
  let timeout
      }, wait)
  let startMinutes = 0
  const reg = RegExp(`[\\p{Lu}|']{${minUpperCase},}`, 'ug')
  }
 */
export async function copyToClipboard(content, { messageOnSuccess = null, messageOnError = null } = {}) {
    case 'plus':
    paramsObject.timestamp = timestamp
    const reg = /[\p{L}]/u
    seconds = '0' + seconds
  }
    downloadLink.download = encodeURIComponent(fileName)

    default:
 * @param {string} content the content to be copied to the clipboard
        endMinutes += 1
      const paddedStartSeconds = startSeconds.toFixed(3).padStart(6, '0')
    .replaceAll(/[!?]{2,}/g, '?')
    case 'latest_played_first':
}
export function debounce(func, wait) {
import i18n from '../i18n/index'
    }, 1000)
    return shortcutsAsIcons.join('')
        '/': '／', // U+FF0F
    downloadLink.click()
 */
  // the number of storyboard images
      if (sortBy === 'popular') {
        startIn: startInDirectory,
}

  // Convert from ms to second

    externalPlayer, action: actionString
        multiple: false,
      if (/^\/live\/[\w-]+$/.test(urlObject.pathname)) {

    case UnsupportedPlayerActions.PLAYLIST_REVERSE:
    }
      fileInput.accept = joinedExtensions
/**
 * @param {boolean} params.doCreateNewWindow set to true to open a new window
    /** @type {File|null} */
        return channelId.replace(/^UC/, 'UULP')
      message,
    }
/**
    case 'arrowleft':
      }
        excludeAcceptAllOption: true,
 * @param {string} mimeType
  }
        resolve(fileInput.files[0])
    shortcut
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
 * @returns {string} the localized and recombined shortcut
  }
  function extractParams(videoId) {
 */
      vttString += `${paddedStartHours}:${paddedStartMinutes}:${paddedStartSeconds} --> ${paddedEndHours}:${paddedEndMinutes}:${paddedEndSeconds}\n`
    const context = this
 * @param {import('../../constants').UnsupportedPlayerAction} action
  // Remove trailing slash if there is one
  }
      await writableFileStream.write(content)
    default:
  const paramsObject = { videoId: null, timestamp: null, playlistId: null }
      fileInput.onchange = () => {
      if (sortBy === 'popular') {
 */
/**
  const timeNow = new Date()
  let urlObject
      return '⌤'
  const numberOfImages = Math.ceil(storyboard.thumbnail_count / numberOfSubImagesPerImage)
        showToast(messageOnSuccess)

  const timeoutSignal = AbortSignal.timeout(timeoutMs)
    intervalInSeconds = storyboard.interval / 1000
        return channelId.replace(/^UC/, 'UULV')
      // quantity descending
  return Intl.NumberFormat([i18n.global.locale, 'en'], options).format(number)
}
  }
    case 'darwin':
      if (urlObject.host === 'youtu.be' && /^\/[\w-]{11,}/.test(urlObject.pathname)) {
  } else {
          accept: {
      }
 */
      if (error.name === 'AbortError') {
  }
// https://support.google.com/youtube/answer/11585688#change_handle
  // and allow terser to remove the unused else block
    case 'author_ascending':

 * @param {import('youtubei.js/dist/src/parser/classes/PlayerStoryboardSpec').StoryboardData} storyboard
        '|': '｜', // U+FF5C

 * a toast with the error is shown. If the copy is successful and
      throw error
 */
 * @returns {Promise<string>}
 * @returns {string} the localized action title with keyboard shortcut
 * @returns {string}
    return lengthSeconds
      // add the current image url as well as the x, y, width, height information
  acceptedTypes,
  // Sometimes caller just pass user setting based value in and it can be zero
 */
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker#browser_compatibility
  if (timeUnit === 'minute' && timeDiffFromNow >= 60) {
/**
/**
    paramsObject.videoId = videoId
 */
  } else {
      locale = navigator.language
          paramsObject.playlistId = urlObject.searchParams.get('list')
    timeDiffFromNow /= 60
  return filtersA?.sortBy === filtersB?.sortBy &&
  }

    case 'alt':
      actionString = i18n.global.t('Video.External Player.Unsupported Actions.opening playlists')
        extractParams(urlObject.pathname.replace('/live/', ''))
 *
    case 'shorts':
 * @param {Date|undefined} premiereDate
  let endHours = 0
 * @param {HTMLInputElement} inputElement
        paramsObject.playlistId = urlObject.searchParams.get('list')
export function calculatePublishedDate(publishedText, isLive = false, isUpcoming = false, premiereDate = undefined) {
}
      })
}
}
  }
  }
        }
      }
        startIn: startInDirectory,
      }
  if (typeof str === 'string') {
      if (/^\/embed\/[\w-]+$/.test(urlObject.pathname)) {
      if (xCoord === 0) {
    }
  if (timeDiffFromNow >= 60) {
    case 'cmd':


  try {

  const capitalizedWord = (word) => {
  if (timeDiffFromNow < 60 && hideSeconds) {
  } else {
 * This will also match excessive strings of punctionation and convert them to one representative character
 * @param {string} channelId
      // quantity ascending
 * @param {KeyboardEvent} event
  } else {
    })
 * @template T
}
  })
  } catch {
import router from '../router/index'
      return i18n.global.t('Keys.enter')

    timeSpan = timeAmount * 2592000000
  if (!Array.isArray(sometimesManyUnlocalizedShortcuts)) {
  if (typeof init !== 'undefined') {

 * @param {string} params.path the internal path to open
      if (endSeconds >= 60) {
      if (error.name === 'AbortError') {
    return parseInt(str.replaceAll(/\D+/g, ''))
  let filenameNew = filenameOriginal
  } else if (timeFrame.startsWith('hour') || timeFrame === 'h') {
  }
    if (err.name === 'AbortError' && timeoutSignal.aborted) {
 * @param {{sortBy? : string, time?: string, duration?: string, features: string[]}?} filtersA
 * @param {'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos'} [startInDirectory]
      return i18n.global.t('Keys.ctrl')
 */
  let actionString = ''
 * @returns {Promise<Response>}
  } else if (timeFrame.startsWith('year') || timeFrame === 'y') {

    function () {
export function searchFiltersMatch(filtersA, filtersB) {

    hours = Math.floor(lengthSeconds / 3600)
  }
    filtersA?.type === filtersB?.type &&
) {
/**
 * @param {string|number} lengthSeconds the video duration in seconds or the strings LIVE or UPCOMING
    } catch (error) {

        endHours += 1
 * @param {string} sortPreference
export function formatDurationAsTimestamp(lengthSeconds) {
  if (process.env.IS_ELECTRON && doCreateNewWindow) {
      }
    }
    const shortcutsAsIcons = shortcuts.map(shortcut => getMacIconForShortcut(shortcut))
 * Optionally with query params and setting the contents of the search bar in the new window.
  fileExtension,
      return ['fas', 'arrow-down-short-wide']

    intervalInSeconds = videoLengthSeconds / (numberOfImages * numberOfSubImagesPerImage)
          if (fileInput.files.length === 0 && typeof fileInput.onchange === 'function') {

  for (const forbiddenChar in forbiddenChars) {
 * @returns {T}
        ':': '：', // U+FF1A

export const ToastEventBus = new EventTarget()
 *
 * @param {string} channelId

 * Escapes HTML tags to avoid XSS
 * @param {string} url the URL to open
 * @param {number} time
        isWaiting = false
export function throttle(func, wait) {
  }
  }
    case 'linux':
  if (storyboard.interval > 0) {
        showToast(`${i18n.global.t('Clipboard.Copy failed')}: ${error}`, 5000)
    try {
      break
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker#browser_compatibility

export function ctrlFHandler(event, inputElement) {

  } else if (timeFrame.startsWith('month') || timeFrame === 'mo') {
      // text ascending
export function getChannelPlaylistId(channelId, type, sortBy) {
 * @param {string} externalPlayer
  let timeSpan = null
  } else if (timeFrame.startsWith('minute') || timeFrame === 'm') {
    if (typeof content === 'string') {
/**
 */
  const index = array.indexOf(entry)
      return '⌥'
      }
      startHours = endHours
 * @param {number} number
export async function fetchWithTimeout(timeoutMs, input, init) {
 */


    }
  return now - timeSpan
    timeSpan = timeAmount * 86400000
  if (timeUnit === 'week' && timeDiffFromNowDays >= daysInMonth) {
      // text descending
}
  }
        '<': '＜', // U+FF1C
    let timestamp = urlObject.searchParams.get('t')
export function showExternalPlayerUnsupportedActionToast(externalPlayer, action) {
        return channelId.replace(/^UC/, 'UUSH')
import { nextTick } from 'vue'
  switch (type) {
 * strip html tags but keep <br>, <b>, </b> <s>, </s>, <i>, </i>
 * @param {string | Blob} content
    const chars = word.split('')
      timestamp = time
  if (timeUnit === 'day' && timeDiffFromNow >= 7) {
/**
        id: rememberDirectoryId,
}
    case 'published_ascending':
}
        await writableFileStream.close()
      return premiereDate.getTime()
 * @param {string} shortcut
 * @param {{[key: string]: string | string[]}} acceptedTypes

  try {
      } else {
      if (messageOnError !== null) {
  return {
    timeDiffFromNow /= 7
    .replaceAll('"', '&quot;')
        .join(',')
    .replaceAll(/!{2,}/g, '!')
  const shortcutLabelSeparator = i18n.global.t('shortcutLabelSeparator')
      signal: timeoutSignal

      return shortcut
  fileTypeDescription,

  // so that we can get `this` and pass it onto the original function.

    if (!isWaiting) {

    }
 * @param {T} func
      }
      }
          }
 * @returns {Promise<{ content: string, filename: string } | null>}
  if (process.env.IS_ELECTRON || 'showSaveFilePicker' in window) {
  const match = publishedText.match(PUBLISHED_TEXT_REGEX)
  // Only supported in Electron and desktop Chromium browsers
      }
function getMacIconForShortcut(shortcut) {
    // youtube.com/live
          description: fileTypeDescription,
  const { origin } = url
    case UnsupportedPlayerActions.PLAYBACK_RATE:
  if (lengthSeconds === 0) {
 */

 */
      return i18n.global.t('Keys.arrowdown')

    case UnsupportedPlayerActions.PLAYLIST_SHUFFLE:
      }



  // Using a fully fledged function here instead of an arrow function
        time += 60 * Number(minutes)
  }
    return
      }
    },

 * @returns {string}
    if (fallbackFile === null) {

      actionString = i18n.global.t('Video.External Player.Unsupported Actions.shuffling playlists')
 * @param {'videos' | 'live' | 'shorts'} type
 * This will match sequences of upper case characters and convert them into title cased words.
    router.push({
  }))
      forbiddenChars = { '/': '／' }
  return array[Math.floor(Math.random() * array.length)]
  // and allow terser to remove the unused else block

/**
            resolve(null)

/**
    case 'earliest_created_first':
  let windowPath = url.pathname
    case 'ctrl':
    case 'latest_updated_first':
    timeUnit = 'year'
    return true
        .flat()
  for (let i = 0; i < numberOfImages; i++) {
 */
  } else {
    timeUnit = 'day'
    try {
      window.addEventListener('focus', listenForEnd, { once: true })
      // should never happen but just to be sure that we always return a number
    let xCoord = 0

      break
    // youtube.com/embed
 */
    filtersA?.features?.length === filtersB?.features?.length && filtersA?.features?.every((val, index) => val === filtersB?.features[index])
    label: actionTitle,
 * This formats the duration of a video in seconds into a user friendly timestamp.
        if (urlTail === 'videoseries') {
 */

      /** @type {FileSystemFileHandle[]} */
 * @returns {T}
    timeout = setTimeout(() => {
  /* Different months might have a different number of days.
  if (timeUnit === 'hour' && timeDiffFromNow >= 24) {
        '?': '？', // U+FF1F
      if (seconds) {
    case 'enter':

  let isWaiting
  let hours = 0
        } else {

}
    case 'enter':
 * @returns {string} the localized action title with keyboard shortcut
      path,
        extractParams(urlObject.pathname.replace('/shorts/', ''))

    let yCoord = 0
  if (typeof lengthSeconds === 'string') {
      return i18n.global.t('Keys.arrowleft')
      await navigator.clipboard.writeText(content)
    timeDiffFromNow = timeDiffFromNowDays / daysInMonth
 * @param {Function} action
    case 'shift':

  })
 * @template {Function} T
  }
  let startSeconds = 0
      break
      }
      const paddedStartMinutes = startMinutes.toString().padStart(2, '0')
    const fallbackFile = await new Promise((resolve) => {
    }
    case UnsupportedPlayerActions.STARTING_VIDEO_AT_OFFSET:
 */

 */
    if (premiereDate) {
  let unlocalizedShortcuts = sometimesManyUnlocalizedShortcuts
  const extractors = [
  // As we know it is supported in Electron, adding the build flag means we can skip the runtime check in Electron
    for (let j = 0; j < numberOfSubImagesPerImage; j++) {

    try {
        extractParams(urlObject.searchParams.get('v').slice(0, 11))
        }],
  }
}
        paramsObject.playlistId = urlObject.searchParams.get('list')
    timeDiffFromNow /= 12
    case 'arrowdown':
 * @returns {string[]}
    // Small timeout to give the browser time to react to the click on the link
  let minutes = Math.floor(lengthSeconds / 60)
  const daysInMonth = useThirtyDayMonths ? 30 : 31
        id: rememberDirectoryId,
    windowPath = windowPath.substring(0, windowPath.length - 1)
    case 'earliest_played_first':
    locale = await window.ftElectron.getSystemLocale()
  }
        return paramsObject
        const urlTail = urlObject.pathname.replace('/embed/', '')
  // Vue components using the options API use `this` alot.
    default:
export function getIconForSortPreference(sortPreference) {

}
export function stripHTML(value) {
    timeDiffFromNow /= 60
  if (!date) {
 * @returns {string} the title with upper case characters removed and punctuation normalized
  return btoa(binString)
    case 'name_ascending':
      xCoord = (xCoord + storyboard.thumbnail_width) % (storyboard.thumbnail_width * storyboard.columns)
      // update the variables
            [mimeType]: [fileExtension]
    filtersA?.duration === filtersB?.duration &&


  }
      return i18n.global.t('Keys.plus')
 * @param {T[]} array
    case 'win32':
 * @param {Intl.NumberFormatOptions?} options
    const shortcutJoinOperator = i18n.global.t('shortcutJoinOperator')
      const paddedEndSeconds = endSeconds.toFixed(3).padStart(6, '0')
      time,
    return undefined
 * This writes to the clipboard. If an error occurs during the copy,
export function base64EncodeUtf8(text) {
  return value.replaceAll(/(<(?!br|\/?[abis]|img>)([^>]+)>)/gi, '')

      }
  return filenameNew
        '\\': '＼', // U+FF3C
        return paramsObject
        time += 3600 * Number(hours)
          description: fileTypeDescription,
      file = await handle.getFile()
  fileName,
 * @param {string} text

      // Unfortunately chromium browsers always throw an AbortError, even when it was caused by a TimeoutError,
  let vttString = 'WEBVTT\n\n'
        suggestedName: fileName,
      return i18n.global.t('Keys.alt')
      // user pressed cancel in the file picker
  }
    case 'arrowdown':
export function getTodayDateStrLocalTimezone() {
    .replace(reg, x => capitalizedWord(x.toLowerCase()))
  } else {
    const localizedShortcuts = shortcuts.map((shortcut) => getIndividualLocalizedShortcut(shortcut))
  let timeDiffFromNow = ((now - date) / 1000)
  if (windowPath.endsWith('.html')) {
}
      endSeconds += intervalInSeconds
  if (lengthSeconds >= 3600) {
      func.apply(context, args)
    } else {
      actionString = i18n.global.t('Video.External Player.Unsupported Actions.starting video at offset')
  } else if (isUpcoming) {
 * @param {null|string} options.messageOnError the message to be displayed as a toast when the copy fails (optional)
const PUBLISHED_TEXT_REGEX = /(\d+)\s?([a-z]+)/i
      forbiddenChars = { '/': '／', ':': '：' }
 * @returns {T}
  if (timeUnit === 'month' && timeDiffFromNow >= 12) {
  ToastEventBus.dispatchEvent(new CustomEvent('toast-open', {
      }
export async function openExternalLink(url) {
}
 * @param {number} videoLengthSeconds
  // so that we can get `this` and pass it onto the original function.
    case 'shift':
// allowed characters in channel handle: A-Z, a-z, 0-9, -, _, .
  // Remove proceeding slash in given path if there is one
  const url = new URL(window.location.href)

      return '↓'
 * @param {'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos'} [startInDirectory]
    case 'video_title_ascending':

    // 30 day month being used
  let locale
  const now = Date.now()
    }
  }
  if (windowPath.endsWith('/')) {
 * @returns {string}

    } catch (error) {

      break
    showToast(i18n.global.t('Clipboard.Cannot access clipboard without a secure connection'), 5000)
    case 'earliest_updated_first':
  window.open(url, '_blank', 'noreferrer')
      return '↑'
  return i18n.global.t('KeyboardShortcutTemplate', {
 * It will return strings like LIVE or UPCOMING, without making any changes
      break
      const { seconds, minutes, hours } = timestamp.match(/(?:(?<hours>(\d+))h)?(?:(?<minutes>(\d+))m)?(?:(?<seconds>(\d+))s)?/).groups
  if (path.startsWith('/')) {
    filtersA?.time === filtersB?.time &&
      action,

      }
      writableFileStream = await handle.createWritable()
    } catch (error) {
 * @param {number} wait
      return '+'
      }
      if (messageOnSuccess !== null) {
 * @param {{sortBy? : string, time?: string, duration?: string, features: string[]}?} filtersB
      return '⇧'
 * @param {string | (({elapsedMs: number, remainingMs: number}) => string)} message
}
 * @returns {string} absolute web path
    filenameNew = filenameNew.replaceAll(forbiddenChar, forbiddenChars[forbiddenChar])
      /** @type {FileSystemFileHandle} */
export function replaceFilenameForbiddenChars(filenameOriginal) {
    case 'name_descending':
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1431720
  return function (...args) {
  }
  // For easier code interpretation the value is made to be positive
      actionString = i18n.global.t('Video.External Player.Unsupported Actions.looping playlists')
  }
      actionString = i18n.global.t('Video.External Player.Unsupported Actions.reversing playlists')
      return now
  switch (action) {
  let timeUnit = 'second'
  let seconds = lengthSeconds - minutes * 60
    unlocalizedShortcuts = [unlocalizedShortcuts]
  return extractors.reduce((a, c) => a || c(), null) || paramsObject
  let endSeconds = intervalInSeconds
    let writableFileStream
      break

        return paramsObject
  const numberOfSubImagesPerImage = storyboard.columns * storyboard.rows
  }
}
      if (/^\/shorts\/[\w-]+$/.test(urlObject.pathname)) {
  const message = i18n.global.t('Video.External Player.UnsupportedActionTemplate', {
  let file

        yCoord += storyboard.thumbnail_height
  }
 * @param {string} publishedText
}
    return now
  switch (shortcut) {
 * @returns {boolean}
 */
  if (minutes < 10 && hours > 0) {
  const timeFrame = match[2]
    case 'arrowup':
    }
      const paddedEndMinutes = endMinutes.toString().padStart(2, '0')
    function () {
      fileInput.type = 'file'
  content,
 */
 */
 * @param {number} date
 * @param {string} fileTypeDescription
}
  }
  if (navigator.clipboard !== undefined && window.isSecureContext) {

  const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('')
      console.error(`Failed to copy ${content} to clipboard`, error)
      startMinutes = endMinutes
      break
 * Check if the `name` of the error is `TimeoutError` to know if the error was caused by a timeout or something else.
}
      return shortcut
export async function readFileWithPicker(
  ]
export function deepCopy(obj) {
      break


        return paramsObject
  const shortcuts = shortcut.split('+')

  fileTypeDescription,
export function escapeHTML(untrusted) {
    return await fetch(input, init)
/**
/**
/**
    .replaceAll('\'', '&apos;')
      forbiddenChars = {
        return channelId.replace(/^UC/, 'UULF')
}
    // youtube.com/shorts

            // if there are no files and the onchange has not been triggered, the file-picker was canceled
      if (hours) {
 * @param {('newest' | 'popular')?} [sortBy]
    path = path.substring(1, path.length)
  }
    function () {
    if (timestamp && (timestamp.includes('h') || timestamp.includes('m') || timestamp.includes('s'))) {
  if (timeFrame.startsWith('second') || timeFrame === 's') {
 * @param {number} wait
export function extractNumberFromString(str) {
  if (index !== -1) {
  } catch (err) {
        return channelId.replace(/^UC/, 'UUPV')
) {
 * @param {T} obj
        '*': '＊' // U+FF0A

    },

    .replaceAll('>', '&gt;')
      URL.revokeObjectURL(url)
  const bytes = new TextEncoder().encode(text)
  }
        extractParams(urlObject.pathname.slice(1, 12))
}
}

 * @param {number} minUpperCase the minimum number of consecutive upper case characters to match
    downloadLink.href = url
        showToast(`${messageOnError}: ${error}`, 5000)

        return false
  }
}
  rememberDirectoryId,
        '>': '＞', // U+FF1E
    case 'date_added_ascending':
 * It will assume all given paths are relative to the current window location.
    array.splice(index, 1)
    const downloadLink = document.createElement('a')
 */
    })
      // user pressed cancel in the file picker
    timeSpan = timeAmount * 31556952000
    }

  // Remove the html file name from the path
  if (process.env.IS_ELECTRON || 'showOpenFilePicker' in window) {
 */
  // how many images are in one image
        // 1 second timeout on the response from the file picker to prevent awaiting forever
  // Vue components using the options API use `this` alot.
 * @template T
    chars[index] = chars[index].toUpperCase()
  if (isLive) {
  const timeDiffFromNowDays = timeDiffFromNow
  const timeNowStr = new Date(timeNow.getTime() - (timeNow.getTimezoneOffset() * 60000)).toISOString()
      fileInput.click()
        endSeconds -= 60
 * @param {T[]} array
      if (sortBy === 'popular') {
    In other contexts, like when working with calculatePublishedDate, we use 30. */
/**
    },
  if (process.platform === 'darwin') {


  }
    // cloudtube
    case 'option':
export function buildVTTFileLocally(storyboard, videoLengthSeconds) {
  // Notice that the value is turned to negative to be displayed as "ago"
  return vttString
    if (navigator && navigator.language) {
    }
    In some contexts, to ensure the display is fine, we use 31.
 * @param {boolean} isUpcoming
 * Performs a deep copy of a javascript object
  switch (process.platform) {
 * @param {string} shortcut
}

  return timeNowStr.split('T')[0]
  return untrusted.replaceAll('&', '&amp;')
export async function getSystemLocale() {
      } else {
    case 'all':
    // anything with /watch?v=
    urlObject = new URL(url)

        excludeAcceptAllOption: true,
      vttString += `${currentUrl}#xywh=${xCoord},${yCoord},${storyboard.thumbnail_width},${storyboard.thumbnail_height}\n\n`
}
    timeSpan = timeAmount * 3600000
 */
    timeSpan = timeAmount * 60000
      abortSignal,
    return true
  if (!publishedText) {
/**
    case 'date_added_descending':
 * @param {boolean} hideSeconds
      const paddedEndHours = endHours.toString().padStart(2, '0')
  }

 * @returns {T}
  // Only supported in Electron and desktop Chromium browsers
    const context = this
export function randomArrayItem(array) {
 * @param {null|string} options.messageOnSuccess the message to be displayed as a toast when the copy succeeds (optional)
}
      const listenForEnd = () => {
 * @param {object} params.query the query params to use (optional)
      if (/^cadence\.(gq|moe)$/.test(urlObject.host) && /^\/cloudtube\/video\/[\w-]+$/.test(urlObject.pathname)) {
    return NaN
  showToast(message)
        setTimeout(() => {
 * @returns {Promise<boolean>}
      }
        fileInput.onchange = null
 * @param {string} path relative path to resource
      break
      func.apply(context, args)
  startInDirectory
    timeUnit = 'minute'
 * @param {RequestInit?} init
  const now = Date.now()
    return localizedShortcuts.join(shortcutJoinOperator)
 * @overload
    case 'ctrl':
export function addKeyboardShortcutToActionTitle(actionTitle, shortcut) {
  return function (...args) {
  startInDirectory
    // youtu.be
 */
    lengthSeconds = lengthSeconds - hours * 3600
import { UnsupportedPlayerActions } from '../../constants'
}
 * @param {string} title the title to process
    function () {
  const localizedShortcuts = unlocalizedShortcuts.map((s) => getLocalizedShortcut(s))
/**
function getIndividualLocalizedShortcut(shortcut) {
    timeUnit = 'hour'
 * @param {number} timeoutMs
 * Opens an internal path in the same or a new window.
      } else {

    case 'plus':
    case 'arrowright':
          extractParams(urlTail)
        return paramsObject
    timeUnit = 'week'

    return chars.join('')
      actionString = i18n.global.t('Video.External Player.Unsupported Actions.setting a playback rate')
        }, 1000)
    return i18n.global.t('Moments Ago')

      // add the timestamp information


 * @param {boolean} useThirtyDayMonths
export function showToast(message, time = null, action = null, abortSignal = null) {
 * @param {string} filenameOriginal
}
  } else {
        '"': '＂', // U+FF02

/**
/**
/**
 * @param {string} value
  switch (event.key) {
      query
 * This creates an absolute web url from a given path.
 * @param {string} untrusted
  }
    case 'published_descending':
    case 'arrowleft':
export function createWebURL(path) {
    case 'oldest':
    detail: {
  }


 * @returns {string}
 * @param {string} fileExtension
      return ['fas', 'sort-alpha-down']
  let timestamp = ''
      return i18n.global.t('Keys.arrowup')
    timeSpan = timeAmount * 604800000
      throw timeoutSignal.reason
    }, wait)
      if (writableFileStream) {
      }
          accept: acceptedTypes

    case UnsupportedPlayerActions.PLAYLIST_SPECIFIC_VIDEO:
/**
    console.error("publishedText is missing but the video isn't live or upcoming")
    timeSpan = timeAmount * 1000
  }
export function toDistractionFreeTitle(title, minUpperCase = 3) {

 *
  let forbiddenChars = {}
 * @param {T} func
      timeout = null
