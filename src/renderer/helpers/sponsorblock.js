    return json[videoId] ?? undefined
    if (response.ok) {

 *   actionType: string,
 * }[]>}
      return undefined
  } catch (error) {
export async function sponsorBlockSkipSegments(videoId, categories) {
 *     number,
 *     number
export async function deArrowData(videoId) {
  try {
    requestUrl += `&time=${timestamp}`
    // 404 means that there are no segments registered for the video

 * @returns {Promise<{
    throw error
    throw error
 *   locked: 1|0,

  const videoIdHashPrefix = await getVideoHash(videoId)
    return undefined
    const json = await response.json()
  }

    throw error
  }
    const response = await fetch(requestUrl)
 *   description: string,
  }
  let requestUrl = `${store.getters.getDeArrowThumbnailGeneratorUrl}/api/v1/getThumbnail?videoID=` + videoId
    const response = await fetch(requestUrl)
 * @typedef {'sponsor' | 'selfpromo' | 'interaction' | 'intro' | 'outro' | 'preview' | 'music_offtopic' | 'filler'} SponsorBlockCategory
 *   UUID: string,
    console.error(json)
 * @param {SponsorBlockCategory[]} categories
/**
  const hashBuffer = await crypto.subtle.digest('SHA-256', videoIdBuffer)

  try {
 * @param {string} videoId
      .filter((result) => result.videoID === videoId)
      return []
    // this usually means that a thumbnail was not generated on the server yet so we'll log the error but otherwise ignore it.
 */
  return hashArray[0].toString(16).padStart(2, '0') +
    }
    // 204 means that there are no thumbnails found for the video
}
    if (response.status === 204) {
  try {
      .flatMap((result) => result.segments)
      throw new Error(await response.text())
    console.error('failed to fetch DeArrow data', requestUrl, error)


/**

      return response.url
    hashArray[1].toString(16).padStart(2, '0')
 *   category: SponsorBlockCategory,
    }
    if (response.status === 404) {
}
  const requestUrl = `${store.getters.getSponsorBlockUrl}/api/skipSegments/${videoIdHashPrefix}?categories=${JSON.stringify(categories)}`
  const hashArray = new Uint8Array(hashBuffer)
    }

  const videoIdBuffer = new TextEncoder().encode(videoId)
  if (timestamp != null) {
  const requestUrl = `${store.getters.getSponsorBlockUrl}/api/branding/${videoIdHashPrefix}`
    const json = await response.json()
    }
import store from '../store/index'
    const json = await response.json()
    console.error('failed to fetch DeArrow data', requestUrl, error)
 *   votes: number
async function getVideoHash(videoId) {
}


  } catch (error) {
    if (!response.ok) {

    console.error('failed to fetch SponsorBlock segments', requestUrl, error)
 *   videoDuration: number,


 *   segment: [
      return undefined

    if (response.status === 404) {


  }
  } catch (error) {

  const videoIdHashPrefix = await getVideoHash(videoId)
    // 404 means that there are no segments registered for the video
    const response = await fetch(requestUrl)
}
    return json
 *   ],
export async function deArrowThumbnail(videoId, timestamp) {
 */
    }
    // Sometimes the sponsor block server goes down or returns other errors
