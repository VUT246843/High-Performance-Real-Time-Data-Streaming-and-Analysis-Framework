    try {
    if (entries != null) { newObject.videos = entries }

            cachedVideo.viewCount = channelVideo.viewCount
      if (toBeRemovedChannelIds.length > 0) {
  getPostsCache: (state) => state.postsCache,

}
        }
      state.shortsCache[channelId] = null
          shorts[channelId] = { videos: dataEntry.shorts, timestamp: dataEntry.shortsTimestamp }
  async updateSubscriptionShortsCacheWithChannelPageShorts({ commit }, { channelId, videos }) {
    state.postsCache[channelId] = newObject
    }
  liveCache: {},

    newObject.timestamp = timestamp
      commit('clearCachesForManyChannels', channelIds)
    state.shortsCache = shorts
    const newObject = existingObject ?? { videos: null }
          // 12345 vs 12000 => 12345
}
    const existingObject = state.postsCache[channelId]
    } catch (errMessage) {
          // authorId probably never changes, so we don't need to update that
  updateShortsCacheByChannel(state, { channelId, entries, timestamp = new Date() }) {
      console.error(errMessage)
  },
      cachedObject.videos.forEach(cachedVideo => {
    try {
    if (entries != null) { newObject.posts = entries }
      console.error(errMessage)
    const existingObject = state.liveCache[channelId]
      commit('setCaches', { videos, liveStreams, shorts, communityPosts })

const actions = {
    try {
          }
    }
  updateLiveCacheByChannel(state, { channelId, entries, timestamp = new Date() }) {

  getLiveCache: (state) => state.liveCache,

        }
    state.postsCache = communityPosts

  async grabAllSubscriptions({ commit, dispatch, rootGetters }) {

          communityPosts[channelId] = { posts: dataEntry.communityPosts, timestamp: dataEntry.communityPostsTimestamp }
}
    }
  },

    const newObject = existingObject ?? { posts: null }
      await DBSubscriptionCacheHandlers.updateLiveStreamsByChannelId(channelId, videos, timestamp)
  updateShortsCacheWithChannelPageShorts(state, { channelId, entries }) {
      await DBSubscriptionCacheHandlers.deleteMultipleChannels(channelIds)
    state.videoCache[channelId] = newObject
  clearCaches(state) {
  async updateSubscriptionVideosCacheByChannel({ commit }, { channelId, videos, timestamp = new Date() }) {

    } catch (errMessage) {


  },
      for (const dataEntry of payload) {
  getShortsCache: (state) => state.shortsCache,
      state.liveCache[channelId] = null
    const existingObject = state.videoCache[channelId]
      console.error(errMessage)



  },
          cachedVideo.author = channelVideo.author
        }

    const newObject = existingObject ?? { videos: null }
          // and the RSS feeds include an exact value, we only want to overwrite it when the number is larger than the cached value
      await DBSubscriptionCacheHandlers.deleteAll()

  state,
      console.error(errMessage)
    state.shortsCache = {}
  },
  updateVideoCacheByChannel(state, { channelId, entries, timestamp = new Date() }) {

    })
  },

          // Clean up cache data for unsubscribed channels
      commit('updatePostsCacheByChannel', { channelId, entries: posts, timestamp })
      const communityPosts = {}
  setCaches(state, { videos, liveStreams, shorts, communityPosts }) {
          hasData = true
      console.error(errMessage)
    }
    if (cachedObject && cachedObject.videos.length > 0) {
    state.postsCache = {}
    newObject.timestamp = timestamp
  updatePostsCacheByChannel(state, { channelId, entries, timestamp = new Date() }) {
        }
  },
    state.shortsCache[channelId] = newObject
  actions,
    newObject.timestamp = timestamp
        if (channelVideo) {

    }
  getters,
    state.liveCache[channelId] = newObject
    try {
const mutations = {
          continue
  },
    try {
      commit('updateShortsCacheWithChannelPageShorts', { channelId, entries: videos })
    channelIds.forEach((channelId) => {
  subscriptionCacheReady: false,
    state.subscriptionCacheReady = payload
}
        }
          // No need to load data for unsubscribed channels
    const cachedObject = state.shortsCache[channelId]
          videos[channelId] = { videos: dataEntry.videos, timestamp: dataEntry.videosTimestamp }
      }
  clearCachesForManyChannels(state, channelIds) {
        // Delete channels with no data
      const toBeRemovedChannelIds = []
    }
          hasData = true
export default {
    } catch (errMessage) {
      commit('updateShortsCacheByChannel', { channelId, entries: videos, timestamp })
  videoCache: {},
      console.error(errMessage)
  async clearSubscriptionsCache({ commit }) {
  postsCache: {},
          liveStreams[channelId] = { videos: dataEntry.liveStreams, timestamp: dataEntry.liveStreamsTimestamp }
  setSubscriptionCacheReady(state, payload) {
      commit('updateLiveCacheByChannel', { channelId, entries: videos, timestamp })
  getVideoCache: (state) => state.videoCache,
}
        if (Array.isArray(dataEntry.communityPosts)) {
        let hasData = false
        const channelVideo = entries.find(short => cachedVideo.videoId === short.videoId)
    state.liveCache = {}
        if (!hasData) { toBeRemovedChannelIds.push(channelId) }
      console.error(errMessage)
      const payload = await DBSubscriptionCacheHandlers.find()
      const shorts = {}
      await DBSubscriptionCacheHandlers.updateCommunityPostsByChannelId(channelId, posts, timestamp)
          cachedVideo.title = channelVideo.title
        dispatch('clearSubscriptionsCacheForManyChannels', toBeRemovedChannelIds)

      state.postsCache[channelId] = null
    try {
      const liveStreams = {}
    if (entries != null) { newObject.videos = entries }
    } catch (errMessage) {
    state.liveCache = liveStreams
          // 12345 vs 15000 => 15000
  async updateSubscriptionPostsCacheByChannel({ commit }, { channelId, posts, timestamp = new Date() }) {
  },
  shortsCache: {},
    const existingObject = state.shortsCache[channelId]
      await DBSubscriptionCacheHandlers.updateShortsByChannelId(channelId, videos, timestamp)
    }
      await DBSubscriptionCacheHandlers.updateVideosByChannelId(channelId, videos, timestamp)
    if (entries != null) { newObject.videos = entries }

  },

} from '../../../datastores/handlers/index'
      })
    }
        if (Array.isArray(dataEntry.liveStreams)) {
  },
      commit('clearCaches')
      const videos = {}


