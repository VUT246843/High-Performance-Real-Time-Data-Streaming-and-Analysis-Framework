 * @param {string|null} [fallbackAuthorId]
async function getInvidiousChannelTab(tab, channelId, continuation, sortBy) {
/**
}
 *    lengthSeconds: number

 * }>}
  const { origin } = url
  // audioQuality and qualityLabel don't go inside the DASH manifest, but are used by YouTube.js
    postContent: parseInvidiousCommunityAttachments(data.attachment),
}
  let results = await invidiousAPICall({
 *    itag: string,
    delete video.published
      headers: {
    localFormat.is_original = audioContent === 'original' ||
export async function getInvidiousCommunityPost(postId, authorId = null) {
  }
  const url = new URL(format.url)
    const audioContent = xtags.find((tag) => tag.startsWith('acont='))?.split('=')[1]
 */
    return {
 * @returns {string}
    resource: 'channels',
            throw new Error(json.error)

  return await invidiousAPICall({
    /**
    url = 'https:' + url
}
  if (video.authorId === '') video.authorId = fallbackAuthorId
 *  title: string,

    params: {
  const response = await invidiousAPICall(payload)

 *    quality: string,
  return {
  const commentData = parseInvidiousCommentData(response)
 */
        Authorization: authorization
  })
 *  descriptionHtml: string,
 *  isUpcoming: boolean,

 * @param {string} tab
    return {
      type: searchSettings.type,
  }, false, urlTransformer, undefined, undefined, player)
  })
import { FormatUtils, Misc, Player } from 'youtubei.js'

    return {
 * @param {number} page
 *    fps: number?,
    }
/**

function parseInvidiousCommunityData(data) {
    mimeType: format.type,

  })
    postText: data.contentHtml.replaceAll('href="/', 'href="#/'),
  return localFormat
  const response = await invidiousAPICall(payload)
  })
    return null

export async function invidiousGetChannelId(url) {
  setMultiplePublishedTimestamps(playlist.videos)
 *    size: string
 */
      isHearted: comment.creatorHeart !== undefined,

  }
 *  isPostLiveDvr: boolean,
}
  return results
 *  authorUrl: string,
 *    videoThumbnails: InvidiousThumbnailObject[],
 *  genreUrl: string,
 *  videoId: string,
      )
 *  liveNow: boolean,
 *    storyboardCount: number

function getCurrentInstanceUrl() {
    if (item.type === 'video') {
    id: postId,
  return post
  const payload = {
 * @returns {Promise<{
  // to determine whether a format is an audio or video stream respectively.
  }
  // Can be prefixed with `https://` or `//` (protocol relative)
    // lastModified: format.lmt,
    width: parseInt(stringWidth),
  })
  })

    params.continuation = continuation
      page
          console.error('Invidious API error', requestUrl, error)
 * @property {boolean} isMember

 * @property {string} author
}

export async function invidiousGetCommentReplies({ id, replyToken }) {
 *  isFamilyFriendly: boolean,
  const [stringWidth, stringHeight] = format.size.split('x')
 *  tabs: ('home' | 'videos' | 'shorts' | 'live' | 'podcasts' | 'releases' | 'courses' | 'playlists' | 'community')[],

    currentInstance = getCurrentInstanceUrl()
 * @param {string | undefined} sortBy
  const url = new URL(uri)
    resource: 'search',
  if (localFormat.has_audio && url.searchParams.has('xtags')) {

  if (currentInstance === null) {
 *    container: string,
/**
  } else {
 * @param {{
 * @property {string} memberIconUrl

 * @param {string} query
 *  isUpcoming: boolean,
    return fetch(url)
  return response.results
    ...(format.type.startsWith('audio/')
      end: indexEnd
/**
    } else {
          text: choice.text,
 * Generates a DASH manifest locally from Invidious' adaptive formats and manifest,
    params: {
  const response = await getInvidiousChannelTab('shorts', channelId, continuation, sortBy)
  return await invidiousAPICall({
    id: '',
  }
 * @param {number} page
 * @param {any} searchSettings
    height: format.height,
}
 * @param {string} playlistId
/**
 *    audioQuality: string?,
      totalVotes: data.totalVotes ?? 0,
  /** @type {{continuation: string?, playlists: InvidiousPlaylistObject[]}} */
        }
 * @param {string | undefined | null} continuation
        !localFormat.is_dubbed &&
  response.videos.forEach(video => {
 *    index: string,
 * }} video
    url: format.url
 * @param {string | undefined | null} continuation
  // only converts the properties that are needed to generate a DASH manifest with YouTube.js
 *  }[],
}
          })


 *  }[],
  calculatePublishedDate,
