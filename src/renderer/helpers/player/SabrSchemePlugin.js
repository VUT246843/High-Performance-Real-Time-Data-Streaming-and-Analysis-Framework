      timedOut: false,
    }
      currentState.initDataCache.set(operationInputs.formatIdString, data)
        'accept-encoding': 'identity',
  /** @type {SabrContextUpdate[]} */
      new Error('Incomplete segment, missing MEDIA_END part'),
      } else {
    currentState.abortStatus.finished = false
            currentState.abrRequest.streamerContext.playbackCookie = nextRequestPolicy?.playbackCookie ? PlaybackCookie.encode(nextRequestPolicy.playbackCookie).finish() : undefined
          case UMPPartId.NEXT_REQUEST_POLICY: {

      preferredAudioFormatIds: [audioFormatId],
     */
}
 * @property {(cb: () => void) => void} onReloadOnce
 */
    lastModified: videoFormatIdParts[1],

    throw createRecoverableNetworkError(ShakaError.Code.OPERATION_ABORTED, operationInputs.uri, operationInputs.requestType)

        'accept-encoding': 'identity',
      activeManifestVariant = manifest.variants.find((variant) => {
        accept: 'application/vnd.yt-ump',

              if (!mediaHeader) break
 * @property {boolean} playerReloadRequested

      clientAbrState: {
  if (currentState.sabrStreamState.playerReloadRequested) {
      operationInputs.requestType,
        videoFormatId = formatIdFromString((activeVariant ?? variantTracks[0]).originalVideoId)
          case UMPPartId.RELOAD_PLAYER_RESPONSE: {
 * @typedef CurrentState
        stickyResolution: resolution,
     */
      body,
                currentState.sabrStreamState.activeSabrContextTypes.add(startPolicy)
            shouldRetryDueToNextRequestPolicy = true
  if (endSegmentIndex == null) {
}
    const formatIdString = url.searchParams.get('formatId')
            if (!sabrError) break
      initDataCache,
          }
}
      ShakaError.Category.NETWORK,

    },
      status: response.status,
 * @returns {shaka.util.AbortableOperation<shaka.extern.Response>}
    _resetCount: 0,
/**


              if (sabrContextUpdate.sendByDefault) {
        currentState.abortController.abort()
    const { sabrContexts, unsentSabrContexts } = prepareSabrContexts(sabrStreamState)
              if (currentState.sabrStreamState.sabrContexts.has(discardPolicy)) {
        lastManualSelectedResolution: resolution,

 * @typedef SabrStreamState
            const sabrContextSendingPolicy = decodePart(part, SabrContextSendingPolicy)
function formatIdFromString(str) {
}
 * @property {number} cumulativeBackOffRequested
                }
 * @param {CurrentState} currentState - can be updated
          variant.video.originalId === activeVariant.originalVideoId
        } else {
        abortStatus.timedOut = true
      // i.e. backoff time parts received will not reset timeout - counted as video loading issue
    const isAudioOnly = player.isAudioOnly()
}
            shouldRetry = true

 */
  SabrRedirect,
      },
 * @property {string} formatIdString
        }, candidates[0])
    onBackoffRequested(callback) {
  return {
 * @param {import('../../views/Watch/Watch').SabrData} sabrData
              }

 * @param {import('googlevideo/shared-types').Part} part
    const resolution = streamIsVideo ? parseInt(url.searchParams.get('resolution')) : undefined
    if (streamIsAudio) {
import { base64ToU8, concatenateChunks, EventEmitterLike, MAX_INT32_VALUE } from 'googlevideo/utils'
          case UMPPartId.SABR_REDIRECT: {
  } else if (invalidPoToken) {
      finished: false,
      durationTicks: MAX_INT32_VALUE,
      timescale: 1000
      startTicks: '0',
  UMPPartId,
    }
                mediaHeader.formatId.xtags === xtags
      }
  }
 */
  let error
          }
    if (isInit && initDataCache.has(formatIdString)) {
 */
        const candidates = variantTracks.filter((track) => track.audioRoles.includes('main'))
    if (streamIsVideo) {
    if (sabrStreamState.activeSabrContextTypes.has(ctxUpdate.type)) {
      if (chunkedDataBuffer) {
      data,
            if (mediaHeaderId === undefined) {
      ShakaError.Code.HTTP_ERROR,
    // but it will definitely exist when we receive a request here.
    )
 * @property {SabrStreamState} sabrStreamState
    }
      if (!currentState.abortStatus.finished) {
    )
    }
      const currentBackoffTimeMs = currentState.sabrStreamState.nextRequestPolicy.backoffTimeMs
  return {
    originalRequest: request,
 * @param {() => shaka.Player} getPlayer
  }
        }
 * @property {Map<number, SabrContextUpdate>} sabrContexts
 * @property {Map<string, Uint8Array>} initDataCache
  try {
 * @param {import('googlevideo/protos').FormatId} formatId - The format to create a full buffer range for.
              currentState.sabrStreamState.sabrContexts.set(sabrContextUpdate.type, sabrContextUpdate)

      body,
            currentState.abrRequest.streamerContext.backoffTimeMs = nextRequestPolicy?.backoffTimeMs
    const requestData = {
/**
/**
    itag: parseInt(videoFormatIdParts[0]),
            }
      // Must reset AFTER waiting to avoid requested aborted
    currentState.requestInit = {
      cumulativeRetryDueToNextRequestPolicy: 0,
    timeRange: {
      // (shaka-player only sets it to active after it has fetched the init/segment data)
      }, timeoutMs)
  /**
    const timeoutMs = request.retryParameters.timeout
            break
  return {
    const pendingRequest = doRequest(opInputs, currentState)
  return {
      for (const buffered of bufferedInfo.audio) {

      }
      streamerContext: {
      isInit,
  let endSegmentIndex = segmentIndex.find(buffered.end)
          default: {
      // This is true during reload, returning a promise to suppress error
 * @property {() => void} resetTimeoutOnce
      selectedFormatIds: isInit ? [] : [audioFormatId, videoFormatId],
    )
  SabrError,
    startTimeMs: '0',
  } catch {
   * @type {Map<string, Uint8Array>}
/**
        accept: 'application/vnd.yt-ump',
            break
        setTimeout(resolve, currentBackoffTimeMs)
  }
              invalidPoToken = true
    currentState.abortStatus.timedOut = false
      headersReceived,
    const drcEnabled = url.searchParams.has('drc') || !!(activeVariant && activeVariant.audioRoles.includes('drc'))

  }
 * @param {import('vue').ComputedRef<number>} playerWidth
    try {
  ReloadPlaybackContext,
      cumulativeBackOffTimeMs: 0,



          case UMPPartId.MEDIA_END: {
function prepareSabrContexts(sabrStreamState) {
 * @property {boolean} finished
    formatId: formatId,
 * @property {boolean} timedOut
 * @property {number} cumulativeRetryDueToNextRequestPolicy
        timeSinceLastManualFormatSelectionMs: streamIsVideo ? '0' : undefined,

            const sabrContextUpdate = decodePart(part, SabrContextUpdate)
    if (player == null) {
    // Multiple requests might be issued at the same time, other requests should abort themselves once reload requested
      cancelled: false,
      currentState.cumulativeRetryDueToNextRequestPolicy += 1
 * @property {string} uri

        const probableAudioFormat = candidates.reduce((previous, current) => {
  }
 * Creates a bogus buffered range for a format. Used when we want to signal to the server to not send any
              const mediaHeader = decodePart(part, MediaHeader)
    const streamIsVideo = url.pathname === 'video'
      ShakaError.Category.NETWORK,
 * @property {() => void} clearTimeout
    startTimeMs: String(Math.round(buffered.start * 1000)),
    const enableVoiceBoost = url.searchParams.has('vb') || !!(activeVariant && activeVariant.audioRoles.includes('vb'))

      abortStatus: abortStatus,
 * @property {VideoPlaybackAbrRequest} abrRequest
    resetTimeoutOnce() {
      })
     */
    }
              currentState.abortController.abort()
    let activeManifestVariant
        enabledTrackTypesBitfield: streamIsAudio ? 1 : 0,
      operationInputs.requestType,
      operationInputs.requestType,
      eventEmitter.on('backoff-requested', callback)
            break
   */
        sabrContexts,
      method: 'POST',
      ShakaError.Code.HTTP_ERROR,
  SabrContextWritePolicy,
    } else {
    /** @type {RequestInit} */
      new Error(error),
    const { itag, lastModified, xtags } = formatIdFromString(operationInputs.formatIdString)
    }
      : ShakaError.Severity.RECOVERABLE
  const poToken = base64ToU8(sabrData.poToken)
    } else {
  }
    sabrContexts: new Map(),
