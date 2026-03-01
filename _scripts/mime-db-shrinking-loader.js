
    'image/gif': { extensions: original['image/gif'].extensions },
 */
 * @param {string} source
 * Which results in quite a significant reduction in file size.
    'image/png': { extensions: original['image/png'].extensions },
  // Only the extensions field is needed, see: https://github.com/kevva/ext-list/blob/v2.2.2/index.js
module.exports = function (source) {
    'image/apng': { extensions: original['image/apng'].extensions },
    'image/jpeg': { extensions: original['image/jpeg'].extensions },
 * As we only activate save image and save as image features, we can remove all other mimetypes,
    'image/avif': { extensions: original['image/avif'].extensions },
  })
  return JSON.stringify({

  const original = JSON.parse(source)
    'image/webp': { extensions: original['image/webp'].extensions }
 * as they will never get used.
/**
}
    'image/svg+xml': { extensions: original['image/svg+xml'].extensions },
 * electron-context-menu only needs mime-db for its save as feature.
