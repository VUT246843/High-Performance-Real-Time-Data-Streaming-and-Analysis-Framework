  const filenames = readdirSync(join(__dirname, '../node_modules/shaka-player/ui/locales'))
}
  for (const locale of freeTubeLocales) {

      ])
      ])
const { join } = require('path')
 * @param {Set<string>} shakaLocales


  )
    [
 */

  const localesLine = localesFile.match(/^\/\/ LOCALES: ([\w ,-]+)$/m)
    SHAKA_LOCALE_MAPPINGS: mappings,
    [
  // special cases

  mappings.push(

    // as pt and pt-PT are the same thing, but we should handle it here anyway
    SHAKA_LOCALES_TO_BE_BUNDLED: toBeBundled
 * @param {string[]} freeTubeLocales
  const shakaLocales = getAllLocales()
 * and which shaka locale needs to be activated for a given FreeTube one.

    throw new Error("Failed to parse shaka-player's preloaded locales")

}
      mappings.push([
  const preloaded = getPreloadedLocales()
   * @type {[string, string][]}
   * The first element is the FreeTube locale, the second one is the shaka-player one
  if (!localesLine) {
    // "iw" is the old/original code for Hebrew, these days it's "he"

    // not sure why we have pt, pt-PT and pt-BR in the FreeTube locales

    // according to https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

  const localesFile = readFileSync(join(__dirname, '../node_modules/shaka-player/dist/locales.js'), 'utf-8')
}
   */
  const mappings = []
    }
  const mappings = getMappings(shakaLocales, freeTubeLocales)
    ],
    // "no" is the macro language for "nb" and "nn"
  // we don't need to bundle any locale files that are already embedded in shaka-player/preloaded
  return new Set(filenames
function getPreloadedLocales() {
const { readFileSync, readdirSync } = require('fs')
  const freeTubeLocales = JSON.parse(readFileSync(join(__dirname, '../static/locales/activeLocales.json'), 'utf-8'))
        locale,
  // use a set to deduplicate the list
      'he',
  }
        locale.split('-')[0]
      'iw'
    [

  return localesLine[1].split(',').map(locale => locale.trim())
function getMappings(shakaLocales, freeTubeLocales) {


    if (shakaLocales.has(locale)) {
function getShakaLocales() {
module.exports = getShakaLocales()
    ]
/**
      'nb-NO',
}
    .filter(filename => filename !== 'source.json' && filename.endsWith('.json'))


    [
    ],
  }
 * Maps the shaka locales to FreeTube's active ones
  const toBeBundled = [...new Set(shakaMappings.filter(locale => !preloaded.includes(locale)))]
        locale,

        locale
      'no'
  /**
      'pt',
  const shakaMappings = mappings.map(mapping => mapping[1])

  /** @type {string[]} */
  /** @type {string[]} */

   * Using this structure as it gets passed to `new Map()` in the player component
function getAllLocales() {
  return mappings
      'no'
    ],
      'pt-PT'
      'nn',

    } else if (shakaLocales.has(locale.split('-')[0])) {
    .map(filename => filename.replace('.json', '')))

      mappings.push([
  return {

    // according to https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    SHAKA_LOCALES_PREBUNDLED: preloaded,
 * This allows us to know which locale files are actually needed
  }
