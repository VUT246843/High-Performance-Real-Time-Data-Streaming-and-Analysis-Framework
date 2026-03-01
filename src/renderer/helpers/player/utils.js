      // doing it like this, results in a "clean" object where everything is immediately visible

            }
    const id = `${track.label}_${track.language}_${track.channelsCount}_${track.spatialAudio}`

 */
      // Invidious gives the first audio stream the main role and then the rest of them the alternate role

      return i18n.global.t('Video.Sponsor Block category.sponsor')
      const representation = audioAdaptationSet.children
    case 'interaction':
import { deepCopy } from '../utils'
}
    const difference = Math.abs(variant.audioBandwidth - bandwidthToMatch)

    return accumulator + segment.videoDuration
export async function getSponsorBlockSegments(videoId, categories) {
 * - Tag HDR video streams (Invidious puts all video streams in the same adaptation set,
        }
  const mappedSegments = segments.map(({ category, segment: [startTime, endTime], UUID }) => {
      error.data
 *   isAutotranslated?: boolean
                  break
 *   mimeType: string,
    }
    if (!knownTracks.has(id) || track.active) {
                case 'original':
                  labelParts.push('original')
            const lang = xtags.find(xtag => xtag.startsWith('lang='))?.replace('lang=', '')
      console.error(`Unknown translation for SponsorBlock category ${category}`)
 * @param {shaka.util.Error} error
      startTime,
                default:
        } else if (aCode[1] === userLocale[1]) {
 * - Adds roles and labels when possible to add support for multiple audio tracks
export function deduplicateAudioTracks(tracks) {
}
 * @param {string} context
    const aCode = captionA.language.split('-') // ex. [en,US] or [en]
    }


        }

    // sort alphabetically
          }

    }
  }
      segments: [],
 * - Separate DRC (Stable Volume) from their original counterparts
  })
      endTime
    }
    if (Array.isArray(audioAdaptationSet.children)) {
        // prefer caption a: b does not match user's language
    const bIsAutotranslated = !!captionB.isAutotranslated
      return i18n.global.t('Video.Sponsor Block category.self-promotion')
 *   label: string,

          // prefer caption a: no country code is better than wrong country code
    return {

    case 'sponsor':
}
  return knownTracks
  return captions.sort((captionA, captionB) => {
                  break

export function translateSponsorBlockCategory(category) {
/**
      uuid: UUID,
                  labelParts.push('alternative')
  }
/**
                case 'secondary':
}
 */
    )

  }
      return category
import { sponsorBlockSkipSegments } from '../sponsorblock'

 * - Removes bogus roles and labels
 */

 * Things this function does not do:
 * @param {string} videoId
    // we need to remove those labels, so that they don't get treated as multiple audio tracks
          // prefer caption a: b is auto-generated captions
          // prefer caption b: no country code is better than wrong country code
              let role = ''
                children: [],
/**
    case 'music_offtopic':
          return -1
    } else if (bCode[0] === userLocale[0]) {
    if (aCode[0] === userLocale[0]) { // caption a has same language as user's locale

      for (const periodChild of period.children) {
      if (roleIndex !== -1) {

            if (lang) {
      return i18n.global.t('Video.Sponsor Block category.filler')
  const currentLocale = i18n.global.locale
          // prefer caption b: caption b has same county code as user's locale


    `Severity: ${severityText} (${error.severity})\n` +
export function repairInvidiousManifest(periods) {
      // regardless of which one is actually the main track

  console.error(...args)
    default:
          // prefer caption b: a is auto-translated captions
                  labelParts.push('descriptive')
              audioAdaptationSet.attributes.label = labelParts.join(' ')
    averageDuration
    case 'intro':
          return 1
        } else if (aCode[1] === undefined) {
  const languageNames = new Intl.DisplayNames('en-US', { type: 'language', languageDisplay: 'standard' })
    const aIsAutotranslated = !!captionA.isAutotranslated
        if (typeof periodChild !== 'string' && periodChild.tagName === 'AdaptationSet' && periodChild.attributes.mimeType?.startsWith('audio/')) {
  for (const audioAdaptationSet of audioAdaptationSets) {
      return i18n.global.t('Video.Sponsor Block category.interaction')
 * @param {number} bandwidthToMatch
    case 'selfpromo':
  const severityText = Object.keys(Severity).find((/** @type {keyof Severity} */ key) => Severity[key] === error.severity)
  /** @type {keyof Category} */
                  role = 'main'
            if (audioContent) {
    if (Array.isArray(period.children)) {
  for (const variant of variants) {
import shaka from 'shaka-player'
                  break
            const audioContent = xtags.find(xtag => xtag.startsWith('acont='))?.replace('acont=', '')
    `Code: ${codeText} (${error.code})\n` +
          return 1
      '\n\nshaka-player Data:',
      '\n\nFreeTube data:',
 * @param {shaka.extern.xml.Node[]} periods
  let closestVariant
  const collator = new Intl.Collator([currentLocale, 'en'])
                  role = 'dub'
          // prefer caption a: caption a has same county code as user's locale


  const segments = await sponsorBlockSkipSegments(videoId, categories)
  return {
  const args = [message]
        return -1
import i18n from '../../i18n/index'
      if (representation && Array.isArray(representation.children)) {
      /** @type {shaka.extern.xml.Node | undefined} */
                case 'dubbed':
    case 'outro':
      knownTracks.set(id, track)
 */
    `Category: ${categoryText} (${error.category})\n` +
              audioAdaptationSet.children.push({
          if (url.searchParams.has('xtags')) {
}

 *   url: string,
  /** @type {*[]} */
      delete audioAdaptationSet.attributes.label
            const labelParts = []
  }
        .find((child) => typeof child !== 'string' && child.tagName === 'Representation')
    args.push(
                  break
  if (details) {


          .find((child) => typeof child !== 'string' && child.tagName === 'BaseURL')
 * and sorts the remaining ones alphabetically.
/**
    `Video ID: "${videoId}"\n` +
      // Extract the language and audio content type from the URL if available
/**
 * @param {SponsorBlockCategory[]} categories
      if (bCode[0] === userLocale[0]) { // caption b has same language as user's locale
      }
            if (labelParts.length > 0) {
 * @param {object?} details

          return 1
          const url = new URL(baseUrl.replaceAll('&amp;', '&'))
        }
                  role = 'alternate'
  }
              audioAdaptationSet.attributes.lang = lang
      return i18n.global.t('Video.Sponsor Block category.music offtopic')
 * we have to use Invidious' DASH manifest, instead of generating our own one.
    }

    if (audioAdaptationSet.attributes.label) {

  switch (category) {
                  break
  const message =
                  labelParts.push('secondary')
      // and add the language, role and label to the adaption set
  // match YouTube's local API response with English
                },
          return -1
      // as that requires you click the 3 dots for every property in the logged object to see their values

              switch (audioContent) {
    if (difference < closestAudioBandwithDifference) {
export function findMostSimilarAudioBandwidth(variants, bandwidthToMatch) {
        if (baseUrl) {

      // prefer caption b: a does not match user's language
  let closestAudioBandwithDifference = Infinity

  })
    }
  mappedSegments.sort((a, b) => a.startTime - b.startTime)

    )
 * This function cleans it up, so that we can use it.

      return i18n.global.t('Video.Sponsor Block category.recap')


 * to tag HDR and SDR streams we would have to separate them out into multiple adaptation sets)
 * @param {string} videoId
                tagName: 'Role',
 *

        audioAdaptationSet.children.splice(roleIndex, 1)
    const bName = captionB.label
    case 'recap':
  return closestVariant

/**
  }
      closestVariant = variant
                  value: role
      const roleIndex = audioAdaptationSet.children.findIndex((adaptationSetChild) => {
        const baseUrl = representation.children
 *   language: string,
}

 */
  for (const track of tracks) {
      }
  /** @type {Map<string, shaka.extern.AudioTrack>} */
      })
                  role = 'alternate'
  }
  const { Severity, Category, Code } = shaka.util.Error
        } else if (bCode[1] === userLocale[1]) {
    `Stack trace:\n${error.stack}`
 *
            }
    case 'filler':
      typeof details === 'object' ? deepCopy(details) : details
}
 * Moves the captions that are the most similar to the display language to the top
    // Invidious adds a label to every audio stream with it's bitrate
 * }[]} captions
      averageDuration: 0
    `FreeTube player context: "${context}"\n\n` +
  /** @type {keyof Code} */
    }
      }
      return i18n.global.t('Video.Sponsor Block category.intro')
 * - Extracts the languages from the audio URLs if available and adds it to the adapation sets
      // use deepCopy to get rid of Vue's proxying,
 * @param {SponsorBlockCategory} category
 * @param {shaka.extern.TrackList} variants
