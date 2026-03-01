}
import { createWebURL } from '../../helpers/utils'

  getters,

    Object.freeze(data)
    const url = createWebURL(`/static/shaka-player-locales/${locale}.json`)
  }

    const data = await response.json()

export default {
// replace with a Map after the Vue 3 and Pinia migrations

  addPlayerLocaleToCache(state, { locale, data }) {
    const response = await fetch(url)
  state,
  actions,
}
  async cachePlayerLocale({ commit }, locale) {
  }
}
const mutations = {

const getters = {}
const actions = {
  mutations

    commit('addPlayerLocaleToCache', { locale, data })

  cachedPlayerLocales: {}
const state = {
    state.cachedPlayerLocales[locale] = data
}
