    if (this.dataView_.byteLength > 8) {
  /**
  /**
  }
    }
    if (i === 0) {
 * @param {Uint8Array} vint The variable sized integer.
    return new EbmlParser(this.dataView_)
   * Parses an EBML element from the parser's current position, and advances
    if (vint.length > 7) {
    // parsing the beginning of some WebM container data, but our buffer does
      // If this has an unknown size, assume that it takes up the rest of the
  }

      const chunk = this.dataView_.getUint8(i)
    if (this.dataView_.byteLength === 4) {
    const firstByte = this.reader_.readUint8()
   * @param {DataView} dataView The DataView.
    const vint = this.parseVint_()

    const id = this.parseId_()

   * Interpret the element's data as an unsigned integer.
]
  [0x07, 0xff, 0xff, 0xff, 0xff, 0xff],
   *   1 byte  wide: 1xxx xxxx
    let value = 0

   */
   * For example:
      throw new Error('Assertion failure: Incorrect log2 value')
  // 0000 0001 | xxxx xxxx ...

      // data.
   * @param {BufferSource} data
    } else {
    }
      // significant bits of |vint|'s value. If |vint| is 8 bytes wide then
    // not contain the entire WebM container data.
    if (firstByte === 0) {
      )
    } else {
 * @returns {boolean} true if |vint| represents a dynamic size value,
    if (BufferUtils.equal(vint, new Uint8Array(dynamicSizeConst))) {

  /**
   */
  [0x3f, 0xff, 0xff],
    }
      ShakaError.Severity.CRITICAL,
  [0xff],
  }
  /**
function isDynamicSizeValue(vint) {
  getOffset() {
        ShakaError.Category.MEDIA,

      (this.dataView_.getUint8(0) & 0xe0)) {
   */
        ShakaError.Severity.CRITICAL,
}
    this.reader_ = new shaka.util.DataViewReader(this.dataView_, shaka.util.DataViewReader.Endianness.BIG_ENDIAN)
  for (const dynamicSizeConst of DYNAMIC_SIZES) {

    return id
   * Parses an EBML ID from the parser's current position, and advances the
  }
  /**
// Adapted for use in FreeTube:
  }
  for (let i = 0; i < vint.length; i++) {
        ShakaError.Code.EBML_OVERFLOW
      // Note that we cannot use << since |value| may exceed 32 bits.
   * (32 bits or 64 bits). 80-bit floating point numbers are not supported.
const BufferUtils = shaka.util.BufferUtils

   * Gets the element's offset from the beginning of the buffer.
   * the parser.
  }
    }
    const index = Math.floor(Math.log2(firstByte))
  // If |vint| is 8 bytes wide then we must ensure that it does not have more
  [0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]
      // Mask out the first few bits of |vint|'s first byte to get the most
      )
    }
  hasMoreData() {
    }
    for (let i = 0; i < this.dataView_.byteLength; i++) {
    if (/** @__NOINLINE__ */isDynamicSizeValue(vint)) {
   */
    } else if (this.dataView_.byteLength === 8) {
    const vint = this.parseVint_()
  createParser() {
   */
  [0x0f, 0xff, 0xff, 0xff, 0xff],
 * Gets the value of a variable sized integer.
  constructor(data) {

      this.reader_.getPosition() + size <= this.dataView_.byteLength
  getFloat() {
  }
        : this.dataView_.byteLength - this.reader_.getPosition()
   * @param {number} id The ID.
  /**
    let size


      throw new ShakaError(
  let value = 0
   * @returns {boolean} True if the parser has more data, false otherwise.

        ShakaError.Category.MEDIA,
    throw new ShakaError(
   */
 *   false otherwise.
      )
      value = (256 * value) + chunk
        ShakaError.Severity.CRITICAL,
   * @private
   * @returns {Uint8Array} The variable sized integer.
  }
}
   */
}
   *   3 bytes wide: 001x xxxx xxxx xxxx xxxx xxxx

   * @returns {number}
  parseVint_() {
// Based on https://github.com/shaka-project/shaka-player/blob/main/lib/dash/ebml_parser.js
   * Interpret the element's data as a list of sub-elements.
      return this.dataView_.getFloat64(0)

    }
 * Checks if the given variable sized integer represents a dynamic size value.
