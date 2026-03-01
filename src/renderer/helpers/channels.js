
  }
/**
    const channel = await findChannelById(id, backendOptions)
      return await getLocalChannel(id)
        preferredName: channel.author,
      }
      if (channel.alert) return { invalidId: true }

 * @param {string} id
 * }} backendOptions
 *   fallback: boolean,
      }
 * @param {{

      if (backendOptions.preference === 'invidious') {
import { getLocalChannel, parseLocalChannelHeader } from './api/local'

      return { invalid: true }
/**
 */
 * Check whether Id provided might be a YouTube Id
    }
      }
      return await invidiousGetChannelInfo(id)
 *   fallback: boolean,
 * }} backendOptions
  try {
    }
        icon: channel.authorThumbnails[0].url
import { invidiousGetChannelInfo } from './api/invidious'
 */
    if (process.env.SUPPORTS_LOCAL_API && backendOptions.fallback) {
    }
      const { name, thumbnailUrl } = parseLocalChannelHeader(channel)

 *   invalid: boolean,
}
  } catch (err) {
}
        iconHref: `/channel/${id}`
 * @returns {boolean}
  return /^UC[\w-]{22}$/.test(id)
 *   preference: string,
  } catch (err) {
 */
 * @param {string} id
  if (!checkYoutubeChannelId(id)) return { invalidId: true }
    } else {
 * @param {{
        preferredName: name,
 *   preference: string,
      if (channel.invalid) return { invalidId: true }
    } else {
export async function findChannelTagInfo(id, backendOptions) {
        return await getLocalChannel(id)
export function checkYoutubeChannelId(id) {
 * @returns {Promise<{icon: string, iconHref: string, preferredName: string} | { invalidId: boolean }>}
/**
    // don't bother with fallback if channel doesn't exist
    return { preferredName: '', icon: '', iconHref: '', err }
    console.error(err)
}
    if (!process.env.SUPPORTS_LOCAL_API || backendOptions.preference === 'invidious') {
 * @param {string} id
    if (err.message && err.message === 'This channel does not exist.') {
      return {
    } else {
    }
      throw err
async function findChannelById(id, backendOptions) {
      return {
      if (backendOptions.preference === 'local') {
      }
        return await invidiousGetChannelInfo(id)
  }
    if (!process.env.SUPPORTS_LOCAL_API || backendOptions.preference === 'invidious') {
  try {
        icon: thumbnailUrl,