import shaka from 'shaka-player'
/**
  try {
            const sabrError = decodePart(part, SabrError)

    const { sabrContexts, unsentSabrContexts } = prepareSabrContexts(currentState.sabrStreamState)
     * Stores whatever state that should be updated across the whole "session"
  let segmentComplete = false
 * The following are calculated from above properties
      // Fire fake reload event due to detecting retry loop
 * @property {boolean} playerReloadRequested
  NextRequestPolicy,
  const videoPlaybackUstreamerConfig = base64ToU8(sabrData.ustreamerConfig)
        if (!videoSegmentIndex) {
    const opInputs = {
      if (currentState.cumulativeBackOffRequested >= 3 || (timeoutMs > 0 && timeoutMs <= (currentState.cumulativeBackOffTimeMs + currentBackoffTimeMs))) {
     * Stores whatever state that should be updated across the whole "session"
  } else if (responseDataChunks.length > 0 && !segmentComplete) {
            for (const stopPolicy of sabrContextSendingPolicy.stopPolicy) {
          }
    _timeout: setTimeout(callback, timeoutMs),
    },

import { deepCopy } from '../utils'
 * @typedef OperationInputs
      headers: {},

                mediaHeader.formatId.itag === itag &&
 * @property {shaka.extern.HeadersReceived} headersReceived
      }
    const severity = response.status === 401 || response.status === 403
            break
    endSegmentIndex: parseInt(MAX_INT32_VALUE),
 */
  /** @type {CompositeBuffer | null} */
 * @property {() => void | undefined} cleanup
 * @param {shaka.extern.Request} request

 * @property {?NextRequestPolicy} nextRequestPolicy
      currentState.sabrStreamState.playerReloadRequested = true

    throw new ShakaError(
 * @param {shaka.extern.BufferedRange} buffered
            const reloadPlaybackContext = decodePart(part, ReloadPlaybackContext)
    durationMs: MAX_INT32_VALUE,
    }
      if (this._resetCount > 0) return
    uri
    if (url.searchParams.has('startTimeMs')) {
const AbortableOperation = shaka.util.AbortableOperation
    if (timeoutController) {
  } else if (currentState.abortStatus.timedOut) {
function createFullBufferRange(formatId) {


            if (streamProtectionStatus.status === 3) {
    const isInit = url.searchParams.has('init')
      preferredSubtitleFormatIds: [],
      abortController,
        audioFormatId = formatIdFromString(probableAudioFormat.originalAudioId)
    response = await fetch(sabrURL.toString(), currentState.requestInit)
    let body
        currentState.abortController.signal.addEventListener('abort', reject)

      throw error
 * @return TimeoutController
      // Detect infinite backoff loop by no. of times requested and cumulative time approaching timeout
    // Lazily initialize these variables as video data won't exist for audio-only playback
    let timeoutController = null
    let body
 * @property {RequestInit} requestInit
 * @param {shaka.extern.Manifest} manifest
        currentState.eventEmitter.emit('reload')

    }
      field1000: [],
      operationInputs.requestType,
        switch (part.type) {

    originalUri: uri,

    const sabrURL = new URL(currentState.sabrStreamState.sabrUrl)
      audioFormatId = formatIdFromString(formatIdString)
    }
      operationInputs.uri,
      sabrContexts.push(ctxUpdate)
  operationInputs,

 * @param {OperationInputs} operationInputs - readonly
        if (!videoFormatId) {

          videoFormatId = formatIdFromString(activeVariant.originalVideoId)
              currentState.eventEmitter.emit('reload')
  })
            }
            }
      eventEmitter,
        timeoutController.clearTimeout()
      const timeoutMs = operationInputs.request.retryParameters.timeout

            }
    if ((currentState.sabrStreamState.nextRequestPolicy?.backoffTimeMs || 0) > 0) {
            if (mediaHeaderId === part.data.getUint8(0)) {
  MediaHeader,
            break
      this.clearTimeout()

            if (!currentState.abortController.signal.aborted) {
  const sabrContexts = []
        return variant.audio.originalId === activeVariant.originalAudioId &&
/**
 */
    }
/**
    let videoSegmentIndex
 * segments for this format.

        clientInfo,
            }

  }
      // Since long backoff time mostly happens on the start of video playback we only reset timeout once
 */
          case UMPPartId.STREAM_PROTECTION_STATUS: {
  let invalidPoToken = false
 * @param {shaka.extern.Track} activeVariant
          chunkedDataBuffer = remainingData.data
    currentState.abrRequest.streamerContext.sabrContexts = sabrContexts
            if (mediaHeaderId === part.data.getUint8(0)) {
 */
    throw createRecoverableNetworkError(
    }
 * @property {(cb: ({backoffMs: number}) => void) => void} onBackoffRequested
            break
    throw createRecoverableNetworkError(

    }

    /** @type {import('googlevideo/protos').BufferedRange[]} */
    throw new ShakaError(
        unsentSabrContexts,
              }

    const url = new URL(request.uris[0])
      videoFormatId = formatIdFromString(activeVariant.originalVideoId)
      console.error('Invalid VideoPlaybackAbrRequest data', currentState.abrRequest)
                if (operationInputs.isInit && mediaHeader.isInitSeg) {
    const abortStatus = {
      activeManifestVariant = manifest.variants.find((variant) => {
    } else if (!currentState.abortStatus.finished) {
    sabrUrl: sabrData.url,
        if (remainingData) {
 * @param {import('googlevideo/protos').FormatId} formatId
    endSegmentIndex = segmentIndex.getNumReferences() - 1

        audioFormatId = formatIdFromString(activeVariant.originalAudioId)
      requestType,
  currentState,
    formatId,
  shaka.net.NetworkingEngine.registerScheme('sabr', (uri, request, requestType, _progressUpdated, headersReceived, _config) => {
/**
              if (currentState.sabrStreamState.activeSabrContextTypes.has(stopPolicy)) {
        return variant.audio.originalId === activeVariant.originalAudioId
     * Stores whatever state that should be updated across the whole "session"
      severity,
    }
      } else {
/**
function decodePart(part, decoder) {
    startSegmentIndex: parseInt(MAX_INT32_VALUE),
      ? ShakaError.Severity.CRITICAL
      timeoutController = createTimeoutController(() => {
            break
  if (currentState.abortStatus.cancelled) {
          }

    const reader = response.body.getReader()
            }
 * @param {shaka.media.SegmentIndex} segmentIndex
    }

    }


          }
    let mediaHeaderId
      body = VideoPlaybackAbrRequest.encode(currentState.abrRequest).finish()

      requestInit: init,
   * that way changing qualities and between audio and DASH
  }
 * @property {boolean} cancelled
      sabrStreamState,
  } else if (shouldRetry) {
  const sabrStreamState = {
    } else {
 * @param {shaka.Player} player
      return Promise.resolve()
        drcEnabled,

        playerTimeMs,
        chunkedDataBuffer.append(readObj.value)
      operationInputs.uri,
                break
 * @param {boolean} streamIsVideo - Fake audio bufferRange can be used
    operationInputs.headersReceived({})
 * @type {object}
 * @param {Uint8Array} data
      throw createRecoverableNetworkError(ShakaError.Code.TIMEOUT, operationInputs.uri, operationInputs.requestType)
/**
 * @typedef SabrStream
    /** @type {shaka.extern.Response} */
  const initDataCache = new Map()


) {

    // Using Last end time will get `null` in `segmentIndex.find`
  const bufferedInfo = player.getBufferedInfo()
    if (shouldReloadDueToBackoffLoop || currentState.cumulativeRetryDueToNextRequestPolicy >= 100) {

  if (responseDataChunks.length > 0 && segmentComplete) {
            break
 * @param {boolean} streamIsAudio - Fake video bufferRange can be used
  return AbortableOperation.completed({
        }
          case UMPPartId.MEDIA: {
      request,
      headers: {
 * @param {boolean} audioFormatsActive
 */


import { CompositeBuffer, UmpReader } from 'googlevideo/ump'
    const player = getPlayer()
            const sabrRedirect = decodePart(part, SabrRedirect)
 * @property {shaka.extern.Request} request

  let chunkedDataBuffer = null

      })
            for (const discardPolicy of sabrContextSendingPolicy.discardPolicy) {
    onReloadOnce(callback) {
    }
    if (shouldRetryDueToNextRequestPolicy) {
}

    initDataCache.clear()
    const bufferedRanges = []
              if (!currentState.sabrStreamState.activeSabrContextTypes.has(startPolicy)) {

      playerTimeMs = url.searchParams.get('startTimeMs')
        videoFormatId = formatIdFromString(url.searchParams.get('videoFormatId'))
 * @param {import('googlevideo/protos').BufferedRange[]} bufferedRanges
  SabrContextUpdate,
 */
            currentState.sabrUrl = sabrRedirect.url
/**
}
    data,
    },
    }
 * @property {number} cumulativeBackOffTimeMs
    let readObj = await reader.read()
 * @returns {T | undefined}
      eventEmitter.once('reload', callback)
            // Whole video cannot be played

              if (

      fromCache: false,
      const remainingData = new UmpReader(chunkedDataBuffer).read((part) => {
  let response
    durationMs: String(Math.round((buffered.end - buffered.start) * 1000)),
        // We need to specify a video format even for audio only otherwise we get an error response
      signal: abortController.signal,
    playerReloadRequested: false,
      videoPlaybackUstreamerConfig,
      // Only count on actual retry to avoid counting false positive (when segmentComplete
  const responseDataChunks = []

 * @property {number} requestNumber
      operationInputs.uri,

  let shouldRetry = false

 * @param {string} uri
  const eventEmitter = new EventEmitterLike()
                sabrContextUpdate.writePolicy === SabrContextWritePolicy.KEEP_EXISTING &&

        }
          case UMPPartId.SABR_CONTEXT_UPDATE: {



            break
      originalRequest: operationInputs.request,

function createBufferedRange(formatId, buffered, segmentIndex) {
      ShakaError.Code.HTTP_ERROR,
      currentState.timeoutController?.resetTimeoutOnce()
      })
      }
    /**

function createRecoverableNetworkError(code, ...args) {
        abortController.abort()
      for (const buffered of bufferedInfo.video) {
    headers: {},
}
/**
        bufferedRanges.push(createBufferedRange(videoFormatId, buffered, videoSegmentIndex))
    let videoFormatId
 * @type {object}
      body = VideoPlaybackAbrRequest.encode(requestData).finish()
    requestNumber: 0,
 */
  /** @type {number[]} */
      this._timeout = setTimeout(callback, timeoutMs)
    const currentState = {
 * @type {object}
      await new Promise((resolve, reject) => {
            error = `SABR Error: type: ${sabrError.type}, code: ${sabrError.code}`
    const audioFormatId = formatIdFromString(activeVariant.originalAudioId)
 */
      new Error('Empty response, this should not happen'),
      new Error('Invalid PO token'),
}
              currentState.abortController.abort()
        poToken,
    return op
    // lazily fetch it as the variable is only set after setupSabrScheme is called

/**
      if (isAudioOnly) {
            const nextRequestPolicy = decodePart(part, NextRequestPolicy)
    const variantTracks = player.getVariantTracks()
async function doRequest(
    return undefined
      operationInputs.requestType,
    activeSabrContextTypes: new Set(),

 */
    const sequenceNumber = parseInt(url.searchParams.get('sq'))
        clientViewportHeight: playerHeight.value,
      signal: currentState.abortController.signal,
                currentState.sabrStreamState.sabrContexts.delete(discardPolicy)
 * @type {object}
      this._resetCount++
const ShakaError = shaka.util.Error
          }
      op.finally(() => {

              currentState.abortStatus.finished = true
    let playerTimeMs = '0'
      ShakaError.Code.BAD_HTTP_STATUS,


    }
 */
      }

      },
    const data = /** @__NOINLINE__ */ concatenateChunks(responseDataChunks)
    return {
 */
        chunkedDataBuffer = new CompositeBuffer([readObj.value])
            }
        }
          case UMPPartId.MEDIA_HEADER: {
    } else if (streamIsVideo) {

    return doRequest(operationInputs, currentState)

    } catch (error) {
    }

              }

  return {
    if (timeoutMs) {
 * @property {boolean} isInit
      abortStatus.cancelled = true
 * @type {object}
          }
  for (const ctxUpdate of sabrStreamState.sabrContexts.values()) {
    let videoFormatId
    }
    }
/**
  /** @type {Uint8Array[]} */
    }
      clearTimeout(this._timeout)
 */
            shouldRetry = true
    }
 * @property {shaka.net.NetworkingEngine.RequestType} requestType
     * @type {CurrentState}
    }


          }
    fromCache: true,
} from 'googlevideo/protos'
              ) {

   * Caches the init data until the video ends
  let shouldRetryDueToNextRequestPolicy = false
      method: 'POST',
    } catch (error) {
function fillBufferedRanges(player, manifest, audioFormatsActive, streamIsVideo, streamIsAudio, bufferedRanges, activeVariant) {
        clientViewportWidth: playerWidth.value,
              segmentComplete = true
  } catch (error) {
      originalUri: operationInputs.uri,

      bufferedRanges.push(createFullBufferRange(audioFormatId))
  const clientInfo = deepCopy(sabrData.clientInfo)
    const streamIsAudio = url.pathname === 'audio'
      abortController.abort()
      return new AbortableOperation(Promise.resolve())
      }
                  mediaHeaderId = mediaHeader.headerId
 * @template T
 * @property {?TimeoutController} timeoutController
      })
                } else if (!operationInputs.isInit && mediaHeader.sequenceNumber === operationInputs.sequenceNumber) {

      response.status,
    const chunk = part.data.chunks.length === 1 ? part.data.chunks[0] : concatenateChunks(part.data.chunks)
    let audioFormatId
  if (bufferedInfo.audio.length > 0 || bufferedInfo.video.length > 0) {

          case UMPPartId.SABR_ERROR: {
 * @param {() => shaka.extern.Manifest} getManifest
                mediaHeader.formatId.lastModified === lastModified &&
          }
 * @param {import('vue').ComputedRef<number>} playerHeight
    const init = {
      // for the first fetching of the initial data there won't be an active variant
      // Wait but can be aborted
 * @return SabrStream
      }
  })
      if (activeVariant) {
      currentState.cumulativeBackOffTimeMs += currentState.sabrStreamState.nextRequestPolicy.backoffTimeMs
     * @type {AbortStatus}
    endSegmentIndex: endSegmentIndex,
            break

  } else if (response.status === 200) {
      currentState.eventEmitter.emit('backoff-requested', { backoffMs: currentBackoffTimeMs })

function createTimeoutController(callback, timeoutMs) {
        enableVoiceBoost,
                currentState.sabrStreamState.sabrContexts.has(sabrContextUpdate.type)
            }
          case UMPPartId.SABR_CONTEXT_SENDING_POLICY: {
        readObj = await reader.read()
 * @param {shaka.util.Error.Code} code
 * @property {number} sequenceNumber
    )
        clientViewportIsFlexible: false

          videoSegmentIndex = activeManifestVariant.video.segmentIndex
  }
            currentState.sabrStreamState.playerReloadRequested = true
            if (!reloadPlaybackContext) break
          }
  return { sabrContexts, unsentSabrContexts }
            for (const startPolicy of sabrContextSendingPolicy.startPolicy) {
  const cleanup = () => {
 * @property {string} sabrUrl
    startSegmentIndex: segmentIndex.find(buffered.start),
      bufferedRanges.push(createFullBufferRange(videoFormatId))
          case UMPPartId.FORMAT_INITIALIZATION_METADATA: {
  }
            break

        bandwidthEstimate: String(Math.round(player.getStats().estimatedBandwidth)),
  PlaybackCookie,

    currentState.abrRequest.streamerContext.unsentSabrContexts = unsentSabrContexts
        shouldReloadDueToBackoffLoop = true
          }
      timeoutController,
}

              ) {
    if (streamIsAudio && bufferedInfo.video.length > 0) {
      throw createRecoverableNetworkError(ShakaError.Code.HTTP_ERROR, operationInputs.uri, error, operationInputs.requestType)
      },
      {},
          return current.audioBandwidth >= previous.audioBandwidth ? current : previous
    const activeVariant = variantTracks.find(track => track.active)
  }
            currentState.sabrStreamState.nextRequestPolicy = nextRequestPolicy
    }
      throw error
        playbackRate: player.getPlaybackRate(),
      videoFormatId = formatIdFromString(formatIdString)
            break
 * @param {number} timeoutMs
    /** @type {VideoPlaybackAbrRequest} */
      },
  const unsentSabrContexts = []
}
    },
    cleanup,
      abrRequest: requestData,
  VideoPlaybackAbrRequest,
      throw createRecoverableNetworkError(ShakaError.Code.OPERATION_ABORTED, operationInputs.uri, operationInputs.requestType)
        'content-type': 'application/x-protobuf',
    let shouldReloadDueToBackoffLoop = false

  StreamProtectionStatus,
 * @property {AbortController} abortController
  if (!part.data.chunks.length) return undefined
            if (!sabrContextSendingPolicy) break

      }
 * @typedef AbortStatus
      /** @__NOINLINE__ */ fillBufferedRanges(player, getManifest(), isAudioOnly, streamIsVideo, streamIsAudio, bufferedRanges, activeVariant)
  const videoFormatIdParts = str.split('-')