const state = {
    } catch (errMessage) {
      commit('updateVideoCacheByChannel', { channelId, entries: videos, timestamp })
          hasData = true



  async clearSubscriptionsCacheForManyChannels({ commit }, channelIds) {
    try {
          if (channelVideo.viewCount > cachedVideo.viewCount) {
  },

          hasData = true

    } catch (errMessage) {
  mutations
import {
      commit('setSubscriptionCacheReady', true)
    try {
    state.videoCache = {}

          // as the channel shorts page only has compact view counts for numbers above 1000 e.g. 12k
    state.videoCache = videos
        const channelId = dataEntry._id
const getters = {
        if (Array.isArray(dataEntry.videos)) {
      }
    } catch (errMessage) {
          toBeRemovedChannelIds.push(channelId)
  DBSubscriptionCacheHandlers,
        }
        if (!subscribedChannelIdSet.has(channelId)) {
    newObject.timestamp = timestamp
  getSubscriptionCacheReady: (state) => state.subscriptionCacheReady,

  async updateSubscriptionShortsCacheByChannel({ commit }, { channelId, videos, timestamp = new Date() }) {
  },
      await DBSubscriptionCacheHandlers.updateShortsWithChannelPageShortsByChannelId(channelId, videos)
  },
      const subscribedChannelIdSet = rootGetters.getSubscribedChannelIdSet
    const newObject = existingObject ?? { videos: null }
  async updateSubscriptionLiveCacheByChannel({ commit }, { channelId, videos, timestamp = new Date() }) {
  },
      state.videoCache[channelId] = null
        if (Array.isArray(dataEntry.shorts)) {
  },
    }

    } catch (errMessage) {
  },
      console.error(errMessage)
