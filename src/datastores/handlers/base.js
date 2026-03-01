    return db.settings.findAsync({ _id: { $ne: 'bounds' } })
  }
    // Theater Mode preference through this change.
      { _id: channelId },
        $set: { lastUpdatedAt }
    const doc = await db.subscriptionCache.findOneAsync({ _id: channelId }, { shorts: 1 })
class SearchHistory {
      // 12345 vs 12000 => 12345
      await db.settings.removeAsync({ _id: 'saveWatchedProgress' })
  }
    return db.playlists.insertAsync(playlists)
  }
  static upsert(profile) {
  static create(playlists) {
        $in: [
    )
  }
    return db.settings.findAsync({

      hidePlaylists: db.settings.findOneAsync({ _id: 'hidePlaylists' }),

  }
  }


    return db.history.removeAsync({}, { multi: true })
    await db.history.removeAsync({}, { multi: true })
  static updateLastViewedPlaylist(videoId, lastViewedPlaylistId, lastViewedPlaylistType, lastViewedPlaylistItemId) {
}
  }
class Profiles {
        { _id: { $in: profileIds } },
        { _id: channelId },
        { multi: true }
      // as the channel shorts page only has compact view counts for numbers above 1000 e.g. 12k
    )
        $set: { lastUpdatedAt }
    return db.subscriptionCache.findAsync({})
      )
    }
        { $set: { shorts: doc.shorts } }
          $pull: { videos: { playlistItemId } },
    return db.playlists.removeAsync({ _id: { $in: ids }, protected: { $ne: true } })

  static async updateShortsWithChannelPageShortsByChannelId(channelId, entries) {
    return db.history.removeAsync({ videoId })
  static upsert(_id, value) {
    return db.playlists.updateAsync(
}
  static create(profile) {
  static delete(videoId) {
  static upsert(record) {
    return db.playlists.updateAsync(
        { _id: profileIds[0] },
          'proxyPort',
    }
    return db.searchHistory.removeAsync({}, { multi: true })
    return db.playlists.removeAsync({ _id, protected: { $ne: true } })
        { $pull: { subscriptions: { id: channelId } } }
  }

      await db.subscriptionCache.updateAsync(
    // with the user manually entering `;` to separate the different arguments.



      return db.playlists.updateAsync(
  }
        { $push: { subscriptions: channel } },
  }
  }
      if (!channelVideo) { return }
      )
    db.subscriptionCache.compactDatafileAsync(),
        { $pull: { subscriptions: { id: channelId } } },


    return db.profiles.insertAsync(profile)

    )



  }
      // authorId probably never changes, so we don't need to update that
    )

  static _findSidenavSettings() {


    return db.subscriptionCache.updateAsync(
      cachedVideo.author = channelVideo.author
      }
    db.profiles.loadDatabaseAsync(),
    db.searchHistory.loadDatabaseAsync(),

  }
    return db.settings.findOneAsync({ _id })
    }
    db.settings.compactDatafileAsync(),
  static delete(_id) {
    if (hasUpdates) {
      return db.profiles.updateAsync(
      _id: {
    })
}
      if (!saveWatchedProgress.value) {

  static updateWatchProgress(videoId, watchProgress) {
    )
}

    return db.subscriptionCache.updateAsync(
      await db.settings.removeAsync({ _id: 'defaultTheatreMode' })
  static _findOne(_id) {
    db.subscriptionCache.loadDatabaseAsync(),
    return db.subscriptionCache.removeAsync({}, { multi: true })

    return db.playlists.updateAsync(
  static delete(_id) {
      },

    const externalPlayerCustomArgs = await db.settings.findOneAsync({ _id: 'externalPlayerCustomArgs' })
        await this.upsert('defaultViewingMode', 'theatre')

  }
      // and the RSS feeds include an exact value, we only want to overwrite it when the number is larger than the cached value
        { upsert: true }
      )
      { _id },
    doc.shorts.forEach(cachedVideo => {
      }
  SearchHistory as searchHistory,
        await this.upsert('watchedProgressSavingMode', 'never')
function loadDatastores() {
    return db.profiles.removeAsync({ _id: id })
export {

  static upsertVideosByPlaylistId(_id, lastUpdatedAt, videos) {
      { _id },
    return db.subscriptionCache.updateAsync(
  }
    let hasUpdates = false
  }
        {
  }
  static find() {
import * as db from '../index'
  static deleteAll() {
    return {
    // of the "Default Viewing Mode" setting. This is a one time migration to preserve users'
      return

  static updateShortsByChannelId(channelId, entries, timestamp) {
      return db.profiles.updateAsync(
    db.history.compactDatafileAsync(),

  Playlists as playlists,
        { _id },
  static removeChannelFromProfiles(channelId, profileIds) {
    if (saveWatchedProgress && !watchedProgressSavingMode) {

}

  static deleteAllVideosByPlaylistId(_id) {
    db.history.loadDatabaseAsync(),
    return db.playlists.findAsync({})
  ])
      if (channelVideo.viewCount > cachedVideo.viewCount) {
      {
      { _id },

    return db.subscriptionCache.updateAsync(

      { _id: channelId },
      cachedVideo.title = channelVideo.title
  static deleteVideoIdsByPlaylistId(_id, lastUpdatedAt, playlistItemIds) {
    return db.searchHistory.removeAsync({ _id: _id })
    )
    }
    }
    return db.subscriptionCache.removeAsync({ _id: { $in: channelIds } }, { multi: true })
      { upsert: true }
      let newValue = '[]'
    }
          'proxyHostname',
class SubscriptionCache {
      { upsert: true }
    } else if (videoId != null) {
  static deleteMultiple(ids) {
      return db.profiles.updateAsync(
  }
        { _id },
      // 12345 vs 15000 => 15000
    return db.history.updateAsync({ videoId }, { $set: { lastViewedPlaylistId, lastViewedPlaylistType, lastViewedPlaylistItemId } }, { upsert: true })
  }
  static deleteMultipleChannels(channelIds) {
    // In FreeTube 0.21.3 and earlier the locales 'en-GB', 'es-AR' and 'nb-NO' had underscores instead of a hyphens
    return db.history.findAsync({}).sort({ timeWatched: -1 })
    await db.history.insertAsync(records)
      { upsert: true }
      )

    return db.playlists.removeAsync({}, { multi: true })
  static updateVideosByChannelId(channelId, entries, timestamp) {
    if (!Array.isArray(doc?.shorts)) {


    return db.profiles.findAsync({})
      },
      { $set: { shorts: entries, shortsTimestamp: timestamp } },

        $push: { videos: { $each: videos } },

    return db.profiles.updateAsync({ _id: profile._id }, profile, { upsert: true })

        cachedVideo.viewCount = channelVideo.viewCount

      { $set: { communityPosts: entries, communityPostsTimestamp: timestamp } },
    await db.searchHistory.insertAsync(records)
      await this.upsert('externalPlayerCustomArgs', newValue)

  Profiles as profiles,

      },
  }
    )
      { upsert: true }
  }
  }
    }

    if (currentLocale?.value.includes('_')) {
  }
  }
      return db.playlists.updateAsync(
      return db.profiles.updateAsync(
  static upsert(playlist) {
        {
    db.playlists.loadDatabaseAsync(),
  static updateLiveStreamsByChannelId(channelId, entries, timestamp) {
      )
      { upsert: true }
      await this.upsert('currentLocale', currentLocale.value.replace('_', '-'))
function compactAllDatastores() {
    } else {
  }
  }
  }
          $pull: { videos: { videoId } },
          'disableSmoothScrolling',
  static async find() {
    return db.settings.updateAsync({ _id }, { _id, value }, { upsert: true })
        $push: { videos: videoData },

      if (externalPlayerCustomArgs.value.length > 0) {
          'backendPreference',
      const channelVideo = entries.find(short => cachedVideo.videoId === short.videoId)
  static upsert(searchHistoryEntry) {
  }
    db.profiles.compactDatafileAsync(),
    return db.settings.updateAsync({ _id: 'bounds' }, { _id: 'bounds', value }, { upsert: true })
    } else {
        { $push: { subscriptions: channel } }
    const defaultTheatreMode = await db.settings.findOneAsync({ _id: 'defaultTheatreMode' })
    // This is a one time migration for users that are using one of those locales
          'useProxy',
      { $set: { videos: [] } },
  }
  static async overwrite(records) {
          'hideToTrayOnMinimize'
    return db.searchHistory.findAsync({}).sort({ lastUpdatedAt: -1 })
  SubscriptionCache as subscriptionCache,
  // Unique Electron main process handlers
    if (profileIds.length === 1) {
    if (playlistItemId != null) {
  static find() {
        { upsert: true }
      { upsert: true }
  static deleteVideoIdByPlaylistId(_id, lastUpdatedAt, videoId, playlistItemId) {
    // This is a one time migration that converts the old string to a JSON array

  }

        $set: { lastUpdatedAt }
      { _id: channelId },
    // In FreeTube 0.22.0 and earlier the external player arguments were displayed in a text box,
    // In FreeTube 0.23.0, the "Enable Theatre Mode by Default" setting was incoporated as an option
  }
  }
  // ******************** //
  static delete(id) {
      { $set: { liveStreams: entries, liveStreamsTimestamp: timestamp } },
      { $set: { videos: entries, videosTimestamp: timestamp } },

        { _id: profileIds[0] },
    db.settings.loadDatabaseAsync(),
        newValue = JSON.stringify(externalPlayerCustomArgs.value.split(';'))
    }

      throw new Error(`Both videoId & playlistItemId are absent, _id: ${_id}`)
class History {
}
    db.searchHistory.compactDatafileAsync(),
      { upsert: true }

    if (defaultTheatreMode) {
      }
    return db.searchHistory.updateAsync({ _id: searchHistoryEntry._id }, searchHistoryEntry, { upsert: true })
        },
          $set: { lastUpdatedAt }
  }
  static addChannelToProfiles(channel, profileIds) {
  }
      { _id: channelId },
  Settings as settings,
  static deleteAll() {

  // ******************** //

      {
  static _findAppReadyRelatedSettings() {
class Playlists {
      hideTrendingVideos: db.settings.findOneAsync({ _id: 'hideTrendingVideos' }),

    })
}
  static upsertVideoByPlaylistId(_id, lastUpdatedAt, videoData) {
    }
      hasUpdates = true
    return db.playlists.updateAsync({ _id: playlist._id }, { $set: playlist }, { upsert: true })

  }
      )

      )
  }
  History as history,

  return Promise.allSettled([
          'backendFallback',

  loadDatastores,
    await db.searchHistory.removeAsync({}, { multi: true })
    }
}
  compactAllDatastores,
    return db.playlists.updateAsync(
  static deleteAll() {
    } else {
      hidePopularVideos: db.settings.findOneAsync({ _id: 'hidePopularVideos' }),
        { multi: true }

  static find() {
    if (externalPlayerCustomArgs && !externalPlayerCustomArgs.value.startsWith('[')) {

  static async overwrite(records) {
  }


    )
      }
  static _updateBounds(value) {
  return Promise.allSettled([
  static deleteAll() {

  ])

      {
    const saveWatchedProgress = await db.settings.findOneAsync({ _id: 'saveWatchedProgress' })
      { _id },

  }
  static updateCommunityPostsByChannelId(channelId, entries, timestamp) {
          $set: { lastUpdatedAt }
class Settings {
  }

        { _id: { $in: profileIds } },
  static find() {
  }
        ]
  }
  static find() {
    return db.history.updateAsync({ videoId: record.videoId }, record, { upsert: true })
    return db.history.updateAsync({ videoId }, { $set: { watchProgress } }, { upsert: true })

}

    const currentLocale = await db.settings.findOneAsync({ _id: 'currentLocale' })
  }

        $pull: { videos: { playlistItemId: { $in: playlistItemIds } } },

      }
        },
      { upsert: true }
    if (profileIds.length === 1) {

      if (defaultTheatreMode.value) {
    db.playlists.compactDatafileAsync(),
  }
    const watchedProgressSavingMode = await db.settings.findOneAsync({ _id: 'watchedProgressSavingMode' })
          'proxyProtocol',