export function setupSabrScheme(sabrData, getPlayer, getManifest, playerWidth, playerHeight) {
      if (!currentState.abortController.signal.aborted) {
  return new ShakaError(ShakaError.Severity.RECOVERABLE, ShakaError.Category.NETWORK, code, ...args)
    try {
      headers: {
    const audioSegmentIndex = activeManifestVariant.audio.segmentIndex
import {
    } else if (currentState.abortStatus.timedOut) {

    } else {
  } else if (error) {
      return /** @__NOINLINE__ */ createCacheResponse(uri, request, initDataCache.get(formatIdString))
    xtags: videoFormatIdParts[2]
 * @property {?EventEmitterLike} eventEmitter
    )

      })
    /**
 * @returns {import('googlevideo/protos').BufferedRange} A BufferedRange object indicating the entire format is buffered.
/**
    nextRequestPolicy: undefined,
      cumulativeBackOffRequested: 0,

  }
        'content-type': 'application/x-protobuf',

    if (currentState.abortStatus.cancelled) {
            if (sabrContextUpdate.type !== undefined && sabrContextUpdate.value?.length) {
              if (
      sequenceNumber,
                currentState.sabrStreamState.activeSabrContextTypes.add(sabrContextUpdate.type)
            if (!sabrRedirect) break
  SabrContextSendingPolicy,
          }
 * @property {Set<number>} activeSabrContextTypes
     * @type {OperationInputs}

    if (operationInputs.isInit) {

    }
    const abortController = new AbortController()

      ShakaError.Code.HTTP_ERROR,
/**
    throw createRecoverableNetworkError(

    /**
 * @param {(args: void) => void} callback
      ShakaError.Severity.CRITICAL,
 */
    shaka.net.NetworkingEngine.unregisterScheme('sabr')
      currentState.cumulativeBackOffRequested += 1
        playbackCookie: sabrStreamState.nextRequestPolicy?.playbackCookie ? PlaybackCookie.encode(sabrStreamState.nextRequestPolicy.playbackCookie).finish() : undefined,
      operationInputs.uri,
      bufferedRanges,
    throw createRecoverableNetworkError(ShakaError.Code.TIMEOUT, operationInputs.uri, operationInputs.requestType)
              }
              }
   * doesn't have to fetch the init data and segment index again
      console.error('Invalid VideoPlaybackAbrRequest data', requestData)
    if (audioFormatsActive) {
 * @param {...any} args
  }
      operationInputs.uri,

      unsentSabrContexts.push(ctxUpdate.type)
 * @property {AbortStatus} abortStatus
    throw createRecoverableNetworkError(ShakaError.Code.OPERATION_ABORTED, operationInputs.uri, operationInputs.requestType)
 * @param {string} str
    clearTimeout() {
    if (!isInit && activeVariant) {
    const op = new AbortableOperation(pendingRequest, () => {
  /** @type {SabrStreamState} */
          chunkedDataBuffer = null
 * @type {object}

 * @param {{ decode: (data: Uint8Array) => T }} decoder
      operationInputs.uri,
    while (!readObj.done && !currentState.abortStatus.finished) {
            }
    sabrURL.searchParams.set('rn', String(currentState.sabrStreamState.requestNumber++))
/**
      } else {
      uri: operationInputs.uri,
        bufferedRanges.push(createBufferedRange(audioFormatId, buffered, audioSegmentIndex))
              }
                currentState.sabrStreamState.activeSabrContextTypes.delete(stopPolicy)
      uri,
 * @typedef TimeoutController
            if (!sabrContextUpdate) break
  }

function createCacheResponse(uri, request, data) {
      preferredVideoFormatIds: [videoFormatId],
              responseDataChunks.push(...part.data.split(1).remainingBuffer.chunks)
      formatIdString,
                  mediaHeaderId = mediaHeader.headerId
            const streamProtectionStatus = decodePart(part, StreamProtectionStatus)
  }
  } else {
    return decoder.decode(chunk)
    })
    }
 * @param {SabrStreamState} sabrStreamState
      '',
