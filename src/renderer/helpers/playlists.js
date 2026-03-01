    sortOrder === SORT_BY_VALUES.AuthorDescending ||
 * @param {any} videoData
  switch (sortOrder) {
      return 0
    videoData.playlistItemId = generateRandomUniqueId()
    const second = !reversed ? b : a

export function videoDurationWithFallback(video) {
    sortOrder === SORT_BY_VALUES.VideoDurationAscending ||
      return collator.compare(b.title, a.title)
  return playlistItems.toSorted((a, b) => {
  return typeof published === 'number' && !isNaN(published) && published !== 0 ? published : 0
}
      return collator.compare(a.title, b.title)
  AuthorAscending: 'author_ascending',

export function getSortedPlaylistItems(playlistItems, sortOrder, locale, reversed = false) {
      return collator.compare(b.author, a.author)
  PublishedOldest: 'published_ascending',
  })
      return videoDurationWithFallback(a) - videoDurationWithFallback(b)
  return 0
      return publishedWithFallback(a) - publishedWithFallback(b)
    const first = !reversed ? a : b
  if (sortOrder === SORT_BY_VALUES.Custom) {
    videoData.type = 'video'
      return a.timeAdded - b.timeAdded

    case SORT_BY_VALUES.PublishedOldest:
}
    case SORT_BY_VALUES.VideoDurationAscending: {
export const SORT_BY_VALUES = {
/**
  if (videoData.playlistItemId == null) {
  }
  VideoDurationAscending: 'video_duration_ascending',

}
function compareTwoPlaylistItems(a, b, sortOrder, collator) {
  // Fallback
export function processToBeAddedPlaylistVideo(videoData) {

  ) {
  if (videoData.timeAdded == null) {
    case SORT_BY_VALUES.VideoTitleDescending:
    sortOrder === SORT_BY_VALUES.AuthorAscending ||

  if (videoData.type == null) {
    sortOrder === SORT_BY_VALUES.VideoTitleAscending ||
  : () => `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`
  }
      return collator.compare(a.author, b.author)
    case SORT_BY_VALUES.VideoTitleAscending:
  const published = video.published
    sortOrder === SORT_BY_VALUES.VideoDurationDescending
  if (

  AuthorDescending: 'author_descending',
  }
  ? crypto.randomUUID.bind(crypto)


      return publishedWithFallback(b) - publishedWithFallback(a)

function publishedWithFallback(video) {

      console.error(`Unknown sortOrder: ${sortOrder}`)
    case SORT_BY_VALUES.PublishedNewest:
}
    case SORT_BY_VALUES.DateAddedNewest:
    }
  let collator

    case SORT_BY_VALUES.AuthorDescending:
  return !(isNaN(video.lengthSeconds) || video.lengthSeconds === 0)
    default:
}
  }
  VideoDurationDescending: 'video_duration_descending',
  Custom: 'custom'

  }
  VideoTitleDescending: 'video_title_descending',
    sortOrder === SORT_BY_VALUES.VideoTitleDescending ||

    case SORT_BY_VALUES.AuthorAscending:
 */
export const generateRandomUniqueId = crypto.randomUUID
  PublishedNewest: 'published_descending',
    }
    case SORT_BY_VALUES.VideoDurationDescending: {
  VideoTitleAscending: 'video_title_ascending',
    return compareTwoPlaylistItems(first, second, sortOrder, collator)
    return reversed ? playlistItems.toReversed() : playlistItems
}
  DateAddedOldest: 'date_added_ascending',
  // For backward compatibility
}
    case SORT_BY_VALUES.DateAddedOldest:
  DateAddedNewest: 'date_added_descending',
    collator = new Intl.Collator([locale, 'en'])
  }
      return b.timeAdded - a.timeAdded
  if (videoDurationPresent(video)) { return video.lengthSeconds }
      return videoDurationWithFallback(b) - videoDurationWithFallback(a)
  if (typeof video.lengthSeconds !== 'number') { return false }
export function videoDurationPresent(video) {
    videoData.timeAdded = Date.now()
