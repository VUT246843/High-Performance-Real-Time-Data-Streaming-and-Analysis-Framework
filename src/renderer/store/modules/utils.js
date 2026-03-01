
      ['%S', date.getSeconds().toString().padStart(2, '0')], // second 2 digits
            break
  getSearchSettings(state) {
      ['%Y', date.getFullYear()], // year 4 digits
} from '../../helpers/utils'
  },
  lastTrendingRefreshTimestamp: {

        // 'timeAdded',
        const postId = match.groups.postId
      }
            break
    // - query [Object]
      } else if (payload.searchPage) {
        const videoPropertyKeys = Object.keys(video)
    return state.toBeAddedToPlaylistVideoList
  /**
        if (url.searchParams.has('search_query')) {


    duration: '',

  newPlaylistVideoObject: [],
      url = new URL(urlStr)
  },


        }
    //
      return {
          case 'releases':
  setSearchSortBy (state, value) {
  },
  },
  setShowCreatePlaylistPrompt (state, payload) {
    state.searchSettings.sortBy = value
    commit('resetNewPlaylistDefaultProperties')
  },

    const externalPlayerMap = await (await fetch(url)).json()
  setRegionNames (state, value) {
    //

    state.lastPopularRefreshTimestamp = timestamp

  setSearchFeatures (state, value) {
  },
  setSessionSearchHistory (state, history) {
import {

  setExternalPlayerCmdArguments (state, value) {
  getVideoParamsFromUrl,
  replaceFilenameForbiddenChars,
    commit('setExternalPlayerValues', externalPlayerValues)
      state.deArrowCache[payload.videoId] = payload
    time: '',
    if (!Array.isArray(videoObjectArray)) {

    externalPlayerMap.unshift(playerNone)


    let parsedString = pattern
  cachedPlaylist: null,
          case 'playlists':
    state.externalPlayerCmdArguments = value
    }

    state.isKeyboardShortcutPromptShown = payload
    return state.outlinesHidden
  },
    return state.appTitle
        const hashtag = match.groups.tag
        timestamp
    // - searchQuery [String]
          case 'community':
  progressBarPercentage: 0,
      case 'hashtag': {
      case 'post': {
      return {
    state.trendingCache[page] = null
const mutations = {
      ['hashtag', hashtagPattern],

  },
  subscriptionFirstAutoFetchRunData: {

  setNewPlaylistVideoObject (state, payload) {
  },
    }
  },
  },
    sortBy: 'relevance',
  },
  },
      Channel URL (ID-based)


      videoDataValid = false
  },
    for (const [key, value] of keywords) {
        urlType: 'video',
          time: searchSettings.time,
  },
   */
  },

  },
  },

      case 'playlist': {
        return {
    const { videoId, timestamp, playlistId } = getVideoParamsFromUrl(urlStr)
    return state.subscriptionFirstAutoFetchRunData.posts === true
  getSearchFilterValueChanged(state) {
  toggleSideNav (state) {
      ['channel', channelPattern],
      return search.query === payload.query && searchFiltersMatch(payload.searchSettings, search.searchSettings)
    externalPlayerMap.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
        }
          case 'about':
      case 'feed': {
          duration: searchSettings.duration,
        const searchSettings = state.searchSettings
          urlType: 'channel',
    const sameSearch = state.sessionSearchHistory.findIndex((search) => {
  toBeAddedToPlaylistVideoList: [],
      return result
    }
      https://www.youtube.com/channel/UCfMJ2MchTSW2kWaT0kK94Yw

  recentBlogPosts: [],
    const keywords = [

  },
    commit('setOutlinesHidden', true)
export default {
    ])
    }
  },
    const externalPlayerValues = externalPlayerMap.map((entry) => { return entry.value })
  },
  getCachedPlaylist(state) {
        const feedType = url.pathname.match(feedPattern).groups.type
          // The original URL could be from Invidious.
  },
      https://www.youtube.com/c/YouTubeCreators

        if (!url.searchParams.has('list')) {
          searchQuery = url.searchParams.get('search_query')
      case 'search': {

        }

    const playerNone = externalPlayerMap.shift()
  getSubscriptionForLiveStreamsFirstAutoFetchRun (state) {
      result[item.value] = item.cmdArguments
    })
                urlType: 'post',
  setSearchTime (state, value) {

  clearTrendingCache(state, page) {
    return state.searchSettings
const state = {
  },


  newPlaylistDefaultProperties: {},
  getNewPlaylistDefaultProperties(state) {
  },
          // https://redirect.invidious.io/search?q={QUERY}
            break
          case 'streams':
    state.deArrowCache[payload.videoId] = payload
  getNewPlaylistVideoObject(state) {
    state.externalPlayerNames = value
  setExternalPlayerValues (state, value) {

          type: searchSettings.type,
  getShowAddToPlaylistPrompt(state) {
  setSubscriptionForPostsFirstAutoFetchRun (state) {

        // 'authorId',
  },
          playlistId,
        missingKeys,
  },
  setTrendingCache (state, { value, page }) {

    ]
    videos: false,
      }
        // `playlistItemId` should be generated anyway
          query
    commit('setIsKeyboardShortcutPromptShown', true)
        }
  },
      ['%N', date.getMinutes().toString().padStart(2, '0')], // minute 2 digits
      // Print error and abort
  },
        urlType: 'invalid_url'
        const match = url.pathname.match(channelPattern)
  },
          urlType: 'hashtag',
      etc.
        let searchQuery = null
      ['post', postPattern],
            break
    features: [],

    const externalPlayerNames = externalPlayerMap.map((entry) => { return entry.name })

  },
  setOutlinesHidden(state, value) {
        const playlistId = url.searchParams.get('list')
    posts: false,
  getShowCreatePlaylistPrompt(state) {

  },

            subPath = 'live'
    return state.externalPlayerCmdArguments

    // - query [Object]
  setSearchType (state, value) {
  appTitle: '',

    // If `urlType` is "hashtag"
  state,
    return parsedString
  },
            subPath = 'courses'
      }
  createWebURL,
        }
    // If `urlType` is "playlist"
  showSearchFilters: false,

  getExternalPlayerValues(state) {
  },
      throw new Error(i18n.global.t('Settings.Player Settings.Screenshot.Error.Forbidden Characters'))
    const postPattern = /^\/post\/(?<postId>.+)/

      https://www.youtube.com/user/ufoludek
  },
          query

          url.searchParams.delete('search_query')
      ['%t', (playerTime % 1).toString().slice(2, 5) || '000'], // video position millisecond 3 digits
  setSearchDuration (state, value) {
        const channelId = match.groups.channelId
    } catch {
  openPrompts: new Set()
      ]
    const feedPattern = /^\/feed\/(?<type>trending|subscriptions|history|playlists|you|library)/
      console.error(errorMsgText)
  },
    // Nothing else
      ['search', /^\/results|search\/?$/],
        'videoId',
  },
          // https://www.youtube.com/results?search_query={QUERY}
      })
        videoId,

  },
  },
    return state.isKeyboardShortcutPromptShown
              const query = { authorId: channelId }
  parseScreenshotCustomFileName: function({ rootState }, payload) {
    if (newPlaylistDefaultProperties != null) {
        for (const [param, value] of url.searchParams) {
        // Local API
    state.sessionSearchHistory = state.sessionSearchHistory.filter((search) => search.query !== query)
  hideKeyboardShortcutPrompt ({ commit }) {
  async getYoutubeUrlInfo({ rootState, state }, urlStr) {

  },
    if (videoDataValid) {
    state.regionValues = value
          postId,
  setSubscriptionForLiveStreamsFirstAutoFetchRun (state) {
      Using RegExp named capture groups from ES2018

      https://www.youtube.com/user/ufoludek/about
  setSubscriptionForVideosFirstAutoFetchRun (state) {
    }
    state.toBeAddedToPlaylistVideoList = payload
  setSubscriptionForShortsFirstAutoFetchRun (state) {
  },
        const query = {}
  popularCache: null,
      ['playlist', /^(\/playlist\/?|\/embed(\/?videoseries)?)$/],
  addThumbnailToDeArrowCache (state, payload) {
    return state.showSearchFilters
  },

    state.trendingCache[page] = value
          missingKeys = missingKeysHere
    return state.subscriptionFirstAutoFetchRunData.shorts === true
  getAppTitle (state) {
  getProgressBarPercentage(state) {
        videoObjectArray,
        return {

  },
  CHANNEL_HANDLE_REGEX,

  },
  },

  },
          return { urlType: feedType }
  setPopularCache (state, value) {
    if (sameSearch !== -1) {
        // 'type',
  isSideNavOpen: false,


        const match = url.pathname.match(postPattern)
  showSearchFilters ({ commit }) {

    if (parsedString !== replaceFilenameForbiddenChars(parsedString)) {
    state.openPrompts.delete(id)
      }
          urlType: 'search',
      https://www.youtube.com/channel/UCfMJ2MchTSW2kWaT0kK94Yw/channels
    for (const [type, pattern] of typePatterns) {

        // Invidious API
        return {
    return state.newPlaylistVideoObject
          throw new Error('Search: "search_query" field not found')
        const query = { authorId: url.searchParams.get('ucid') }
              }
    // - timestamp [String]
    state.cachedPlaylist = value
    state.newPlaylistVideoObject = payload

  addToSessionSearchHistory (state, payload) {

  },
  },
  },
  addOpenPrompt(state, id) {
    state.showProgressBar = value
    // If `urlType` is "invalid_url"
        state.sessionSearchHistory[sameSearch].nextPageRef = payload.nextPageRef
        }
          urlType: 'unknown'
    state.subscriptionFirstAutoFetchRunData.liveStreams = true
        for (const [param, value] of url.searchParams) {
              // if it has the lb search parameter then it is linking a specific community post
    return state.searchFilterValueChanged
    return state.subscriptionFirstAutoFetchRunData.videos === true
  },
      ['%H', date.getHours().toString().padStart(2, '0')], // hour 2 digits
    return state.popularCache


  getOutlinesHidden(state) {
  showKeyboardShortcutPrompt ({ commit }) {
  setRegionValues (state, value) {
  },
            subPath = 'releases'
    return state.showAddToPlaylistPrompt
      if (payload.nextPageRef) {

  getLastPopularRefreshTimestamp(state) {
    state.deArrowCache = cache
        if (url.searchParams.has('q')) {
  },
      }
  setIsKeyboardShortcutPromptShown (state, payload) {
  searchFilterValueChanged: false,
    state.subscriptionFirstAutoFetchRunData.videos = true
                query
        }
  },
          features: searchSettings.features
            subPath = 'playlists'
            if (url.searchParams.has('lb')) {
    }
    state.showCreatePlaylistPrompt = payload

  updateShowProgressBar ({ commit }, value) {
    state.progressBarPercentage = value
          case 'videos':
  hideSearchFilters ({ commit }) {
    return state.showCreatePlaylistPrompt
        } else if (process.env.SUPPORTS_LOCAL_API || feedType !== 'trending') {

  },
   * @param {typeof state} state
  },
  },
      throw new Error(i18n.global.t('Settings.Player Settings.Screenshot.Error.Empty File Name'))
    state.subscriptionFirstAutoFetchRunData.posts = true

const getters = {
          throw new Error('Playlist: "list" field not found')
      default: {
    if (CHANNEL_HANDLE_REGEX.test(urlStr)) {
          case 'live':
  async getRegionData ({ commit }, locale) {
        return {


    state.appTitle = value

    // - urlType [String] `video`, `playlist`
    const hashtagPattern = /^\/hashtag\/(?<tag>[^#&/?]+)$/
  },
import i18n from '../../i18n/index'
  getToBeAddedToPlaylistVideoList(state) {
  setShowSearchFilters (state, payload) {
  getSubscriptionForShortsFirstAutoFetchRun (state) {
  showAddToPlaylistPromptForManyVideos ({ commit }, { videos: videoObjectArray, newPlaylistDefaultProperties }) {
            }

  externalPlayerCmdArguments: {},


    const sameVideo = state.deArrowCache[payload.videoId]
  },
    }
    commit('setOutlinesHidden', false)
  lastPopularRefreshTimestamp: '',

  showProgressBar: false,

  },
  setShowProgressBar (state, value) {
  clearSessionSearchHistory ({ commit }) {
    commit('setRegionValues', countries.codes)
      // Using `every` to loop and `return false` to break
      ['%s', parseInt(playerTime)], // video position second n digits
    commit('setSessionSearchHistory', [])
    // If `urlType` is "channel"
        }
        return {
    const externalPlayerCmdArguments = externalPlayerMap.reduce((result, item) => {
      urlStr = `https://www.youtube.com/${urlStr}`
  },
    state.popularCache = value
        }

    liveStreams: false,
      }
            break

      }
    return state.subscriptionFirstAutoFetchRunData.liveStreams === true
  getSubscriptionForVideosFirstAutoFetchRun(state) {
          videoDataValid = false
      */

  resetNewPlaylistDefaultProperties (state) {
      ['%M', (date.getMonth() + 1).toString().padStart(2, '0')], // month 2 digits
    commit('setShowSearchFilters', false)
    commit('setShowCreatePlaylistPrompt', true)

    podcasts: null
  getExternalPlayerNames(state) {
                postId,
        // 'author',
    // - videoId [String]
    state.subscriptionFirstAutoFetchRunData.shorts = true
    const url = createWebURL('/static/external-player-map.json')
  getIsSideNavOpen(state) {
      })
            break
    return state.lastPopularRefreshTimestamp
      commit('setNewPlaylistDefaultProperties', newPlaylistDefaultProperties)
  setAppTitle (state, value) {
  sessionSearchHistory: [],
  setLastTrendingRefreshTimestamp (state, { page, timestamp }) {


  setShowAddToPlaylistPrompt (state, payload) {
  showCreatePlaylistPrompt ({ commit }, data) {
  getShowProgressBar(state) {
  },
    state.searchSettings.time = value
    // Nothing else
      https://www.youtube.com/c/YouTubeCreators/about
    return state.progressBarPercentage
    state.newPlaylistDefaultProperties = payload
  removeFromSessionSearchHistory (state, query) {
    let urlType = 'unknown'

   * @param {'gaming' | 'sports' | 'podcasts'} page
        urlType = type

          case 'podcasts':
  showOutlines({ commit }) {
   * @param {typeof state} state

            subPath = 'videos'
  },
    commit('setToBeAddedToPlaylistVideoList', videoObjectArray)
    // If `urlType` is "video"
        }

  deArrowCache: {},
              return {
  actions,
          channelId,
        // These two properties will be missing for shorts added to a playlist from anywhere but the watch page
    // Returns
          query[param] = value
        switch (match.groups.tab) {
  },
        // 'playlistItemId',
      case 'channel': {
  },

          url.searchParams.delete('q')
  /**
      ['%T', date.getMilliseconds().toString().padStart(3, '0')], // millisecond 3 digits
    state.searchSettings.features = value
        }
  setProgressBarPercentage (state, value) {
  addVideoToDeArrowCache (state, payload) {
        if (feedType === 'playlists' || feedType === 'you' || feedType === 'library') {

  getDeArrowCache: (state) => {
              const postId = url.searchParams.get('lb')
    }
    state.outlinesHidden = value
}
    return state.deArrowCache
    state.showAddToPlaylistPrompt = payload
        if (missingKeysHere.length > 0) {
  getSessionSearchHistory(state) {
    shorts: false,

    } else {

  },
    }
    state.searchFilterValueChanged = value
    // If `urlType` is "unknown"

            subPath = 'about'
        return {
  },

    const channelPattern =

        let subPath = null

}
        playlistId,
    const countries = await (await fetch(url)).json()
    return state.showProgressBar
    commit('setShowAddToPlaylistPrompt', false)
  // Use this to set the app title / document.title
  getLastTrendingRefreshTimestamp(state) {
  searchSettings: {
    if (!parsedString) {

  },
          subPath,

        /** @type {'trending' | 'subscriptions' | 'history' | 'playlists' | 'you' | 'library'} */
          query[param] = value
          // We need to make sure it starts with youtube.com, so that YouTube's resolve endpoint can recognise it
      etc.
    commit('setNewPlaylistVideoObject', data)
    state.searchSettings.type = value


    commit('setIsKeyboardShortcutPromptShown', false)
    commit('setShowAddToPlaylistPrompt', true)
  getShowSearchFilters(state) {
  setSearchFilterValueChanged (state, value) {

    const { pattern = rootState.settings.screenshotFilenamePattern, date, playerTime, videoId } = payload
        }

  },
  }
  },
      Legacy Username URL
            subPath = 'podcasts'
  },
  getIsKeyboardShortcutPromptShown(state) {
          url: `https://www.youtube.com${url.pathname}`
      /*
    state.showSearchFilters = payload
      ['feed', feedPattern],
      state.sessionSearchHistory[sameSearch].data = payload.data

        }
  searchFiltersMatch,
  },


    state.sessionSearchHistory = history

      throw new Error(errorMsgText)
    return state.cachedPlaylist

    // The default value properties are only valid until prompt is closed
    commit('setExternalPlayerNames', externalPlayerNames)
    commit('setRegionNames', countries.names)
  mutations
  },
    sports: '',
      }
        if (!channelId) {
    //
        if (searchQuery == null) {
   * @param {{page: 'gaming' | 'sports' | 'podcasts', timestamp: Date}} param1
  setDeArrowCache (state, cache) {
  getRegionNames(state) {
  outlinesHidden: true,
        'title',
  getSubscriptionForPostsFirstAutoFetchRun (state) {
  },
        // Can fall through if a trending URL is detected in a build without the local API
      ['%i', videoId] // video id
    try {
  showCreatePlaylistPrompt: false,

          throw new Error('Channel: could not extract id')
  }

      To avoid access to specific captured value broken

  regionValues: [],
    state.regionNames = value
    return state.regionValues
    }

  isAnyPromptOpen(state) {
          searchQuery,
      Custom URL
            subPath = 'shorts'
  setCachedPlaylist(state, value) {
  },
  setToBeAddedToPlaylistVideoList (state, payload) {
  },
    switch (urlType) {

  async getExternalPlayerCmdArgumentsData ({ commit }) {


      parsedString = parsedString.replaceAll(key, value)
            break
          searchQuery = url.searchParams.get('q')
    podcasts: ''
    return state.recentBlogPosts
          urlType: 'playlist',
}

   */
    state.newPlaylistDefaultProperties = {}
    }
  setNewPlaylistDefaultProperties (state, payload) {


        state.sessionSearchHistory[sameSearch].searchPage = payload.searchPage
    let videoDataValid = true
      https://www.youtube.com/channel/UCfMJ2MchTSW2kWaT0kK94Yw/videos
    // Nothing else
            break
  },
  regionNames: [],
          sortBy: searchSettings.sortBy,
    commit('setShowProgressBar', value)
            subPath = 'community'
    state.lastTrendingRefreshTimestamp[page] = timestamp
    }, {})

      https://www.youtube.com/channel/UCfMJ2MchTSW2kWaT0kK94Yw/featured
  },
            break
          hashtag
  },
    //
    return state.lastTrendingRefreshTimestamp


  },
    }


    //
      https://www.youtube.com/channel/UCfMJ2MchTSW2kWaT0kK94Yw/join
}
  getExternalPlayerCmdArguments (state) {
  getters,
    gaming: '',
  },
    commit('setShowSearchFilters', true)

        const missingKeysHere = requiredVideoKeys.filter(x => !videoPropertyKeys.includes(x))
  setRecentBlogPosts (state, value) {
      console.error({

    return state.regionNames
        url.searchParams.delete('list')
      state.sessionSearchHistory.push(payload)
          case 'courses':
        // Not when a prompt is displayed
  removeOpenPrompt(state, id) {


}
            break

  },
      const errorMsgText = 'Incorrect videos data passed when opening playlist prompt'
  hideAddToPlaylistPrompt ({ commit }) {
  },
    gaming: null,
  setLastPopularRefreshTimestamp (state, timestamp) {
    let url
  },
  },

    return state.newPlaylistDefaultProperties
          urlType: 'post',
const actions = {
    //



  getPopularCache(state) {
  showAddToPlaylistPrompt: false,
    if (!videoDataValid) {
    // Sort external players alphabetically & case-insensitive, keep default entry at the top
  },
  },
      https://www.youtube.com/channel/UCfMJ2MchTSW2kWaT0kK94Yw/about
        const query = {
          default:
          query
      https://www.youtube.com/channel/UCfMJ2MchTSW2kWaT0kK94Yw/community

    return state.externalPlayerNames

      const requiredVideoKeys = [
    return state.trendingCache
        'lengthSeconds',
            subPath = rootState.settings.backendPreference === 'local' && !rootState.settings.hideChannelHome ? 'home' : 'videos'
    state.searchSettings.duration = value
      /^\/(?:(?:channel|user|c)\/)?(?<channelId>[^/]+)(?:\/(?<tab>join|featured|videos|shorts|live|streams|podcasts|releases|courses|playlists|about|community|channels))?\/?$/

  },
        }
  getRecentBlogPosts(state) {
    // If `urlType` is "search"
    commit('setExternalPlayerCmdArguments', externalPlayerCmdArguments)
    // - channelId [String]
    //
        }
      }
      }
        }
    // - playlistId [String]
  },
    const url = createWebURL(`/static/geolocations/${localePathExists ? locale : 'en-US'}.json`)
  hideOutlines({ commit }) {
  isKeyboardShortcutPromptShown: false,
    if (videoId) {
  getTrendingCache(state) {
    type: 'all',
  },
  },
  trendingCache: {
      videoObjectArray.every((video) => {
  getRegionValues(state) {

  setExternalPlayerNames (state, value) {
        // `timeAdded` should be generated when videos are added
    state.externalPlayerValues = value
    return state.openPrompts.size > 0
          return { urlType: 'userplaylists' }

      const matchFound = pattern.test(url.pathname)
    return state.sessionSearchHistory
    sports: null,
      https://www.youtube.com/channel/UCfMJ2MchTSW2kWaT0kK94Yw/playlists
  },
        // Unknown URL type
    }
    }
        const match = url.pathname.match(hashtagPattern)
      if (matchFound) {
        // `type` should be added in action anyway
    state.isSideNavOpen = !state.isSideNavOpen
    return state.isSideNavOpen
    return state.externalPlayerValues
          case 'channels':
  externalPlayerNames: [],
    state.openPrompts.add(id)
    let missingKeys = []

        // Return true to continue loop
        break
      }
          return false

    const typePatterns = new Map([
  },
    if (!sameVideo) {
    const localePathExists = process.env.GEOLOCATION_NAMES.includes(locale)
  externalPlayerValues: [],
        }
          case 'shorts':
      ['%D', date.getDate().toString().padStart(2, '0')], // day 2 digits
  },

    state.recentBlogPosts = value
        return true
