  stop() {
    emsgSchemeIdUris: null,
 *     thumbnailWidth: number,
      type: NetworkingEngine.AdvancedRequestType.INIT_SEGMENT
    language: 'und',
    {
      label = `${format.label} (Voice Boost)`
        }
      closedCaptions: null,
    this._config = config
      stream: stream,
    roles.push('main')
      }, null)
    fastSwitching: false,
 *     thumbnailCount: number,
  )
      },
  const request = {
      groupId: null,
    url += '&drc'
        presentationTimeline,
      stream.segmentIndex = await createMediaSegmentIndex(
    fullMimeTypes: new Set([format.mimeType]),
      roles: [],
    this._config = null
        }
    audioStreams.sort((a, b) => b.bandwidth - a.bandwidth)
    }
 *   duration: number,

        }
  /** @type {shaka.extern.MediaQualityInfo} */
    width: format.width,
    encrypted: false,
 * @param {shaka.media.PresentationTimeline} presentationTimeline
    /** @type {shaka.extern.Stream[]} */
import shaka from 'shaka-player'
   * @param {shaka.extern.ManifestConfiguration} config
  if (format.label) {
    }
      audioSamplingRate: null,
            tilesLayout,
      id: currentId++,
    },
    mimeType: format.mimeType.split(';', 1)[0],
            decodingInfos: [],
  return /** @__NOINLINE__ */ createVodMediaSegmentIndex(url, response, format, stream, presentationTimeline.getDuration())
        if (format.xtags === 'CgcKAnZiEgEx') {
    roles.push('secondary')
      startTime: 0,
  return new shaka.media.SegmentIndex(references)
      }
        }
      const worstVideoFormat = manifestData.formats.reduce((previousFormat, currentFormat) => {
      spatialAudio: false,
 *     itag: number,
/**
      forced: false,
            0,

    width: stream.width ?? null,
      trickModeVideo: null
 *     spatialAudio: boolean

    drmInfos: [],
    roles,
    drmInfos: [],
  networkingEngine,
  }
    keyIds: new Set(),
 * @param {shaka.extern.Stream} stream
 *       start: number,
   * @param {HTMLMediaElement | null} _mediaElement
  initSegmentReference.codecs = stream.codecs
        const interval = storyboard.interval > 0 ? storyboard.interval : duration / storyboard.thumbnailCount
    audioSamplingRate: stream.audioSamplingRate,
  if (stream.mimeType.endsWith('/webm')) {
      width: storyboard.thumbnailWidth * storyboard.columns,
    }
            0,
const NetworkingEngine = shaka.net.NetworkingEngine
    const presentationTimeline = new shaka.media.PresentationTimeline(0, 0, true)
    id,
    } else {
    }
   * @param {shaka.extern.ManifestParser.PlayerInterface} playerInterface

    // As SABR manifests are a FreeTube internal thing we can skip going through the networking engine
    references = /** @__NOINLINE__ */ parseWebmSegmentIndex(indexData, initData, url, initSegmentReference, 0, 0, duration)
 *     language: string | undefined,
      },
        stream.segmentIndex.release()
if (process.env.SUPPORTS_LOCAL_API) {
        if (stream.segmentIndex) {
    label: null,
 * @param {number} duration
  }
 *     audioChannels: number | undefined,

/**
  hasVoiceBoostAudio,
    keyIds: new Set(),
    label,
 * @typedef {{
    allowCrossSiteCredentials: false,
      encrypted: false,
  })
  })
 * @param {boolean} hasVoiceBoostAudio
}
      groupId: null,

            video: videoStream,
      fullMimeTypes: new Set([storyboard.mimeType]),
class SabrManifestParser {
 *     width: number | undefined,
 * }} SabrManifest
      },
 * @param {number} currentId
    forced: false,
        const duration = presentationTimeline.getDuration()
 *     isSecondary: boolean | undefined,
      } else if (!this._config.disableVideo) {
  } else if (format.isAutoDubbed) {
) {
      primary: false,

        videoStreams.push(
  } else if (format.isDescriptive) {
    let variantId = 0

    colorGamut,
  format,
          return previousFormat
 *     rows: number,
    if (format.isDrc) {
}
/**
          const startTime = i * segmentDuration

      textStreams,
    accessibilityPurpose: null,
          segmentReference.mimeType = storyboard.mimeType
 */
  fakeVideoFormatId = undefined
 *       start: number,

      external: false,
  const response = await networkingEngine.request(
      mimeType: storyboard.mimeType,
  } else {
          allowedByApplication: true,

      imageStreams,
 *   }[],
     */
    } else if (format.isVoiceBoost) {


    codecs: format.mimeType.match(CODECS_REGEX)[1],
    groupId: null,
    const stream = {
      label = `${format.label} (Stable Volume)`
          primary: stream.primary,
 *     frameRate: number | undefined,
            networkingEngine,
    trickModeVideo: null
    frameRate: format.frameRate,
 */
    headers: {},
 */
  }
    }
    return manifest
            hasVoiceBoostAudio,
      }

    roles.push('dubbed-auto')
      originalLanguage: null,
  initSegmentReference.mimeType = stream.mimeType
 *   }[]
    return stream
    encrypted: false,