const ShakaError = shaka.util.Error
      id = (256 * id) + b
/**
      throw new ShakaError(
   * @returns {number} The EBML ID.
  /**
 *    7-bit value: 1xxx xxxx

    // Determine the index of the highest bit set.
    /** @private {DataView} */
    this.id = id
import shaka from 'shaka-player'
    const item = vint[i]

  parseId_() {
  }
    }

  constructor(id, dataView) {
        ShakaError.Category.MEDIA,
    const dataView = BufferUtils.toDataView(this.dataView_, this.reader_.getPosition(), elementSize)
   */
      ShakaError.Category.MEDIA,
    return value
   * Interpret the element's data as a floating point number
   * @see http://matroska.org/technical/specs/rfc/index.html



  /**
  // than 53 meaningful bits. For example, assume |vint| is 8 bytes wide,
      )
   * advances the parser.
    let id = 0
function getVintValue(vint) {



 *   14-bit value: 01xx xxxx xxxx xxxx
   * @private
    this.dataView_ = dataView

    /** @private */
      return this.dataView_.getFloat32(0)
    this.reader_.skip(numBytes - 1)

 */
  /**

        ShakaError.Category.MEDIA,
    // parsing a "partial element". This may occur if for example we are
      const mask = 0x1 << (8 - vint.length)
      size = this.dataView_.byteLength - this.reader_.getPosition()
class EbmlElement {
  parseElement() {
    /** @private */
   */

/**
  if ((vint.length === 8) && (vint[1] & 0xe0)) {
    const numBytes = 8 - index
    } else {
  }
   * parser.
    return this.dataView_.byteOffset
 * For example, the x's below are part of the vint's value.
  return value
  }
  // Thus, the first 3 bits following the first byte of |vint| must be 0.
        ShakaError.Severity.CRITICAL,

   */
      )
    )
    /** @type {number} */

  [0x7f, 0xff],
   * @returns {number}
      return true
      value = (256 * value) + item
   * @returns {number}
    for (const /* byte */ b of vint) {
    if (process.env.NODE_ENV === 'development' && (numBytes > 8 || numBytes < 1)) {
    return BufferUtils.toUint8(this.dataView_, position, numBytes)
        ShakaError.Severity.CRITICAL,
 *   21-bit value: 001x xxxx xxxx xxxx xxxx xxxx
// - General changes such as removing Closure compiler specific stuff
  [0x1f, 0xff, 0xff, 0xff],
const DYNAMIC_SIZES = [

        ShakaError.Code.JS_INTEGER_OVERFLOW
    const elementSize =
/** @typedef {EbmlElement} EbmlElement */
      throw new ShakaError(
    this.dataView_ = BufferUtils.toDataView(data)
    }
   * Parses a variable sized integer from the parser's current position, and
  }
      value = item & (mask - 1)
 * @param {Uint8Array} vint The variable sized integer.
    if ((this.dataView_.byteLength === 8) &&
 * @returns {number} The value of the variable sized integer.
}
        ShakaError.Code.EBML_OVERFLOW
        ? size
    return this.reader_.hasMoreData()
    }
      size = /** @__NOINLINE__ */ getVintValue(vint)
  }
        ShakaError.Severity.CRITICAL,
    return new EbmlElement(id, dataView)
    const position = this.reader_.getPosition()
      // Note that we cannot use << since |value| may exceed 32 bits.
      ShakaError.Code.JS_INTEGER_OVERFLOW


    }
    // Parse the element's size.
  return false
  [0x03, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
      // |value| will be set to 0.
    this.reader_.skip(elementSize)
   * @returns {EbmlParser} A parser over the sub-elements.



   * @returns {EbmlElement} The EBML element.
// Lets us use the type in ./WebmSegmentIndexParser.js without actually exporting the class
        ShakaError.Category.MEDIA,
  /**
  // so it has the following structure,
    // Note that if the element's size is larger than the buffer then we are
      throw new ShakaError(
    // Ensure we have at most 53 meaningful bits.
 */
   *   2 bytes wide: 01xx xxxx xxxx xxxx
export class EbmlParser {
      throw new ShakaError(
  getUint() {
        ShakaError.Code.EBML_OVERFLOW
        ShakaError.Code.EBML_BAD_FLOATING_POINT_SIZE
