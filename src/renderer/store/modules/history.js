    }

  // TODO: switch to a Map during the Pinia migration
  },
    try {
    try {
export default {


  },
    // historyCacheById and historyCacheSorted reference the same object instances,
    // Don't set, if the item was removed from the watch history, as we don't have any video details
      }
    }

      sortedRecords.sort((a, b) => b.timeWatched - a.timeWatched)
      await DBHistoryHandlers.updateWatchProgress(videoId, watchProgress)
      await DBHistoryHandlers.updateLastViewedPlaylist(videoId, lastViewedPlaylistId, lastViewedPlaylistType, lastViewedPlaylistItemId)
      // sort before sending saving to the database and passing to other windows
      commit('updateRecordLastViewedPlaylistIdInHistoryCache', { videoId, lastViewedPlaylistId, lastViewedPlaylistType, lastViewedPlaylistItemId })
      commit('upsertToHistoryCache', record)
    // historyCacheById and historyCacheSorted reference the same object instances,
      const resultsById = {}

  getHistoryCacheById(state) {
      console.error(errMessage)
      console.error(errMessage)
  },
        state.historyCacheSorted.splice(i, 1)

  async updateHistory({ commit }, record) {
      // Must be hoisted to top, remove it and then unshift it
      record.lastViewedPlaylistItemId = lastViewedPlaylistItemId
    return state.historyCacheSorted

      await DBHistoryHandlers.deleteAll()
      commit('removeFromHistoryCacheById', videoId)

      commit('setHistoryCacheById', Object.fromEntries(historyItems))
    try {
  getters,
      // Already in cache
    }

  },


   */
      console.error(errMessage)
      commit('setHistoryCacheById', resultsById)
  updateRecordWatchProgressInHistoryCache(state, { videoId, watchProgress }) {
    if (record) {
  async updateLastViewedPlaylist({ commit }, { videoId, lastViewedPlaylistId, lastViewedPlaylistType, lastViewedPlaylistItemId }) {
  state,
    } catch (errMessage) {
    delete state.historyCacheById[videoId]
    const i = state.historyCacheSorted.findIndex((currentRecord) => {

    if (record) {
    }
      const sortedRecords = Array.from(historyItems.values())
const state = {
    const record = state.historyCacheById[videoId]
      await DBHistoryHandlers.upsert(record)
      })
  },
  },

    } catch (errMessage) {
      if (state.historyCacheSorted[i].videoId === videoId) {
const mutations = {
      await DBHistoryHandlers.overwrite(sortedRecords)
        break
   * @param {any} param0
    } catch (errMessage) {
  historyCacheById: {}
    const record = state.historyCacheById[videoId]

      record.lastViewedPlaylistType = lastViewedPlaylistType
      commit('setHistoryCacheSorted', sortedRecords)
}
  async grabHistory({ commit }) {
}
      console.error(errMessage)

    // Don't set, if the item was removed from the watch history, as we don't have any video details
    state.historyCacheById = historyCacheById
      // so that the other windows can use it as is, without having to sort the array themselves
    try {
import { DBHistoryHandlers } from '../../../datastores/handlers/index'
  },
    }
  async removeAllHistory({ commit }) {
    try {
    state.historyCacheById[record.videoId] = record
}


    }
      commit('updateRecordWatchProgressInHistoryCache', { videoId, watchProgress })
  updateRecordLastViewedPlaylistIdInHistoryCache(state, { videoId, lastViewedPlaylistId, lastViewedPlaylistType, lastViewedPlaylistItemId }) {
      results.forEach(video => {
    } catch (errMessage) {
  },
      console.error(errMessage)
  },
    })
}
    }
    }
  actions,
    }
      commit('setHistoryCacheById', {})
    // so modifying an existing object in one of them will update both.
}

  async overwriteHistory({ commit }, historyItems) {
  /**

  }

const actions = {

      record.watchProgress = watchProgress


      state.historyCacheSorted.splice(i, 1)
  // Vuex doesn't support Maps, so we have to use an object here instead
      const results = await DBHistoryHandlers.find()
    }
    state.historyCacheSorted.unshift(record)

      console.error(errMessage)
    }
    if (i !== -1) {
  },
    state.historyCacheSorted = historyCacheSorted
   * @param {Map<string, any>} historyItems
        resultsById[video.videoId] = video
      record.lastViewedPlaylistId = lastViewedPlaylistId
    try {
  async removeFromHistory({ commit }, videoId) {
      console.error(errMessage)
  }
      commit('setHistoryCacheSorted', results)
  },
  upsertToHistoryCache(state, record) {
    } catch (errMessage) {
    for (let i = 0; i < state.historyCacheSorted.length; i++) {

    return state.historyCacheById


  getHistoryCacheSorted(state) {

  historyCacheSorted: [],

  },
  removeFromHistoryCacheById(state, videoId) {
    try {
  setHistoryCacheById(state, historyCacheById) {
  setHistoryCacheSorted(state, historyCacheSorted) {
  async updateWatchProgress({ commit }, { videoId, watchProgress }) {
    } catch (errMessage) {
const getters = {
    } catch (errMessage) {

  mutations
      return record.videoId === currentRecord.videoId
      await DBHistoryHandlers.delete(videoId)
  },
      commit('setHistoryCacheSorted', [])
    // so modifying an existing object in one of them will update both.
