    const elem = parser.parseElement()
      const uris = [`${uri}&startTimeMs=${Math.round((lastTime + timestampOffset) * 1000)}&sq=${sq++}`]
 *   element.
  appendWindowEnd
      SeverityCritical,
    timecodeScale: segmentInfo.timecodeScale,
        new shaka.media.SegmentReference(
    if (process.env.NODE_ENV === 'development' && lastOffset == null) {
    if (elem.id !== INFO_ID) {
      ShakaError.Code.WEBM_EBML_HEADER_ELEMENT_MISSING

  duration,

import { EbmlParser } from './EbmlParser'
  /** @type {?number} */
          /* startByte= */ lastOffset, /* endByte= */ currentOffset - 1,
      CategoryMedia,
    console.error('Not an EBML element.')
    if (!tuple) {
    const uris = [`${uri}&startTimeMs=${Math.round((lastTime + timestampOffset) * 1000)}&sq=${sq}`]
  const segmentInfo = /** @__NOINLINE__ */ parseSegment(segmentElement)

 * @param {BufferSource} cuesData The WebM container's "Cueing Data" section.
  const tuple = /** @__NOINLINE__ */ parseWebmContainer(initData)

}
  initSegmentReference,
  return /** @__NOINLINE__ */ parseCues(
    console.error('[parseWebmSegmentIndex] Not a Segment element.')

function parseInfo(infoElement) {
/**
  // Parse CueTime element.
 * @param {number} appendWindowEnd
    const elem = parser.parseElement()
          currentTime + timestampOffset,
/**

 * @param {BufferSource} initData The WebM container's headers.
// Based on https://github.com/shaka-project/shaka-player/blob/main/lib/dash/webm_segment_index_parser.js
 */
    const elem = cueTrackParser.parseElement()
function parseCuePoint(cuePointElement) {
    )
  if (durationScale == null) {
    throw new ShakaError(
  // The timecode scale factor in units of [seconds / T].
      SeverityCritical,
    )
    const tuple = parseCuePoint(elem)
 * @param {import('./EbmlParser').EbmlElement} infoElement

  }
 *
/**
      SeverityCritical,
    }
const TIMECODE_SCALE_ID = 0x2ad7b1
import shaka from 'shaka-player'
const EBML_ID = 0x1a45dfa3
    initSegmentReference,
 */
 * @returns {shaka.media.SegmentReference[]}
        () => uris,
// - General changes such as removing Closure compiler specific stuff
  const unscaledTime = cueTimeElement.getUint()

          initSegmentReference,
    break
 * @param {BufferSource} initData

  initData,
      ShakaError.Code.WEBM_CUE_TIME_ELEMENT_MISSING
  // By default it's assumed that [T] == [milliseconds].
        appendWindowStart,
  const parser = cuesElement.createParser()

        throw new Error('Assertion failure: last offset cannot be null')
const CUE_TIME_ID = 0xb3
  const parser = cuePointElement.createParser()
    )
    console.warn('[parseWebmSegmentIndex] Not a CueTrackPositions element.')

 * Parses a WebM container to get the segment's offset, timecode scale, and
  let durationScale = null
    } else if (elem.id === DURATION_ID) {

  if (cueTrackPositionsElement.id !== CUE_TRACK_POSITIONS_ID) {
      SeverityCritical,
 * @param {shaka.media.InitSegmentReference} initSegmentReference
const ShakaError = shaka.util.Error
 * @see http://www.matroska.org/technical/specs/index.html
          appendWindowEnd
  }
 *   scale in seconds and duration in seconds.
  // Find the Info element.
  }
  }
  const cueTimeElement = parser.parseElement()
 * @param {number} segmentOffset

      )
    timestampOffset,

function parseWebmContainer(initData) {
  }
// - Rewritten to use functions instead of a class
 * @param {number} appendWindowEnd
  }
  const ebmlElement = parser.parseElement()
    )
// Adapted for use in FreeTube:
  const parser = new EbmlParser(initData)
      CategoryMedia,
) {

  timecodeScale,
      CategoryMedia,
  // This value is used as the initial offset to the first referenced segment.

  let lastTime = null
    throw new ShakaError(
  const references = []
    }
 * @returns {{timecodeScale: number, duration: number}} The segment's timecode
  if (ebmlElement.id !== EBML_ID) {

      SeverityCritical,
 */
      CategoryMedia,


        /* startByte= */ lastOffset, /* endByte= */ null,
 * @param {number} timestampOffset
 *   referenced segment's offset in bytes, relative to a WebM Segment
      )
  }
 * @param {number} appendWindowStart
