        // If we ever get a better flag, use it here instead.

  if (store.getters.getOnlyShowLatestFromChannel) {
    const promises = []


        // https://docs.invidious.io/api/common_types/#videoobject
 * @param {any[]} videos
    isRSS: true

  videoList.sort((a, b) => {
        return item.viewCount !== '0'
          authors.set(video.authorId, currentVideos + 1)

  }
      return (!item.liveNow && !item.isUpcoming)
    const xmlDom = new DOMParser().parseFromString(rssString, 'application/xml')

        item.premiereTimestamp == null
  // doesn't need to be asynchronous, but doing it allows us to do the relatively slow DOM querying in parallel
  if (store.getters.getHideLiveStreams) {
  if (store.getters.getHideUpcomingPremieres) {
 * @param {string} channelName
        // `premiereTimestamp` only available on premiered videos
      name: channelName,
 * Filtering and sort based on user preferences
    type: 'video',
 * @param {Element} entry
/**

 * @param {string} channelId
/**
}
    return b.published - a.published
    return {
    const entries = xmlDom.querySelectorAll('entry')
      viewCount = parsedViewCount
 */


  return {
        // data without sending an additional request.
      // Observed for premieres in Local API Subscriptions.

  let viewCount = null
    videoId: entry.getElementsByTagName('yt:videoId')[0].textContent,
        authors.set(video.authorId, 1)

 * @param {string} channelId
      if (!authors.has(video.authorId)) {
}
    })

  }
    }
}
    })
      return (item.premiereDate == null ||
  }
    }
    })
    for (const entry of entries) {
  } catch {
      return false
import store from '../store/index'
  return videoList

    const parsedViewCount = parseInt(rawViewCount)
        const currentVideos = authors.get(video.authorId)
    videoList = videoList.filter(item => {
        if (currentVideos < store.getters.getOnlyShowLatestFromChannelNumber) {
        return true
    viewCount,
      if (!video.authorId) {
        // Invidious API
    published: Date.parse(entry.querySelector('published').textContent),
  // if the first one incidentally failed one of the above checks
 * @param {string} rssString
      videos: await Promise.all(promises)
  let videoList = videos
      } else {
    videoList = videoList.filter(item => {

export function updateVideoListAfterProcessing(videos) {
  if (rawViewCount) {
/**
    lengthSeconds: '0:00',
      promises.push(parseRSSEntry(entry, channelId, channelName))
 */
 */

    }
        return true



      }
    const channelName = xmlDom.querySelector('author > name').textContent
  }
      }
  }
export async function parseYouTubeRSSFeed(rssString, channelId) {
    if (!isNaN(parsedViewCount)) {
async function parseRSSEntry(entry, channelId, channelName) {
    // querySelector doesn't support xml namespaces so we have to use getElementsByTagName here
  }
      if (item.isRSS) {
    author: channelName,
  try {
  })
    videoList = videoList.filter((video) => {
      videos: []
  // doesn't need to be asynchronous, but doing it allows us to do the relatively slow DOM querying in parallel
    title: entry.querySelector('title').textContent,
        // viewCount is our only method of detecting premieres in RSS
      }
    return {

    }
        }
  // ordered last to show first eligible video from channel
    const authors = new Map()
          return true
    authorId: channelId,
      )
  const rawViewCount = entry.getElementsByTagName('media:statistics')[0]?.getAttribute('views')
