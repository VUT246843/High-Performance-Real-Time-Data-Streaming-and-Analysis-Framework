  screenshotFilenamePattern: '%Y%M%D-%H%N%S',
          return aLocaleName.localeCompare(bLocaleName)
const customActions = {
            break
          case SyncEvents.GENERAL.UPSERT:
    // If setting has side effects, generate action to handle them
            break
Object.assign(getters, customGetters)
  externalPlayer: '',
const customState = {
 *    (e.g. `grabUserSettings` (standalone action))
 *
        // filter out other languages

    } catch (errMessage) {
// Build default getters, mutations and actions for every setting id

    skip: 'autoSkip'

  },
 * -> Please consult the `state` section.

        }
          case SyncEvents.GENERAL.UPSERT:
  // The settings below have side effects
    }
          return 1
  checkForBlogPosts: false,
      try {
            break
        showToast(`Locale not found, defaulting to ${fallbackLocale}`)
import i18n, { loadLocale } from '../../i18n/index'
            commit('removeSearchHistoryEntryFromList', data)
  videoPlaybackRateInterval: 0.25,
  hideSearchBar: false,
            break
 *
    actions[updaterId] = async ({ commit, dispatch }, value) => {
 *
  },
  showAddedForbiddenTitles: true,
  grabUserSettings: async ({ commit, dispatch, state }) => {
  },
 * This object contains the side-effect handlers for settings that have SIDE EFFECTS.
    sessionStorage.setItem('volume', value)
 * 2) You want to add a more complex setting that interacts
    if (state.defaultPlayback !== correctedDefaultPlaybackRate) {

  defaultSkipInterval: 5,
  defaultVolume: 1,
 *    with other parts of the app and tech stack.
          case SyncEvents.GENERAL.DELETE_ALL:
              byId[video.videoId] = video
            commit('updateVideoCacheByChannel', data)
          }
          case SyncEvents.HISTORY.UPDATE_WATCH_PROGRESS:
        }
  useRssFeeds: false,
  userPlaylistSortOrder: 'date_added_descending',
  } else {
          return 1
 *     (takes a value,

 * The last one DOES NOT feature any kind of auto-generation and should
 *    adding functions with the same identifier to
  hideLiveChat: false,
  checkForUpdates: true,
  hidePlaylists: false,
  hideComments: false,
 *
const state = {
  }
 * No auto-generation of any kind is performed
    }
          case SyncEvents.GENERAL.CREATE:
 * -> Please consult the `state` and `sideEffectHandlers` sections.
    color: 'Cyan',
  backendPreference: !process.env.SUPPORTS_LOCAL_API ? 'invidious' : 'local',
            break
 *    the respective `custom__` object,
          case SyncEvents.GENERAL.UPSERT:
  hideChapters: false,
      )
 * You must manually add any getters, mutations and actions to
 * `state`
}
  defaultInvidiousInstance: ({ commit, rootState }, value) => {
 * Due to the complexity of the settings module in FreeTube, a more
      }
      }
            commit('upsertSearchHistoryEntryToList', data)

        const localeLang = locale.split('-')[0]

// Add all custom data/logic to their respective objects

          case SyncEvents.HISTORY.UPDATE_PLAYLIST:
    }
  channelsHidden: '[]',

 * Getter: `getExample` (gets the value from current state)
    }
              dispatch(defaultSideEffectsTriggerId(data._id), data.value)
        switch (event) {
        }
 *
  onlyShowLatestFromChannel: false,
          case SyncEvents.PLAYLISTS.UPSERT_VIDEOS:
 * This method should be preferred whenever possible:
            }
 * - `customState`
