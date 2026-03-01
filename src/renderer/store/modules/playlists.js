      } else {
          // Assign current time as created time in case DB data corrupted
    return state.playlists.find(playlist => playlist._id === playlistId)
  },
      const foundPlaylist = state.playlists[i]
            if (v.type == null) {

    state.playlistsReady = payload

      if (playlistItemId != null) {
        const watchLaterPlaylist = payload.find((playlist) => {
                delete v[attrName]
    if (playlist) {
    }
              dispatch('removePlaylist', oldId)
    }
        const favoritesPlaylist = payload.find((playlist) => {
            // {Time now in unix time}-{0-9999}
            playlist._id = generateRandomPlaylistId()


    playlist._id = generateRandomPlaylistId()
      console.error(errMessage)
    if (playlists[i].lastPlayedAt != null && playlists[i].lastPlayedAt > max) {
      await DBPlaylistHandlers.deleteAll()

      description: 'Videos to watch later',

  playlists: [],
      videos: [],
  // Ensure all videos have required attributes
const getters = {
      await DBPlaylistHandlers.deleteVideoIdsByPlaylistId(_id, lastUpdatedAt, playlistItemIds)

  },
      playlist.videos = []
    playlist.lastUpdatedAt = Date.now()
            playlist.playlistName = generateRandomPlaylistName()
      const newVideoObjects = videos.map((video) => {
      await DBPlaylistHandlers.upsert(playlist)
        const chosenPlaylist = findEmptyOrLatestPlayedPlaylist(payload)
          let anythingUpdated = false
          if (typeof videoData[attrName] !== 'undefined') {

        videoData.playlistItemId = generateRandomUniqueId()
        if (noQuickBookmarkSet && payload.length > 0) {

    } catch (errMessage) {
        commit('setAllPlaylists', payload)
  },
      const noQuickBookmarkSet = !rootState.settings.quickBookmarkTargetPlaylistId || !state.playlists.some((playlist) => playlist._id === rootState.settings.quickBookmarkTargetPlaylistId)

            playlist.createdAt = dateNow
  async removeAllPlaylists({ commit }) {
        if (videoData.type == null) {

      console.error(errMessage)
    const i = state.playlists.findIndex((p) => {
      })
import { DBPlaylistHandlers } from '../../../datastores/handlers/index'
    }

}
    } catch (errMessage) {
      protected: false,
      return undefined
  async removePlaylist({ commit }, playlistId) {
  return `Playlist ${new Date().toISOString()}-${Math.floor(Math.random() * 10000)}`
  defaultPlaylists: [
  async updatePlaylist({ commit }, playlist) {
            delete videoData[attrName]
                anythingUpdated = true
          dispatch('updateQuickBookmarkTargetPlaylistId', chosenPlaylist._id, { root: true })
  addPlaylists(state, payload) {
    }
      _id: 'watchLater',
}
    try {
              anythingUpdated = true
  mutations
    } catch (errMessage) {
  playlist.createdAt = now
      const { _id, videoData } = payload

      console.error(errMessage)
          dispatch('addPlaylist', playlist)
    }
          playlist.videos.forEach((v) => {
    playlist.videos.forEach(processToBeAddedPlaylistVideo)
      if (noQuickBookmarkSet) {
      payload.lastUpdatedAt = lastUpdatedAt
              v.type = 'video'

}
    },
  // Ensure playlist description trimmed
  }
const mutations = {

        })
*  Function to find the first playlist with 0 videos, or otherwise the most recently accessed.
            // For backward compatibility

        // Not using `addPlaylists` to ensure required attributes with dynamic values added
      commit('addVideo', payload)


  },
      await DBPlaylistHandlers.deleteVideoIdByPlaylistId(_id, lastUpdatedAt, videoId, playlistItemId)
              // Due to the object is already in `payload`
    }

        return videoData
    } catch (errMessage) {
}
}
  async removeAllVideos({ commit }, _id) {

              // Which causes duplicate displayed playlist in window (But DB is fine)

  },


        return !playlistItemIdMatches
    try {
  return playlists[maxIndex]
        const noQuickBookmarkSet = !rootState.settings.quickBookmarkTargetPlaylistId || !payload.some((playlist) => playlist._id === rootState.settings.quickBookmarkTargetPlaylistId)
          if (playlist.lastUpdatedAt == null) {
    state.playlists = state.playlists.filter(playlist => playlist._id !== playlistId || playlist.protected)
          if (watchLaterPlaylist._id !== defaultWatchLaterPlaylist._id || watchLaterPlaylist.protected !== defaultWatchLaterPlaylist.protected) {
      commit('removeAllPlaylists')

    // Ensure playlist name trimmed


          if (playlist.playlistName == null) {
  async removeVideos({ commit }, payload) {
    }
    } catch (errMessage) {
    }
        // Undesired attributes, even with `null` values
    })
  async updatePlaylistLastPlayedAt({ commit }, playlist) {
          }
function generateRandomPlaylistId() {
        playlist.videos = playlist.videos.filter(video => video.playlistItemId !== playlistItemId)

            } else {
}

    }
      const lastUpdatedAt = Date.now()
      console.error(errMessage)
/**
      }

}
      playlist.videos = [].concat(playlist.videos, payload.videos)

      commit('addPlaylist', payload)


              v.playlistItemId = generateRandomUniqueId()
    }
  async addPlaylists({ state, commit, rootState, dispatch }, payload) {
            playlist.lastUpdatedAt = dateNow
    const playlist = state.playlists.find(playlist => playlist._id === _id)
      playlistName: 'Favorites',
            // Undesired attributes, even with `null` values
            // Ensure all videos has `timeAdded` property

              DBPlaylistHandlers.create(watchLaterPlaylist)

          // Assign generated playlist ID in case DB data corrupted
      await DBPlaylistHandlers.create(payload)
      playlist.videos = playlist.videos.filter(video => {
  state,
        // Create a new object to prevent changing existing values outside

            [
          'liveNow',
        playlist.videos = playlist.videos.filter(video => video.videoId !== videoId)
    const playlist = state.playlists.find(playlist => playlist._id === payload._id)
      }
  },
      console.error(errMessage)
    try {
            } else {
          }
  },
    }
              // Which causes duplicate displayed playlist in window (But DB is fine)
        playlist.lastUpdatedAt = lastUpdatedAt
              DBPlaylistHandlers.create(favoritesPlaylist)
  playlist.lastUpdatedAt = now
    processNewPlayist(payload)
      const lastUpdatedAt = Date.now()
            // Time now in unix time, in ms
  },


    if (playlist) {
            }
          const defaultWatchLaterPlaylist = state.defaultPlaylists.find((e) => e._id === 'watchLater')

          const defaultFavoritesPlaylist = state.defaultPlaylists.find((e) => e._id === 'favorites')
  },
      playlist.lastUpdatedAt = lastUpdatedAt

    // Only `lastPlayedAt` should be updated
          // Update existing matching playlist only if it exists
        }
          videoData.type = 'video'

      console.error(errMessage)
            // Ensure all videos has `playlistItemId` property
    try {

  },
            watchLaterPlaylist.protected = defaultWatchLaterPlaylist.protected
  const now = Date.now()


      await DBPlaylistHandlers.deleteMultiple(playlistIds)
      const { _id, videos } = payload
      playlist.videos.push(payload.videoData)
  if (playlist._id == null) {
            DBPlaylistHandlers.upsert(playlist)
      description: 'Your favorite videos',
            }
      payload.lastUpdatedAt = lastUpdatedAt
  // which depends on playlist data being ready
  },

      playlist.playlistName = playlist.playlistName.trim()
  // This is necessary to let components to know when to start data loading
  async addVideos({ commit }, payload) {
      const payload = (await DBPlaylistHandlers.find()).filter((e) => e != null)
              // DO NOT use dispatch('addPlaylist', ...)
function findEmptyOrLatestPlayedPlaylist(playlists) {
  removeVideo(state, { _id, lastUpdatedAt, videoId, playlistItemId }) {

    }

    if (playlist) {
    },

    if (playlist) {

  let max = -1
  getQuickBookmarkPlaylist(state, getters) {
        const currentTime = Date.now()
            if (v.playlistItemId == null) {
    }
  }
    if (i === -1) {
  async grabAllPlaylists({ rootState, commit, dispatch, state }) {
    state.playlists = payload
  let maxIndex = 0
  addPlaylist(state, payload) {
          }
      }
      await DBPlaylistHandlers.deleteAllVideosByPlaylistId(_id)
  },
    state.playlists.push(payload)
  async removePlaylists({ commit }, playlistIds) {
            anythingUpdated = true
      processToBeAddedPlaylistVideo(videoData)

          }
    if (playlist) {
      console.error(errMessage)
              anythingUpdated = true
        if (watchLaterPlaylist != null) {
      max = playlists[i].lastPlayedAt
      commit('removePlaylists', playlistIds)
    // Since this action will ensure uniqueness of `playlistItemId` of added video entries
    }
const state = {
  getPlaylist: (state) => (playlistId) => {
    payload.forEach(processNewPlayist)
    // Ensure playlist description trimmed
            // Time now in unix time, in ms
          // Assign current time as last updated time in case DB data corrupted
        })
        // if no quick bookmark is set, try to find another playlist
    } catch (errMessage) {

    } catch (errMessage) {
  },
  // Playlist loading takes time on app load (new windows)
      _id: 'favorites',
    try {
          videoData.timeAdded = currentTime
          if (favoritesPlaylist._id !== defaultFavoritesPlaylist._id || favoritesPlaylist.protected !== defaultFavoritesPlaylist.protected) {

          if (playlist._id == null) {
          'index',
              // Update playlist if ID already the same
  async addPlaylist({ state, commit, rootState, dispatch }, payload) {

    const playlistId = getters.getQuickBookmarkTargetPlaylistId
  if (typeof playlist.playlistName === 'string') {
    try {
            if (oldId === defaultFavoritesPlaylist._id) {

    playlist.description = playlist.description.trim()
    }
  }
    } catch (errMessage) {
 * @param {any} playlist
      const noQuickBookmarkSet = !rootState.settings.quickBookmarkTargetPlaylistId || !state.playlists.some((playlist) => playlist._id === rootState.settings.quickBookmarkTargetPlaylistId)

              if (typeof v[attrName] !== 'undefined') {
      playlistName: 'Watch Later',
    return state.playlists.find((playlist) => playlist._id === playlistId)
          }
              // Due to the object is already in `payload`
  addVideos(state, payload) {
  const emptyPlaylist = playlists.find((playlist) => playlist.videos.length === 0)


            const oldId = favoritesPlaylist._id
    }
      await DBPlaylistHandlers.upsert(playlist)

              DBPlaylistHandlers.upsert(watchLaterPlaylist)
    } else {
    } catch (errMessage) {
            ].forEach(attrName => {
    try {

        // For backward compatibility
    const playlist = state.playlists.find(playlist => playlist._id === _id)
              DBPlaylistHandlers.upsert(favoritesPlaylist)
*  This is a good default quick bookmark target if one needs to be set.
    const playlist = state.playlists.find(playlist => playlist._id === payload._id)
      payload.lastUpdatedAt = lastUpdatedAt
        [
  },
    } catch (errMessage) {
  },
            if (oldId === defaultWatchLaterPlaylist._id) {

      }
            const oldId = watchLaterPlaylist._id
    // This action does NOT update `lastUpdatedAt` on purpose
      console.error(errMessage)

export default {


  async addVideo({ commit }, payload) {
 */
      commit('removeVideos', payload)
        if (videoData.timeAdded == null) {
          // Save updated playlist object
    {
        }
  },
  },
          })
        state.defaultPlaylists.forEach(playlist => {
        playlist.lastUpdatedAt = lastUpdatedAt
            })
    // Caller no need to assign last updated time

      await DBPlaylistHandlers.create([payload])
  actions,
  for (let i = 0; i < playlists.length; i++) {
    playlist.playlistName = playlist.playlistName.trim()
  },
  }

    if (typeof playlist.playlistName === 'string') {
    }
      console.error(errMessage)
    try {
      commit('addVideos', { _id, lastUpdatedAt, videos: newVideoObjects })
  },
      maxIndex = i
      console.error(errMessage)
  },
      if (noQuickBookmarkSet) {
      playlist.description = playlist.description.trim()
      commit('upsertPlaylistToList', playlist)
          if (anythingUpdated) {
        payload.forEach((playlist) => {
    }
    } catch (errMessage) {
            }
  removeAllVideos(state, playlistId) {
  removeVideos(state, { _id, lastUpdatedAt, playlistItemIds }) {
  getPlaylistsReady: (state) => state.playlistsReady,
        const playlistItemIdMatches = playlistItemIds.includes(video.playlistItemId)
  upsertPlaylistToList(state, updatedPlaylist) {
  removeAllPlaylists(state) {
  if (Array.isArray(playlist.videos)) {
    state.playlists.push(...payload)
    } catch (errMessage) {

  },
    } catch (errMessage) {
          'authorUrl',
  }
      console.error(errMessage)

          const chosenPlaylist = findEmptyOrLatestPlayedPlaylist(payload)
        dispatch('updateQuickBookmarkTargetPlaylistId', payload._id, { root: true })
      const lastUpdatedAt = Date.now()
      commit('upsertPlaylistToList', playlist)
  if (emptyPlaylist) return emptyPlaylist
          return playlist.playlistName === 'Watch Later' || playlist._id === 'watchLater'
  },
}
  getters,
              }
  setPlaylistsReady(state, payload) {
      console.error(errMessage)
              dispatch('removePlaylist', oldId)
        const videoData = Object.assign({}, video)
      protected: false,
    try {
function generateRandomPlaylistName() {
      commit('removePlaylist', playlistId)

            anythingUpdated = true
    try {
        const dateNow = Date.now()
          return playlist.playlistName === 'Favorites' || playlist._id === 'favorites'
const actions = {
  setAllPlaylists(state, payload) {
      await DBPlaylistHandlers.upsertVideoByPlaylistId(_id, lastUpdatedAt, videoData)
    // {Time now in unix time}-{0-9999}
    }

  async removeVideo({ commit }, payload) {
  getAllPlaylists: (state) => state.playlists,
        })
      playlist.lastUpdatedAt = payload.lastUpdatedAt
      const lastUpdatedAt = Date.now()
    playlist.lastPlayedAt = Date.now()
      const currentTime = Date.now()
          }
      playlist.lastUpdatedAt = payload.lastUpdatedAt
  }
      state.playlists.push(updatedPlaylist)
  // Ensure playlist name trimmed

      if (payload.length === 0) {
            anythingUpdated = true
  // In case internal id is forgotten, generate one (instead of relying on caller and there being a chance of data corruption)
  },
        }
            }
              anythingUpdated = true

    if (!playlistId) {
          // Update existing matching playlist only if it exists

  ],
        ].forEach(attrName => {
              // DO NOT use dispatch('addPlaylist', ...)
    }
}
          // Ensure all videos has `playlistName` property
            watchLaterPlaylist._id = defaultWatchLaterPlaylist._id
      await DBPlaylistHandlers.delete(playlistId)
    try {
    const playlist = state.playlists.find(playlist => playlist._id === playlistId)
        })
    }
      })
  if (typeof playlist.description === 'string') {
        }
      return p._id === updatedPlaylist._id
              // Update playlist if ID already the same
