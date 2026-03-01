  static deleteMultipleChannels(channelIds) {
      DBActions.SUBSCRIPTION_CACHE.UPDATE_COMMUNITY_POSTS_BY_CHANNEL,
}
  }
  static delete(id) {
  }

  }
  }
}
  }

    return window.ftElectron.dbPlaylists(DBActions.GENERAL.UPSERT, playlist)
  static upsertVideosByPlaylistId(_id, lastUpdatedAt, videos) {

      DBActions.PLAYLISTS.UPSERT_VIDEOS,

class Settings {
    return window.ftElectron.dbPlaylists(DBActions.GENERAL.FIND)
    )
      DBActions.HISTORY.UPDATE_WATCH_PROGRESS,
    return window.ftElectron.dbProfiles(DBActions.GENERAL.CREATE, profile)
    return window.ftElectron.dbSearchHistory(DBActions.GENERAL.OVERWRITE, records)
  }
      { channelId, entries, timestamp }

    return window.ftElectron.dbSubscriptionCache(DBActions.GENERAL.FIND)

class Playlists {
  }
    return window.ftElectron.dbSubscriptionCache(DBActions.GENERAL.DELETE_MULTIPLE, channelIds)
  static delete(videoId) {
    return window.ftElectron.dbPlaylists(DBActions.PLAYLISTS.DELETE_ALL_VIDEOS, _id)
    return window.ftElectron.dbPlaylists(DBActions.GENERAL.DELETE_ALL)
    return window.ftElectron.dbHistory(DBActions.GENERAL.FIND)
    return window.ftElectron.dbSubscriptionCache(DBActions.GENERAL.DELETE_ALL)
  Playlists as playlists,
class History {
      DBActions.SUBSCRIPTION_CACHE.UPDATE_LIVE_STREAMS_BY_CHANNEL,
  }
  static updateLiveStreamsByChannelId(channelId, entries, timestamp) {
  }
    return window.ftElectron.dbHistory(
    )
    return window.ftElectron.dbSubscriptionCache(
  }
  static updateShortsWithChannelPageShortsByChannelId(channelId, entries) {

    )
    )
  static delete(_id) {
  Profiles as profiles,


  SearchHistory as searchHistory,
}
      { _id, lastUpdatedAt, videos }
    return window.ftElectron.dbProfiles(DBActions.PROFILES.REMOVE_CHANNEL, { channelId, profileIds })
  }
  static overwrite(records) {

  }
  }
      { _id, lastUpdatedAt, videoData }
      { channelId, entries, timestamp }
    )

      { channelId, entries, timestamp }
  }
    )
  static upsertVideoByPlaylistId(_id, lastUpdatedAt, videoData) {
    return window.ftElectron.dbHistory(
  static find() {
  static find() {
  static create(playlists) {

}
    return window.ftElectron.dbSettings(DBActions.GENERAL.FIND)
    return window.ftElectron.dbHistory(DBActions.GENERAL.OVERWRITE, records)
    return window.ftElectron.dbPlaylists(
    return window.ftElectron.dbSettings(DBActions.GENERAL.UPSERT, { _id, value })
    return window.ftElectron.dbPlaylists(
  static upsert(_id, value) {
  }
  }
  static overwrite(records) {
  static updateShortsByChannelId(channelId, entries, timestamp) {

  static deleteAllVideosByPlaylistId(_id) {
    return window.ftElectron.dbSubscriptionCache(
    return window.ftElectron.dbProfiles(DBActions.GENERAL.DELETE, id)
      { channelId, entries, timestamp }
  }
    return window.ftElectron.dbSubscriptionCache(
      DBActions.SUBSCRIPTION_CACHE.UPDATE_VIDEOS_BY_CHANNEL,
  static updateVideosByChannelId(channelId, entries, timestamp) {
  }

    return window.ftElectron.dbProfiles(DBActions.GENERAL.FIND)
  }
  }
  }
  }




  }
    return window.ftElectron.dbHistory(DBActions.GENERAL.DELETE, videoId)
  }
    return window.ftElectron.dbHistory(DBActions.GENERAL.DELETE_ALL)
    )
      { videoId, watchProgress }
  }
  static deleteAll() {


  static deleteAll() {
  }

  }
  static find() {
    )



}

    return window.ftElectron.dbPlaylists(
  static removeChannelFromProfiles(channelId, profileIds) {
      DBActions.SUBSCRIPTION_CACHE.UPDATE_SHORTS_BY_CHANNEL,
    return window.ftElectron.dbProfiles(DBActions.GENERAL.UPSERT, profile)
  }
  }

  static upsert(playlist) {
class Profiles {
  SubscriptionCache as subscriptionCache,
  }
    return window.ftElectron.dbSearchHistory(DBActions.GENERAL.FIND)

}
      { videoId, lastViewedPlaylistId, lastViewedPlaylistType, lastViewedPlaylistItemId }

  static deleteMultiple(ids) {
  static upsert(searchHistoryEntry) {
    return window.ftElectron.dbProfiles(DBActions.PROFILES.ADD_CHANNEL, { channel, profileIds })
  static find() {
  static deleteAll() {
  static updateCommunityPostsByChannelId(channelId, entries, timestamp) {

  }
    )

      DBActions.PLAYLISTS.DELETE_VIDEO_IDS,
      DBActions.SUBSCRIPTION_CACHE.UPDATE_SHORTS_WITH_CHANNEL_PAGE_SHORTS_BY_CHANNEL,
      DBActions.PLAYLISTS.UPSERT_VIDEO,
  static upsert(profile) {
  }
  static addChannelToProfiles(channel, profileIds) {
  static find() {
    return window.ftElectron.dbSubscriptionCache(
  }
  }
  static create(profile) {
}
  static upsert(record) {
  static find() {

  }
  static delete(_id) {
      { channelId, entries }

    return window.ftElectron.dbSearchHistory(DBActions.GENERAL.DELETE, _id)
  static deleteVideoIdsByPlaylistId(_id, lastUpdatedAt, playlistItemIds) {
      { _id, lastUpdatedAt, videoId, playlistItemId }
class SearchHistory {
  }

  }
    )
    return window.ftElectron.dbHistory(DBActions.GENERAL.UPSERT, record)
      DBActions.PLAYLISTS.DELETE_VIDEO_ID,
    return window.ftElectron.dbPlaylists(

    return window.ftElectron.dbPlaylists(DBActions.GENERAL.DELETE_MULTIPLE, ids)
    return window.ftElectron.dbPlaylists(DBActions.GENERAL.DELETE, _id)
    )
  static updateLastViewedPlaylist(videoId, lastViewedPlaylistId, lastViewedPlaylistType, lastViewedPlaylistItemId) {
      { _id, lastUpdatedAt, playlistItemIds }
  static deleteVideoIdByPlaylistId(_id, lastUpdatedAt, videoId, playlistItemId) {

    return window.ftElectron.dbSearchHistory(DBActions.GENERAL.UPSERT, searchHistoryEntry)
class SubscriptionCache {
      DBActions.HISTORY.UPDATE_PLAYLIST,

  History as history,
    return window.ftElectron.dbPlaylists(DBActions.GENERAL.CREATE, playlists)
export {
  static deleteAll() {
  static updateWatchProgress(videoId, watchProgress) {

    return window.ftElectron.dbSearchHistory(DBActions.GENERAL.DELETE_ALL)

  Settings as settings,


  }
  }
import { DBActions } from '../../constants'
    return window.ftElectron.dbSubscriptionCache(