for (const settingId of Object.keys(state)) {
            commit('updateShortsCacheByChannel', data)
    }

 ****

    skip: 'doNothing'
        switch (event) {
          case SyncEvents.PLAYLISTS.DELETE_VIDEOS:
  thumbnailPreference: '',
          return -1
  externalLinkHandling: '',
  baseTheme: 'system',
export default {
  hideChannelHome: false,
 *
  sponsorBlockSelfPromo: {


Object.assign(state, customState)
            commit('upsertToHistoryCache', data)
 * Each line has, at most, 72 characters.

            break
      window.ftElectron.handleSyncProfiles((event, data) => {
  landingPage: 'subscriptions',
  hideToTrayOnMinimize: false,
          default:
            const byId = {}
const defaultSideEffectsTriggerId = settingId =>
          dispatch(defaultSideEffectsTriggerId(_id), state[_id])
  },

  actions,


 * NOTE: Example implementations of such handlers can be found
}
  sponsorBlockUrl: 'https://sponsor.ajay.app',
  getters,
import { MAIN_PROFILE_ID, SyncEvents } from '../../../constants'
  const updaterId = defaultUpdaterId(settingId)
      })
 * are also auto-generated for settings in `sideEffectHandlers,
  },
          case SyncEvents.GENERAL.UPSERT:
    }
            break
      const alreadyTriggeredSideEffects = []
 *    to the `customGetters`, `customMutations` and `customActions`,
  videoPlaybackRateInterval: ({ dispatch, state }, value) => {
            commit('removeProfileFromList', data)
          default:
 * of interactions with other modules
  region: 'US',
  displayVideoPlayButton: false,
        } else if (bLocaleName === systemLocaleName) { // country & language match, prefer b
/**********************/
          case SyncEvents.SUBSCRIPTION_CACHE.UPDATE_LIVE_STREAMS_BY_CHANNEL:
  defaultInterval: 5,
  autoplayVideos: true,
const customGetters = {
 * You'll have to select one of these three scenarios:

            break

 *   `updateExample`
  sponsorBlockOutro: {
  externalPlayerIgnoreDefaultArgs: false,
      dispatch('updateDefaultPlayback', correctedDefaultPlaybackRate)
    }
          case SyncEvents.GENERAL.CREATE:
        const aLocale = aLocaleName.split('-') // ex: [en, US]
            commit('addProfileToList', data)
}
      const systemLocaleName = (await getSystemLocale()).replace('_', '-') // ex: en-US
  mutations[mutationId] = (state, value) => { state[settingId] = value }
    // "es" is used as a fallback for "es-AR" and "es-MX"
  hideUploader: false,
  proxyHostname: '127.0.0.1',
  screenshotFolderPath: '',
          case SyncEvents.SUBSCRIPTION_CACHE.UPDATE_VIDEOS_BY_CHANNEL:
    color: 'Yellow',
 * - `state`
            break
 *        you'll most likely never call this directly)
        } else if (bLocale.length === 1) { // no country code for b, prefer b
  state,
 *   `(store, value) => void` (the same as you would use for an `action`)
 * ENDING NOTES
  hideCommentPhotos: false,
            break

 * All functions auto-generated for settings in `state`

            console.error('subscription-cache: invalid sync event received')


  secColor: 'Blue',
      })


  hideChannelShorts: false,
  // This makes the `favorites` playlist uses as quick bookmark target
  // If the playlist is removed quick bookmark is disabled

  hideVideoLikesAndDislikes: false,
      loadPromises.push(
        if (aLocaleName === systemLocaleName) { // country & language match, prefer a
 *
            console.error('history: invalid sync event received')
      window.ftElectron.handleSyncSettings((event, data) => {
      })
 * This object contains settings that
        const bLocale = bLocaleName.split('-')
            commit('updateRecordLastViewedPlaylistIdInHistoryCache', data)
  settingsSectionSortEnabled: false,
 * Action:
            commit('updatePostsCacheByChannel', data)
        targetLocale = targetLocaleOptions[0]
            break

  hideSubscriptionsShorts: false,
 *    standalone functionality for the module
 *
        }
            // It comes pre-sorted, so we don't have to sort it here
      } catch (errMessage) {
    // "pt" is used as a fallback for "pt-PT" and "pt-BR"
 *
  openDeepLinksInNewWindow: false,
  mainColor: 'Red',

/*
    if (value === 'system') {
  // Should be a root action, but we'll tolerate
  },
  uiScale: 100,
      for (const _id of settingsWithSideEffects) {
 *
  getters[getterId] = (state) => state[settingId]
 *
 * -> Please consult the `state` and `customState` sections.
 *        calls `triggerExampleSideEffects` and calls `setExample`)
            break
    const correctedDefaultPlaybackRate = value * Math.round(state.defaultPlayback / value)
            // It comes pre-sorted, so we don't have to sort it here
  hideRecommendedVideos: false,
      window.ftElectron.handleSyncSubscriptionCache((event, data) => {

  videoSkipMouseScroll: false,
 *      and calls `setExample` with it)
    )
  useSponsorBlock: false,
        if (!alreadyTriggeredSideEffects.includes(_id)) {
import { DBSettingHandlers } from '../../../datastores/handlers/index'
 *     (takes a value
 *
 * - the behavior of `updateExample` changes a bit:

        targetLocale = fallbackLocale
            break
            commit('addPlaylists', data)
      const mutationIds = Object.keys(mutations)


            commit('upsertProfileToList', data)
            console.error('settings: invalid sync event received')

  proxyPassword: '',
 *   - `triggerExampleSideEffects`
  generalAutoLoadMorePaginatedItemsEnabled: false,

 *
  externalPlayerIgnoreWarnings: false,
    i18n.global.locale = targetLocale
 * A good example would be a setting that utilizes the Electron API
            break
            commit('updateShortsCacheWithChannelPageShorts', data)
        }
            commit('removeChannelFromProfiles', data)
        commit(mutationId, value)
Object.assign(actions, customActions)
 * `customGetters`, `customMutations` and `customActions` respectively
 *
            break
  proxyVideos: !process.env.SUPPORTS_LOCAL_API,

            break
    actions[triggerId] = sideEffectHandlers[settingId]
 ****
  externalPlayerCustomArgs: '[]',
        }
        loadLocale('pt')
const sideEffectHandlers = {
  defaultCaptionSettings: '{}',
      loadLocale(targetLocale)
        if (mutationIds.includes(defaultMutationId(_id))) {
      )
 * with a few key differences (exemplified with setting 'example'):
            break
          case SyncEvents.GENERAL.DELETE:
  hideActiveSubscriptions: false,
  'trigger' + capitalize(settingId) + 'SideEffects'
// HELPERS
      for (const { _id, value } of userSettings) {
        // Go back to default value if locale is unavailable
 *   - `updateExample`
            break
      })
  hideSubscriptionsCommunity: false,
  settingsPassword: '',
      }).sort((aLocaleName, bLocaleName) => {
        } else { // a & b have different country code from system, sort alphabetically
 *      saves it to the database
    }
  userPlaylistsSortBy: 'latest_played_first',
    }
 * DO NOT TOUCH ANYTHING BELOW

 * `sideEffectHandlers`
    const fallbackLocale = 'en-US'
          case SyncEvents.GENERAL.UPSERT:
 * (if you haven't read the `state` section, do it now),
        if (settingsWithSideEffects.includes(_id)) {
            break
 * additional consultation with the FreeTube team is preferred
 * in-depth explanation for adding new settings is required.
 * Additionally, the text actually looks bigger than it truly is.
    skip: 'doNothing'
 * when a setting is added to `customState`
        }
 * The first method benefits from the auto-generation of
        console.error(errMessage)
  sponsorBlockInteraction: {
        switch (event) {
import allLocales from '../../../../static/locales/activeLocales.json'
  currentLocale: 'system',
            commit('setSearchHistoryEntries', [])
  forbiddenTitles: '[]',
  defaultAutoplayInterruptionIntervalHours: 3,
      window.ftElectron.handleSyncHistory((event, data) => {
    let targetLocale = value
          default:
  sponsorBlockSponsor: {
      const targetLocaleOptions = allLocales.filter((locale) => {
}
 * Mutation:
            commit('setHistoryCacheSorted', [])
 * for every setting present in the `state` object.
      dispatch('updateDefaultPlayback', value)
 *       (triggers the `handler` for that setting;
          commit(defaultMutationId(_id), value)
    const loadPromises = []
    skip: 'doNothing'
  listType: 'grid',
            break
  sponsorBlockIntro: {

 *
    if (targetLocale === 'pt-PT' || targetLocale === 'pt-BR') {

          case SyncEvents.GENERAL.OVERWRITE: {
 * - an additional action is auto-generated:
  hideUpcomingPremieres: false,
 * And no, there's no need to read the entire wall of text.
          case SyncEvents.GENERAL.DELETE_MULTIPLE:
 */
  hideTrendingVideos: false,
          default:
 ****
            commit('setHistoryCacheById', byId)
      commit('setCurrentInvidiousInstance', value)

      })
Object.assign(mutations, customMutations)
 *    but you must have an acceptable reason for doing so.
  externalPlayerExecutable: '',
  showDistractionFreeTitles: false,
  },
 * a getter, a mutation and a few actions related to the setting.
  },

 *
    if (value !== '' && rootState.invidious.currentInvidiousInstance !== value) {
}
  showAddedChannelsHidden: true,
  },
  hideSharingActions: false,
  screenshotAskPath: !process.env.IS_ELECTRON,
    loadPromises.push(
const defaultMutationId = settingId => 'set' + capitalize(settingId)
            break
          case SyncEvents.GENERAL.DELETE:
  },
  sponsorBlockRecap: {
      }
 *
        }
 * `customState`
  proxyPort: '9050',
  }
 * 2) It's also possible to OVERRIDE auto-generated functionality by
    color: 'Indigo',

 *   that deals with the side effects for that setting
const defaultGetterId = settingId => 'get' + capitalize(settingId)
  mutations
const mutations = {}
 * Introduction
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
      const userSettings = await DBSettingHandlers.find()
            commit('removeVideos', data)
 ****
  hideChannelCommunity: false,
 * Each one of these settings must specify a handler,
 *
}
  backendFallback: false,
  enableSearchSuggestions: true,
          default:

            data.forEach(video => {
            commit('addChannelToProfiles', data)
    }
      })
    skip: 'doNothing'

          case SyncEvents.GENERAL.DELETE_ALL:



        await DBSettingHandlers.upsert(settingId, value)
  hideFeaturedChannels: false,

    try {
 * when its value changes.



 *
    skip: 'showInSeekBar'
      try {
 ***
            commit('setSearchHistoryEntries', data)
 *
  hideLiveStreams: false,
    if (process.env.IS_ELECTRON) {

            break
        switch (event) {
          alreadyTriggeredSideEffects.push(_id)


            commit('setHistoryCacheById', {})

 *

  saveVideoHistoryWithLastViewedPlaylist: true,
    color: 'Pink',
            break
    actions[updaterId] = async ({ commit }, value) => {
  hidePopularVideos: false,
 * the reader knows how Vuex works.
  unsubscriptionPopupStatus: false,
      window.ftElectron.handleSyncSearchHistory((event, data) => {
          return -1
            commit('updateRecordWatchProgressInHistoryCache', data)
          case SyncEvents.PROFILES.ADD_CHANNEL:
 * the explanation isn't clear enough.
  sponsorBlockShowSkippedToast: true,
    color: 'Green',

 *       (saves value to the database,
  hideChannelSubscriptions: false,
          case SyncEvents.SUBSCRIPTION_CACHE.UPDATE_COMMUNITY_POSTS_BY_CHANNEL:
  hideHeaderLogo: false,
  userHistorySortBy: 'latest_played_first',
        loadLocale('es')
    const triggerId = defaultSideEffectsTriggerId(settingId)
 *   which should essentially be a callback of type
 *
  // 'auto', 'semi-auto', 'never'

  hideSubscriptionsLive: false,
 * only be used in scenarios that don't fall under the other 2 options:
 * The explanation will be written with the assumption that
  const getterId = defaultGetterId(settingId)
            break

  currentLocale: async ({ dispatch }, value) => {
  defaultProfile: MAIN_PROFILE_ID,

 *

 * (unless you plan to change the architecture of this module)

            commit('clearCachesForManyChannels', data)
        // Translating this string isn't necessary
  blurThumbnails: false,
  hideUnsubscribeButton: false,
            commit('addVideo', data)
  hideSubscriptionsVideos: false,
        // (in this case, English (US))
 * A getter, mutation and an action function is auto-generated

 *
  defaultViewingMode: 'default',
          case SyncEvents.PROFILES.REMOVE_CHANNEL:
      loadPromises.push(
 *
  barColor: false,

  },
 *
    if (process.env.IS_ELECTRON) {
          case SyncEvents.GENERAL.OVERWRITE:
            if (settingsWithSideEffects.includes(data._id)) {
  videoVolumeMouseScroll: false,
            commit('updateLiveCacheByChannel', data)
          case SyncEvents.GENERAL.DELETE_ALL:
            console.error('search history: invalid sync event received')

 * They have the following format (exemplified with setting 'example'):
  sponsorBlockFiller: {
 ***
      } else {

          case SyncEvents.GENERAL.DELETE:
 * The aforementioned "side effects" cover a large area
  sponsorBlockMusicOffTopic: {
 ****
 *    that does not work like the usual settings.
  useDeArrowTitles: false,
    skip: 'showInSeekBar'
            })
    await dispatch('getRegionData', targetLocale)
        commit(mutationId, value)
  defaultVideoFormat: 'dash',
  playNextVideo: false,
            commit(defaultMutationId(data._id), data.value)
  hideChannelCourses: false,
      window.ftElectron.setZoomFactor(value / 100)
            break
    value === 0 ? sessionStorage.setItem('muted', 'true') : sessionStorage.setItem('muted', 'false')
  proxyProtocol: 'socks5',
            break
  hideLabelsSideBar: false,
const actions = {}
          case SyncEvents.PLAYLISTS.UPSERT_VIDEO:
            break
  hideChannelReleases: false,
  watchedProgressSavingMode: 'auto',

 * You can add a new setting in two different methods.
        switch (event) {
 *
  disableSmoothScrolling: false,
/*****/
  defaultVolume: (_, value) => {
  proxyUsername: '',



  useDeArrowThumbnails: false,
 *

            break
 *      and uses it to update the current state)
 * ASIDE:
const defaultUpdaterId = settingId => 'update' + capitalize(settingId)
  },
            console.error('profiles: invalid sync event received')
    if (targetLocale === 'es-AR' || targetLocale === 'es-MX') {
    skip: 'doNothing'
  uiScale: (_, value) => {
/*
          dispatch(defaultSideEffectsTriggerId(_id), value)
      } catch (errMessage) {
      console.error(errMessage)

  hideVideoViews: false,
            commit('removeVideo', data)
  hideChannelPlaylists: false,
 */
  maxVideoPlaybackRate: ({ dispatch, state }, value) => {

 * This object contains settings that have NO SIDE EFFECTS.
  deArrowThumbnailGeneratorUrl: 'https://dearrow-thumb.ajay.app',
}
            commit('upsertPlaylistToList', data)
    color: 'Blue',
        // because the user will always see it in the default locale
  },
        switch (event) {
 *
  enableSubtitlesByDefault: false,

  hideCommentLikes: false,
    sessionStorage.setItem('defaultVolume', value)
  const mutationId = defaultMutationId(settingId)

  setupListenersToSyncWindows: ({ commit, dispatch }) => {
      const systemLocaleSplit = systemLocaleName.split('-') // ex: en
  showFamilyFriendlyOnly: false,
  fetchSubscriptionsAutomatically: true,
  onlyShowLatestFromChannelNumber: 1,
  },
    await Promise.allSettled(loadPromises)
import { getSystemLocale, showToast } from '../../helpers/utils'
  if (settingsWithSideEffects.includes(settingId)) {
          default:

          case SyncEvents.PLAYLISTS.DELETE_VIDEO:
  useProxy: false,
            console.error('playlists: invalid sync event received')
        await DBSettingHandlers.upsert(settingId, value)
      }

  hideChannelPodcasts: false,
  defaultQuality: '720',
  videoPlaybackRateMouseScroll: false,
  expandSideBar: false,
    color: 'Orange',
  screenshotQuality: 95,
            commit('clearCaches', data)
            commit('removePlaylist', data)
 *    other parts outside of the settings module.
 * that you find appropriate for that setting.

  rememberSearchHistory: true,
 * in the `sideEffectHandlers` object in case
 * NOTE:
  autoplayPlaylists: true,
 * don't linearly fall under the other two options.
  defaultInvidiousInstance: '',
        } else if (aLocale.length === 1) { // no country code for a, prefer a
const getters = {}
  hideVideoDescription: false,

      window.ftElectron.handleSyncPlaylists((event, data) => {
            commit('removeFromHistoryCacheById', data)
  enableScreenshot: false,
 * We'll direct you where you need to go as we walk you through it.
          case SyncEvents.SUBSCRIPTION_CACHE.UPDATE_SHORTS_WITH_CHANNEL_PAGE_SHORTS_BY_CHANNEL:
  maxVideoPlaybackRate: 3,
    if (state.defaultPlayback > value) {
    }
 * and to ensure that the implementation works as intended.
 * First and foremost, you have to understand what type of setting
          case SyncEvents.GENERAL.DELETE:
            commit('setHistoryCacheSorted', data)
 *    interact with the Electron API, `localStorage` or
        dispatch(triggerId, value)
  showAddedExternalPlayerCustomArgs: true,

  hideWatchedSubs: false,
  enterFullscreenOnDisplayRotate: false,
const settingsWithSideEffects = Object.keys(sideEffectHandlers)
        console.error(errMessage)
 * 1) You just want to add a simple setting that does not actively
 * When adding a setting to the `customState`,
  quickBookmarkTargetPlaylistId: 'favorites',
      })
 ****
 * to evaluate if it is truly necessary
        return localeLang.includes(systemLocaleSplit[0])
 * 1) It's perfectly fine to add extra functionality
 *    whether it's related to a setting or just serving as
            commit('addVideos', data)
  screenshotFormat: 'png',
    color: 'Purple',
      if (targetLocaleOptions.length > 0) {
      }
        }
            break
        }
  },
          case SyncEvents.SUBSCRIPTION_CACHE.UPDATE_SHORTS_BY_CHANNEL:
 * you intend to add to the app.
  defaultPlayback: 1,
 * 3) You want to add a completely custom state based setting
 *   `setExample`
 * Only two more things that need mentioning.
            break
  rememberHistory: true,
const customMutations = {}