export function logShakaError(error, context, videoId, details) {
  const categoryText = Object.keys(Category).find((/** @type {keyof Category} */ key) => Category[key] === error.category)

 * When the build doesn't support the local API
      return 1
          ?.children[0]

  }

 */
  const codeText = Object.keys(Code).find((/** @type {keyof Code} */ key) => Code[key] === error.code)
      return i18n.global.t('Video.Sponsor Block category.outro')
        } else if (aIsAutotranslated) {
            }

  for (const period of periods) {
 * @param {shaka.extern.AudioTrack[]} tracks
              labelParts.push(languageNames.of(lang))
  const audioAdaptationSets = []
                case 'dubbed-auto':
/**
        return typeof adaptationSetChild !== 'string' && adaptationSetChild.tagName === 'Role'
  if (error.data && error.data.length > 0) {

        } else if (bCode[1] === undefined) {
      }
          return -1
      closestAudioBandwithDifference = difference
  /** @type {shaka.extern.xml.Node[]} */
          return -1
        } else if (aName.includes('auto')) {
 * Here is a list of things this function does:
                  role = 'description'
    const bCode = captionB.language.split('-')
    return {
    }
  const userLocale = currentLocale.split('-') // ex. [en,US]
          audioAdaptationSets.push(periodChild)
  const knownTracks = new Map()

  /** @type {keyof Severity} */
      category,
export function sortCaptions(captions) {
    const aName = captionA.label // ex: english (auto-generated)
 */
    args.push(

  }
              }
  // shaka's error type also has a message property but that is apparently only available in uncompiled mode
    segments: mappedSegments,

              })
    return collator.compare(aName, bName)
  const averageDuration = segments.reduce((accumulator, segment) => {
          // prefer caption a: b is auto-translated captions

          return 1
                parent: audioAdaptationSet
  }, 0) / segments.length
                attributes: {
        if (bName.includes('auto')) {
          // prefer caption b: a is auto-generated captions
        /** @type {string | undefined} */
/** @typedef {import('../sponsorblock').SponsorBlockCategory} SponsorBlockCategory */
  if (segments.length === 0) {
      } else {
            const xtags = url.searchParams.get('xtags').split(':')

    'Player Error (category and code explainations here: https://shaka-player-demo.appspot.com/docs/api/shaka.util.Error.html)\n' +
                  schemeIdUri: 'urn:mpeg:dash:role:2011',
                case 'descriptive':

        } else if (bIsAutotranslated) {
 * @param {{
