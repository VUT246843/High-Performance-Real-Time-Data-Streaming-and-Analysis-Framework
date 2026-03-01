
    // getBasicInfo needs the signature timestamp (sts) from inside the player
      videos = []
      dataSource: 'local',


  if ((info.playability_status.status === 'UNPLAYABLE' && (!hasTrailer || trailerIsAgeRestricted)) ||
    const headerContinuations = feed.page.header_memo.getType(YTNodes.ContinuationItem)
    return {
      const channel = item
          text: choice.text.text,
          id = typedModal.button.endpoint.next_endpoint?.payload.browseId
        thumbnailUrl = channel.metadata.thumbnail[0].url

 * @property {import('youtubei.js').Context} context

  if (!response.results) {
export async function getLocalArtistTopicChannelReleasesContinuation(channel, continuationData) {
      authorId: channelId,

/**
  return {
        if (!channel.video_count.isEmpty()) {
    time: getRelativeTimeFromDate(calculatePublishedDate(comment.published_time.replace('(edited)', '').trim()), false),
 * @property {string} memberIconUrl
  }
}

        internalChannelId = playlist.author.id
/**
    /** @type {import('youtubei.js').YTNodes.PlaylistVideo} */
 * @param {string|undefined} options.location the geolocation to pass to YouTube get different content
 */
    payload: payload,
      videoId: movie.id,
 */
      return {
      const header = channel.header
 * @typedef {Misc.Format & _LocalFormat} LocalFormat
      internalChannelName = channelName

    if (run instanceof Misc.EmojiRun) {
    /** @type {import('youtubei.js').YTNodes.GridMovie} */
      // protobuf for the videos tab (this is the one that YouTube uses,
      break
    /** @type {import('youtubei.js').YTNodes.Video} */
 * @param {import('youtubei.js').YTNodes.Playlist|import('youtubei.js').YTNodes.GridPlaylist|import('youtubei.js').YTNodes.LockupView} playlist
    case 'GridPlaylist':


            altText = emoji.shortcuts[0]
      if (channel.metadata.external_id) {
}
 */
    return {

      videoId: shortsLockupView.on_tap_endpoint.payload.videoId,

      viewCount,
      let isUpcoming = false
 * @property {string} freeTubeUrl deciphered streaming URL, stored in a custom property so the DASH manifest generation doesn't break
          if (event.source === iframe.contentWindow && typeof event.data === 'string') {
    }
/**
 * @param {'search'} type

      }

                totalAdTimeMilliseconds += instreamVideoAdRenderer.skipOffsetMilliseconds
    /** @type {import('youtubei.js').YTNodes.ShortsLockupView} */
      let videos = null
    publishedTime: calculatePublishedDate(post.published.text),
        break
}
      if (!thumbnailUrl && channel.metadata.thumbnail) {
 */
      liveNow: video.is_live,
        channelName,
      // according to https://github.com/iv-org/invidious/issues/3514#issuecomment-1368080392

        isGame: true
    generateSessionLocally: false,
  return await innertube.getPlaylist(id)
      video.is_upcoming || video.is_premiere,

 * @param {'gaming' | 'sports' | 'podcasts'} tab
  switch (tab) {
    urlObject.searchParams.set(pathParts[i], decodeURIComponent(pathParts[i + 1]))
        playlistId,
  const continuationItem = extractFeedContinuationItem(search)
 * @param {string} [channelName]

    info.captions = trailerInfo.captions
 */
      }
export function parseLocalSubscriberCount(text) {

 * @returns {Promise<import('youtubei.js').YT.Search>}
 * @return LocalComment
      videoId: video.id,

    } else {
    return {
    // so we need to check that we got the right tab
 */
    const short = video

          /** @type {import('youtubei.js').YTNodes.ContentPreviewImageView} */
export async function getLocalSearchResults(query, filters, safetyMode) {
      playlistId: gridPlaylist.id,
          /** @type {import('youtubei.js').YTNodes.DecoratedAvatarView} */


      videos
      // https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ
      if (!isNaN(views)) {
        const count = match[1]
    // use browser fetch
 * @param {object} options
 * @property {string} authorId
      type: 'playlist',
        // convert base64 params to string and get the channelid
    } else {
 * @param {import('youtubei.js').YT.Playlist} playlist
          } else {

    if (viewsText) {
    }
  }).map(parseLocalCommunityPost)
        break

        subscriberText = topicChannelDetails.subtitle.text
      // example: Linus Tech Tips
        authorId: lockupView.metadata.image?.renderer_context?.command_context?.on_tap?.payload.browseId,
  innertube.session.context = data.context
  }
      is3d: video.badges.some(badge => badge.label === '3D'),
        info.streaming_data.dash_manifest_url,
    let liveStreamsTab = new YT.Channel(innertube.actions, response)
    }
  const pathPrefix = isDash ? '/api/manifest/dash' : '/api/manifest/hls_variant'
    }
 */
    const gridPlaylist = playlist
          const durationBadge = thumbnailOverlayBadgeView.badges.find(badge => /^[\d:]+$/.test(badge.text))
    )
    return {
      convertedFilters.features = filters.features
 * @property {string} id

    let publishedText
    tags
    clientInfo,
  return {
    let internalChannelName
            const instreamVideoAdRenderer = adSlot.adSlotRenderer.fulfillmentContent?.fulfilledLayout?.playerBytesAdLayoutRenderer
  }
      .find((node) => !sectionList.contents.includes(node))
    }
  let result
        /** @type {import('youtubei.js').YTNodes.HorizontalCardList} */


 * @param {boolean} options.runCallbackOnceFirst
            // In comments, mention can be `@Channel Name` (not handle, but name)
export function extractLocalCacheableSearchContinuation(search) {
          shelves.push({

      isVr360: video.badges.some(badge => badge.label === '360°'),
                resolve(data.result)
      if (viewsText) {
              parsedRuns.push(text)
 */
  }
    if (typeof match[2] === 'undefined') {
    adEndTimeUnixMs,


      if (navigationEndpoint.metadata.page_type === 'WEB_PAGE_TYPE_CHANNEL') {
      videos = []
      info.streaming_data.hls_manifest_url = await decipherManifestUrl(
  // No section list means there can't be additional continuation nodes here,

      // resolveURL throws an error if the URL doesn't exist
        thumbnailUrl = header.content.animated_image.image[0].url
    const reelItem = short
        } else {
  } else if (attachment.type === 'Poll') {
  } else {
  } catch (error) {
      /** @type {import('youtubei.js').YTNodes.HashtagTile} */
    }
 * @param {string} location
    hasReplyToken = true
    case 'Channel': {
    replyCount = parseLocalSubscriberCount(post?.action_buttons.reply_button.text)
import { SEARCH_CHAR_LIMIT } from '../../../constants'
 * @param {object} options
    }
      } else {
      if (channel.subscribers?.text) {
/**
      info.basic_info.duration = bypassedInfo.basic_info.duration
  return parseLocalCommunityPost(postPage.posts[0])
      dataSource: 'local',
  for (const post of posts) {
    result = await innertube.getChannel(id)
      args = {

 * @param {string} channelName
  decipheredUrlObject.pathname += `/pot/${encodeURIComponent(poToken)}`
  /** @type {string?} */
  if (short.type === 'ReelItem') {
    }
              } else {
        ? crypto.randomUUID()

      // Remove &xosf=1 as it adds `position:63% line:0%` to the subtitle lines
      title: short.title.text,
 * @param {string} [channelId]
        premiereDate
 * @param {YT.Channel} channel
    }
      )

    }
      /**
        if (strikethrough) {
      return parseLockupView(item, channelId, channelName)
    }
/**
            content: shelf.content.items.map((item) => parseListItem(item, channelId, channelName)).filter(_ => _),
    info.playability_status.status === 'LOGIN_REQUIRED') {
      }
    if (process.env.IS_ELECTRON) {
        descriptionShort: channel.description_snippet?.text
}
 * @param {YT.Channel} channel
    }
    if (playlist != null) { callback(playlist) }
      return null
    return new YT.Search(innertube.actions, page, true)
 *   info: import('youtubei.js').YT.VideoInfo,
    height: format.height,
    }
    continuationItem = feed.memo.getType(YTNodes.ContinuationItem).find(

  }
    path = command.getApiPath()
  'utm_term',
              // Using original unless there is any change
  }
 */
    const viewsText = video_.video_info.runs?.find(run => VIEWS_OR_WATCHING_REGEX.test(run.text))?.text
      if (hasRuns && video_.video_info.runs.length === 3) {
export function clearLocalSearchSuggestionsSession() {
    info.playability_status = trailerInfo.playability_status

  /** @type {import('youtubei.js').YTNodes.EngagementPanelSectionList} */
      playlistId: compactStation.endpoint.payload.playlistId,
      break
            parsedRuns.push(`https://www.youtube.com${endpoint.metadata.url}`)
      if (!(input.url?.startsWith('https://www.youtube.com/youtubei/v1/player'))) {
    channelId = await getLocalChannelId('https://www.youtube.com/post/' + postId, true)
  const feed = new Mixins.Feed(innertube.actions, response)
      let publishedText
      }
  const convertedFilters = {}
    parsedVideos.push(parseLocalListVideo(video, channelId, channelName))
      const viewsText = lockupView.metadata.metadata?.metadata_rows[1].metadata_parts?.find(part => {

  'utm_content',
          thumbnailUrl = image.avatar?.image[0].url
      if (thumbnailOverlayBadgeView) {
      id = header.author.id
    }
  switch (channel.header.type) {
  }
 * @property {string} time
          case 'WEB_PAGE_TYPE_PLAYLIST':
        thumbnail: game.box_art.at(0).url.replace(/^\/\//, 'https://'),
    urlObject.searchParams.set('pot', poToken)
  }
 * @param {boolean} safetyMode
    info.basic_info.duration = trailerInfo.basic_info.duration
      title: video.title.text,

    let parsedDecimals

          image: choice.image

  /** @type {string?} */
    webEmbeddedInnertube.session.player = webInnertube.session.player
        }
      releases: channel.playlists.map(playlist => parseLocalListPlaylist(playlist)),
        alert: error.message

        if (header.content.image.type === 'ContentPreviewImageView') {
 * @param {(import('youtubei.js').YTNodes.ReelItem | import('youtubei.js').YTNodes.ShortsLockupView)[]} shorts
        internalChannelName = playlist.author.name
    // OR no runs and just text with the published date (if the view count is missing)
            premiereDate = new Date(lockupView.metadata.metadata.metadata_rows[1].metadata_parts[1].text.text)
    continuationItem = feed.memo.getType(YTNodes.ContinuationItem)[0]
 */

}
      }
    return await playlist.getContinuation()
function extractFeedContinuationItem(feed) {
  const adEndTimeUnixMs = responseTime + totalAdTimeMilliseconds
            break
    case 'ALBUM':
        browseId: 'UCOpNcN46UbXVtpKMrmU4Abg',
  const xtags = FormatXTags.decode(Utils.base64ToU8(format.xtags)).xtags
      url.searchParams.set('pot', contentPoToken)
  // Convert path params to query params
              } else if (instreamVideoAdRenderer.playerVars) {


    default:

      // work around YouTube bug where it will return a bunch of responses with only continuations in them
      url.searchParams.set('potc', '1')
    }
    bannerUrl,

 * @param {import('youtubei.js').YT.Search} search
    }
  const response = await innertube.search(query, convertSearchFilters(filters))
            }
  }
          case 'WEB_PAGE_TYPE_UNKNOWN':
  if (!sectionList) {
      contentPoToken = await window.ftElectron.generatePoToken(
      }

        }
        // handle redirects like https://www.youtube.com/@wanderbots, which resolves to https://www.youtube.com/Wanderbots, which we need to resolve again
      info.storyboards = bypassedInfo.storyboards

  if (item.type === 'Movie') {
          }
      if (playlistId.startsWith('RD') && !playlistId.startsWith('RDCL')) {
      return new Response(responseText, {
        channelId,


    return {
        title: hashtag.hashtag.text,
/**
    authorLink: comment.author.id,
  const playlists = memo.get('GridPlaylist') ?? memo.get('LockupView') ?? memo.get('Playlist')
 */
        if (error.message === 'The playlist does not exist.') {
  } else if (attachment.type === 'PostMultiImage') {
 * @property {number} numReplies


      // Need to return a new response object, as you can only read the response body once.
      published,
  return posts.filter(post => {
      urlObject.searchParams.set('mpd_version', '7')
    path = continuationItem.endpoint.metadata.api_url
      premiereDate: video.upcoming,
    showReplies: false,
    const response = await innertube.actions.execute('/browse', {
      }
    const response = await innertube.actions.execute('/browse', {
  }
      author: video.author.name,
      name = topicChannelDetails.title.text
          if (adSlot.adSlotRenderer?.adSlotMetadata?.triggerEvent === 'SLOT_TRIGGER_EVENT_BEFORE_CONTENT') {
 */
        if (count.length === 2 && count === 'no') {

/**
      let videos = null
  const clientInfo = {
      type: 'video',
    info,
      lengthSeconds: isNaN(video_.duration.seconds) ? '' : video_.duration.seconds,
          }
        subscribers = parseLocalSubscriberCount(channel.subscribers.text)
    location: location,
        subscribers,
        }
      const responseText = await response.text()
      }
/**
 * @param {import('youtubei.js').YTNodes.BackstagePost} post
      convertedFilters.type = filters.type
    const published = calculatePublishedDate(publishedText, video.is_live, video.is_premiere)
          if (durationBadge) {

    if (error instanceof Utils.ChannelError) {
 * Callback for adding two numbers.
      lengthSeconds: isNaN(video.duration.seconds) ? '' : video.duration.seconds,
 *     osVersion: string
 * @param {import('youtubei.js').YTNodes.Video[]} videos
    }
 * @property {string} path
      // it has some empty fields in the protobuf but it doesn't work if you remove them)
      foundIds.push(post.original_post.id, post.id)
        name: channel.author.name,

    }

    }


    const command = continuationItem.endpoint.command.commands.at(-1)

      throw error
        title: lockupView.metadata.title.text,
 * @param {Misc.Format} format
    author: post.author.name,
  } else {

 * @returns {Promise<import('youtubei.js').YT.Playlist>}
      if (section.content.type === 'RichShelf') {
  // Some time would be used for parsing and maybe additional requests so end time should be calculated sooner to reduce actual waiting time
        viewCount = views
}

       */
        })


      params: 'EgdzdHJlYW1z8gYECgJ6AA%3D%3D'
        shelves.push({
      url.searchParams.delete('xosf')
            break
    isPinned: comment.is_pinned,
}
 * @returns {Promise<import('youtubei.js').YT.Playlist|null>} null when no valid playlist can be found (e.g. `empty continuation response`)
      try {
      }
/**
    const videoId = hasTrailer && trailerIsAgeRestricted ? info.playability_status.error_screen.video_id : id
  const innertube = await createInnertube()
    // if the channel doesn't have a live tab, YouTube returns the home tab instead
      return null
  if (!continuationItem) {
    osVersion
    case 'Playlist': {
    })
          liveNow = true
/**
    let viewCount = null
      isUpcoming: video.is_upcoming || video.is_premiere,
    id,

        multiplier = 6

      type: 'playlist',
/**

 * @param {string} channelId
  const tags = []
    return parseLockupView(video)
 * The complete Triforce, or one or more components of the Triforce.
  }
    width: format.width,
      // https://www.youtube.com/channel/UCQvWX73GQygcwXOTSf_VDVg
        handle,
    // live videos have 2 text runs with the number of people watching
  if (query.length > SEARCH_CHAR_LIMIT) {
      throw new Error('Unknown trending tab')
      viewCount = video.short_view_count.text.toLowerCase() === 'no views' ? 0 : parseLocalSubscriberCount(video.short_view_count.text)
        liveNow,
export async function getLocalChannelLiveStreams(id) {
      let handle = null
    name,
    const published = calculatePublishedDate(

 * @property {boolean} hasReplyToken

          case 'WEB_PAGE_TYPE_CHANNEL': {
      name = header.title.text
      // https://www.youtube.com/podcasts/popularepisodes
    return {
}
      // e.g. https://www.youtube.com/@TWLIVES/streams
          /** @type {import('youtubei.js').YTNodes.ModalWithTitleAndButton} */
      title: video.title.text,
    if (filters.type) {


  let section


        break
}
      })
      is4k: video.is_4k,
  if (!format.xtags) {
  if (withPlayer) {
       * @type {import('youtubei.js').YTNodes.C4TabbedHeader}
      name = header.author.name
 */
}
        if (thumbnailOverlayBadgeView.badges.some(badge => badge.badge_style === 'THUMBNAIL_OVERLAY_BADGE_STYLE_LIVE')) {
        return navigationEndpoint.payload.browseId
        } else {
 * @param {Misc.Format[]} formats
export function parseShort(short, channelId, channelName) {
      if (playlist.author instanceof Misc.Text) {
  } else if (item.type === 'GridVideo') {
export function parseLocalPlaylistVideo(video) {
    return {
        thumbnail: channel.author.best_thumbnail?.url.replace(/^\/\//, 'https://'),
 * @param {import('youtubei.js').YTNodes.PlaylistVideo|import('youtubei.js').YTNodes.ReelItem|import('youtubei.js').YTNodes.ShortsLockupView} video
    }
  if (info.captions?.caption_tracks) {
}
    if (video.published != null && !video.published.isEmpty()) {
      channelId: gridPlaylist.author?.id,

 *   },
      videoId: movie.id,
    return {

    let publishedText
  for (const format of formats) {
 */
export function formatHasVoiceBoostTag(format) {
  const innertube = await createInnertube()
    case 'PODCAST': {
function parseLockupView(lockupView, channelId = undefined, channelName = undefined) {
/**
  let replyToken = null
        }
        /** @type {import('youtubei.js').YTNodes.Shelf} */
      case 'm':
  extractNumberFromString,
 * @param {string} postId
 * @param {import('youtubei.js').YT.Playlist} playlist

      } else if (channel.metadata.external_id) {
      lengthSeconds: ''
  const innertube = await createInnertube({ location })
    }

/**
 * @param {string} continuation
              let urlChanged = false

  let { clientName, clientVersion, osName, osVersion } = webInnertube.session.context.client
              const realURLStr = url.searchParams.get('q')
      return null
      }
    replies: [],
    throw new Error('not an array of text runs')
      info.captions = bypassedInfo.captions
      thumbnailUrl,

                if (match) {
    if (video.published != null && !video.published.isEmpty()) {

 *
    }
    const movie = item
      let lengthSeconds = ''
    return {
      url.searchParams.set('c', clientName)
    return new YT.Playlist(innertube.actions, page, true)
 * @param {string | undefined} channelId
}
    const video = item
          }
 * @param {(Misc.TextRun|Misc.EmojiRun)[]} runs

      name,
              }
    }
          title: shelf.title.text,
 * @param {import('youtubei.js').YTNodes.LockupView} lockupView

  getRelativeTimeFromDate,
      continuationData: null
        lengthSeconds,

 */
    })
    }
      convertedFilters.upload_date = filters.time
      console.warn(`Unknown lockup content type: ${lockupView.content_type}`, lockupView)
async function createInnertube({ withPlayer = false, location = undefined, safetyMode = false, clientType = undefined, generateSessionLocally = true, fetchFunc = null } = {}) {
    // `BADGE_STYLE_TYPE_MEMBERS_ONLY` used for both `members only` and `members first` videos
            if (data.id === messageId) {
export async function getLocalPlaylistContinuation(playlist) {
                if (!realURL.searchParams.has(paramName)) { return }
        published: calculatePublishedDate(publishedText, liveNow, isUpcoming, premiereDate),

  let contentPoToken
export function parseLocalListVideo(item, channelId, channelName) {
      liveNow: false,
    const video_ = video
  }
            } else {
import { PlayerCache } from './PlayerCache'
      author: channelName,
      // so in search results, the author text is "Playlist" and doesn't have a link or channel ID
      channelName: internalChannelName,
 * @typedef {object} _LocalFormat
  try {

    } else {
 * the lightweight one only needs a single web request to create the new session
  if (!page) {

      let subscribers = null
    case 'GridMovie':

      title: compactStation.title.text,
    )
    let viewCount = null
 * @param {boolean} options.safetyMode whether to hide mature content
    .replace(pathPrefix, '')

 */
      type: 'playlist',

  }
    case 'C4TabbedHeader': {
      author: video_.author.name,
    type: 'community'
 */


      // example: Minecraft - Topic
      video.is_upcoming || video.is_premiere,
    decipheredUrlObject.pathname += `/${key}/${encodeURIComponent(value)}`
        bannerUrl = header.content.banner.image[0]?.url
    if (section.type === 'ItemSection') {
  const spacesAfterRegex = /\s+$/
function serializeContinuationItem(continuationItem, actions) {
  for (const video of videos) {
      results: [],
  }
            if (timestampRegex.test(text)) {
              TRACKING_PARAM_NAMES.forEach((paramName) => {

    return {

  while (playlist != null && playlist.has_continuation) {
        // doesn't have any videos.
      // examples: Music and YouTube Gaming

      if (!onlyIdNameThumbnail) {
    }
  const continuationItem = engagementPanelSectionList?.content?.contents?.[0]?.contents?.[0]
/**
 * }>}
  let path, payload

  } else {

    }
    /** @type {import('youtubei.js').YTNodes.GridVideo} */
      hasCaptions: video.has_captions

 * @param {string} continuation
    info.storyboards = trailerInfo.storyboards
    const response = await innertube.actions.execute('/browse', {
            altText = 'Custom emoji'
        multiplier = 9

       */
      title: gridPlaylist.title.text,

    throw new Utils.InnertubeError('There are no continuations.')


}
 *     clientVersion: string,
  } catch (error) {
 * the full one needs 3 (or 2 if the player is cached) web requests to create:
 * @param {string} [channelName]
    if (filters.features) {
    }
      lengthSeconds: video.duration.seconds

 * Based on YouTube.js' YT.Playlist.getContinuationData method
    return {
  /** @type {import('youtubei.js').YTNodes.ContinuationItem|undefined} */
  if (video.is(YTNodes.CompactMovie)) {
  return serializeContinuationItem(continuationItem, search.actions)
  })
      if (emoji.image.length > 0) {
  return await searchSuggestionsSession.getSearchSuggestions(query)

    if (liveStreamsTab.current_tab?.endpoint.metadata.url?.endsWith('/streams')) {
  } else {
        if (!channel.subscriber_count.isEmpty()) {
        id = topicChannelDetails.subscribe_button.channel_id

      liveNow: video.is_live,

        const shelf = itemSection.contents.at(0)
          if (emoji.shortcuts.length > 0) {
      return null
        // lazy load the emoji image so it doesn't delay rendering of the text
        title: lockupView.metadata.title.text,
 */
 */
            viewCount = views
  const deciphered = await player.decipher(urlObject.toString())
 */
      dataSource: 'local',
      if (header.content.actions) {
  const innertube = await createInnertube()
    })
 * @param {import('youtubei.js').YTNodes.BackstagePost[] | import('youtubei.js').YTNodes.SharedPost[] | import('youtubei.js').YTNodes.Post[] } posts
 * @param {string} id

  /** @type {import('youtubei.js').YTNodes.ContinuationItem | null} */
      throw error
            } else {
// I know `type & type` is typescript syntax and not valid jsdoc but I couldn't get @extends or @augments to work
    }
 * @property {string} text

        id,
export function parseLocalWatchNextVideo(video) {

    fetchFunc: async (input, init) => {
          subtitle: shelf.subtitle?.text,

        multiplier = 3
    }
      content: attachment.choices.map(choice => {
            playlistId,

}
      content: Object.values(attachment.choices).map(choice => {
      isNew: video.badges.some(badge => badge.label === 'New'),
      responseTime = Date.now()
    }

    }
        if (channelId) {
 * @param {boolean} doLogError
      convertedFilters.duration = filters.duration
        thumbnail: lockupView.content_image.primary_thumbnail.image[0].url,
        // so we should search for it instead of using hardcoded indexes, just to be safe for the future
/**

      parsedDecimals = match[2].padEnd(multiplier, '0')
    // toDash deciphers the format again, so if we overwrite the original URL,
    (hasTrailer && trailerIsAgeRestricted)

        params: 'EglzcG9ydHN0YWK4AQCSAwDyBgQKAjIA'
  }
  'utm_medium',
  if (filters) {
        dataSource: 'local',
        type: 'playlist',

        iframe.contentWindow.postMessage(JSON.stringify({ id: messageId, code }), '*')

      }
 * @param {string} channelId
        headers: response.headers
    authorId: comment.author.id,
      type: 'multiImage',
      } else if (itemSection.contents.at(0).type === 'ReelShelf') {
  return feed.videos.map(video => parseLocalListVideo(video))
      }
      browseId: id,
}
      // see upstream TODO: https://github.com/LuanRT/YouTube.js/blob/main/src/parser/classes/Channel.ts#L33
    } else {
    }
  return handleSearchResponse(response)
    }
        if (modal && modal.type === 'ModalWithTitleAndButton') {
            parsedRuns.push(`<a href="https://www.youtube.com${endpoint.metadata.url}">${text}</a>`)
    }
        channelId = maybeChannelText.endpoint.payload.browseId
      lengthSeconds: ''
      return {
  return parsedVideos
          const views = parseLocalSubscriberCount(count)
          } else if (emoji.search_terms.length > 0) {
export function parseLocalComment(comment, commentThread = undefined) {
      // placing them in the top right corner

  let trailerIsAgeRestricted = info.getTrailerInfo() === null
 * @callback untilEndOfLocalPlayListCallback
      } else {

import Autolinker from 'autolinker'
        channelCount: hashtag.hashtag_channel_count.isEmpty() ? null : parseLocalSubscriberCount(hashtag.hashtag_channel_count.text)
export function parseChannelHomeTab(homeTab, channelId, channelName) {
    // don't override the timestamp of when the video will premiere for upcoming videos
        }
        const modal = header.content.actions.actions_rows[0].actions[0].on_tap.modal
    let videos
          image: choice.image

      lengthSeconds: ''
  }
        publishedText = video_.video_info.text
    } else {
  // so return an empty array instead
  // `posts` includes the SharedPost's attached post for some reason so we need to filter that out.
  }
  }
    return {

        return part.text?.text && VIEWS_OR_WATCHING_REGEX.test(part.text.text)
      type: 'video',
      isUpcoming: video.is_upcoming,
    })
  } else {
  const page = await innertube.actions.execute(data.path, { ...data.payload, parse: true })
            const data = JSON.parse(event.data)
    }
  if (process.env.IS_ELECTRON) {


                realURL.searchParams.delete(paramName)
      if (process.env.IS_ELECTRON) {
      case 'b':
    return {
    console.error(attachment)
        handle = channel.subscriber_count.text
        }
      type: 'video',
 */
    enable_safety_mode: !!safetyMode,
 * 1. the request for the session
    const player = webInnertube.session.player
/**

    // if the channel doesn't have a community tab, YouTube returns the home tab instead
    }

    }
  return await getLocalArtistTopicChannelReleasesContinuation(channel, continuationItem)
    case 'sports':
      return {
    authorId: post.author.id,

          case 'WEB_PAGE_TYPE_SHORTS':
          .flatMap(row => row.metadata_parts ? row.metadata_parts : [])
    let videos
    } else if (playlist.author?.name) {
            altText = emoji.search_terms.join(', ')
    }
    searchSuggestionsSession = await createInnertube()
      // protobuf for the live tab (this is the one that YouTube uses,
      type: 'poll',
    .filter(part => part.length > 0)
    }

  } else if (attachment.type === 'Playlist') {

      totalVotes: parseLocalSubscriberCount(attachment.total_votes.text) ?? 0,
          videos = []
      type: 'video',
    return {
      if (channel.subscriber_count.text?.startsWith('@')) {
      })
        type: 'hashtag',
      info.playability_status.reason === 'Sign in to confirm your age') ||
  shelves.forEach(e => {
      info.streaming_data.server_abr_streaming_url = await player.decipher(info.streaming_data.server_abr_streaming_url)
    thumbnailUrl,
  }
 * @param {object} filters
        if (italics) {
    }
        .find(overlay => overlay.is(YTNodes.ThumbnailOverlayBadgeView))
      const { emoji } = run

    } else if (video.short_view_count?.text) {
    }
let searchSuggestionsSession = null
        const iframe = document.getElementById('sigFrame')
/**
 */

    // This setting is enabled by default and results in YouTube.js reusing the same session across different Innertube instances.
    } catch (error) {
  }
    retrieve_innertube_config: !generateSessionLocally,
    format.freeTubeUrl = await format.decipher(player)
      authorId: channelId,
  // some of the fields have different names and
    hasOwnerReplied,
      videos
  let replyCount = post.action_buttons?.reply_button?.text ?? null
    continuationItem = extractFeedContinuationItem(playlist)
              if (typeof instreamVideoAdRenderer.skipOffsetMilliseconds === 'number') {
    /** @type {import('youtubei.js').Helpers.YTNode & import('youtubei.js').APIResponseTypes.IEndpoint} */
    if (post.type === 'SharedPost') {
        reject(new Error('Please setup the eval function for the n/sig deciphering'))
    }

        id = channel.metadata.external_id
      isVr180: video.badges.some(badge => badge.label === 'VR180'),
/**
        parsedRuns.push(`<img src="${emoji.image[0].url}" alt="${altText}" width="${emojiSize}" height="${emojiSize}" loading="lazy" style="vertical-align: middle">`)
  const sectionList = playlist.memo.getType(YTNodes.SectionList)[0]
    }
    return {
  const results = response.results


  const engagementPanelSectionList = Parser.parseItem(rawEngagementPanel)
  escapeHTML,
 */
    /** @type {import('youtubei.js').YTNodes.Movie} */
/**
              if (data.error) {
function parseListItem(item, channelId, channelName) {
        webInnertube.session.player,
      return parseShort(item, channelId, channelName)
      if (env.n) {

      cache = new PlayerCache()
      // https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw

      }
 */
    postText: post.content.isEmpty() ? '' : Autolinker.link(parseLocalTextRuns(post.content.runs, 16)),

          }
    if (bypassedInfo.playability_status.status === 'OK' && bypassedInfo.streaming_data) {
 * an instance that can decode the streaming URLs, which is slower to create
export function parseLocalListPlaylist(playlist, channelId = undefined, channelName = undefined) {
    } else {
  let responseTime = Date.now()
/**
/**
        }
}
    }
    }
  const innertube = await createInnertube()
  // decipher
        return atob(navigationEndpoint.payload.params).replaceAll(/[^\d\sA-Za-z-]/g, ' ').trim().split(' ').at(-1)
export async function getLocalChannel(id) {
    } else {
}
      // the response can be the new or old one, so we currently need to handle both here
  } else {
      const channel = item
    decipheredUrlObject.pathname += '/mpd_version/7'
export async function getLocalChannelVideos(id) {

        internalChannelName = playlist.author.text

      }

  if (continuationItem.endpoint.command.is(YTNodes.CommandExecutorCommand)) {
    }
      info.streaming_data = bypassedInfo.streaming_data
      // it has some empty fields in the protobuf but it doesn't work if you remove them)
        for (const adSlot of json.adSlots) {
            break

    fetch: (fetchFunc ?? ((input, init) => fetch(input, init))),
  // Based on YouTube.js' NavigationEndpoint#call()
    let viewCount = null
    const published = calculatePublishedDate(
          title: shelf.title?.text,
 * @param {import('youtubei.js').Player} player
}

 * Based on YouTube.js' YT.Search.getContinuationData method

  }
 * @property {string} dataType
  const innertube = await createInnertube()

}
  const pathParts = urlObject.pathname
      parsedDecimals = '0'.repeat(multiplier)
  try {
    const published = calculatePublishedDate(

  if (video.type === 'ReelItem') {
    for (const captionTrack of info.captions.caption_tracks) {
      })
        publishedText = video_.video_info.runs[2].text

        const views = parseLocalSubscriberCount(viewsText)
    case 'InteractiveTabbedHeader': {
 * @property {any} payload
 */
 */
        : `${Date.now()}-${Math.floor(Math.random() * 10000)}`
    }

  }
  if (continuationData instanceof YT.Search) {
  const response = await innertube.actions.execute('/browse', args)

          formattedText = `<i>${formattedText}</i>`
export async function untilEndOfLocalPlayList(playlist, callback, options = { runCallbackOnceFirst: true }) {
  if (onlyIdNameThumbnail) {
  }
  let subscriberText
        if (!playlistId || !playlistId.startsWith('UUMO')) {
  return innertube.getComments(id)
      }

}
      videos = extractNumberFromString(channel.video_count.text)
  let id

    if (info.streaming_data.dash_manifest_url) {
    case 'CarouselHeader': {
  // The search suggestions endpoint does not like search queries larger than SEARCH_CHAR_LIMIT
        params: 'Egh0cmVuZGluZ7gBAJIDAPIGBAoCMgA'
 * @param {?import('youtubei.js').FetchFunction} options.fetchFunc optional custom fetch function
    return !foundIds.includes(post.id)
  /** @type {SerializedContinuation} */

 * @param {string} channelName
      thumbnailUrl
        statusText: response.statusText,
        // by defining a height and width, that space is reserved until the image is loaded

  }
    console.error(error)
  /** @type {string?} */

  if (!rawEngagementPanel) {
            break
      title: shortsLockupView.overlay_metadata.primary_text.text,
}
            } else {
    const webEmbeddedInnertube = await createInnertube({ clientType: ClientType.WEB_EMBEDDED })
        return {
    if (video.is(YTNodes.Video) && video.badges.some(badge => badge.style === 'BADGE_STYLE_TYPE_MEMBERS_ONLY')) {
  const innertube = await createInnertube()
      /**
      releases: channel.playlists.map(playlist => parseLocalListPlaylist(playlist)),
    case 'GridChannel': {
    let publishedText

      break

    const text = escapeHTML(run.text)
 * @param {import('youtubei.js').YTNodes.Video | import('youtubei.js').YTNodes.Movie} item
  urlObject.pathname = pathPrefix
        tags.push(...badges)
export async function getLocalTrending(location, tab) {
      return {
        videos = playlist.items.map(parseLocalPlaylistVideo)
      info.basic_info.start_timestamp = bypassedInfo.basic_info.start_timestamp
      // Triggers permission errors if we don't remove it (added by YouTube.js), as sessionStorage isn't accessible in sandboxed cross-origin iframes
 * @param {boolean} onlyIdNameThumbnail


    if (videosTab.current_tab?.endpoint.metadata.url?.endsWith('/videos')) {
  }
        videos,
        parsedRuns.push(formattedText)
  } catch (error) {
 * Parse community post
    case 'Video':

  })

 * 3. if the player isn't cached, it is downloaded and transformed
      videoCount: extractNumberFromString(compactStation.video_count.text)
import { ClientType, Constants, Innertube, Misc, Mixins, Parser, Platform, UniversalCache, Utils, YT, YTNodes } from 'youtubei.js'
      name,
 * @param {string} url
          altText = text
    throw new Utils.InnertubeError('Could not get continuation data')
/**
        if (emoji.is_custom) {
      return []
    case 'ShortsLockupView': {
        }
    }
      return parseLocalCommunityPosts(communityTab.posts)
 * @property {string} author
        name: game.title.text,

 * @param {string} continuation
    context: actions.session.context

       */
    case 'VideoCard':


            if (CHANNEL_HANDLE_REGEX.test(trimmedText) || options.looseChannelNameDetection) {
  /** @type {string[]} */
    // may contain HTML, so we need to escape it, as we don't render unwanted HTML
    // it breaks because the n param would get deciphered twice and then be incorrect

    id: comment.comment_id,
      browseId: id,
}
    case 'HashtagTile': {
      (continuation) => !headerContinuations.includes(continuation)

  }
    }
}


    .split('/')
          content: shelf.items.map((item) => parseListItem(item, channelId, channelName)).filter(_ => _)
 */
 * @param {YT.Search | SerializedContinuation} continuationData
      }
    // normal videos have 3 text runs with the last one containing the published date
    payload = command.buildRequest()
      let viewCount = null
  // others have empty strings that we don't want to pass to youtubei.js
  }
      params: 'EgZ2aWRlb3PyBgQKAjoA'

  return JSON.stringify(data)
              // this is probably a special YouTube URL like http://www.youtube.com/approachingnirvana
      }
 * @param {import('youtubei.js').Helpers.YTNode} item
 * @param {string} text

      /**
  }
      liveNow: video_.is_live,
        }
  }
    if (playlist.author && playlist.author.id !== 'N/A') {
      publishedText = video.published.text
       * @type {import('youtubei.js').YTNodes.ItemSection}
      title: video_.title.text,
            }
      const { bold, italics, strikethrough, endpoint } = run

    if (communityTab.current_tab?.endpoint.metadata.url?.endsWith('/posts')) {
  })
      webInnertube.session.player.po_token = contentPoToken
    case 'Post': {
  // Legacy format requires this

    hasOwnerReplied = commentThread.comment_replies_data.has_channel_owner_replied
              const spacesBefore = (spacesBeforeRegex.exec(text) || [''])[0]
 * @param {string} [channelName]

        const badges = header.badges.map(badge => badge.label).filter(tag => tag)
      // just in case the video title also contains that pattern
  let name
              const realURL = new URL(realURLStr)
    case 'VIDEO': {

      const channel = item
    generate_session_locally: !!generateSessionLocally
          thumbnailUrl = image.image[0].url
      } catch (error) {
/**
    }
      /** @type {import('youtubei.js').YTNodes.GameCard} */
            lengthSeconds = Utils.timeToSeconds(durationBadge.text)
  for (section of homeTab.current_tab.content.contents) {
  } else if (video.type === 'ShortsLockupView') {
    return { info, poToken: undefined, clientInfo }
  const response = await continuationData.endpoint.call(channel.actions, { parse: true })
      type: 'video',
    console.error(error)
 * @param {string} url
      published,
      thumbnailUrl = header.box_art.at(-1).url
      let subscribers = null
 */
              // remove utm tracking parameters
        true
    } else {
      } else if (navigationEndpoint.payload.browseId === 'FEpost_detail') {

 * @property {string} authorThumb
  } else {
 * @param {string} [channelId]
 *     clientName: number,
    return {
      id = channel.current_tab?.endpoint.payload.browseId
    }


      description: video.description,

        subscribers,
      type: 'video',
    // Resolve URL and allow 1 redirect, as YouTube should just do 1
        const shelf = itemSection.contents.at(0)
  return await Innertube.create({
        } else if (thumbnailOverlayBadgeView.badges.some(badge => badge.text.toLowerCase() === 'upcoming')) {
  // based on the videoId
  const data = {
  if (replyCount !== null) {
}
 * @typedef {object} SerializedContinuation
        browseId: 'FEpodcasts_destination',
      if (!onlyIdNameThumbnail) {
      }
      if (maybeChannelText && maybeChannelText.endpoint?.metadata.page_type === 'WEB_PAGE_TYPE_CHANNEL') {
        videos = extractNumberFromString(channel.video_count.text)
              const spacesAfter = (spacesAfterRegex.exec(text) || [''])[0]

    if (info.streaming_data.server_abr_streaming_url) {

            }
  const commentTextRuns = comment.voice_reply_container?.transcript_text ? comment.voice_reply_container.transcript_text.runs : comment.content.runs

}
      video_.is_upcoming,
  } else if (playlist.type === 'CompactStation') {
  return decipheredUrlObject.toString()
    if (error instanceof Utils.ChannelError) {
 */
    return {
}
}
/**

    path,
  try {
      thumbnailUrl = header.author.best_thumbnail.url
async function decipherFormats(formats, player) {

      case 'million':
        } else {
}
}
      videoId: video.video_id,
    // so we need to check that we got the right tab
 * @param {string} [channelName]
          content: shelf.contents.map(e => parseListItem(e.content, channelId, channelName)),
    let publishedText
  if (!attachment) {

    .filter((item) => item)
  const memo = response.on_response_received_endpoints_memo
  if (feed.page.header_memo) {

    if (error instanceof Utils.ChannelError) {
            const url = new URL((endpoint.dialog?.type === 'ConfirmDialog' && endpoint.dialog.confirm_button.endpoint.payload.url) || endpoint.payload.url)
export async function getLocalSearchContinuation(continuationData) {
      }
                urlChanged = true
          formattedText = `<b>${formattedText}</b>`
 * @returns the Innertube instance
    results,
        url = navigationEndpoint.payload.url
/**
      videoId: video_.id,
 */


    hasReplyToken,
 * @returns {SerializedContinuation}
        params: 'qgcCCAM%3D'
 * @param {number} emojiSize
    releases: playlists ? playlists.map(playlist => parseLocalListPlaylist(playlist)) : [],
        author: lockupView.metadata.metadata?.metadata_rows[0].metadata_parts?.[0].text?.text,
    // example: https://youtu.be/Hh_se2Zqsdk (see pinned comment)
  return {
    dataType: 'local',
  if (!continuationItem) {
      type: 'quiz',
    .map((item) => parseListItem(item))
export async function getLocalPlaylist(id) {
    case 'PLAYLIST':
  return {
import { FormatXTags } from '../../../../node_modules/youtubei.js/dist/protos/generated/misc/common'
export async function getHashtagLocal(hashtag) {
          ?.text?.text

      info.playability_status = bypassedInfo.playability_status
      }
          }
      authorId: video.author.id,
/**
      if (itemSection.contents.at(0).type === 'Shelf') {
      const properties = []
]
if (process.env.SUPPORTS_LOCAL_API) {

  // convert query parameters back to path parameters
    const trailerInfo = info.getTrailerInfo()
    const bypassedInfo = await webEmbeddedInnertube.getBasicInfo(videoId, { client: 'WEB_EMBEDDED', po_token: contentPoToken })

    /** @type {import('youtubei.js').YTNodes.GridPlaylist} */
      }

      if (env.sig) {
    webEmbeddedInnertube.session.context.client.visitorData = webInnertube.session.context.client.visitorData
}
      thumbnailUrl = topicChannelDetails.avatar[0].url
    const shortsLockupView = short
    case 'PageHeader': {
 * @property {boolean} isPinned


 * @param {LocalFormat} format
      content: parseLocalListVideo(attachment)
      args = {
  }

  if (isDash) {
export async function getLocalSearchSuggestions(query) {
      info.streaming_data.dash_manifest_url = await decipherManifestUrl(
    author: comment.author.name,
          case 'WEB_PAGE_TYPE_WATCH':
          throw error
          subscribers = parseLocalSubscriberCount(channel.video_count.text)
    case 'podcasts':
 * @param {import('youtubei.js').Player} player
    return parseInt(match[1] + parsedDecimals)
      author: video.author.name,



    }

        // filter out the members-only video section as none of the videos in that section are playable as they require a paid channel membership
    // YouTube hides the vote/like count on posts when it is zero
          title: shelf.header.title.text,
    postId: post.id,
      args = {
        name: channel.author.name,
      /**
    // but we have the premiere date for those, so we don't need the published date
       * @type {import('youtubei.js').YTNodes.TopicChannelDetails}
  }
  ) {
  }
      type: 'playlist',
  }
    } else {
      author: video.author?.name ?? channelName,

          subscribers = parseLocalSubscriberCount(channel.subscriber_count.text)
        id = channel.metadata.external_id
export function parseLocalTextRuns(runs, emojiSize = 16, options = { looseChannelNameDetection: false }) {
    })
        // as it's rare that a video has no views,
      channelId: internalChannelId,
        })
        isUpcoming,
      videoCount: extractNumberFromString(playlist.video_count.text)
  } else {
      info.basic_info.start_timestamp = trailerInfo.basic_info.start_timestamp
    }

      if (!onlyIdNameThumbnail) {
        bannerUrl = header.banner?.[0]?.url

    replyToken,
      /** @type {YTNodes.ThumbnailOverlayBadgeView | undefined} */
    /** @type {import('youtubei.js').YTNodes.ReelItem} */

      published,

      publishedText = video.published.text
/**
 * @param {string} id
  if (commentThread?.has_replies) {
export function parseLocalChannelHeader(channel, onlyIdNameThumbnail = false) {
      result = {
      thumbnail: gridPlaylist.thumbnails.at(0).url,
    cache,

    url: format.freeTubeUrl
    poToken: contentPoToken,
}
 */
      publishedText = video.published.text
      }
  const foundIds = []
    }
  try {
  }
      // Generate a unique ID, as there may be multiple eval calls going on at the same time (e.g. DASH manifest generation)
      return item.type === 'Video' || item.type === 'Channel' || item.type === 'Playlist' || item.type === 'HashtagTile' || item.type === 'Movie' || item.type === 'LockupView'
 */

      // the `.*\s+` at the start of the regex, ensures we match the last occurence

    return await player.decipher(urlObject.toString())
      } else if (!hasRuns && video_.video_info.text) {
       * @type {import('youtubei.js').YTNodes.PageHeader}
 * @param {'playlist' | 'search'} type
 *
      // eg: pinned comment here https://youtu.be/v3wm83zoSSY

        // so if we get an error that the playlist doesn't exist here, it just means that this artist topic channel
 */
      return {
 */
      )
              parsedRuns.push(`https://www.youtube.com${endpoint.metadata.url}`)
          }
      const modifiedOutput = data.output.replace('const window = Object.assign({}, globalThis);', '')
}
}
        browseId: 'UCEgdi0XIXXZ-qJOFPf4JSKw',
        info.streaming_data.hls_manifest_url,
    const shortsLockupView = video
          isUpcoming = true
  }
 * @property {number} likes
        /** @param {MessageEvent} event */
      }
  }
    // check the length of the results, as there can be continuations for things that we've filtered out, which we don't want
    itag: format.itag,
  'utm_source',
/**
      lengthSeconds: isNaN(movie.duration.seconds) ? '' : movie.duration.seconds,


        }
  switch (item.type) {
        switch (endpoint.metadata.page_type) {


        }
        const playlistId = shelf.play_all_button?.endpoint.payload.playlistId
      case 'B':
      authorId: movie.author.id !== 'N/A' ? movie.author.id : channelId,
      authorId: video.author.id,
      videos = parseLocalChannelVideos(tempVideos, channelId, name)
      continuationData: null
 */

        }
    // Youtube can provide useless continuation data
} from '../utils'
 * @param {string} [channelId]
        // checking the length allows us to avoid running toLowerCase unless we have to
 * @param {string | undefined} channelName

    // That behavior is highly undesirable for FreeTube, as we want to create a new session every time to limit tracking.
      playlistId: playlist.id,
    if (!error.message.includes('Got empty continuation response.')) {
      let liveNow = false
      liveNow: isLive
/**
  return {
      }
        }
    }
      // https://wiki.archiveteam.org/index.php/YouTube/Technical_details#Playlists
    const thumbnailRenderer = playlist.thumbnail_renderer
    likes: comment.like_count,
 * @property {boolean} isHearted
    subscriberText,
      if (Array.isArray(json.adSlots)) {

    return {
    // the accessiblity text is the only place with the view count
    let multiplier = 0
  }
    commentCount: replyCount,
  }

 * @typedef {object} LocalComment
  for (const run of runs) {

        let formattedText = text

      thumbnail: compactStation.thumbnail[1].url,
      // Re-throw unhandled error
        }

      }
      video_.is_live,
        })

 */
        // If the channel doesn't exist, the API call to channel page above would have already failed,
  }
      premiereDate: video.upcoming,
      type: 'video',
 */
      title: movie.title.text,
    }

  if (info.streaming_data) {
  }
  const innertube = await createInnertube()


      }
    if (video.published != null && !video.published.isEmpty()) {

    }
    console.error(`Unknown Local community post type: ${attachment.type}`)
/**

      video.is_live,
      if (match) {
      type: 'image',
  const parsedRuns = []
    ((info.playability_status.status === 'UNPLAYABLE' || info.playability_status.status === 'LOGIN_REQUIRED') &&
    case 'LockupView':
    isHearted: !!comment.is_hearted,
      content: attachment.images.map(thumbnail => thumbnail.image)
  return convertedFilters

      videoId: video.video_id,
                  totalAdTimeMilliseconds += parseFloat(match[1]) * 1000
      viewCount: video.views.text == null ? null : extractNumberFromString(video.views.text),
    return {
  return {
      throw error
        viewCount,

  }
function parseLocalAttachment(attachment) {

  const shelves = []
    postContent: parseLocalAttachment(post.attachment),
  /**
          const image = header.content.image
      // https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg
  for (const [key, value] of decipheredUrlObject.searchParams) {
        const shelf = section.content
              parsedRuns.push(urlChanged ? realURL.toString() : realURLStr)
    }
    if (info.streaming_data.hls_manifest_url) {

    if (filters.duration) {
      isUpcoming: false,

 * @param {untilEndOfLocalPlayListCallback} callback
/**

      case 'K':
 * @param {import('youtubei.js').ClientType} options.clientType use an alterate client
      const messageId = process.env.IS_ELECTRON || crypto.randomUUID
      author: video.author.name !== 'N/A' ? video.author.name : channelName,
      continuationData: null

    if (error instanceof Utils.ChannelError) {
  if (hasTrailer && info.playability_status.status !== 'OK') {
  }
 * @overload
          viewCount = views
      /** @type {import('youtubei.js').YTNodes.GridChannel} */
      name,
    if (isDash) {
const VIEWS_OR_WATCHING_REGEX = /views?|watching/i
    // We want to avoid an endless loop
        if (bold) {
  }
    return undefined
    isOwner: !!comment.author_is_channel_owner,
  return {
  }
    voteCount: post.vote_count ? parseLocalSubscriberCount(post.vote_count.text) : 0,
      const json = JSON.parse(responseText)
}
/**
  }
    const isLive = video.duration.text === 'LIVE'
        /** @type {import('youtubei.js').YTNodes.RichShelf} */
/**
    case 'GridVideo':

      publishedText,
      const maybeChannelText = lockupView.metadata?.metadata?.metadata_rows?.[0]?.metadata_parts?.[0]?.text
 */

    return {
        liveStreamsTab = await liveStreamsTab.getContinuation()
      const header = channel.header
      video_.upcoming
    }
 */

 * @param {import('youtubei.js').YTNodes.CommentView} comment
function handleSearchResponse(response) {
        contentPoToken,

    await decipherFormats(info.streaming_data.formats, player)
 * @param {string} [channelName]
          isCorrect: choice.is_correct,
}
    default:
      // auto-generated album playlists don't have an author
    // so we need to check that we got the right tab

      is8k: video.badges.some(badge => badge.label === '8K'),
  /** @type {SerializedContinuation} */
 * @returns {Promise<{
  // reuse innertube instance to keep the search suggestions snappy
          subtitle: shelf.header.subtitle.text
      published,
    mimeType: format.mime_type,
    osName,
export function parseLocalChannelVideos(videos, channelId, channelName) {
    clientName: Constants.CLIENT_NAME_IDS[clientName],
  const data = JSON.parse(continuation)
  } else {
async function decipherManifestUrl(url, player, poToken, isDash) {
 * @property {boolean} isMember

    console.error(error)
  Platform.shim.eval = (data, env) => {
  const innertube = await createInnertube({ safetyMode })
}
  const innertube = await createInnertube()
      title: video.title.text,
 */
      const playlistId = lockupView.content_id
        }
 * @param {string} query
          default: {
      trailerIsAgeRestricted = false;
 * @param {string} [channelId]
  if (playlist.type === 'LockupView') {
      channelName: gridPlaylist.author?.name,
  }
   */
  const urlObject = new URL(url)
    enable_session_cache: false,
        type: 'channel',
      internalChannelName = playlist.author.name
 * @param {boolean} isDash
    if (video.view_count?.text) {

 * @param {'playlist'} type

  }
        }
       * @type {import('youtubei.js').YTNodes.CarouselHeader}
    return {
    if (info.playability_status.status !== 'LIVE_STREAM_OFFLINE') {
  return parsedRuns.join('')
        }
      return {
 *   poToken: string | undefined,
            title: shelf.title.text,
 * @param {import('youtubei.js').YTNodes.ContinuationItem} continuationData
      const itemSection = section
  let bannerUrl
  switch (lockupView.content_type) {
          playlistId: shelf.endpoint?.metadata.url.includes('/playlist') ? shelf.endpoint?.metadata.url.replace('/playlist?list=', '') : null
    replyToken = commentThread
 * @param {import('youtubei.js').Actions} actions
      case 'k':
      lengthSeconds: isNaN(movie.duration.seconds) ? '' : movie.duration.seconds,

  if (!continuationItem) {
          content: shelf.cards.map((item) => parseListItem(item, channelId, channelName)).filter(_ => _),
      title: video.title.text,
    }
    }
  if (channelId == null) {
 */
        const playlist = await innertube.getPlaylist(getChannelPlaylistId(channelId, 'videos', 'newest'))
      }
}
          case 'WEB_PAGE_TYPE_BROWSE':

    }
 * @param {import('youtubei.js').YT.Playlist} playlist
  /** @type {string?} */

      // protobuf for the community tab (this is the one that YouTube uses,
    }
export async function getLocalCommunityPost(postId, channelId) {
    withPlayer: true,
            }
      throw error

    isMember: !!comment.is_member,
  if (!Array.isArray(runs)) {
    } else if (section.type === 'RichSection') {
      const url = new URL(captionTrack.base_url)
          viewCount = 0
    if (thumbnail.url.startsWith('//')) {


    const movie = item
    }
  let args
          if (lockupView.metadata.metadata?.metadata_rows[1].metadata_parts?.[1].text?.text) {
      // it has some empty fields in the protobuf but it doesn't work if you remove them)
        }
      type: 'video',
    if (doLogError) {
 * @property {boolean} showReplies
/**
    if (!video_.is_upcoming && !video_.is_live) {
 * @param {string} [channelId]
  return await innertube.getPostComments(postId, channelId)
    /** @type {import('youtubei.js').YTNodes.ReelItem} */

  if (searchSuggestionsSession === null) {
            if (url.hostname === 'www.youtube.com' && url.pathname === '/redirect' && url.searchParams.has('q')) {

        } else {
        } else {
}
  } else if (playlist.type === 'GridPlaylist') {
 * @param {boolean} options.withPlayer set to true to get an Innertube instance that can decode the streaming URLs
          const image = header.content.image
    if (filters.sortBy) {
      hasTrailer = false
      const response = await fetch(input, init)
      videoCount: extractNumberFromString(gridPlaylist.video_count.text)

    const { id: channelId = id, name, thumbnailUrl } = parseLocalChannelHeader(videosTab, true)
        window.addEventListener('message', listener)
    return parseLockupView(playlist, channelId, channelName)
  // see: https://github.com/FreeTubeApp/FreeTube/issues/3252#issuecomment-1546675781

      }

  }
/**


  return continuationItem
      video.upcoming
       */
 * @param {string} poToken
      }
    const videosTab = new YT.Channel(null, response)
    }
/**
      /** @type {import('youtubei.js').YTNodes.GameDetails} */
      viewCount: reelItem.views.isEmpty() ? null : parseLocalSubscriberCount(reelItem.views.text),
  }

            if (instreamVideoAdRenderer) {
 */
function convertSearchFilters(filters) {
  let cache
  }
 */
       */
      const header = channel.header
 * @param {YT.Channel} channel
 * @property {CommentThread} replyToken

              // `searchParams.delete` changes query string unnecessarily

}
        tempVideos = liveStreamsTab.videos
 *   adEndTimeUnixMs: number

export async function getLocalCachedFeedContinuation(type, continuation) {
      cache = new UniversalCache(false)
 * Returns the channel or the channel termination reason
      video.is_live,
      thumbnail: thumbnailRenderer ? thumbnailRenderer.thumbnail[0].url : playlist.thumbnails[0].url,
              }
    authorThumb: comment.author.best_thumbnail.url,
      type: 'video',
    if (filters.time) {
    return {
      const navigationEndpoint = await innertube.resolveURL(url)
      // https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg
 * @param {import('youtubei.js').YTNodes.CommentThread} commentThread
          text: choice.text.text,
      } else if (navigationEndpoint.metadata.page_type === 'WEB_PAGE_TYPE_UNKNOWN' && navigationEndpoint.payload.url?.startsWith('https://www.youtube.com/')) {
      title: reelItem.title.text,
      authorId: (video.author?.id != null && video.author.id !== 'N/A') ? video.author.id : channelId,
    }
          internalChannelId = channelId
      break
    }
      viewCount,
  }
/**
    continuationData: response.has_continuation && results.length > 0 ? response : null

    response = await continuationData.getContinuation()
        id: game.endpoint.payload.browseId,
    } else {

      publishedText,
  if (
      description: movie.description_snippet?.text,
export async function getLocalChannelId(url, doLogError = false) {

  const authorThumbnails = post.author.thumbnails
  return serializeContinuationItem(continuationItem, playlist.actions)
          if (!isNaN(views)) {
    }
        false
              parsedRuns.push(`https://www.youtube.com${endpoint.metadata.url}`)
  /** @type {string} */
        let altText
    )

/**
      lengthSeconds: ''
      viewCount = video.view_count.text.toLowerCase() === 'no views' ? 0 : extractNumberFromString(video.view_count.text)

 *   clientInfo: {
        return null
export async function getLocalArtistTopicChannelReleases(channel) {
              })
        const shelf = itemSection.contents.at(0)
      type: 'video',
/**
        contentPoToken,
      })?.text?.text
        status: response.status,
    e['isCommunity'] = e.content.at(0)?.type === 'community'
}
import {
  return result
    const communityTab = new YT.Channel(null, response)
}
      }
      title: shortsLockupView.overlay_metadata.primary_text.text,
      videos = parseLocalChannelVideos(videosTab.videos, channelId, name)


    }
        }
/**


              parsedRuns.push(endpoint.payload.url)
        videos,


    }
            subtitle: shelf.subtitle?.text
          }
    }
    memberIconUrl: comment.is_member ? comment.member_badge.url : '',


      type: 'video',
      isUpcoming: video_.is_upcoming,


 * @param {YTNodes.CompactVideo | YTNodes.CompactMovie | YTNodes.LockupView} video
    case 'GameCard': {
      throw error
  const innertube = await createInnertube()
      browseId: id,
        dataSource: 'local',
        type: 'video',
    if (shortsLockupView.accessibility_text) {
      }
    return {
      return parseLocalListVideo(item, channelId, channelName)
    retrieve_player: !!withPlayer,
  if (attachment.type === 'BackstageImage') {
      // empty array if video creator removes a channel emoji so we ignore.
          .find(part => part.text?.text?.includes('subscriber'))
  } catch (e) {
      lengthSeconds: isNaN(video.duration.seconds) ? '' : video.duration.seconds,
  const spacesBeforeRegex = /^\s+/
  } else if (video.is(YTNodes.LockupView)) {
export function parseLocalChannelShorts(shorts, channelId, channelName) {
              window.removeEventListener('message', listener)
  } else if (attachment.type === 'Video') {
const TRACKING_PARAM_NAMES = [
  } else {

    const compactStation = playlist
}
      videoId: short.id,
  searchSuggestionsSession = null

        descriptionShort: channel.description_snippet.text
      authorId: video.author.id !== 'N/A' ? video.author.id : channelId,
    continuationItem = playlist.memo.getType(YTNodes.ContinuationItem)
 * 2. fetch a page that contains a link to the player
      videoId: video.video_id,
      }
  }
        videoCount: extractNumberFromString(thumbnailOverlayBadgeView.badges[0].text)

}
      content: attachment.image
      break
      const header = channel.header

  let continuationItem
    for (let i = 0; i < 2; i++) {
      }

  const match = text.match(/(\d+)(?:[,.](\d+))?\s?([BKMbkm]|million)\b/)
    return null
            break
    continuationData: continuationItem
      premiereDate: movie.upcoming

      }

  let hasTrailer = info.has_trailer

    numReplies: parseLocalSubscriberCount(comment.reply_count)
/**
 * @param {import('youtubei.js').Mixins.Feed} feed
    }
      author: movie.author.name !== 'N/A' ? movie.author.name : channelName,
  } else if (attachment.type === 'Quiz') {
      id,
 * Parse community posts
      name = header.content.title.text.text
  if (urlObject.searchParams.size > 0) {
  }
      }
        type: 'channel',
      // User channels (an A/B test at the time of writing)
      viewCount: parseLocalSubscriberCount(short.views.text),
        type: 'channel',
        properties.push(`n: exportedVars.nFunction("${env.n}")`)
  const timestampRegex = /^(?:\d+:){1,2}\d+$/
    text: Autolinker.link(parseLocalTextRuns(commentTextRuns, 16, { looseChannelNameDetection: true })),
    response = await getLocalCachedFeedContinuation('search', continuationData)
    // upcoming either videos don't have any info text or the number of people waiting,
              ?.renderingContent?.instreamVideoAdRenderer
  // so no need to check.
              parsedRuns.push(`${spacesBefore}<a href="https://www.youtube.com/channel/${endpoint.payload.browseId}">${trimmedText}</a>${spacesAfter}`)

      totalVotes: parseLocalSubscriberCount(attachment.total_votes.text) ?? 0,
          const typedModal = modal
 * Creates a lightweight Innertube instance, which is faster to create or
export function parseLocalCommunityPosts(posts) {
/**
      const game = channel.game
 *     osName: string,
  // image post
  return shorts.map(short => parseShort(short, channelId, channelName))
    case 'Movie':
 * @property {boolean} isOwner
      viewCount: shortsLockupView.overlay_metadata.secondary_text ? parseLocalSubscriberCount(shortsLockupView.overlay_metadata.secondary_text.text) : null,
export async function getLocalCommunityPostComments(postId, channelId) {
}
  } catch (error) {
      if (!onlyIdNameThumbnail && header.content.banner) {
  }
 */
      params: 'EgVwb3N0c_IGBAoCSgA%3D'
 * @param {import('youtubei.js').YT.Channel} homeTab
    }
      publishedText,
    case 'CompactStation':
  const rawEngagementPanel = channel.shelves[0]?.menu?.top_level_buttons?.[0]?.endpoint.payload?.engagementPanel
      while (tempVideos.length === 0 && liveStreamsTab.has_continuation) {
  }
      } else {
    case 'ReelItem':

  try {
      const views = parseLocalSubscriberCount(viewsText)
    } else if (name.endsWith('- Topic') && !!videosTab.metadata.music_artist_name) {
  }
  } catch (error) {
      /** @type {import('youtubei.js').YTNodes.Channel} */
      if (endpoint) {
      content: parseLocalListPlaylist(attachment)
      console.error('Local API, poToken generation failed', error)
        webInnertube.session.player,
  if (match) {

  return await innertube.getHashtag(hashtag)
 * @param {string} id
  }
      // example: YouTube Gaming

      throw error
      // Filter out mixes without playlist pages (we don't support watch page-only mixes)

    try {

    payload = continuationItem.endpoint.payload
    // if the channel doesn't have a videos tab, YouTube returns the home tab instead
      let premiereDate
    client_type: clientType,

 */
    const innertube = await createInnertube()
      if (!onlyIdNameThumbnail && header.content.metadata) {
      // https://www.youtube.com/gaming/trending
  let hasOwnerReplied = false
  return xtags.some(tag => tag.key === 'vb' && tag.value === '1')

      }



        return fetch(input, init)
          publishedText = lockupView.metadata.metadata?.metadata_rows[1].metadata_parts?.find(part => part.text?.text?.endsWith('ago'))?.text?.text
  const postPage = await innertube.getPost(postId, channelId)
}

        videoCount: hashtag.hashtag_video_count.isEmpty() ? null : parseLocalSubscriberCount(hashtag.hashtag_video_count.text),
/**
}
      captionTrack.base_url = url.toString()
      /**
function parseLocalCommunityPost(post) {
 * @param {boolean} options.generateSessionLocally generate the session locally or let YouTube generate it (local is faster, remote is more accurate)
    return extractNumberFromString(text)
    bitrate: format.bitrate,
 * @param {YTNodes.ReelItem | YTNodes.ShortsLockupView} short
        /** @type {import('youtubei.js').YTNodes.ReelShelf} */
  authorThumbnails.forEach((thumbnail) => {


  }
   * @type {import('youtubei.js').YTNodes.ItemSection | import('youtubei.js').YTNodes.RichSection}

        shelves.push({
    }
  if (options.runCallbackOnceFirst) { callback(playlist) }
    qualityLabel: format.quality_label,
    let internalChannelId = null
                reject(data.error)
      const match = shortsLockupView.accessibility_text.match(/.*\s+(\d+(?:[,.]\d+)?\s?(?:[BKMbkm]|million)?|no)\s+views?/)
      return parseLocalCommunityPost(item)
      title: movie.title.text,
    case 'gaming':
          }
  const parsedVideos = []
        thumbnail: channel.author.best_thumbnail?.url.replace(/^\/\//, 'https://'),
 */
  const info = await webInnertube.getInfo(id, { po_token: contentPoToken })
      } else if (header.content.animated_image) {
  // we don't currently support SharedPost's so that is also filtered out
  return null
  getChannelPlaylistId,
      videoId: shortsLockupView.on_tap_endpoint.payload.videoId,
            }
      }
 * @param {string} channelId
    .filter((item) => {
  return handleSearchResponse(response)
    /** @type {import('youtubei.js').YTNodes.CompactStation} */
  }
  }

      const hasRuns = !!video_.video_info.runs
        shelves.push({
      } else {
  }
  calculatePublishedDate,

  for (let i = 0; i + 1 < pathParts.length; i += 2) {
      authorId: movie.author.id !== 'N/A' ? movie.author.id : channelId,
        bannerUrl = header.banner[0]?.url
  let totalAdTimeMilliseconds = 0
        const listener = (event) => {
    )
        dataSource: 'local',

        subscriberText = header.subscribers?.text
 * @property {boolean} hasOwnerReplied
      const topicChannelDetails = header.contents.find(node => node.type === 'TopicChannelDetails')


/**

        // that way we avoid layout shifts when it loads
  let hasReplyToken = false
  const innertube = await createInnertube()
    }
  })
    throw new Utils.InnertubeError('There are no continuations.')
        id: channel.author.id,
              // Note that in regex `\s` must be used since the text contain non-default space (the half-width space char when we press spacebar)
        id: channel.author.id,
      viewCount,
    info.streaming_data = trailerInfo.streaming_data
  let continuationItem
 * @property {LocalComment[]} replies
    }
        handle: null,
      title: playlist.title.text,
 * @param {string} id

    fps: format.fps,
/**
    authorThumbnails,
  } else {
      isUpcoming: video.is_premiere
      console.error(e)
      viewCount: video.view_count == null ? null : extractNumberFromString(video.view_count.text),
      let tempVideos = liveStreamsTab.videos
      continue
    /** @type {import('youtubei.js').YTNodes.ShortsLockupView} */
/** @type {Innertube | null} */
  'utm_campaign',

    }
  return shelves
      }
      const code = `${modifiedOutput}\nreturn {${properties.join(', ')}}`
    playlist = await getLocalPlaylistContinuation(playlist)

    return {
      author: movie.author.name !== 'N/A' ? movie.author.name : channelName,
       * @type {import('youtubei.js').YTNodes.InteractiveTabbedHeader}
    clientVersion,
  try {
 * @param {YT.Search} response
 * @param {{looseChannelNameDetection: boolean}} options
export async function getLocalChannelCommunity(id) {
      /**
        JSON.stringify(webInnertube.session.context)
      convertedFilters.sort_by = filters.sortBy

  let thumbnailUrl
            const trimmedText = text.trim()
      }
  const decipheredUrlObject = new URL(deciphered)
 * @param {import('youtubei.js').YTNodes.ContinuationItem} continuationItem
  const continuationItem = memo.get('ContinuationItem')?.[0] ?? null
        videoId: lockupView.content_id,
    }
  }
  }
                const match = instreamVideoAdRenderer.playerVars.match(/length_seconds=([\d.]+)/)
        subscriberText = header.content.metadata.metadata_rows
}
      break
      case 'M':
export async function getLocalVideoInfo(id) {
  const webInnertube = await createInnertube({
          })
  decipheredUrlObject.search = ''
      authorId: (video_.author?.id != null && video_.author.id !== 'N/A') ? video_.author.id : null,
      internalChannelId = channelId
    }
    return []

        if (!isNaN(views)) {
      } else if (itemSection.contents.at(0).type === 'HorizontalCardList') {
    const video = item
      return parseLocalListPlaylist(item, channelId, channelName)
      author: channelName,
    return {
      video.upcoming


 * @property {string} authorLink
      premiereDate: video_.upcoming
      thumbnailUrl,

  CHANNEL_HANDLE_REGEX,
      } else {
 * @overload
        // YouTube has already changed the indexes for where the information is stored once,
  }
  }
        return {
      videoId: reelItem.id,

  if (type === 'playlist') {
      type: 'video',
    switch (match[3]) {
      }
}
}
}
      )
        channelName = maybeChannelText.text
    /** @type {import('youtubei.js').YTNodes.PlaylistVideoThumbnail} */

 * @param {string} id
/**
      thumbnail.url = 'https:' + thumbnail.url
      // https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw/sportstab?ss=CMMG
export async function getLocalComments(id) {
      const thumbnailOverlayBadgeView = lockupView.content_image.primary_thumbnail.overlays
    const { id: channelId = id, name, thumbnailUrl } = parseLocalChannelHeader(liveStreamsTab, true)
  let response
      ({ clientName, clientVersion, osName, osVersion } = webEmbeddedInnertube.session.context.client)
  } else {
/**
    user_agent: navigator.userAgent,
    } else if (channelId || channelName) {
 * @param {import('youtubei.js').YT.Playlist} playlist

      break
export function mapLocalLegacyFormat(format) {
      }
export function extractLocalCacheablePlaylistContinuation(playlist) {
          formattedText = `<s>${formattedText}</s>`
                }
  } else if (item.type === 'GridMovie') {
    return null
      isUpcoming: movie.is_upcoming,

      if (header.content.image) {
        properties.push(`sig: exportedVars.sigFunction("${env.sig}")`)
      lengthSeconds: isLive ? '' : Utils.timeToSeconds(video.duration.text),
       */
 */
        dataSource: 'local',
    return {
      const hashtag = item
    return new Promise((resolve, reject) => {


      const thumbnailOverlayBadgeView = lockupView.content_image?.overlays?.firstOfType(YTNodes.ThumbnailOverlayBadgeView)