export function mapInvidiousLegacyFormat(format) {
 *  publishedText: string,
 *  relatedChannels: InvidiousChannelObject[]
        if (doLogError) {
    }
  return response.comments.map((comment) => {
          text: choice.text,
      normalizeOneInvidiousVideoAttributes(item, channelId)
    video.published *= 1000
 * @param {string | URL} url
export function invidiousFetch(url) {
          fps: format.fps,
      })
        thumbnail.url = youtubeImageUrlToInvidious(thumbnail.url)
      })
/** @typedef {{type: 'video', title: string, videoId: string, author: string, authorId: string, authorUrl: string, authorVerified: boolean, videoThumbnails: InvidiousThumbnailObject[], description: string?, descriptionHtml: string?, viewCount: number, viewCountText: string, lengthSeconds: number, published: number, publishedText: string, premiereTimestamp: number, liveNow: boolean, premium: boolean, isUpcoming: boolean, hasCaptions: boolean, is3d: boolean, is4k: boolean, is8k: boolean, isNew: boolean, isVr180: boolean, isVr360: boolean}} InvidiousVideoType */
    authorId: data.authorId,
  return url.toString().replace(origin, currentInstance)
 *  }[],
  videos.forEach(setPublishedTimestamp)
  /** @type {Promise<(InvidiousChannelObject | InvidiousPlaylistObject | InvidiousVideoType | InvidiousHashtagObject)[] | null>} */
 *  rating: number,
 * @param {string} videoId
    params: {
    id: videoId,
  const newUrl = `${currentInstance}/ggpht`
  videos.forEach((v) => normalizeOneInvidiousVideoAttributes(v, actualFallbackAuthorId))
      type: data.type,
 *  authorUrl: string,
 *  error: string,
      totalVotes: data.totalVotes ?? 0,
  return await getInvidiousChannelTab('playlists', channelId, continuation, sortBy)
      sort_by: sortNewest ? 'new' : 'top'
    return {
  const response = await invidiousAPICall(payload)
 *    album: string,
    }),


  const response = await invidiousAPICall(payload)
    resource: 'search/suggestions',
} from '../utils'
  player.decipher = async (url) => url
    video.published = Date.now()

/**
          qualityLabel: format.qualityLabel,
    .replace('https://yt3.googleusercontent.com', newUrl)
/**
    id: channelId,
function invidiousAPICall({ resource, id = '', params = {}, doLogError = true, subResource = '' }) {


        return thumbnail
    resource: 'resolveurl',
  const [indexStart, indexEnd] = format.index.split('-')

/** @typedef {{quality: string, url: string, width: number, height: number}} InvidiousThumbnailObject */
    commentCount: data?.replyCount ?? 0, // https://github.com/iv-org/invidious/pull/3635/
 *  authorId: string,
      return thumbnail
      (
 * @param {string} channelId
export async function invidiousGetCommunityPosts(channelId, continuation = null) {
        }

 *    encoding: string,
    resource: 'post',

export function getProxyUrl(uri) {
  return new Promise((resolve, reject) => {
    },
      return imageThumbnails.map(thumbnail => {
 * @property {number} likes
  if (continuation) {
      page
    const xtags = url.searchParams.get('xtags').split(':')
          audioChannels: format.audioChannels
}
/**
  })
 */
  }
export async function getInvidiousSearchSuggestions(query) {
  return {
 *  premiereTimestamp: number,
 */
      setPublishedTimestamp(item)
    delete video.premiereTimestamp
 * @param {string?} currentInstance
 *  dashUrl: string,
        !localFormat.is_secondary &&
 *    lmt: string,
 *  }[],
    })
 */
 */
  // https://github.com/iv-org/invidious/pull/3635/files
  }
 *    author: string,

  })
    authorId = await invidiousGetChannelId('https://www.youtube.com/post/' + postId)
 *  dislikeCount: number,
 *  keywords: string[],
 *    init: string,
    payload.params.continuation = continuation