function createImageStreams(storyboards, presentationTimeline, currentId) {
        stream,
const VIDEO_CODEC_PRIORITIES = [
          [caption.url]
      channelsCount: null,
import { parseWebmSegmentIndex } from './WebmSegmentIndexParser'
  const stream = {
    height: format.height,
        const segmentDuration = interval * storyboard.columns * storyboard.rows

    NetworkingEngine.RequestType.SEGMENT,
        if (stream.segmentIndex) {
        stream.segmentIndex = null
      stream.segmentIndex = await createMediaSegmentIndex(format, stream, presentationTimeline, networkingEngine)
            primary: audioStream.primary
  /**
  if (format.colorTransferCharacteristics === 'SMPTEST2084') {
     * @type {shaka.extern.ManifestConfiguration | null}
          )
    bandwidth: format.bitrate,
    if (this._config.disableVideo) {
      label: caption.label,
    }
  }
    presentationTimeline.lockStartTime()
 * @param {number} id
async function createMediaSegmentIndex(
      spatialAudio: false,
 * @implements {shaka.extern.ManifestParser}
    fastSwitching: false,
          decodingInfos: [],
import { parseMp4SegmentIndex } from './Mp4SegmentIndexParser'
    const manifest = {

      closedCaptions: null,
}
 *     initRange: {

 * @param {SabrManifest['formats'][0]} format
    mediaQuality,
 *     isOriginal: boolean | undefined,
            format,
    }
      for (const stream of audioStreams) {
      type: 'text',
    for (const format of manifestData.formats) {
      type: 'image',
    contentType: stream.type,

    closeSegmentIndex: () => {
    if (format.isDrc) {

      drmInfos: [],
      label: null,
    // so lets pick the worst video quality  just in case
      closeSegmentIndex: () => {
    /** @type {shaka.extern.Stream} */
  fakeVideoFormatId
    groupId: null,
 */
    hdr = 'PQ'
            endTime,
      createSegmentIndex: () => {
 * @param {shaka.net.NetworkingEngine} networkingEngine
    // "data:" (5) + mime type length + "," (1)
    emsgSchemeIdUris: null,

            currentId++,
 * @param {number} id
/**
  }
    frameRate: stream.frameRate ?? null,
        networkingEngine,
          allowedByKeySystem: true,
      if (stream.segmentIndex) { return }
      originalId: null,
        )
 *     label: string,
 *     },
      label = format.label
          // https://github.com/LuanRT/googlevideo/issues/42

  } else if (hasDrcAudio || hasVoiceBoostAudio) {
    // because we know it will always have the same format
    // For audio only playback we still need to specify a video fromat ID
        for (const videoStream of videoStreams) {
    bandwidth: format.bitrate,

    uris: [`${url}&init`],
   */
      primary: false,
    accessibilityPurpose: null,
          stream.segmentIndex.release()
        stream.segmentIndex.release()
          stream.segmentIndex = null
        } else if (previousFormat === null) {

  const stream = {
function createVideoStream(format, id, presentationTimeline, networkingEngine) {
 *       end: number
  const mediaQuality = {
  /**
    roles.push('descriptive')

    primary: false,
        stream.segmentIndex = new shaka.media.SegmentIndex(references)

    presentationTimeline.setSegmentAvailabilityDuration(Infinity)
      if (stream.segmentIndex) {
    channelsCount: format.audioChannels ?? null,
}
    presentationTimeline.setStatic(true)
          presentationTimeline.getDuration(),
      )
    } else {

  let references
      audioSamplingRate: null,
const CODECS_REGEX = /codecs="?([^"]+)"?/
            null,
  const buffer = ArrayBuffer.isView(response.data) ? response.data.buffer : response.data
    let fakeVideoFormatId
      })
            () => urls,
      fastSwitching: false,

    createSegmentIndex: async () => {
    fullMimeTypes: new Set([format.mimeType]),
  return stream


 *     indexRange: {
      sequenceMode: false,
    request,

  /**
  const initSegmentReference = new shaka.media.InitSegmentReference(
    body: null,
  const roles = []
  } else if (format.isSecondary) {
    language: format.language ?? 'und',

            Infinity,
  let url = `sabr:${stream.type}?formatId=${encodeURIComponent(stream.originalId)}`

  return storyboards.map((storyboard) => {

      presentationTimeline,
  if (stream.type === 'video') {
 *     isDescriptive: boolean | undefined,

    } else if (format.isVoiceBoost) {
    licenseRequestType: null,
      },
    url += `&videoFormatId=${encodeURIComponent(fakeVideoFormatId)}`
    const uriPrefixLength = 5 + MANIFEST_TYPE_SABR.length + 1
    language: stream.language,

    roles.push('dubbed')
          })
 *   captions: {
    }
 *     mimeType: string,
 *   formats: {
  const colorGamut = format.colorPrimaries === 'BT2020' ? 'rec2020' : 'srgb'
        )
        format,
 * @param {shaka.net.NetworkingEngine} networkingEngine

          references.push(segmentReference)
  stream,
  /** @type {shaka.extern.Stream} */
            interval
 */
    segmentIndex: null,
      tilesLayout,
 *     quality: string,

  'vp9',
    const audioStreams = []

    hdr,
   * @param {shaka.extern.Variant} _variant
    forced: false,
    method: 'GET',
      encrypted: false,
          audio: stream,
    closedCaptions: null,
      if (stream.segmentIndex) {

    external: false,
        }
    isAudioMuxedInVideo: false,
    /** @type {shaka.extern.Variant[]} */

 * @param {SabrManifest['formats'][0]} format
    bandwidth: stream.bandwidth,
  presentationTimeline,

    },
          // console.log('CgcKAnZiEgEx audio format', format)
  return `${format.itag}-${format.lastModified ?? '0'}-${format.xtags ?? ''}`
    roles.push('drc')
     * @private
}
  for (const reference of references) {
 *     colorTransferCharacteristics: 'BT709' | 'BT2020_10' | 'SMPTEST2084' | 'ARIB_STD_B67' | undefined,
        variants.push({
  /** @type {shaka.extern.Request} */
 *     mimeType: string,
      accessibilityPurpose: null,

  configure(config, _isPreloadFn) {
/**
      gapCount: 0,
    format.initRange.start,
            allowedByKeySystem: true,
/**
 *     },
            presentationTimeline,
 *     lastModified: string,
    const stream = {
 * @param {shaka.media.PresentationTimeline} presentationTimeline

      type: 'SABR',
 *     thumbnailHeight: number,
    streamDataCallback: null,
            undefined,

      accessibilityPurpose: null,

  } else if (format.isDubbed) {
/**
    url += '&vb'
          // Workaround to reject certain xtags value to avoid reload
          )
      ignoreManifestTimestampsInSegmentsMode: false,
    audioSamplingRate: format.audioSampleRate ?? null,
    }
    /** @type {SabrManifest} */
      roles: [],
function buildFormatId(format) {
 * @param {SabrManifest['formats'][0]} format

 *     isDrc: boolean | undefined,
    reference.mimeType = stream.mimeType
 *     language: string,
    segmentIndex: null,
    label: stream.label,
        audioStreams.push(
            allowedByApplication: true,
 *     label: string | undefined,
            id: variantId++,
      }
  const initData = buffer.slice(format.initRange.start, format.initRange.end + 1)
      createSegmentIndex: () => {
    reference.codecs = stream.codecs
    const hasVoiceBoostAudio = manifestData.formats.some(format => format.isVoiceBoost)
    },
      offlineSessionIds: [],
    contentType: stream.type,
    pixelAspectRatio: stream.pixelAspectRatio ?? null
 * @param {shaka.media.PresentationTimeline} presentationTimeline
  /**
  format,
  if (fakeVideoFormatId) {

      keyIds: new Set(),
      fakeVideoFormatId = buildFormatId(worstVideoFormat)
    () => initUrls,
   */
    const imageStreams = /** @__NOINLINE__ */ createImageStreams(manifestData.storyboards, presentationTimeline, currentId)

    type: 'audio',
        })
        return VIDEO_CODEC_PRIORITIES.findIndex(codec => a.codecs.startsWith(codec)) -
      for (const audioStream of audioStreams) {
  }
    channelsCount: null,
    if (this._config.disableVideo) {
 * @param {shaka.media.PresentationTimeline} presentationTimeline
  }
 * @param {string | undefined} fakeVideoFormatId
  id,

    id,
  /** @type {shaka.extern.Response} */
    roles: stream.roles,
   * @param {(() => boolean) | undefined} _isPreloadFn
        return Promise.resolve()
function createAudioStream(
    null,
    initDataType: null,
          /** @__NOINLINE__ */ createAudioStream(
  }
            language: audioStream.language,
            fakeVideoFormatId
      drmInfos: [],
      mimeType: caption.mimeType,
    }
    primary: roles.includes('main'),

            audio: audioStream,
 *     bitrate: number,
    const manifestData = JSON.parse(decodeURIComponent(uri.slice(uriPrefixLength)))
          /** @__NOINLINE__ */ createVideoStream(format, currentId++, presentationTimeline, networkingEngine)
            bandwidth: audioStream.bandwidth + videoStream.bandwidth,
    const textStreams = /** @__NOINLINE__ */ createTextStreams(manifestData.captions, presentationTimeline, currentId)
  'av01',
  /**
      forced: false,
    /**
    roles: [],

  } else if (format.isOriginal) {
  if (format.isDrc) {
    hdr = 'HLG'
    isAudioMuxedInVideo: false,
    retryParameters: NetworkingEngine.defaultRetryParameters(),
 *       end: number

}
  }
    spatialAudio: false,


}
      kind: 'captions',
    url += `&resolution=${resolution}`
  }
    references = /** @__NOINLINE__ */ parseMp4SegmentIndex(indexData, format.indexRange.start, url, initSegmentReference, 0, 0, duration)
function createTextStreams(captions, presentationTimeline, currentId) {

      isAudioMuxedInVideo: false,
    initData,
      codecs: '',
    originalLanguage: format.language ?? null,
      codecs: '',
    format.initRange.end,
          video: null
          id: variantId++,
  shaka.media.ManifestParser.registerParserByMime(MANIFEST_TYPE_SABR, () => new SabrManifestParser())
            disabledUntilTime: 0,
  const initUrls = [`${url}&init`]
 * @param {SabrManifest['storyboards']} storyboards
        stream.segmentIndex = shaka.media.SegmentIndex.forSingleSegment(

/**
  constructor() {
  }
          stream.segmentIndex = null
          disabledUntilTime: 0,
    const hasDrcAudio = manifestData.formats.some(format => format.isDrc)
 *   }[],
        return Promise.resolve()
 *     mimeType: string,
   */
    currentId += textStreams.length

    trickModeVideo: null

    originalId: buildFormatId(format),

    } else {
          const urls = [storyboard.templateUrl.replace('$M', i)]

export const MANIFEST_TYPE_SABR = 'application/sabr+json'
 *   storyboards: {
 * @param {SabrManifest['formats'][0]} format
      external: false,
        for (let i = 0; i < storyboard.storyboardCount; i++) {
          0,
  if (format.isDrc) {
  }
    codecs: stream.codecs,
 *     storyboardCount: number,
      segmentIndex: null,
 *     isAutoDubbed: boolean | undefined,

    height: stream.height ?? null,
      fullMimeTypes: new Set([caption.mimeType]),
   */
  banLocation(_uri) {
          stream.segmentIndex.release()
      periodCount: 1,
          VIDEO_CODEC_PRIORITIES.findIndex(codec => b.codecs.startsWith(codec))
      originalLanguage: caption.language,
          return currentFormat
 * @param {string | undefined} fakeVideoFormatId
  'avc1'

  }
    drmInfo: null,
  }
 *     templateUrl: string,
    closedCaptions: null,
        stream.segmentIndex = null
      }

          variants.push({
      // shaka-player sometimes calls the create function even when the segment index already exists
      segmentIndex: null,


  networkingEngine,
  presentationTimeline,
      language: caption.language,
    await filter(manifest)
) {
        if (currentFormat.width === undefined) {
 * @param {SabrManifest['formats'][0]} format
  const indexData = buffer.slice(format.indexRange.start, format.indexRange.end + 1)
    // the server won't return it but it will error if we don't list one
      fastSwitching: false,
 */
    const videoStreams = []
 * @param {shaka.net.NetworkingEngine} networkingEngine
  /**

        fakeVideoFormatId
    closeSegmentIndex: () => {
    initData: null,

      trickModeVideo: null
 */
 *     xtags: string | undefined,
      isAudioMuxedInVideo: false,
 *     isVoiceBoost: boolean | undefined,
          language: stream.language,

            null,
    const tilesLayout = `${storyboard.columns}x${storyboard.rows}`
  let hdr = 'SDR'
      closeSegmentIndex: () => {
      }
 *     height: number | undefined,
            startTime,
   * @param {string} uri

 *     url: string
/**
    /** @type {shaka.extern.Stream[]} */
   * @returns {Promise<shaka.extern.Manifest>}

  }
 *     columns: number,
 *     id: string,


    originalLanguage: null,
      emsgSchemeIdUris: null,
      originalId: caption.id,
      language: 'und',
  } else if (format.isVoiceBoost) {
    if (!this._config.disableVideo) {
    const variants = []
        const references = []
      emsgSchemeIdUris: null,
 */
 *     colorPrimaries: 'BT709' | 'BT2020' | undefined
      variants,

 * @param {string} url
    },
   * @returns {Promise<void>}
   */
  } else if (format.colorTransferCharacteristics === 'ARIB_STD_B67') {
 *     isDubbed: boolean | undefined,
          const segmentReference = new shaka.media.SegmentReference(
    return stream
    const resolution = format.height || 360
    type: 'video',

  hasDrcAudio,
    codecs: format.mimeType.match(CODECS_REGEX)[1],
    return Promise.resolve()
 *     interval: number
      nextUrl: null,
 */
            0,
  }
        stream.segmentIndex.get(0).mimeType = caption.mimeType
  setMediaElement(_mediaElement) {
      label = 'Original'
      if (format.mimeType.startsWith('audio/')) {
    createSegmentIndex: async () => {
  async start(uri, { filter, networkingEngine }) {
    channelsCount: stream.channelsCount,
      // shaka-player sometimes calls the create function even when the segment index already exists
  let label = null
          const endTime = Math.min(startTime + segmentDuration, duration)
  return stream
        }
        } else {
        )

      isLowLatency: false,

   */
      height: storyboard.thumbnailHeight * storyboard.rows,
    mimeType: stream.mimeType,
  }
    presentationTimeline.setDuration(manifestData.duration)
  ).promise
 * @param {SabrManifest['captions']} captions
  onInitialVariantChosen(_variant) {
            hasDrcAudio,
 * @param {boolean} hasDrcAudio
      id: currentId++,

function createVodMediaSegmentIndex(url, response, format, stream, duration) {
    this._config = null
  }
   * @param {string} _uri
    /** @type {shaka.extern.Stream} */
  }


    mimeType: format.mimeType.split(';', 1)[0],

      channelsCount: null,
    roles.push('voice-boost')
    external: false,

 *     audioSampleRate: number | undefined,
  'vp09',
  return captions.map((caption) => {
      label = 'Stable Volume'
 * @param {shaka.media.PresentationTimeline} presentationTimeline
    originalId: buildFormatId(format),
  /** @type {shaka.media.SegmentReference[] | undefined} */
          bandwidth: stream.bandwidth,
    let currentId = 0
}

          return currentFormat.bitrate < previousFormat.bitrate ? currentFormat : previousFormat
  } else if (format.isVoiceBoost) {
    null
      serviceDescription: null,
      keyIds: new Set(),

    audioSamplingRate: null,
          continue

 * @param {shaka.extern.Response} response
}
]
      label = 'Voice Boost'
      if (stream.segmentIndex) { return }
  /** @type {shaka.extern.Stream} */
    spatialAudio: format.spatialAudio,
      videoStreams.sort((a, b) => {

 * @param {shaka.extern.Stream} stream
 * @param {number} currentId
    sessionId: null,
