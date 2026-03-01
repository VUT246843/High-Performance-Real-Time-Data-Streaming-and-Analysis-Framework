      }

    }
    try {
  },
      // https://github.com/FreeTubeApp/FreeTube/pull/3468#discussion_r1179290877
    subscriptions: []
    const profileList = state.profileList
      }


    // So sort with that then sort alphabetically by profile name
      profiles = await DBProfileHandlers.find()
  if (a.name > b.name) return 1
}
      if (channel === null) { continue }
import { deepCopy } from '../../helpers/utils'
        await DBProfileHandlers.create(defaultProfile)

        updated = true
    return mainProfile.subscriptions.reduce((set, channel) => set.add(channel.id), new Set())
    const i = state.profileList.findIndex((profile) => {
      channel.thumbnail = channel.thumbnail.replace(/^https?:\/\/[^/]+\/ggpht/, 'https://yt3.googleusercontent.com')
      const currentProfileCopy = deepCopy(profile)
        return profile._id === rootState.settings.defaultProfile
      const textColor = calculateColorLuminance(randomColor)

    } catch (errMessage) {
    return state.profileList.find((profile) => {

    if (profiles.length === 0) {

        if (channelThumbnailUrl) {
  getSubscribedChannelIdSet: (state) => {
        commit('setProfileList', [defaultProfile])
    }
import { calculateColorLuminance, getRandomColor } from '../../helpers/colors'
      const newProfile = await DBProfileHandlers.create(profile)
    try {
      } else { // channel has not been updated, stop iterating through profiles
    }
  addProfileToList(state, profile) {
      }
  async updateSubscriptionDetails({ dispatch, state }, { channelThumbnailUrl, channelName, channelId }) {
      state.profileList.find(profile => profile._id === id).subscriptions.push(channel)
        }
            // If this is an Invidious URL, convert it to a YouTube one
      return

    state.activeProfile = activeProfile

        return channel.id === channelId
      commit('addChannelToProfiles', { channel, profileIds })
  addChannelToProfiles(state, { channel, profileIds }) {
    } catch (errMessage) {
        name: defaultName,

        if (channel.name !== channelName && channelName != null) {

const mutations = {
      await DBProfileHandlers.removeChannelFromProfiles(channelId, profileIds)
      state.profileList.splice(i, 1, updatedProfile)

  getProfileList: (state) => {
const state = {
  getters,
            .replace(/=s\d*/, '=s176')
    commit('setProfileList', profiles)
    try {
      const profile = profiles.find((profile) => {
            // change thumbnail size if different
  if (a.name < b.name) return -1
  async addChannelToProfiles({ commit }, { channel, profileIds }) {
          return channel.id === channelId

  },
  setActiveProfile(state, activeProfile) {
    return state.profileList.find(p => p._id === id)
    if (state.profileList.length < profiles.length) {
    try {
    for (const profile of profileList) {
          if (channel.thumbnail !== thumbnail) {
        console.error(errMessage)


  state,

}
          channel.name = channelName

      commit('removeChannelFromProfiles', { channelId, profileIds })
            profileUpdated = true
      return profile._id === activeProfileId
      }
      await DBProfileHandlers.addChannelToProfiles(channel, profileIds)

        const channel = currentProfileCopy.subscriptions.find((channel) => {
      if (profileUpdated) {
    name: 'All Channels',
  },
        textColor: textColor,
        subscriptions: []
    const profileList = state.profileList

    if (!channel.thumbnail.startsWith('https://yt3.googleusercontent.com/')) {
      // change thumbnail size if different

function profileSort(a, b) {
        channel.name = channelName
  }
      // Create a default profile and persist it
          const thumbnail = channelThumbnailUrl
  },
        await dispatch('updateProfile', currentProfileCopy)
      commit('upsertProfileToList', profile)
      }
      return p._id === updatedProfile._id

  removeChannelFromProfiles(state, { channelId, profileIds }) {
import { MAIN_PROFILE_ID } from '../../../constants'
  actions,
    state.profileList.sort(profileSort)
}
  },
      } catch (errMessage) {
    })
  activeProfile: MAIN_PROFILE_ID
      const defaultProfile = {

        if (channel === null) { continue }
      if (channel.thumbnail !== thumbnail && thumbnail != null) {
    for (const id of profileIds) {
        updated = true
      if (profile) {
    const activeProfileId = state.activeProfile
      console.error(errMessage)
      try {
  },
    } catch (errMessage) {
    try {
          }
    state.profileList.push(profile)
        channel.thumbnail = thumbnail
    for (const profile of profileList) {
    for (const id of profileIds) {
    textColor: '#FFFFFF',
      commit('removeProfileFromList', profileId)

        }
      .replace(/^https?:\/\/[^/]+\/ggpht/, 'https://yt3.googleusercontent.com') ??
      // If this is an Invidious URL, convert it to a YouTube one
      const randomColor = getRandomColor().value
        await dispatch('updateProfile', currentProfileCopy)
  async createProfile({ commit }, profile) {
    let profiles
          profileUpdated = true

      let updated = false
      console.error(errMessage)
  profileList: [{
    state.profileList.splice(i, 1)
      const channel = currentProfileCopy.subscriptions.find((channel) => {
  async updateProfile({ commit }, profile) {
        _id: MAIN_PROFILE_ID,
    })
    const mainProfile = state.profileList[0]
    profiles = profiles.sort(profileSort)
        commit('setActiveProfile', profile._id)
  },

    const thumbnail = channelThumbnailUrl
    state.profileList.sort(profileSort)
      commit('addProfileToList', newProfile)
    return state.profileList


  async removeChannelFromProfiles({ commit }, { channelId, profileIds }) {
            channel.thumbnail = thumbnail
    }
      null
    }

export default {
  },
    } catch (errMessage) {
  removeProfileFromList(state, profileId) {

      return

      state.profileList.push(updatedProfile)
  mutations
        }) ?? null
  },
  if (a._id === MAIN_PROFILE_ID) return -1
    _id: MAIN_PROFILE_ID,
    }
      return profile._id === profileId
      profile.subscriptions = profile.subscriptions.filter(channel => channel.id !== channelId)

    // If this is an Invidious URL, convert it to a YouTube one
  profileById: (state) => (id) => {
    }
      if (updated) {
    if (!Array.isArray(profiles)) return

  getActiveProfile: (state) => {
      console.error(errMessage)
      // use filter instead of splice in case the subscription appears multiple times
    // The all channels profile is always the first profile in the array
  async grabAllProfiles({ rootState, commit, state }, defaultName = null) {
  return 0
    }
  },
  }
    try {
    commit('setActiveProfile', id)


  setProfileList(state, profileList) {
      await DBProfileHandlers.delete(profileId)
      console.error(errMessage)
      for (const { channelThumbnailUrl, channelName, channelId } of channels) {
  }],
    }
        break
      }

      ?.replace(/=s\d*/, '=s176')
import { DBProfileHandlers } from '../../../datastores/handlers/index'
  if (b._id === MAIN_PROFILE_ID) return 1
    } catch (errMessage) {
  },
      console.error(errMessage)
    // We want the primary profile to always be first
const getters = {

    })
  },

    } else {
            .replace(/^https?:\/\/[^/]+\/ggpht/, 'https://yt3.googleusercontent.com')
      }) ?? null

}
    if (i === -1) {
    }
  },


      const profile = state.profileList.find(profile => profile._id === id)
    }
    state.profileList = profileList
      }
        bgColor: randomColor,
  },
}
      if (channel.name !== channelName && channelName != null) {
    const i = state.profileList.findIndex((p) => {
      let profileUpdated = false
      }
    if (channels.length === 0) { return }
const actions = {
  async batchUpdateSubscriptionDetails({ dispatch, state }, channels) {
  },
    } catch (errMessage) {

  },
  },
      await DBProfileHandlers.upsert(profile)
  upsertProfileToList(state, updatedProfile) {

  },


    }
    }
}
      console.error(errMessage)
      })
  async removeProfile({ commit }, profileId) {
      const currentProfileCopy = deepCopy(profile)
    bgColor: '#000000',
    }
  updateActiveProfile({ commit }, id) {