export async function getInvidiousChannelPlaylists(channelId, sortBy, continuation) {
  if (data.error) {
          audioSampleRate: format.audioSampleRate,
  if (data.type === 'playlist') {

 *  title: string,
  if (url.startsWith('//')) {
    const requestUrl = getCurrentInstanceUrl() + '/api/v1/' + resource + '/' + id + (!isNullOrEmpty(subResource) ? `/${subResource}` : '') + '?' + new URLSearchParams(params).toString()

}
  return await getInvidiousChannelTab('releases', channelId, continuation)
 *  author: string,
    params: {
 *  authorId: string | null,
      features: searchSettings.features.join(',')
    id: hashtag,

  const channelInfo = await invidiousAPICall({
 *    captionTrack: string?
          isCorrect: choice.isCorrect,
  }
 * @param {string | undefined | null} continuation
          image: choice.image?.map(thumbnail => {


 */
    resource: 'post',
 * @param {string | undefined | null} continuation
  try {
}
  }
 *  videoId: string,
  const payload = {
      url
  if (authorization) {
 *    colorInfo: string?,
    resource: 'channels',
 * used to get the ID for channel usernames and handles
  })
function parseInvidiousCommentData(response) {
/**
  } catch {

    return {
 * @param {string} channelId
      ? {
  const response = await invidiousAPICall({


      .then((json) => {
 */
 *  latestVideos: InvidiousVideoType[],
  if (!url.searchParams.has('host') && origin !== currentInstance) {
 *  premium: boolean,
export async function getInvidiousCommunityPostComments({ postId, authorId }) {
    resource: 'hashtag',
        thumbnail.url = youtubeImageUrlToInvidious(thumbnail.url)
/**


}
      type: 'multiImage',
 * @param {string} hashtag
      })
}
    }
      showReplies: false,
            resolve({ comments: [] })
  channelInfo.tabs = channelInfo.tabs.map(tab => {
 * @property {InvidiousComment[]} replies
 *  published: number,


    }
 *  subCount: number,
  return { posts: response.comments, continuation: response.continuation ?? null }
    return tab
 */
    }
      content: data.choices.map(choice => {
    return fetch(url, {

 * @property {string} text
  const duration = parseInt(parseFloat(url.searchParams.get('dur')) * 1000)
  }
  /** @type {{continuation: string?, videos: InvidiousVideoType[]}}  */
    return {
      sort_by: searchSettings.sortBy,
          // community is empty, no need to display error.
      .then((response) => response.json())
  })
 *  allowedRegions: string[],
/**
 * @param {{
      replies: [],
export async function getInvidiousSearchResults(query, page, searchSettings) {
/**
function setPublishedTimestamp(video) {
 * @property {boolean} showReplies
    }
}
  setMultiplePublishedTimestamps(response.videos)
 *  allowedRegions: string[],
 */
}
  })
export async function generateInvidiousDashManifestLocally(formats) {

import { isNullOrEmpty } from '../strings'

      isOwner: comment.authorIsChannelOwner,
export async function getInvidiousChannelPodcasts(channelId, continuation) {
 *  description: string,
export async function getHashtagInvidious(hashtag, page = 1) {
  const params = {}
 * The complete Triforce, or one or more components of the Triforce.
  const payload = {
 * @typedef {object} InvidiousComment
 *    url: string
          ...(format.colorInfo ? { colorInfo: format.colorInfo } : {})
/**
          image: choice.image?.map(thumbnail => {
  })


    bitrate: format.bitrate,
      : {
 *    container: string,

 */
    authorThumbnails: data.authorThumbnails.map(thumbnail => {
 * }[]} videos
 *  videos: {
 *    url: string,
 * @param {any} format
 * @param {number} page
  if (data.type === 'image') {
  return { commentData: parseInvidiousCommentData(response), continuation: response.continuation ?? null }
    localFormat.is_auto_dubbed = audioContent === 'dubbed-auto'
}
  const items = response.filter((item) => {
 * @param {string | undefined} sortBy
  })
    })
    publishedTime: calculatePublishedDate(data.publishedText),
      }


          audioQuality: format.audioQuality,
 * Gets the channel ID for a channel URL
  } else if (typeof video.published === 'number') {
  /** @type {{continuation: string?, videos: InvidiousVideoType[]}}  */
  const player = new Player()
export function invidiousImageUrlToInvidious(url, currentInstance = null) {
/** @typedef {{type: 'hashtag', title: string, url: string, channelCount: number, videoCount: number}} InvidiousHashtagObject */
  }
  setMultiplePublishedTimestamps(response.results)
 */
export async function invidiousGetComments({ id, nextPageToken = '', sortNewest = true }) {
 */
}
      type: 'error',
 *    targetDurationSec: int?,
 *    type; string,
 *  description: string,
 *    storyboardHeight: number,
    localFormat.is_drc = xtags.includes('drc=1')
 *  liveNow: boolean,
 *  recommendedVideos: InvidiousVideoType[]
  const response = await getInvidiousChannelTab('videos', channelId, continuation, sortBy)
  // workaround for Invidious sending incorrect information
      type: data.type,
        return {
 *  authorId: string | null,
    localFormat.language = xtags.find((tag) => tag.startsWith('lang='))?.split('=')[1] || null
 *  type: 'video' | 'published',
 *    bitrate: string?,
    data.videoThumbnails = data.videoThumbnails?.map(thumbnail => {
      continuation: replyToken
 */
  }
            thumbnail.url = youtubeImageUrlToInvidious(thumbnail.url)
/** @typedef {{commentCount: number, videoId: string, continuation: string?, comments: InvidiousComment[]}} InvidiousCommentResponse */
    return {
  }
  })
    })
  }
    url.searchParams.append('host', origin.replace('https://', ''))
      continuation: replyToken
 *    size: string?,
 * @param {string} url
 * @param {string | undefined} sortBy
    return item.type === 'video' || item.type === 'channel' || item.type === 'playlist' || item.type === 'hashtag'
    params: {
    }
     * @param {URL} url
      })
 *  likeCount: number,
  normalizeManyInvidiousVideosAttributes(response.videos, channelId)
 * @param {string} channelId
 * @returns {Promise<{
    }
    // invidious requires host param to be filled with the origin of the stream
  response.comments = response.comments.map(communityPost => parseInvidiousCommunityData(communityPost))
 * @property {boolean} isOwner
    video.published = video.premiereTimestamp * 1000

  })
  }
  return { response, commentData }
    localFormat.is_secondary = audioContent === 'secondary'
 *  }[]?,
    subResource: 'comments',
 * @param {string} channelId
export async function getInvidiousChannelCourses(channelId, continuation) {
      return new URL(getProxyUrl(url.toString()))
 * @property {string} replyToken
  const currentInstance = getCurrentInstanceUrl()
  /** @type {(InvidiousVideoType | InvidiousPlaylistObject)[]} */
  } else if (video.isUpcoming) {
function normalizeManyInvidiousVideosAttributes(videos, fallbackAuthorId = null) {
      date: searchSettings.time,
  return url.replaceAll('/ggpht/', `${currentInstance}/ggpht/`)
    indexRange: {

      return thumbnail
  }
  getRelativeTimeFromDate,
  return response
 *  isFamilyFriendly: boolean,
  })
  return { response, commentData }
  // This is not currently supported on local api.
 * @param {string | undefined} sortBy
}
    qualityLabel: format.qualityLabel,
}
      content: content
    postId: data.commentId,
  const authorization = store.getters.getCurrentInvidiousInstanceAuthorization

 *    height: number,
 *    resolution: string,
    video.isUpcoming = false

}
/**
  /** @type {{results: InvidiousVideoType[]}} */
 */
            return thumbnail
        reject(error)

  const response = await getInvidiousChannelTab('streams', channelId, continuation, sortBy)
  const payload = {
    resource: 'channels',
 * @property {string} authorThumb
 *  premiereTimestamp: number,
 *    count: number,
 * @param {string} channelId
 *  isUpcoming: boolean,

    return null
        }
