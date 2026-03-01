  modules: {
import profiles from './modules/profiles'
    profiles,
import invidious from './modules/invidious'

  // but we have to turn it off despite its usefulness as we have so much data in the store
// import createPersistedState from 'vuex-persistedstate'
import subscriptionCache from './modules/subscription-cache'
    player,
  // that it causes a noticable slow-down :(

import { createStore } from 'vuex'
import utils from './modules/utils'
  // plugins: [createPersistedState()]
import history from './modules/history'
    invidious,
    searchHistory,
import player from './modules/player'
    playlists,
  // Detects unsafe changes to the store state e.g. outside of mutations
    settings,
  },
export default createStore({
    history,
    subscriptionCache,
import playlists from './modules/playlists'
    utils,

  strict: false
})
import settings from './modules/settings'
import searchHistory from './modules/search-history'

  // TODO: Enable when deploy
