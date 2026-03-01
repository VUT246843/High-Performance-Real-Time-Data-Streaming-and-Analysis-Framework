  async removeSearchHistoryEntry({ commit }, _id) {
      if (entry._id.startsWith(id)) {
    return matches.sort((a, b) => a.length - b.length)
import { DBSearchHistoryHandlers } from '../../../datastores/handlers/index'
    }
        counter++
  async removeAllSearchHistoryEntries({ commit }) {
  },
  mutations
  searchHistoryEntries: []
    try {


  removeSearchHistoryEntryFromList(state, _id) {


        if (counter === MIXED_SEARCH_HISTORY_ENTRIES_DISPLAY_LIMIT) {
      // sort before sending saving to the database and passing to other windows
      console.error(errMessage)

      console.error(errMessage)

    } catch (errMessage) {

    // prioritize more concise matches
      console.error(errMessage)
  },
  getLatestSearchHistoryNames: (state) => {
      commit('upsertSearchHistoryEntryToList', searchHistoryEntry)

    state.searchHistoryEntries = searchHistoryEntries
  },
      commit('setSearchHistoryEntries', [])
    }
    } catch (errMessage) {
   * @param {any} param0
  /**
  },

    } catch (errMessage) {
    try {
      commit('setSearchHistoryEntries', results)

const state = {
const mutations = {
  },
    state.searchHistoryEntries.unshift(updatedSearchHistoryEntry)
    state.searchHistoryEntries = state.searchHistoryEntries.filter((searchHistoryEntry) => searchHistoryEntry._id !== _id)
      await DBSearchHistoryHandlers.deleteAll()
      await DBSearchHistoryHandlers.overwrite(historyItems)
    return state.searchHistoryEntries.find(p => p._id === id)
  getters,
  setSearchHistoryEntries(state, searchHistoryEntries) {
      commit('removeSearchHistoryEntryFromList', _id)
  },
    try {
import { MIXED_SEARCH_HISTORY_ENTRIES_DISPLAY_LIMIT, SEARCH_RESULTS_DISPLAY_LIMIT } from '../../../constants'
        }

  upsertSearchHistoryEntryToList(state, updatedSearchHistoryEntry) {
  },
      // so that the other windows can use it as is, without having to sort the array themselves
  actions,
    } catch (errMessage) {
    }
      const results = await DBSearchHistoryHandlers.find()
    state.searchHistoryEntries = state.searchHistoryEntries.filter((p) => {
    try {
      }
    })

}
          break
      await DBSearchHistoryHandlers.upsert(searchHistoryEntry)
   */
    }
  state,
  },
  getLatestMatchingSearchHistoryNames: (state) => (id) => {

  },



  async updateSearchHistoryEntry({ commit }, searchHistoryEntry) {
    try {
  async grabSearchHistoryEntries({ commit }) {
      await DBSearchHistoryHandlers.delete(_id)
      historyItems.sort((a, b) => b.timeWatched - a.timeWatched)
    }
      console.error(errMessage)
    } catch (errMessage) {
}

}
        matches.push(entry._id)
  async overwriteSearchHistory({ commit }, historyItems) {
    return state.searchHistoryEntries

  getSearchHistoryEntries: (state) => {
      return p._id !== updatedSearchHistoryEntry._id
}
const getters = {
      commit('setSearchHistoryEntries', historyItems)
    }
    const matches = []
  }
    return state.searchHistoryEntries.slice(0, SEARCH_RESULTS_DISPLAY_LIMIT).map((entry) => entry._id)
    let counter = 0
  },
  getSearchHistoryEntryWithId: (state) => (id) => {
}
   * @param {{ _id: string, lastUpdatedAt: number }[]} historyItems
    for (const entry of state.searchHistoryEntries) {
export default {
const actions = {
  },
      console.error(errMessage)

