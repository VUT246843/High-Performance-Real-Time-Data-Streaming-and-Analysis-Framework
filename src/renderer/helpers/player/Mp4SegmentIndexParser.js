  sidxOffset,
  box.reader.skip(4)
  if (box.version === 0) {
    earliestPresentationTime = box.reader.readUint64()
  }
// Based on https://github.com/shaka-project/shaka-player/blob/main/lib/dash/mp4_segment_index_parser.js

// - The segment URLs receive the start time and segment number
// - General changes such as removing Closure compiler specific stuff
  box.parser.stop()
    box.reader.skip(4)


) {
 * @param {number} appendWindowEnd
        nativeStartTime + timestampOffset,
  timestampOffset,
export function parseMp4SegmentIndex(

  timestampOffset,
 * @param {number} appendWindowEnd

/**
      console.error('[parseMp4SegmentIndex] Hierarchical SIDXs are not supported.')

// Adapted for use in FreeTube:
  let unscaledStartTime = earliestPresentationTime
 *   the MP4 container.
        () => uris,
    // |chunk| is 1 bit for |referenceType|, and 31 bits for |referenceSize|.
 * @param {string} uri The location of the MP4 file that contains the segments.

    throw new ShakaError(
    // for |sapDelta|.
    )
  }
  initSegmentReference,
      SeverityCritical,
        appendWindowStart,
        initSegmentReference,
  }
    const uris = [`${uri}&startTimeMs=${Math.round((nativeStartTime + timestampOffset) * 1000)}&sq=${i + 1}`]
        nativeEndTime + timestampOffset,
  appendWindowStart,

    }
  // Subtract the presentation time offset
 * @param {shaka.media.InitSegmentReference} initSegmentReference

      CategoryMedia,
      )

  let references
    const referenceSize = chunk & 0x7FFFFFFF
const CategoryMedia = ShakaError.Category.MEDIA
  initSegmentReference,
  for (let i = 0; i < referenceCount; i++) {
      references = /** @__NOINLINE__ */ parseSIDX(
    )
  } else {
    const nativeEndTime =
 * @param {number} sidxOffset The SIDX's offset, in bytes, from the start of
    const subsegmentDuration = box.reader.readUint32()
 * @param {string} uri The location of the MP4 file that contains the segments.
 * @param {number} appendWindowStart

 */
// - Rewritten to use functions instead of a class

        box
    references.push(
  const references = []
  if (references) {
    earliestPresentationTime = box.reader.readUint32()

        startByte + referenceSize - 1,
    unscaledStartTime += subsegmentDuration
    // The media timestamps inside the container.
    })
    throw new Error('Assertion failure: SIDX is a full box and should have a valid version.')
    if (referenceType === 1) {
      ShakaError.Code.MP4_SIDX_WRONG_BOX_TYPE
  sidxOffset,
 * @param {number} sidxOffset
        timestampOffset,
    console.error('[parseMp4SegmentIndex] Invalid timescale.')
 * Parses SegmentReferences from an ISO BMFF SIDX structure.
}
    .fullBox('sidx', (box) => {
        ShakaError.Code.MP4_SIDX_TYPE_NOT_SUPPORTED
    const chunk = box.reader.readUint32()

        startByte,

  let startByte = sidxOffset + box.size + firstOffset
 * @returns {shaka.media.SegmentReference[]}
  appendWindowStart,
 * @param {BufferSource} sidxData The MP4's container's SIDX.
  }
const ShakaError = shaka.util.Error
  return references
      new shaka.media.SegmentReference(
        appendWindowEnd
  if (process.env.NODE_ENV === 'development' && box.version == null) {
  let firstOffset
 * Parse a SIDX box from the given reader.

    parser.parse(sidxData)
 * @param {number} timestampOffset
import shaka from 'shaka-player'
  if (timescale === 0) {
        timestampOffset,
    // We do not support this.
  // Skip reserved (16 bits).

 * @param {number} appendWindowStart
        appendWindowStart,
        uri,
      throw new ShakaError(

  // Parse the SIDX structure.
    const referenceType = (chunk & 0x80000000) >>> 31
  box
  } else {
  const parser = new shaka.util.Mp4Parser()
  }
 * @param {number} timestampOffset
        sidxOffset,
    // If |referenceType| is 1 then the reference is to another SIDX.
    const nativeStartTime = unscaledStartTime / timescale
    // Skipping 1 bit for |startsWithSap|, 3 bits for |sapType|, and 28 bits
      )
      (unscaledStartTime + subsegmentDuration) / timescale
        CategoryMedia,
  // Skip reference_ID (32 bits).
 */
}
  uri,

  }
      ShakaError.Code.MP4_SIDX_INVALID_TIMESCALE
 *
  appendWindowEnd
        SeverityCritical,
  const referenceCount = box.reader.readUint16()
    firstOffset = box.reader.readUint64()

  uri,
  appendWindowEnd,
        appendWindowEnd,
        initSegmentReference,

 * @param {shaka.media.InitSegmentReference} initSegmentReference
    startByte += referenceSize
  sidxData,
      SeverityCritical,
  box.reader.skip(2)
      CategoryMedia,

    console.error('[parseMp4SegmentIndex] Invalid box type, expected "sidx".')
  if (sidxData) {

      )
  let earliestPresentationTime
  // Add references.
 * @param {shaka.extern.ParsedBox} box
    )
 * @returns {shaka.media.SegmentReference[]}

function parseSIDX(
const SeverityCritical = ShakaError.Severity.CRITICAL

  const timescale = box.reader.readUint32()
    firstOffset = box.reader.readUint32()
) {
    throw new ShakaError(
    return references
/**