function parseCues(
    relativeOffset = elem.getUint()
        appendWindowEnd
  if (segmentElement.id !== SEGMENT_ID) {
  segmentOffset,
        initSegmentReference,
  // Parse CueTrackPositions element.
  if (cuesElement.id !== CUES_ID) {
  // skip its contents.
    appendWindowStart,
 * duration.
 * Parses a WebM CuePointElement to get an "unadjusted" segment reference.
  if (lastTime != null) {
          timestampOffset,
    infoElement = elem
 * @param {import('./EbmlParser').EbmlElement} segmentElement
  }
      }
) {
    }
 * @see http://www.webmproject.org/docs/container/
  while (parser.hasMoreData()) {
 * Parses a WebM Info element to get the segment's timecode scale and
  const durationSeconds = durationScale * timecodeScale
// - The segment URLs receive the start time and segment number
      ShakaError.Code.WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING
  const parser = segmentElement.createParser()
    if (elem.id !== CUE_CLUSTER_POSITION) {
    appendWindowEnd
  if (!infoElement) {
    // Subtract the presentation time offset from the unscaled time

 * Parses a WebM Info element to get the segment's timecode scale and
        timestampOffset,
  appendWindowStart,
      throw new Error('Assertion failure: last offset cannot be null')
    uri,
 * @param {string} uri The location of the WebM file that contains the segments.

  return /** @__NOINLINE__ */ parseInfo(infoElement)

    }
  }
  const timecodeScale = timecodeScaleNanoseconds / 1000000000
 */
  // Check that the WebM container data starts with the EBML header, but
 *   and the duration in seconds.

    console.warn('[parseWebmSegmentIndex] Not a CueTime element.')

  const segmentElement = parser.parseElement()
const CUE_CLUSTER_POSITION = 0xf1

  const parser = new EbmlParser(cuesData)
 * Parses SegmentReferences from a WebM container.
  let sq = 1
      ShakaError.Code.WEBM_CUES_ELEMENT_MISSING
const CUE_TRACK_POSITIONS_ID = 0xb7
const CUE_POINT_ID = 0xbb

        )
const INFO_ID = 0x1549a966
 * @param {shaka.media.InitSegmentReference} initSegmentReference


  return { unscaledTime: unscaledTime, relativeOffset: relativeOffset }
      new shaka.media.SegmentReference(
  }
        lastTime + timestampOffset,
  // The timecode scale factor in units of [nanoseconds / T], where [T] are
  let timecodeScaleNanoseconds = 1000000
  const cueTrackPositionsElement = parser.parseElement()
 * @param {import('./EbmlParser').EbmlElement} cuesElement
      durationScale = elem.getFloat()

    const currentTime = timecodeScale * tuple.unscaledTime
      continue
          appendWindowStart,
      references.push(
    throw new ShakaError(
    const currentOffset = segmentOffset + tuple.relativeOffset



  uri,
/**

 *   segment's start time in units of [T] (see parseInfo_()), and the
    break
    if (elem.id !== CUE_POINT_ID) {
  cuesData,
    lastOffset = currentOffset
  let lastOffset = null
const CUES_ID = 0x1c53bb6b
    throw new ShakaError(
      SeverityCritical,

  while (parser.hasMoreData()) {
    throw new ShakaError(
/**
      ShakaError.Code.WEBM_DURATION_ELEMENT_MISSING

 * @param {number} timecodeScale
      continue
 * duration.
}
  return { timecodeScale: timecodeScale, duration: durationSeconds }
 * Parses a WebM CuesElement.
          () => uris,
    if (elem.id === TIMECODE_SCALE_ID) {
const SeverityCritical = ShakaError.Severity.CRITICAL
      CategoryMedia,
  uri,
    tuple.timecodeScale,
    cuesElement,
    references.push(
    )
  return references
  let infoElement = null
function parseSegment(segmentElement) {
    )
      ShakaError.Code.WEBM_SEGMENT_ELEMENT_MISSING
    }
  }
 * @param {number} timestampOffset
const CategoryMedia = ShakaError.Category.MEDIA
}
  if (cueTimeElement.id !== CUE_TIME_ID) {

  appendWindowEnd
    console.error('[parseWebmSegmentIndex] Not an Info element.')

const SEGMENT_ID = 0x18538067
    console.error('[parseWebmSegmentIndex] Not a Cues element.')
 * @param {number} duration


 */
    throw new ShakaError(
}
          lastTime + timestampOffset,
    }
  while (parser.hasMoreData()) {
 * @param {import('./EbmlParser').EbmlElement} cuePointElement
 *   scale in seconds and duration in seconds.
 * @param {string} uri
    lastTime = currentTime
    )
      SeverityCritical,
  let relativeOffset = 0
 * @param {number} appendWindowStart
  timestampOffset,
  // the units used to express all other time values in the WebM container.
      continue
  // Parse the Segment element to get the segment info.
    )
  const cueTrackParser = cueTrackPositionsElement.createParser()
    tuple.segmentOffset,
    segmentOffset: segmentOffset,
/**
export function parseWebmSegmentIndex(
 * @returns {{unscaledTime: number, relativeOffset: number}} The referenced
 * duration.
}
        duration + timestampOffset,
 * @returns {{timecodeScale: number, duration: number}} The segment's timecode

  appendWindowStart,
  while (cueTrackParser.hasMoreData()) {
    tuple.duration,
      CategoryMedia,
    }
      timecodeScaleNanoseconds = elem.getUint()
  initSegmentReference,
  }
  }
      continue
    if (lastTime != null) {

  // The duration is stored in units of [T]
const DURATION_ID = 0x4489
 *   The segment's offset in bytes, the segment's timecode scale in seconds,
    const elem = parser.parseElement()
 * @returns {shaka.media.SegmentReference[]}
  )
  timestampOffset,
      if (process.env.NODE_ENV === 'development' && lastOffset == null) {
 */
 * @returns {{segmentOffset: number, timecodeScale: number, duration: number}}
  cuesElement,
  return {
  const segmentOffset = segmentElement.getOffset()
    duration: segmentInfo.duration,

  const cuesElement = parser.parseElement()
      CategoryMedia,
}
  const parser = infoElement.createParser()
    throw new ShakaError(
      ShakaError.Code.WEBM_INFO_ELEMENT_MISSING