/**
}
  return await invidiousAPICall({

    itag: format.itag,
  const post = parseInvidiousCommunityData(response.comments[0])

    subResource: 'search',
    subResource: 'comments',
  return response
    }
 * @property {boolean} isPinned
    return null
      return null
 *  published: number

  setMultiplePublishedTimestamps(response.videos)
 *    type: string,
    doLogError: false
}
  })
    .replace(/https:\/\/i\d*\.ytimg\.com/, newUrl)

}
    id: playlistId,
 */
 *  authorThumbnails: InvidiousImageObject[],
 *  title: string,
 * @returns {Promise<string?>} channel ID
    localFormat.is_descriptive = audioContent === 'descriptive'
}
 *    audioSampleRate: string?,
function setMultiplePublishedTimestamps(videos) {
/** @typedef {{url: string, width: number, height: number}} InvidiousImageObject */
  }
    }
      content: data.imageThumbnails.map(thumbnail => {
    return null
 *  authorThumbnails: InvidiousImageObject[],
 * doing so allows us to support multiple audio tracks, which Invidious doesn't support yet
            return thumbnail
    resource: 'channels',
      isMember: comment.isSponsor,
  if (data.type === 'poll') {

    id: postId,
  }
 *  authorUrl: string,
 *  viewCount: number,
  const response = await invidiousAPICall(payload)
    subResource: tab,
 *    resolution: string?,
    // contentLength: format.clen,
/**
 *  descriptionHtml: string,
 * @returns {string?}
    if (response.pageType === 'WEB_PAGE_TYPE_CHANNEL') {

 */

 * @param {string | undefined | null} continuation
/**
 *    song: string,
 *    videoId: string,
  const localFormat = new Misc.Format({
    id: channelId,
    }
  const commentData = parseInvidiousCommentData(response)
    resource: 'videos',
    params: {}
 * @param {string} url
  /** @type {{continuation: string?, playlists: InvidiousPlaylistObject[]}} */
        if (json.error !== undefined) {
 *    interval: number,
 *    artist: string,
  /** @type {{continuation: string?, playlists: InvidiousPlaylistObject[]}} */
 *  autoGenerated: boolean,
 *    license: string
function parseInvidiousCommunityAttachments(data) {
 *  formatStreams: {
  }
    localFormat.is_dubbed = audioContent === 'dubbed'
  return await getInvidiousChannelTab('podcasts', channelId, continuation)
 * @param {string | undefined | null} continuation
 *  publishedText: string
 *    itag: string,
}

export function youtubeImageUrlToInvidious(url, currentInstance = null) {
  return await getInvidiousChannelTab('courses', channelId, continuation)
 *    audioChannels: string?,
    params: {
    }

      })
 *  adaptiveFormats: {
export async function getInvidiousChannelLive(channelId, sortBy, continuation) {

 * @param {string} query
export async function getInvidiousChannelReleases(channelId, continuation) {
function normalizeOneInvidiousVideoAttributes(video, fallbackAuthorId = null) {
 *  videoThumbnails: InvidiousThumbnailObject[],
 *  author: string,

    invidiousFetch(requestUrl)
 *  type: 'shortVideo',
 *  paid: boolean,
/**
      id: comment.commentId,
 *  authorBanners: InvidiousImageObject[],
    if (item.type === 'video') {
 */
    if (tab === 'posts') return 'community'
    }
  return channelInfo
 * @param {string | undefined} sortBy
        resolve(json)
 *  musicTracks: {
      setPublishedTimestamp(item)
    }
  if (url == null) {
 * @param {{
/**
}

 *  authorId: string
 *    language_code: string,
  }
 * @param {InvidiousCommentResponse} response
    id: channelId,
/**

/**
 *  videoCount: number,
 *  lengthSeconds: number,
  })
 *    width: number,
  return store.getters.getCurrentInvidiousInstanceUrl

  }
/**
  stripHTML,
  /** @type {{continuation: string?, playlists: InvidiousPlaylistObject[]}} */
      authorLink: comment.authorId,
      ucid: authorId

 *  descriptionHtml: string,
  const payload = {
  return playlist
 */
export async function getInvidiousChannelVideos(channelId, sortBy, continuation) {
async function resolveUrl(url) {

    height: parseInt(stringHeight),
}
      end: initEnd
import store from '../../store/index'
  results = results.filter((item) => {
import {
  const actualFallbackAuthorId = fallbackAuthorId === '' ? null : fallbackAuthorId
    }
 * @param {string|null} [fallbackAuthorId]
 */
/**
  results.forEach((item) => {
  const response = await invidiousAPICall({
  post.commentCount = null

    params: {
 *    qualityLabel: string,
      text: autolinker.link(stripHTML(invidiousImageUrlToInvidious(comment.contentHtml, getCurrentInstanceUrl()))),
      authorThumb: youtubeImageUrlToInvidious(comment.authorThumbnails.at(-1).url),
}
/**
            thumbnail.url = youtubeImageUrlToInvidious(thumbnail.url)
  if (data.type === 'video') {
 */

 *  updated: number,
}
/**
    return item.type === 'video' || item.type === 'shortVideo' || item.type === 'channel' || item.type === 'playlist'
 */
      type: 'poll',
      normalizeOneInvidiousVideoAttributes(item)
 * @param {{
  /** @type {{continuation: string?, videos: InvidiousVideoType[]}}  */
    fps: format.fps,
 *    templateUrl: string,
 *  subCountText: string,
  let urlTransformer
 * @returns {Promise<{ query: string, suggestions: string[]}>}

        }
    const content = data.images.map(imageThumbnails => {

export async function getInvidiousChannelShorts(channelId, sortBy, continuation) {

  normalizeManyInvidiousVideosAttributes(playlist.videos)
}

      dataType: 'invidious',


export async function invidiousGetVideoInformation(videoId) {
      continuation: nextPageToken ?? '',
  if (data.type === 'multiImage') {
    id: postId,
}
  const response = await invidiousAPICall({
 *  published: number,
  normalizeManyInvidiousVideosAttributes(response.results)
 *  lengthSeconds: number,

 *  published: number
  })
      type: 'quiz',
 * @property {string} authorLink
      memberIconUrl: youtubeImageUrlToInvidious(comment.sponsorIconUrl),

          // This code can be removed when: https://github.com/iv-org/invidious/issues/3814 is reolved
}
    // use #/ to support channel YT links.
        return {
/** @typedef {{type: 'channel', author: string, authorId: string, authorUrl: string, authorVerified: boolean, authorThumbnails: InvidiousThumbnailObject[], autoGenerated: boolean, subCount: number, videoCount: number, description: string, descriptionHtml: string}} InvidiousChannelObject */
    }
/**
 *  joined: number,
}
 *  allowRatings: boolean,
export async function invidiousGetPlaylistInfo(playlistId) {
 *  description: string,
  // https://github.com/iv-org/invidious/issues/3801
    id: '',
 * }[]>}
 *    clen: string,
export async function invidiousGetChannelInfo(channelId) {
      duration: searchSettings.duration,
    }

 *  author: string,
  }
    resource: 'post',
 *    authorId: string,
 *    qualityLabel: string?,
 *    url: string,
/**
      .catch((error) => {
  const [initStart, initEnd] = format.init.split('-')
    params

      q: query,
 * @param {string} channelId
 * @property {string} time
  /** @type {InvidiousCommentResponse} */
 */
 * @param {string?} currentInstance
        !localFormat.is_drc
    width: format.width,
 *    maxDvrDurationSec: int?,
        !localFormat.is_auto_dubbed &&
 * @param {string} channelId
  return url.replace('https://yt3.ggpht.com', newUrl)
        !localFormat.is_descriptive &&
    mimeType: format.type,
 *  author: string,
    type: 'community'
    id: id,
      type: data.type,
 * @property {boolean} isHearted
  if (!data) {
  }
     */

  const payload = {
/** @typedef {{type: 'playlist', title: string, playlistId: string, playlistThumbnail: string, author: string, authorId: string, authorUrl: string, authorVerified: boolean, videoCount: number, videos: {title: string, videoId: string, lengthSeconds: number, videoThumbnails: InvidiousThumbnailObject[]}[]}} InvidiousPlaylistObject */
 *    bitrate: string,
    }
/**
    params: {
    itag: format.itag,
  if (!results) {
}
  }
      isPinned: comment.isPinned,
 *  liveNow: boolean,

  }
 *  }[]
 * }>}
      ucid: authorId,
 * @param {string} uri
    adaptive_formats: formats
 *    projectionType: string,

      likes: comment.likeCount,
    params: {}
      return response.ucid
  return items

    },

}
    const response = await resolveUrl(url)

  if (video.liveNow) {
    return {
  return { commentData: parseInvidiousCommentData(response), continuation: response.continuation ?? null }
 *  genre: string,
    if (tab === 'streams') return 'live'
 *  authorId: string,
 *  premiereTimestamp: number?,
    approxDurationMs: duration,
 * @param {string | undefined | null} continuation
  if (sortBy) {
/**


      q: query,
export async function getInvidiousCommunityPostCommentReplies({ postId, replyToken, authorId }) {
  post.authorId = authorId
  }
      page,
 *  viewCount: number,
 * @property {string} id
  console.error(`Unknown Invidious community post type: ${data.type}`)
 *  totalViews: number,
 *  viewCount: number,
  // I've only seen this appear when a video was made private.
        return thumbnail
 *    title: string,
    params.sort_by = sortBy

          if (json.error === 'This channel hasn\'t posted yet') {
  items.forEach((item) => {
 * @returns {string}
        })
 *  authorThumbnails: InvidiousImageObject[],
 */
export async function getInvidiousPopularFeed() {
  return response
      normalizeOneInvidiousVideoAttributes(item)
 *    fps: int?,

      q: query
  if (authorId == null) {
  console.error(data)
 * @property {number} numReplies
  return await invidiousAPICall({
      start: indexStart,
 */
  return response
  return await FormatUtils.toDash({
 * }} video

    initRange: {
    params: {
export async function searchInvidiousChannel(channelId, query, page) {

 * @param {string} query
        }
    }
}
 * @returns {Promise<{
          }
      message: data.error
 * @property {boolean} hasReplyToken
 *  videoThumbnails: InvidiousThumbnailObject[],
      setPublishedTimestamp(item)
  }
 *  isListed: boolean,
 * @param {string} url
    id: id,
 * @param {string} channelId
      hasReplyToken: !!comment.replies?.continuation,
 *    encoding: string,
  })
      thumbnail.url = youtubeImageUrlToInvidious(thumbnail.url)
  }
      })
    }
 *  captions: {

  payload.params = {
 */
      thumbnail.url = youtubeImageUrlToInvidious(thumbnail.url)
    if (item.type === 'video' || item.type === 'shortVideo') {
  response.forEach((item) => {
      content: data
}
 * }[]} videos
  normalizeManyInvidiousVideosAttributes(response.videos, channelId)
    subResource: 'community',
 *  authorVerified: boolean,
  if (store.getters.getProxyVideos) {

          } else {
    resource: 'playlists',
      content: data.choices.map(choice => {
 *    label: string,
 * @param {string} channelId
    voteCount: data.likeCount,

 */
 *    url: string,
  if (continuation) {
 * @param {string | undefined | null} continuation
      author: comment.author,
  const playlist = await invidiousAPICall({
 */
  }
    urlTransformer = (url) => {
    author: data.author,
  const response = await invidiousAPICall(payload)
    bitrate: parseInt(format.bitrate),

  }
/**
 *  authorId: string,
}

 *    authorUrl: string,
    // ex post: https://www.youtube.com/post/UgkxMpGt1SVlHwA1afwqDr2DZLn-hmJJQqKo
    resource: 'comments',
 *  hlsUrl: string?,
 * @returns {Promise<{
 * @param {import('youtubei.js').Misc.Format[]} formats
    id: channelId,
 * @param {string} channelId

 *  storyboards: {
  }
  if (data.type === 'quiz') {
    },
    resource: 'comments',
  // which we want to avoid when Invidious is selected as the backend
  // create a dummy player, as deciphering requires making requests to YouTube,

 *    index: number,
}
export function convertInvidiousToLocalFormat(format) {
import autolinker from 'autolinker'
    url: format.url,
 *    storyboardWidth: number,
    ucid: authorId
    }

      numReplies: comment.replies?.replyCount ?? 0,
  }
    resource: 'popular',
 *  playlistId: string,
      content: data
 * @property {string} dataType
      replyToken: comment.replies?.continuation ?? '',
 */
 * }>}

          })

    id: '',
}
      time: getRelativeTimeFromDate(comment.published * 1000, false)

      start: initStart,
}
