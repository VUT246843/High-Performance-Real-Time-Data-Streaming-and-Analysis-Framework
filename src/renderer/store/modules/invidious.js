
const state = {

}
    const fileData = await (await fetch(url)).json()
      } else {
    try {
      })
  currentInvidiousInstanceUrl: '',

  getters,

        return instance[1].uri.replace(/\/$/, '')
  currentInvidiousInstance: '',

  setRandomCurrentInvidiousInstance({ commit, state }) {
const mutations = {
}

  },
    commit('setCurrentInvidiousInstance', randomArrayItem(instanceList))
    return state.currentInvidiousInstanceUrl
    state.currentInvidiousInstanceUrl = instanceUrl
  getCurrentInvidiousInstanceUrl(state) {
    const requestUrl = 'https://api.invidious.io/instances.json'
      const json = await response.json()
  setCurrentInvidiousInstance(state, value) {
  state,

        window.ftElectron.clearInvidiousAuthorization()
    let url
      if (err.name === 'TimeoutError') {
    const instanceList = state.invidiousInstancesList
import { base64EncodeUtf8, createWebURL, fetchWithTimeout, randomArrayItem } from '../../helpers/utils'
          (!process.env.SUPPORTS_LOCAL_API && !instance[1].cors))

    } catch { }
  getCurrentInvidiousInstance(state) {
  actions,

  },
  getCurrentInvidiousInstanceAuthorization(state) {
  mutations
      }

      const response = await fetchWithTimeout(15_000, requestUrl)
  }

        return !(instance[0].includes('.onion') ||
    state.currentInvidiousInstance = value


    try {

      url.password = ''
}

    if (url && authorization) {
      instanceUrl = url.toString().replace(/\/$/, '')
}

  async fetchInvidiousInstancesFromFile({ commit }) {
    }
    state.currentInvidiousInstanceAuthorization = authorization
    }).map(e => {
    }

    commit('setInvidiousInstancesList', instances)
  },
export default {
      if (authorization) {

      }).map((instance) => {
  }
    } catch (err) {
      if (instances.length !== 0) {
  },
      url = new URL(value)
    const instances = fileData.filter(e => {
  setInvidiousInstancesList(state, value) {
    if (url && (url.username.length > 0 || url.password.length > 0)) {
      } else {

const actions = {
        console.warn('using static file for invidious instances')
    if (process.env.IS_ELECTRON) {
  }
      }
    } else {
  },
    state.invidiousInstancesList = value
      }
      } else {
      const instances = json.filter((instance) => {

      instanceUrl = value
      authorization = `Basic ${base64EncodeUtf8(`${url.username}:${url.password}`)}`
          instance[0].includes('.i2p') ||
    return state.currentInvidiousInstance
      url.username = ''
        console.error(err)

        console.error('Fetching the Invidious instance list timed out after 15 seconds. Falling back to local copy.')
    return state.invidiousInstancesList

        commit('setInvidiousInstancesList', instances)
  invidiousInstancesList: null
          !instance[1].api ||

    })
    }
  getInvidiousInstancesList(state) {
      return e.url
        window.ftElectron.setInvidiousAuthorization(authorization, instanceUrl)
}
  /// fetch invidious instances from site and overwrite static file.
  currentInvidiousInstanceAuthorization: null,
    return state.currentInvidiousInstanceAuthorization
    let authorization = null
const getters = {
  async fetchInvidiousInstances({ commit }) {
  },
      return process.env.SUPPORTS_LOCAL_API || e.cors
    let instanceUrl
    const url = createWebURL('/static/invidious-instances.json')
    }