/*
  },
function processNewPlayist(playlist) {
          'videoThumbnails',
    }
              'viewCount',

  },
              'description',
      await DBPlaylistHandlers.upsertVideosByPlaylistId(_id, lastUpdatedAt, newVideoObjects)
    }
    state.playlists = []

  },
          'description',
      videos: [],
      commit('addPlaylists', payload)
          }
      commit('removeAllVideos', _id)

        dispatch('updateQuickBookmarkTargetPlaylistId', chosenPlaylist._id, { root: true })
            favoritesPlaylist.protected = defaultFavoritesPlaylist.protected
      commit('removeVideo', payload)
        })
          if (playlist.createdAt == null) {
  return `ft-playlist--${generateRandomUniqueId()}`
              v.timeAdded = currentTime
          'viewCount',
      const { _id, playlistItemIds } = payload
    try {

      state.playlists.splice(i, 1, Object.assign(foundPlaylist, updatedPlaylist))
            anythingUpdated = true

  playlistsReady: false,
      } else if (videoId != null) {
      const { _id, videoId, playlistItemId } = payload

            }
    {
            favoritesPlaylist._id = defaultFavoritesPlaylist._id
  addVideo(state, payload) {
    try {
*/
        if (favoritesPlaylist != null) {
            if (v.timeAdded == null) {
        }
  removePlaylist(state, playlistId) {
          }
      commit('setPlaylistsReady', true)
            // Time now in unix time, in ms
    // Assumes videos are added NOT from export
    if (typeof playlist.description === 'string') {
      console.error(errMessage)
import { generateRandomUniqueId, processToBeAddedPlaylistVideo } from '../../helpers/playlists'
