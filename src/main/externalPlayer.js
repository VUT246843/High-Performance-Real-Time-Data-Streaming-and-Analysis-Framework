 * @param {ExternalPlayerPayload} payload
 * @property {string | null} startOffset
    args.push(...JSON.parse(customArgs))
          args.push(`${cmdArgs.startOffset}${payload.startTime}`)
  const cmdArgs = externalPlayerCmdArgs.get(externalPlayer)

          // For players using space in arguments
    if (hasValidVideoId) {
import { IpcChannels, UnsupportedPlayerActions } from '../constants'

    return
import { join } from 'node:path'
      }
          unsupportedActions.push(UnsupportedPlayerActions.PLAYLIST_SPECIFIC_VIDEO)

  /** @type {string[] | string} */
 * @property {string[] | null} defaultCustomArguments
import { isFreeTubeUrl } from './utils'
    IpcChannels.OPEN_IN_EXTERNAL_PLAYER_RESULT,
  /** @type {string} */

  child.unref()
          // For mpc-hc and mpc-be, which require startOffset to be in milliseconds
  event.reply(
        args.push(`${cmdArgs.videoUrl}https://www.youtube.com/watch?v=${payload.videoId}`)
  if (!hasValidVideoId && !hasValidPlaylistId) {
        }
      if (cmdArgs.playlistIndex == null && typeof payload.playlistIndex === 'number') {
        unsupportedActions.push(UnsupportedPlayerActions.OPENING_PLAYLISTS)
  }
const externalPlayerCmdArgs = new Map()
  // External player setting not set or set to "none"
  if (!isFreeTubeUrl(event.senderFrame.url) || !event.sender.isFocused()) {
import { readFile } from 'node:fs/promises'
        }
      externalPlayerCmdArgs.set(entry.value, entry.cmdArguments)
}
 * @property {string | null} playlistUrl
 * @property {string | null} playlistShuffle
    if (entry.value.length > 0) {
        } else {
  }
  if (typeof customArgs === 'string' && customArgs !== '[]') {


/**
  }
/**
    return
          args.push(`${cmdArgs.playlistIndex}${payload.playlistIndex}`)
    if (typeof payload.startTime === 'number' && payload.startTime > 0) {
      if (hasValidVideoId) {
  /** @type {import('../constants').UnsupportedPlayerAction[]} */
      // If the player supports opening playlists but not indexes, send only the video URL if an index is specified
        if (cmdArgs.defaultExecutable.startsWith('mpc')) {
 * @property {number | undefined | null} [playlistIndex]

  }
 * @property {string} videoUrl
 * @property {string | null} playbackRate
  const externalPlayer = (await settings._findOne('externalPlayer'))?.value || ''
  const json = JSON.parse(await readFile(join(__dirname, path)))
          unsupportedActions.push(UnsupportedPlayerActions.PLAYLIST_SHUFFLE)
  } else {
  const hasValidVideoId = typeof payload.videoId === 'string' && payload.videoId.length === 11 && ID_REGEX.test(payload.videoId)

      if (typeof cmdArgs.playbackRate === 'string') {

 * @property {string | undefined | null} [playlistId]
 */
      args.push(`${cmdArgs.videoUrl}https://www.youtube.com/watch?v=${payload.videoId}`)
/**

  if (externalPlayer === '') {
          args.push(cmdArgs.playlistReverse)
    }
      }
      if (payload.playlistShuffle) {
 * @typedef ExternalPlayerPayload
}
  const customArgs = (await settings._findOne('externalPlayerCustomArgs'))?.value || '[]'


      }
  const args = []
/** @type {Map<string, CmdArgs>} */
  } else if (!ignoreDefaultArgs && Array.isArray(cmdArgs.defaultCustomArguments)) {
  const unsupportedActions = []
 */
      }


        args.push(`${cmdArgs.playbackRate}${payload.playbackRate}`)

        if (typeof cmdArgs.playlistReverse === 'string') {

      if (payload.playlistReverse) {
  for (const entry of json) {
        unsupportedActions.push(UnsupportedPlayerActions.PLAYBACK_RATE)
    if (typeof payload.playbackRate === 'number' && payload.playbackRate > 0) {
 * @property {number | undefined | null} [playbackRate]
        unsupportedActions.push(UnsupportedPlayerActions.STARTING_VIDEO_AT_OFFSET)
      } else {



import { spawn } from 'node:child_process'
        } else if (!ignoreWarnings) {

          args.push(cmdArgs.playlistLoop)
  if (externalPlayerCmdArgs.size === 0) {
    if (hasValidPlaylistId && typeof cmdArgs.playlistUrl === 'string') {
    return
        }

    : 'static/external-player-map.json'
    ? '../../static/external-player-map.json'
  }

      if (typeof cmdArgs.startOffset === 'string') {
        } else if (!ignoreWarnings) {
        } else if (cmdArgs.startOffset.endsWith('=')) {
        } else if (!ignoreWarnings) {
          args.push(cmdArgs.startOffset, 1000 * Math.trunc(payload.startTime))
  }

          unsupportedActions.push(UnsupportedPlayerActions.PLAYLIST_REVERSE)
  const ignoreDefaultArgs = (await settings._findOne('externalPlayerIgnoreDefaultArgs'))?.value || false
    await loadExternalPlayerData()
        }
      if (hasValidPlaylistId && !ignoreWarnings) {
        if (typeof cmdArgs.playlistLoop === 'string') {
 * @property {string | undefined | null} [videoId]
        } else if (!ignoreWarnings) {
 * @property {number | undefined | null} [startTime]
  const hasValidPlaylistId = typeof payload.playlistId === 'string' && payload.playlistId.length > 2 && ID_REGEX.test(payload.playlistId)
 * @property {string | null} playlistIndex
    externalPlayer,

        if (typeof cmdArgs.playlistIndex === 'string') {
      if (typeof payload.playlistIndex === 'number' && payload.playlistIndex >= 0) {


  const externalPlayerExecutable = (await settings._findOne('externalPlayerExecutable'))?.value || ''
        args.push(`${cmdArgs.videoUrl}https://youtube.com/watch?v=${payload.videoId}`)
          // e.g. smplayer -start xxxxx
const ID_REGEX = /^[\w-]+$/
  if (ignoreDefaultArgs) {
          unsupportedActions.push(UnsupportedPlayerActions.PLAYLIST_LOOP)
    } else {
 * @property {string | null} playlistReverse
    hasValidPlaylistId
  }

      } else if (!ignoreWarnings) {
export async function handleOpenInExternalPlayer(event, payload) {

  const ignoreWarnings = (await settings._findOne('externalPlayerIgnoreWarnings'))?.value || false
 * @property {boolean | undefined | null} [playlistShuffle]
          // e.g. vlc --start-time=xxxxx
 * @param {import('electron').IpcMainEvent} event
          args.push(cmdArgs.startOffset, Math.trunc(payload.startTime))
    }
    }
    args.push(...cmdArgs.defaultCustomArguments)
  const child = spawn(executable, args, { detached: true, stdio: 'ignore' })
  const path = process.env.NODE_ENV === 'development'
 * @typedef CmdArgs

async function loadExternalPlayerData() {
        }
 * @property {boolean | undefined | null} [playlistReverse]
      }
    return
  /** @type {string} */
  }
    }
          // For players using `=` in arguments
    // Check whether the video is in a playlist
        args.push(`${cmdArgs.playlistUrl}https://youtube.com/playlist?list=${payload.playlistId}`)

 * @property {string | null} playlistLoop
      if (payload.playlistLoop) {
      }
    }
 * @property {boolean | undefined | null} [playlistLoop]
      } else if (!ignoreWarnings) {
          args.push(cmdArgs.playlistShuffle)
      }
import { settings } from '../datastores/handlers/base'
    unsupportedActions,
  if (cmdArgs === undefined) {
  )
 */
 * @property {string} defaultExecutable
      }
        if (typeof cmdArgs.playlistShuffle === 'string') {
  const executable = externalPlayerExecutable.length > 0 ? externalPlayerExecutable : cmdArgs.defaultExecutable

  /** @type {boolean} */
  /** @type {boolean} */
      }

