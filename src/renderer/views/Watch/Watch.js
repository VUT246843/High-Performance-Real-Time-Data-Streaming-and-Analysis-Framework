
        this.playlistItemId = null

                const url = new URL(caption.base_url)
        if (this.hideVideoLikesAndDislikes) {
        if (this.activeFormat === 'legacy') {
        return
              this.thumbnail = result.videoThumbnails[0].url
      this.checkIfPlaylist()
        } else {
        case 'audio':
        translationName = translationLanguage.language_name.text
          audioChannels: format.audio_channels,
            // // https://github.com/iv-org/invidious/pull/4589
            return
  extractNumberFromString,

        }
            /** @type {import('youtubei.js').YTNodes.MacroMarkersList | null | undefined} */
      const timestamp = this.getTimestamp()
                    thumbnail: item.thumbnail[0]
            }
            console.error('Failed to extract the localised description, falling back to the standard one.', error, JSON.stringify(result.secondary_info.description.runs))
            this.premiereDate = undefined
    'ft-loader': FtLoader,
      } else if (error.code === Code.VIDEO_ERROR) {
        type: 'video',
      if (this.playlistId == null || this.playlistId === '') { return null }
      recommendedVideos: [],
      this.updateWatchProgress(payload)
        result = existingInfoResult
                  }
            ) {
          colorTransferCharacteristics: format.color_info?.transfer_characteristics,
    },
      return `data:${MANIFEST_TYPE_SABR},${encodeURIComponent(JSON.stringify(sabrManifest))}`
      showToast(this.$t('Video.Watched Progress Saved'))
      videoLengthSeconds: 0,
            if (new Date() > this.streamingDataExpiryDate) {
    },
        /** @type {import('youtubei.js').Misc.Format[]} */
      return this.$store.getters.getThumbnailPreference
        }
    },
 *     clientVersion: string,
            // as the chapter objects are read-only after this anyway
      if (this.isLive || this.isPostLiveDvr) {
      } else if (this.timestamp !== null && this.timestamp < this.videoLengthSeconds) {
            ...recommendedVideos.filter((video) => !this.isRecommendedVideoWatched(video.videoId)),
    autosaveWatchedProgress: function () {
    /**
          }

      channelName: '',
        idNumber = 2
          }
    },
    'watch-video-live-chat': WatchVideoLiveChat,
      // we can use YouTube.js' DASH manifest generator to generate the manifest.
      // Requesting fmt=vtt with the tlang parameter set returns HTTP 429 errors, but requesting srt instead seems to work
      this.videoGenreIsMusic = false
                }
              month: 'long',

    isRecommendedVideoWatched: function (videoId) {
            // Already on route with same timestamp, allow reloadView to run instead

        } else {
        this.updateTitle()
        type = ' alternative'
        if (result.page[0].microformat?.publish_date) {
            this.errorMessage = errorText
    },
              } catch (error) {
    createLocalDashManifest: async function (videoInfo, includeThumbnails = false) {
          chapters.pop()
            this.isLoading = false
              this.enableLegacyFormat()
            // Members-only videos can only be watched while logged into a Google account that is a paid channel member
    canSaveWatchProgress() {
          }
    },
            this.videoDescription = parseLocalTextRuns(result.secondary_info.description.runs)
    },
     */
        trackToTranslate = captions.caption_tracks.find(track => track.is_translatable) ?? captions.caption_tracks[0]

            channelThumbnailUrl: channelThumb?.url,
      return typeof this.historyEntry !== 'undefined'
      return `data:text/vtt;charset=utf-8,${encodeURIComponent(results)}`
      (this.watchingPlaylist && !this.$refs.watchVideoPlaylist?.shouldStopDueToPlaylistEnd)
        timeWatched: Date.now(),
    /**
    'ft-age-restricted': FtAgeRestricted
      let nextVideoId = null

              const captionTracks = result.captions?.caption_tracks?.map((caption) => {

      // this has to be below checkIfPlaylist() as theatrePossible needs to know if there is a playlist or not
              this.manifestMimeType = MANIFEST_TYPE_SABR
    updatePlaybackRate(newRate) {
            // as they require the proprietary and closed source Wideview CDM which is understandably not included in standard Electron builds

            this.channelSubscriptionCountText = ''
    },
      streamingDataExpiryDate: null,
          frameRate: format.fps,
          if (this.backendFallback) {

            this.upcomingTimeLeft = null



          xtags: format.xtags,


  },
      })
      'updatePlaylistLastPlayedAt',
          if (result.streaming_data) {
      if (this.manifestSrc === null) {
        this.isLoading = true
        showToast(this.$t('Change Format.Audio formats are not available for this video'))
            }
     * @param {SabrData['clientInfo']} clientInfo
            this.manifestMimeType = MANIFEST_TYPE_DASH
    },
                useRemoteManifest = false
          } else if (playabilityStatus.reason === 'Sign in to confirm your age' || (result.has_trailer && result.getTrailerInfo() === null)) {
      this.onMountedDependOnLocalStateLoading()
      license: '',
      /** @type {SabrData | null} */
          this.videoViewCount = result.viewCount
              })
        this.playabilityStatus = playabilityStatus.status
} from '../../helpers/api/local'
    },
        case 'pip':

     * @param {import('shaka-player/dist/shaka-player.ui').default.util.Error} error
            if (this.proxyVideos) {
      if (!this.rememberHistory || !this.autosaveWatchedProgress) { return }
    },
        chapters.push({
            upcomingTimeLeft = Math.floor(upcomingTimeLeft)
            this.manifestMimeType = MANIFEST_TYPE_HLS

            // so there is no point trying any other backends as it will always fail
      this.playlistItemId = this.$route.query.playlistItemId
          // YouTube doesn't return dislikes anymore
      'updateWatchProgress',
  watch: {
    window.removeEventListener('beforeunload', this.handleWatchProgressAutoSave)
        return
     * @param {Intl.DisplayNames} languageNames
          const subCount = parseLocalSubscriberCount(result.subCountText)
          if (this.timestamp) {
      autoplayNextRecommendedVideo: false,
            ?.find(marker => marker.marker_key === 'DESCRIPTION_CHAPTERS')?.value.chapters
      // If we are in Electron,
          channelThumbnailUrl: this.channelThumbnail.length === 0 ? null : this.channelThumbnail,
              // this should lessen the performance and memory impact of the chapters
              for (const item of macroMarkersList.contents) {
            } else {
          this.enableAudioFormat()
            this.generateAudioTrackFieldInvidious(format, languageNames)
              label: caption.label,
 *   url: string,

        if (typeof format.size === 'string') {
      // HH:MM:SS - Text // separator is one of '-', '–', '•', '—'

        translationName = this.$t('Locale Name')
            if (this.activeFormat === 'legacy') {
        }
        return this.oneTimeTimestamp
    ]),
    if (this.$refs.player) {

      let translationName, translationCode
              const url = new URL(hlsManifestUrl)

            break
      this.resetAutoplayInterruptionTimeout()
import {
        lastViewedPlaylistItemId: this.playlistItemId,
      const chapters = this.videoChapters
     */
              upcomingTimeLeft /= 24
          this.enableAudioFormat()
      if (this.manifestSrc === null ||
      } else if (this.watchedProgressSavingEnabled && this.historyEntryExists) {
              video.published = Date.parse(video.published)

          if (localFormat.has_audio) {
            }
      return {
          endSeconds: 0
                }
        case 'local':
        }
        const audioFormats = []

    },
          } else {
      })
          return watchProgress

      }
          timestamp: groups.timestamp,
        this.updateSubscriptionDetails({
        // Legacy support
      if (format.is_descriptive) {
        switch (this.activeFormat) {
            this.manifestSrc = hlsManifestUrl
          try {

      switch (format) {
        }
            case 'start':
        this.channelId = result.basic_info.channel_id ?? result.secondary_info.owner?.author.id
            this.$router.push({
import FtAgeRestricted from '../../components/FtAgeRestricted/FtAgeRestricted.vue'
        showToast(`${errorMessage}: ${err}`, 10000, () => {
                  id: caption.vss_id,


    },
          } else {
            for (const chapter of rawChapters) {
          if (this.hideVideoLikesAndDislikes) {
          }
              timeUnit = 'hour'
            this.updateTitle()
      isFamilyFriendly: false,
    },

                    languagesSet.add('no')
      return this.$store.getters.getAutoplayPlaylists
    },
        )
      this.setAppTitle(`${this.videoTitle} - ${packageDetails.productName}`)
          default:
            return
    },
     * @param {import('youtubei.js').YTNodes.PlayerCaptionsTracklist} captions
    },
              .find(stream => {
              return
              this.upcomingTimeLeft = new Intl.RelativeTimeFormat(this.currentLocale).format(upcomingTimeLeft, timeUnit)
          break
          if (result.storyboards?.type === 'PlayerStoryboardSpec') {
        player.pause()
    autoplayNextRecommendedVideoByDefault: function () {
          if (result.streaming_data?.adaptive_formats.length > 0) {
            this.addToHistory(this.historyEntry.watchProgress)
          } else {
 *     osVersion: string
      invidiousGetVideoInformation(this.videoId)
          await this.getVideoInformationLocal()
            } else {
    },
        return
        return

                    title: item.title.text,
      isPostLiveDvr: false,
          })
      const videoData = {
            const now = new Date()
        const errorMessage = this.$t('Local API Error (Click to copy)')
      }

          : this.$refs.watchVideoPlaylist.currentVideoIndexZeroBased
      this.playlistType = this.$route.query.playlistType
      return channelsHidden.some(ch => ch.name === video.authorId) ||
  computed: {
                if (item instanceof YTNodes.MacroMarkersListItem) {
          this.channelSubscriptionCountText = formatNumber(subCount, subCount >= 10000 ? { notation: 'compact' } : undefined)

        // Clear playlist data so that watch history will be properly updated
            // Displays when less than a minute remains
            }
      timestamp: null,
      return this.$refs.watchVideoPlaylist ? this.$refs.watchVideoPlaylist.loopEnabled : false
        watchProgress: watchProgress,

              ?.projectionType ?? null
    },
            if (result.captions) {
    },
          this.channelId = result.authorId
        lastViewedPlaylistType: this.playlistType,

          this.videoLengthSeconds = result.basic_info.duration
    },
          this.videoDescriptionHtml = result.descriptionHtml
        }
      let trackToTranslate
      isUpcoming: false,
      const player = this.$refs.player
      })
        }
      /** @type {number|null} */
            this.customErrorIcon = ['fas', 'clock']
      return this.$store.getters.getProxyVideos
      manifestSrc: null,
      this.checkIfTimestamp()
    addChaptersEndSeconds: function (chapters, videoLengthSeconds) {
      'updateLastViewedPlaylist',
    backendPreference: function () {
                format.url = getProxyUrl(format.url)
      if (nextVideoInterval > 0) {


      return this.$store.getters.getPlayNextVideo

    'watch-video-playlist': WatchVideoPlaylist,
import WatchVideoDescription from '../../components/WatchVideoDescription/WatchVideoDescription.vue'

      playNextCountDownIntervalId: null,
        if (!this.hideLiveChat && (this.isLive || this.isUpcoming) && result.livechat) {
      }
        // Fallback to the auto-generated track if there is no user uploaded one that matches the video language
        if (playabilityStatus.status === 'UNPLAYABLE' || playabilityStatus.status === 'LOGIN_REQUIRED' || isDrmProtected) {
      await this.reloadView()
 * @typedef {{
    this.handleRouteChange()


                    timestamp: item.time_description.text,
    async reloadView() {
    },

      this.updatePlaylistLastPlayedAt({ _id: playlist._id })
import FtLoader from '../../components/FtLoader/FtLoader.vue'
              this.videoChaptersKind = 'keyMoments'
      return Math.floor(this.getWatchedProgress())
          isDescriptive: format.is_descriptive,
        if ((this.isLive || this.isPostLiveDvr) && !this.isUpcoming) {
            this.handleVideoEnded()
    },
          }
      return this.$store.getters.getHideRecommendedVideos
          }
      // At this point `playlistType === 'user'`
            this.streamingDataExpiryDate = result.streaming_data.expires
            this.errorMessage = this.$t('Video.AgeRestricted')
          this.enableLegacyFormat()
    },
          ? this.$refs.watchVideoPlaylist.playlistItems.length - this.$refs.watchVideoPlaylist.currentVideoIndexOneBased
        // No countdown for 0s interval

    createLocalStoryboardUrls: function (storyboardInfo) {
          this.startNextVideoInPip = true
            upcomingTimeLeft = (upcomingTimeLeft / 1000) / 60
      this.oneTimeTimestamp = null
        type = ' descriptive'

            break
      const results = buildVTTFileLocally(storyboardInfo, this.videoLengthSeconds)
          return

    },
              videoInfo.info.streaming_data?.server_abr_streaming_url &&
            ) {
        this.abortAutoplayCountdown()
      upcomingTimeLeft: null,
          await this.$router.replace({
            // if (this.proxyVideos) {
                  }]
      return null
          isOriginal: format.is_original,
      /** @type {string|null} */
            const timestampOptions = {

          } catch (error) {
      this.activeFormat = this.defaultVideoFormat
    next()
            })
  },
      if (!this.isUserPlaylistRequested) { return null }
                  case 'nb-NO':
    defaultAutoplayInterruptionIntervalHours: function () {

import packageDetails from '../../../../package.json'
          console.error(err)
      if (player && !player.isPaused()) {
      return result.adaptiveFormats
        const userUploadedCaptionTrack = captions.caption_tracks.find(track => track.kind !== 'asr' && track.language_code === autoGeneratedCaptionTrack.language_code)
            ...recommendedVideos.filter((video) => this.isRecommendedVideoWatched(video.videoId))
            // prevent vue from adding reactivity which isn't needed

          ({ remainingMs }) => {
        ((this.isLive || this.isPostLiveDvr) &&
        })
      if (this.isUpcoming || this.isLive) { return false }
        } else {
        return this.timestamp
            }
          }
              this.legacyFormats.forEach(format => {
    showFamilyFriendlyOnly: function () {
      this.videoChaptersKind = 'chapters'
          isDubbed: format.is_dubbed,
                  typeof format.projection_type === 'string' &&
        }
      const label = this.$t('Video.Player.TranslatedCaptionTemplate', {
          } else {
      if (this.firstLoad) {
          start += 3600 * Number(groups.hours)
        // use of slightly longer duration in PresentationTimeline causes player to stuck at the end
      const playlist = this.selectedUserPlaylist
          this.defaultAutoplayInterruptionIntervalHours,
      }, nextVideoInterval * 1000)

    },
        } else {
        this.recommendedVideos = [
  copyToClipboard,
    getVideoInformationLocal: async function () {
    },
      const url = new URL(trackToTranslate.base_url)

  },
      }


          })
        }
            if (localFormat.is_dubbed || localFormat.is_descriptive || localFormat.is_secondary || localFormat.is_auto_dubbed) {
        return
 *     clientName: number,

      return !this.hideRecommendedVideos || (!this.hideLiveChat && this.isLive) || this.watchingPlaylist
              }
        return
      videoId: '',
          this.recommendedVideos = [
            let source = result.storyboards.boards
                // special cases
                    templateUrl: storyboard.template_url,



            this.enableDashFormat()
        type = ' original'
      if (this.isUpcoming || this.isLive) { return }
            // It only contains the last 4 hours of the stream, instead of starting from the beginning but that is better than nothing.

          this.videoPublished = Date.parse(result.primary_info.published)
        showToast(
  convertInvidiousToLocalFormat,
          })
      await this.destroyPlayer()
          }
      this._saveWatchProgress()
      /** @type {{title: string, timestamp: string, startSeconds: number, endSeconds: number}[]} */
          this.channelSubscriptionCountText = ''
    ])
    // Skip to the next video if in a playlist
     */
            this.activeFormat = 'dash'
      }
          let useRemoteManifest = true
      return new Date(parseInt(expireString) * 1000)
            this.streamingDataExpiryDate = this.extractExpiryDateFromStreamingUrl(result.adaptiveFormats[0].url)
        }
  },
          } else {
        } else {
     * @param {import('youtubei.js').Misc.Format} format
      return this.$store.getters.getBackendFallback

          case 'middle':
        if (player?.isPaused()) {
        this.resetAutoplayInterruptionTimeout()
      const translationLanguage = captions.translation_languages.find(language => userLanguages.has(language.language_code))
      if (this.watchingPlaylist) {
     * @returns {string}
        url = `data:application/dash+xml;charset=UTF-8,${encodeURIComponent(manifest)}`

      format.audio_track = {

    handlePlayerError: function (error) {

          this.liveChat = result.getLiveChat()
              this.manifestSrc = null
        const watchProgress = this.historyEntry.watchProgress
    },
      } else {
        url: url.toString(),
              this.thumbnail = `${this.currentInvidiousInstanceUrl}/vi/${this.videoId}/maxres2.jpg`
            }
      const { Code } = shaka.util.Error
            return
      channelSubscriptionCountText: '',
                  format.projection_type !== 'RECTANGULAR'
      }
          this.isLoading = false

            this.streamingDataExpiryDate = this.extractExpiryDateFromStreamingUrl(result.adaptiveFormats[0].url)
      return this.$store.getters.getCurrentInvidiousInstanceUrl
              upcomingTimeLeft /= 60
      return JSON.parse(this.$store.getters.getChannelsHidden).map((ch) => {

                    thumbnailCount: storyboard.thumbnail_count,
    },
      }
        const { info: result, poToken, clientInfo, adEndTimeUnixMs } = videoInfo
    userPlaylistsReady() {
            this.videoLengthSeconds = result.lengthSeconds
        }
                return {
              this.manifestSrc = result.streaming_data.dash_manifest_url
      await this.handleRouteChange()
      let url = `${this.currentInvidiousInstanceUrl}/api/manifest/dash/id/${this.videoId}`
    },
      return this.$store.getters.getDefaultAutoplayInterruptionIntervalHours
      this.startNextVideoInFullwindow = uiState.startNextVideoInFullwindow


                  case 'he':
      adEndTimeUnixMs: 0,
     */

      // Only used one time = remove after use
        // Check if there is a user uploaded caption track in the language of the video, as that is more trustworthy than auto-generated captions
      if (this.selectedUserPlaylist != null) {

  methods: {
import CommentSection from '../../components/CommentSection/CommentSection.vue'
 * }} SabrData
        return
          }
              const start = chapter.time_range_start_millis / 1000
      }
      // Using YouTube.js' gives us support for multiple audio tracks (currently not supported by Invidious)
      videoCurrentChapterIndex: 0,

    /**
          this.handleVideoEnded()
  mapLocalLegacyFormat,


            return
            this.isLoading = false
        !this.isHiddenVideo(this.forbiddenTitles, this.channelsHidden, video)
          } else if (isDrmProtected) {
    hideRecommendedVideos: function () {
 *   poToken: string,
        duration: Math.min(...videoInfo.streaming_data.adaptive_formats.map(f => f.approx_duration_ms)) / 1000,

      const expireString = new URL(url).searchParams.get('expire')
                    thumbnailWidth: storyboard.thumbnail_width,
              result.streaming_data.adaptive_formats[0]?.signature_cipher ||
        this.$refs.watchVideoPlaylist?.playNextVideo()
        showToast(this.$t('Autoplay Interruption Timer',
          this.channelThumbnail = result.secondary_info.owner.author.best_thumbnail?.url ?? ''
            chapters = this.extractChaptersFromDescription(result.description)
    toggleAutoplay: function() {
      return this.$refs.watchVideoPlaylist ? this.$refs.watchVideoPlaylist.shuffleEnabled : false
    saveVideoHistoryWithLastViewedPlaylist: function () {
import {
  generateInvidiousDashManifestLocally,
    },
            const macroMarkersList = result.page[1]?.engagement_panels
import shaka from 'shaka-player'
        switch (error.data[1]) {

            this.thumbnail = result.basic_info.thumbnail?.[0].url ?? `https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg`



        type = ''
          this.abortAutoplayCountdown,
    },
          // So that we don't see last countdown text like 0/N
} from '../../helpers/api/invidious'
      // `this.$refs.player?.hasLoaded` cannot be used in computed property
     * @param {string?} description
      }
      return this.$store.getters.getBackendPreference
        this.isLive = !!result.basic_info.is_live
    handleRouteChange: function () {
            let hlsManifestUrl = result.hlsUrl
      if (this.isUserPlaylistRequested && !this.userPlaylistsReady) { return }
    enableLegacyFormat: function () {



                title: chapter.title.text,
            if (result.streaming_data.formats.length > 0) {
          }),

      })
          }
          if (new Date() > this.streamingDataExpiryDate) {
    return {
          }
            ) {
            this.errorMessage = this.$t('Video.MembersOnly')
    },
import { isNavigationFailure, NavigationFailureType } from 'vue-router'
      document.removeEventListener('keydown', this.resetAutoplayInterruptionTimeout)
          if (!isNaN(subCount)) {
      const timestamp = parseInt(this.$route.query.timestamp)
      this.watchingPlaylist = this.selectedUserPlaylist != null
    },
          case 'audio':
      await this.reloadView()
      // Check isUpcoming to avoid marking upcoming videos as watched if the user has only watched the trailer
        return
    ...mapActions([
  youtubeImageUrlToInvidious
        clientInfo
        type = ''
        const BOT_MESSAGE = 'Sign in to confirm you’re not a bot'
              this.manifestSrc = this.createLocalSabrManifest(result, poToken, clientInfo, storyboards)
        // Different formats have different durations and
      return (!this.watchingPlaylist && !this.hideRecommendedVideos && !!this.nextRecommendedVideo) ||
              result.streaming_data.adaptive_formats[0]?.cipher

      return this.$store.getters.getPlaylistsReady
            if (upcomingTimeLeft < 1) {
          console.error('Unable to play DASH formats. Reverting to audio formats...')
        formats: videoInfo.streaming_data.adaptive_formats.map((format) => ({
    hideChapters: function () {
      const nextVideoInterval = this.defaultInterval
          console.error('Unable to play audio formats. Reverting to DASH formats...')
        videoId: this.videoId,
      }
        idNumber = 6
              this.manifestSrc = result.streaming_data.hls_manifest_url
        this.channelName = result.basic_info.author ?? result.secondary_info.owner?.author.name

        } catch (failure) {
            return item.type === 'CompactVideo' || item.type === 'CompactMovie' ||
              this.errorMessage = '[BAD_HTTP_STATUS: 403] Potential causes: IP block or streaming URL deciphering failed'
      window.addEventListener('beforeunload', this.handleWatchProgressAutoSave)
      return this.$store.getters.getPlaylist(this.playlistId)
      } else {
      }
                return format.has_video &&
                switch (this.currentLocale) {
        if (watchProgress > 0 && watchProgress < this.videoLengthSeconds - 2) {
  parseLocalWatchNextVideo
      }
        /** @type {import('youtubei.js').Misc.Format[]} */
              this.activeFormat = 'dash'
      let type = ''
      } else {
        case 'fullwindow':
            this.isLoading = false
          initRange: format.init_range,
        if (this.rememberHistory) {
      this.onMountedRun = true
      if (!(this.rememberHistory && this.saveVideoHistoryWithLastViewedPlaylist)) { return }
          startSeconds: start,
      return this.$store.getters.getRememberHistory
              break
          width: format.width,
 *   clientInfo: {
          if (!this.hideChapters) {
        if (!nextVideoId) {
        showToast(this.$t('Change Format.Dash formats are not available for this video'))
        this.watchingPlaylist = true
      // the error is logged to the console inside the player so we don't have to do it here
    autoplayNextPlaylistVideoByDefault: function () {
      return this.$store.getters.getHideVideoLikesAndDislikes
    },
            break
      }

    },
            }
      }
      // But the playlist might be already removed
        } else if (this.isUpcoming) {
      }
            // } else {
      if (description == null) { return [] }
              this.manifestSrc = await this.createLocalDashManifest(result)
      }
            this.addChaptersEndSeconds(chapters, result.basic_info.duration)
          }

/**
        }

    enableDashFormat: function () {
            this.videoCurrentChapterIndex = i
          if (chapters.length > 0) {
              ?.find(pannel => pannel.panel_identifier === 'engagement-panel-macro-markers-auto-chapters')?.content

          const languageNames = new Intl.DisplayNames('en-US', { type: 'language', languageDisplay: 'standard' })
      playabilityStatus: '',


            let timeUnit = 'minute'
          bitrate: format.bitrate,
      videoTitle: '',
    },
                thumbnail: chapter.thumbnail[0]
        this.license = result.secondary_info.metadata.rows.find(element => element.title?.text === 'License')?.contents[0]?.text
    },
  mounted: function () {
      if (this.isLive || this.isPostLiveDvr || this.legacyFormats.length === 0) {
        authorId: this.channelId,
                  case 'nn':
            if (now.getFullYear() < upcomingTimestamp.getFullYear()) {
            storyboard = source.at(-1)
     * @param {string} poToken
      if (this.isLoading || this.isLive) {
        ? this.getPlaylistReverse()


        // If playlist ID matches a user playlist, it must be user playlist
      this.videoId = this.$route.params.id

      channelThumbnail: '',

      chapters.at(-1).endSeconds = videoLengthSeconds


    this.activeFormat = this.defaultVideoFormat
                    captionTracks.push(translatedCaptionTrack)
      // Still possible to be a user playlist from history
        },
      }
        }
        this.isFamilyFriendly = result.basic_info.is_family_safe
  getProxyUrl,
        storyboards

          case 'dash':
          this.liveChat = null
      /** @type {string[]|null} */

          // Otherwise the value is not saved for first time watched videos
                  mimeType: 'text/vtt'
      if (!this.watchingPlaylist) {
      if (existingInfoResult) {
          } else {

    isHiddenVideo: function (forbiddenTitles, channelsHidden, video) {
          } else {
        this.playlistItemId = null

        if (typeof ch === 'string') {
      }
      }
            this.isLoading = false
      } else {
              this.manifestMimeType = MANIFEST_TYPE_DASH
      return this.$store.getters.getSaveVideoHistoryWithLastViewedPlaylist
            case 'middle':
              hlsManifestUrl = url.toString()
              this.legacyFormats = result.streaming_data.formats.map(mapLocalLegacyFormat)
          this.getVideoInformationInvidious()
      } else {
          }
      return `data:application/dash+xml;charset=UTF-8,${encodeURIComponent(xmlData)}`
      videoDescriptionHtml: '',
      }
      this.updateLastViewedPlaylist({
          }
          {
      return this.recommendedVideos.find((video) =>
    },
        })

            }
      clearTimeout(this.autoplayInterruptionTimeout)
          this.isPostLiveDvr = !!result.isPostLiveDvr
        if (this.backendPreference === 'local' && this.backendFallback && !err.toString().includes('private')) {
      const xmlData = await videoInfo.toDash({
          language: format.language,

          this.videoPublished = result.published * 1000
    this.onMountedDependOnLocalStateLoading()
  formatDurationAsTimestamp,
    },
    },

              this.$t('This video is unavailable because of missing formats. This can happen due to country unavailability.'),
              chapters = this.extractChaptersFromDescription(result.basic_info.short_description ?? result.secondary_info.description.text)

    },

        }
              // the chapters are checked for every timeupdate event that the player emits
      }
        this.isPostLiveDvr = !!result.basic_info.is_post_live_dvr
      this.$refs.watchVideoPlaylist?.playPreviousVideo()
    },
          }
            if (upcomingTimeLeft > 120) {
                    languagesSet.add('iw')
          showToast(this.$t('Falling back to Invidious API'))

            autoplayInterruptionIntervalHours: this.defaultAutoplayInterruptionIntervalHours
                url.searchParams.set('fmt', 'vtt')

                timestamp: formatDurationAsTimestamp(start),
        captions: this.captions,
              })

          this.videoDislikeCount = 0
            // Leaving the code here commented out in case we can use it again in the future

      } else {
      currentPlaybackRate: null,
  components: {
          break
      /** @type {'dash' | 'audio' | 'legacy'} */

            path: this.$route.path,
    handleWatchProgressAutoSaveWhenProgressEnabled() {
      // `playlistId` present
            // const url = `${this.currentInvidiousInstanceUrl}/api/manifest/dash/id/${this.videoId}`
          // place watched recommended videos last

  buildVTTFileLocally,
              chapters.push({

                    columns: storyboard.columns,
          if (rawChapters) {
      let result
        // live streams don't have legacy formats, so only switch between dash and audio
    hideVideoLikesAndDislikes: function () {
        idNumber = 3
    },

      result.adaptiveFormats.forEach((format) => {
        )
          this.isLoading = false
      } catch (err) {
      url.searchParams.set('tlang', translationCode)
      } else if (error.code === Code.BAD_HTTP_STATUS) {
        showToast(this.$t('Change Format.Legacy formats are not available for this video'))


          this.enableDashFormat()
      document.addEventListener('keydown', this.resetAutoplayInterruptionTimeout)
        const recommendedVideos = result.watch_next_feed
      // error handling/messages
          format.width = parseInt(stringWidth)
            break
          this.channelThumbnail = channelThumb ? youtubeImageUrlToInvidious(channelThumb.url, this.currentInvidiousInstanceUrl) : ''
    },
        if (result.secondary_info?.description.runs) {
            this.vrProjection = result.streaming_data.adaptive_formats
                value: 'numeric'
    resetAutoplayInterruptionTimeout() {
          itag: format.itag,
                    storyboardCount: storyboard.storyboard_count,
        this.isUpcoming = !!result.basic_info.is_upcoming

              7000
        }

          } else {
    async $route() {
          // text date Jan 1, 2000, not as accurate but better than nothing
      for (let i = 0; i < chapters.length - 1; i++) {
      switch (this.defaultViewingMode) {
      // MM:SS - Text

        const formats = []
      url.searchParams.set('alr', 'yes')
      } else if (this.proxyVideos) {
            this.updateTitle()
      // Only save playlist ID if enabled, and it's not special video types
    },

        for (; i < chapters.length; i++) {
    },
        if (this.showFamilyFriendlyOnly && !this.isFamilyFriendly) {


        if ((!this.isUpcoming && !this.isLive && !this.isPostLiveDvr) || (this.isUpcoming && this.playabilityStatus === 'OK')) {


    getPlaylistShuffle: function () {
          case 'legacy':
      return 0
        }

    this.videoId = this.$route.params.id

            this.videoStoryboardSrc = this.createLocalStoryboardUrls(storyboard)
          this.isLoading = false
    },
              Object.defineProperty(timestampOptions, 'year', {

          // shaka-player will keep trying until the internet connection returns and resume playback automatically when it does


    this.autoplayNextPlaylistVideo = this.autoplayNextPlaylistVideoByDefault
        }
          if (playabilityStatus.reason === BOT_MESSAGE || playabilityStatus.reason === 'Please sign in') {
          if (playabilityStatus.error_screen?.offer_id === 'sponsors_only_video') {
  beforeRouteLeave: async function (to, from, next) {
          this.manifestMimeType === MANIFEST_TYPE_HLS && !this.manifestSrc.includes('/demuxed/1'))) {
              day: 'numeric',
            channelName: result.author,

          ...recommendedVideos.filter((video) => this.isRecommendedVideoWatched(video.videoId))
            channelId: result.authorId
        // loop through formats DASH -> legacy -> audio -> DASH
      /** @type {(MANIFEST_TYPE_DASH|MANIFEST_TYPE_HLS|MANIFEST_TYPE_SABR)} */
            console.error('Unable to play audio formats. Reverting to DASH formats...')
      totalAdTimeSeconds: 0,

      const chapterMatches = description.matchAll(/^(?<timestamp>((?<hours>\d+):)?(?<minutes>\d+):(?<seconds>\d+))(\s*[–—-]\s*(?:\d+:){1,2}\d+)?\s+([–—•-]\s*)?(?<title>.+)$/gm)
      this.videoChapters = []
                this.manifestMimeType = MANIFEST_TYPE_DASH
        type = ' secondary'
            this.errorMessage = '[VIDEO_ERROR] YouTube watch session expired. Please reopen this video.'

            }
  created: function () {
    handleWatchProgressManualSave() {
              ?.projection_type ?? null
      customErrorIcon: null,
            } else if (
            // Value after decimal not to be displayed


        originalLanguage: trackToTranslate.name.text
      }
          // Internet connection was lost, do nothing on our side as
            this.manifestSrc = await this.createInvidiousDashManifest(result)
            } else {
    rememberHistory: function () {
      }
              (item.type === 'LockupView' && item.content_type === 'VIDEO')
      // check if we can translate to the users language
    },
            this.addToHistory(0)
      this._saveWatchProgress()
            if (
      /** @type {import('../../helpers/player/SabrManifestParser').SabrManifest} */

      if (this.selectedUserPlaylist == null) {
            }
      if (this.autoplayEnabled && this.playNextTimeout) {
            throw new Error(errorText)
      // Stuff that require user playlists to be ready
            throw new Error(result.error)
      legacyFormats: [],

        title: this.videoTitle,
    this.checkIfTimestamp()
    autoplayPossible: function () {
                    thumbnailHeight: storyboard.thumbnail_height,
    },
      }
            this.upcomingTimestamp = null
        lastViewedPlaylistId: this.playlistId,
    /**
            this.handleWatchProgressAutoSaveWhenProgressEnabled()
    backendFallback: function () {
            this.videoDescription = result.basic_info.short_description
            if (this.videoGenreIsMusic) {

  mapInvidiousLegacyFormat,
        player.setCurrentTime(timestamp)
      onMountedRun: false,
            chapters.forEach(Object.freeze)
        audio_is_default: !!format.is_original,
      this.vrProjection = null
      this.startNextVideoInPip = uiState.startNextVideoInPip
    addToHistory: function (watchProgress) {
import {
      this.customErrorIcon = null
      captions: [],
    },
        })
    createInvidiousDashManifest: async function (result) {
    },
      // HH:MM - HH:MM - Text // end timestamp is ignored
      videoPlayerLoaded: false,
              })
    getPlaylistIndex: function () {
    },
            this.thumbnail = `https://i.ytimg.com/vi/${this.videoId}/maxres2.jpg`
            if (this.activeFormat === 'audio') {

    /**
import WatchVideoLiveChat from '../../components/WatchVideoLiveChat/WatchVideoLiveChat.vue'
      if (this.watchingPlaylist) {
                    // according to https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
        // Remote playlist
      }
    enableAudioFormat: function () {
      activeFormat: 'legacy',
      const oneTimeTimestamp = parseInt(this.$route.query.oneTimeTimestamp)
      if (this.$route.query == null) {
    historyEntry: function () {
    channelsHidden() {
          height: format.height,


      autoplayNextPlaylistVideo: false,
            // DRM protected videos (e.g. movies) cannot be played in FreeTube,
    },
        return
      this.updateHistory(videoData)
          case 'start':
    this.currentPlaybackRate = this.$store.getters.getDefaultPlayback
          const upcomingTimestamp = result.basic_info.start_timestamp
              url.searchParams.set('local', 'true')
import { defineComponent } from 'vue'
     * @returns {null|{ url: string, label: string, language: string, mimeType: string, isAutotranslated: boolean }}
            // Looks better than `Premieres in x seconds`
    },
    CommentSection,
            this.thumbnail = `https://i.ytimg.com/vi/${this.videoId}/maxres1.jpg`
    },

      const autoGeneratedCaptionTrack = captions.caption_tracks.find(track => track.kind === 'asr')
            }
              }) ?? []
    checkIfTimestamp: function () {
        ]
        language: translationCode,
      }
     * @param {number} currentSeconds
    },
      this.sabrData = null
          channelId: this.channelId
        for (const format of adaptiveFormats) {
        const adaptiveFormats = await this.getAdaptiveFormatsInvidious(result)
    },
import { MANIFEST_TYPE_SABR } from '../../helpers/player/SabrManifestParser'
    },
    updateCurrentChapter: function (currentSeconds) {
      }
    getPlaylistLoop: function () {
            }
    extractExpiryDateFromStreamingUrl: function (url) {
      return this.$store.getters.getDefaultVideoFormat
      return this.$refs.watchVideoPlaylist
            if (result.streaming_data.dash_manifest_url) {
    'watch-video-description': WatchVideoDescription,
      clearTimeout(this.playNextTimeout)
      if (!translationLanguage) {
        if (chapters.length > 0 && chapters[chapters.length - 1].startSeconds === start) {
    // else next recommended video if autoplay enabled
    checkIfPlaylist: function () {
      // use the same id numbers as YouTube (except -1, when we aren't sure what it is)

          isSecondary: format.is_secondary,
          this.updateSubscriptionDetails({
          if (!this.isLive && !this.isPostLiveDvr) {

    },
        }
          formats.push(localFormat)
        id: `${trackToTranslate.vss_id}.${translationCode}`,
        return
        this.getVideoInformationLocal()
        this.isLiveContent = !!result.basic_info.is_live_content
            }
        format.bitrate = parseInt(format.bitrate)
      this.activeFormat = 'legacy'
        this.videoPlayerLoaded = true
            return

          if (useRemoteManifest) {
            }
        case 'dash':
  },
          break
    handleVideoEnded: function () {
          const channelThumb = result.authorThumbnails[1]
     */
      } else if (format.is_original) {
        published: this.videoPublished,
            return {
    },
          // `result.page[0].microformat.publish_date` example value: `2023-08-12T08:59:59-07:00`
      }
        if (groups.hours) {

      videoGenreIsMusic: false,
          label: format.audio_track?.display_name,


          spatialAudio: !!format.spatial_audio_type,
    },
    },
        if (!isNaN(subCount)) {
      this.timestamp = isNaN(timestamp) || timestamp < 0 ? null : timestamp

      'setAppTitle'
    },
      } else if (format.is_auto_dubbed) {
      }
            query: { ...this.$route.query, oneTimeTimestamp: timestamp },

      return this.$store.getters.getDefaultInterval
     * @param {import('youtubei.js').IParsedResponse} videoInfo
            this.legacyFormats = []

          const errorMessage = this.$t('Invidious API Error (Click to copy)')
          } else if (this.historyEntryExists) {
        }

          // match YouTube's local API response with English
  parseLocalTextRuns,
            break
        if (this.activeFormat === 'dash') {

        }
      this.setViewingModeOnFirstLoad()
            this.enableLegacyFormat()
        case 'invidious':
        3_600_000
        if (error.data[1]?.message === 'Failed to fetch' && !navigator.onLine) {
              result.streaming_data.adaptive_formats[0]?.url ||
      }

            this.errorMessage = '[BAD_HTTP_STATUS: 429] Ratelimited'
            this.$refs.watchVideoPlaylist.playNextVideo()

      this.activeFormat = 'audio'
          })
                    interval: storyboard.interval > 0 ? storyboard.interval / 1000 : 0
          const [stringWidth, stringHeight] = format.size.split('x')
          indexRange: format.index_range,

    },

      this.playlistId = this.$route.query.playlistId
      thumbnail: '',
            default:


    handlePlaylistPersisting: function () {
            // the chapters are checked for every timeupdate event that the player emits
      firstLoad: true,
                ? [{
                    rows: storyboard.rows,
      this.blockVideoAutoplay = false
          } else {
        // audio streams don't have a size property
  formatHasVoiceBoostTag,
          colorPrimaries: format.color_info?.primaries
            this.upcomingTimestamp = Intl.DateTimeFormat(this.currentLocale, timestampOptions).format(upcomingTimestamp)
      const languageName = languageNames.of(format.language)
              })
     * @param {boolean} includeThumbnails
        forbiddenTitles.some((text) => video.title?.toLowerCase().includes(text)) ||
        try {
            this.thumbnail = `https://i.ytimg.com/vi/${this.videoId}/maxres3.jpg`

          this.videoLikeCount = isNaN(result.basic_info.like_count) ? 0 : result.basic_info.like_count
      showToast('Reloading player according to SABR request')
        trackToTranslate = userUploadedCaptionTrack ?? autoGeneratedCaptionTrack
            )
            this.errorMessage = this.$t('Video.DRMProtected')

        let i = currentSeconds < currentChapterStart ? 0 : this.videoCurrentChapterIndex
    changeTimestamp: function (timestamp) {
            errorText = `[${playabilityStatus.status}] ${playabilityStatus.reason}`
    },
      this.captions = []
            //   this.manifestSrc = url
      return this.$store.getters.getHideChannelSubscriptions
            }
    setViewingModeOnFirstLoad: function () {

            this.videoDislikeCount = result.dislikeCount

    autoplayEnabled: function () {
        case 'legacy':
          }
      if (this.hideChapters || chapters.length === 0) {
          const localFormat = convertInvidiousToLocalFormat(format)
  name: 'Watch',
        }
        nextVideoId = this.nextRecommendedVideo?.videoId
          }
          } else {
          }
          // The recommended videos currently use yyyy-mm-ddThh:mm:ss for the published timestamp
      /** @type {number|null} */
import { mapActions, mapMutations } from 'vuex'

      }
      }
    document.removeEventListener('keydown', this.resetAutoplayInterruptionTimeout)
          this.handlePlaylistPersisting()
    /**
    hideLiveChat: function () {
      this._saveWatchProgress()

                }
        let chapters = []

import FtShakaVideoPlayer from '../../components/ft-shaka-video-player/ft-shaka-video-player.vue'
            this.addToHistory(this.timestamp)
          let storyboard

        language: translationName,
          let errorText
import { Utils, YTNodes } from 'youtubei.js'
const MANIFEST_TYPE_HLS = 'application/x-mpegurl'
        }
     * @param {import('../../helpers/player/SabrManifestParser').SabrManifest['storyboards']} storyboards

      this.playNextTimeout = setTimeout(() => {
      // (but user playlist could be already removed)
  },
      if (!this.$refs.player?.hasLoaded) { return }
          this.startNextVideoInFullscreen = true
            // I wasn't able to get SABR working with Post-Live-DVR yet, so for the moment we'll use YouTube's provided DASH manifest instead.
      /** @type {string|null} */
      videoChapters: [],
        // For UX consistency, no progress reading if writing disabled
        this.watchingPlaylist = false
const MANIFEST_TYPE_DASH = 'application/dash+xml'
        this.videoViewCount = result.basic_info.view_count ?? (result.primary_info.view_count ? extractNumberFromString(result.primary_info.view_count.text) : null)
      playlistId: '',
        return
              break
        url += '?local=true'
      playlistType: '',
            this.updateTitle()
      }

            // video might be region locked or something else. This leads to no formats being available
        } else {
              this.customErrorIcon = ['fas', 'clock']
      if (this.watchingPlaylist && this.$refs.watchVideoPlaylist?.shouldStopDueToPlaylistEnd) {
        author: this.channelName,
        }
            this.handleWatchProgressAutoSaveWhenProgressEnabled()
        case 'fullscreen':
      /** @type {'EQUIRECTANGULAR' | 'EQUIRECTANGULAR_THREED_TOP_BOTTOM' | 'MESH'| null} */
      this.checkIfPlaylist()
      }


              hasMultipleAudioTracks = true
        showToast(this.$t('Canceled next video autoplay'))
        translationCode = translationLanguage.language_code
            }
      return !!this.$store.getters.getHistoryCacheById[videoId]
    defaultVideoFormat: function () {

                    // according to https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
              result.streaming_data.adaptive_formats[0]?.url ||
          this.isLive = result.liveNow
            // Convert from ms to second to minute
        await this.destroyPlayer()

            this.videoLikeCount = null

          this.videoPublished = Date.parse(result.page[0].microformat.publish_date)
      startNextVideoInFullwindow: false,
import WatchVideoPlaylist from '../../components/watch-video-playlist/watch-video-playlist.vue'
              this.errorMessage = '[BAD_HTTP_STATUS: 403] YouTube watch session expired. Please reopen this video.'
        this.adEndTimeUnixMs = adEndTimeUnixMs
      videoChaptersKind: 'chapters',
    hideVideoDescription: function () {

        manifest_options: {

      )
import WatchVideoChapters from '../../components/WatchVideoChapters/WatchVideoChapters.vue'
      }
  invidiousGetVideoInformation,
 *   }
        url: url.toString(),

        }
      if (this.activeFormat === 'dash') {
          // Must be called AFTER history entry inserted

        this.$router.push({
      vrProjection: null,

      }
              mimeType: 'text/vtt'
              videoInfo.info.player_config.media_common_config.media_ustreamer_request_config

    thumbnailPreference: function () {
                return typeof stream.projectionType === 'string' &&
    isUserPlaylistRequested: function () {
        const isDrmProtected = result.streaming_data?.adaptive_formats.some(format => format.drm_families || format.drm_track_type)



                    endSeconds: 0,
        }
          return
            if (playabilityStatus.error_screen?.subreason) {
          nextVideoInterval * 1000,
      // MM:SS Text
        if (!this.hideChapters) {
        // The IOS HLS manifests have audio-only streams

          title: groups.title.trim(),
            this.vrProjection = result.adaptiveFormats
    startTimeSeconds: function () {
    /**
      document.removeEventListener('click', this.resetAutoplayInterruptionTimeout)
            console.error('Unable to play DASH formats. Reverting to legacy formats...')
    },
      // This should never be saved into history
            showToast(
        console.error(err)
        this.playNextTimeout = null
    defaultViewingMode: function () {
      }
              source = source.filter((board) => board.thumbnail_height <= 90)
              errorText += `: ${playabilityStatus.error_screen.subreason.text}`
                    // "no" is the macro language for "nb" and "nn"
      if (!this.isLoading && player?.hasLoaded) {
      }
      startNextVideoInPip: false,
      if (!this.videoPlayerLoaded && !this.isUpcoming) {

        }
        this.playlistType = 'user'

      }
        return

          case 'end':
      this.oneTimeTimestamp = isNaN(oneTimeTimestamp) || oneTimeTimestamp < 0 ? null : oneTimeTimestamp
        isAutotranslated: true
              // as the chapter objects are read-only after this anyway
      if (this.activeFormat === 'audio') {

          }
          if (this.watchingPlaylist) {
          isAutoDubbed: format.is_auto_dubbed,
          } else {
      if (currentSeconds !== currentChapterStart) {
                    startSeconds: Utils.timeToSeconds(item.time_description.text),
    },
    getAdaptiveFormatsInvidious: async function (existingInfoResult = null) {
              minute: '2-digit'
          })
              this.thumbnail = `${this.currentInvidiousInstanceUrl}/vi/${this.videoId}/maxres1.jpg`
        this.videoTitle = result.primary_info?.title.text ?? result.basic_info.title
        mimeType: 'text/srt',
      this.sabrData = {
              // prevent vue from adding reactivity which isn't needed
        .catch(err => {
        this.updateLocalPlaylistLastPlayedAtSometimes()
          recommendedVideos.forEach((video) => {
            this.premiereDate = upcomingTimestamp
      sabrData: null,
      if (!this.autoplayEnabled) {
        // Reload at the middle should restart at current timestamp
    },

      /** @type {Date|null} */
      if (this.blockVideoAutoplay) {
            // so we have to use the HLS one for now.

      isLiveContent: false,
import WatchVideoRecommendations from '../../components/WatchVideoRecommendations/WatchVideoRecommendations.vue'
      if (!this.canSaveWatchProgress) { return }
                  language: caption.language_code,

            if (chapters.length > 0) {


          case 429:
    currentInvidiousInstanceUrl: function () {
      if (this.oneTimeTimestamp !== null && this.oneTimeTimestamp < this.videoLengthSeconds) {
      return this.$store.getters.getHistoryCacheById[this.videoId]
    selectedUserPlaylist: function () {
          this.captions = sortCaptions(result.captions.map(caption => {
        description: this.videoDescription,
              break
        : -1
    'watch-video-recommendations': WatchVideoRecommendations,

      blockVideoAutoplay: false,
          copyToClipboard(err)
      videoDislikeCount: 0,

      watchingPlaylist: false,
        // Let `watchVideoPlaylist` handle end of playlist, no countdown needed

        watchProgress: currentTime
      videoStoryboardSrc: '',
        } else {
          this.videoGenreIsMusic = result.genre === 'Music'
 *   ustreamerConfig: string,
      videoPublished: 0,
    createLocalSabrManifest: function (videoInfo, poToken, clientInfo, storyboards) {

      if (this.playlistId == null || this.playlistId.length === 0) {
            //   this.manifestMimeType = MANIFEST_TYPE_DASH
          this.getVideoInformationInvidious()
          const rawChapters = result.player_overlays?.decorated_player_bar?.player_bar?.markers_map
                  })

            this.manifestSrc = null
    },
    },
          if (this.activeFormat === 'legacy') {
        isLive: false,
        this.getVideoInformationInvidious()
            console.error('Unable to play legacy formats. Reverting to audio formats...')
                  chapters.push({
})
      url.searchParams.set('fmt', 'srt')
              }
          // whereas the rest of the API uses unix timestamps, correct that here

              this.upcomingTimeLeft = this.$t('Video.Published.In less than a minute').toLowerCase()
    async onPlayerReloadRequested() {
        display_name: `${languageName}${type}`
            this.videoStoryboardSrc = `${this.currentInvidiousInstanceUrl}/api/v1/storyboards/${this.videoId}?height=90`

      const sabrManifest = {
      }
      const uiState = await this.$refs.player.destroyPlayer()
    nextRecommendedVideo: function () {
    'watch-video-chapters': WatchVideoChapters,
    }
      }
      // react to route changes...
    handleSkipToNext: function () {

        // replace previous chapter with current one if they have an identical start time
            audioFormats.push(localFormat)
              timeUnit = 'day'
        }
    handleVideoLoaded: function () {

            }

        forbiddenTitles.some((text) => video.author?.toLowerCase().includes(text))
    onMountedDependOnLocalStateLoading() {
        if (result.secondary_info.owner?.author) {
    'watch-video-info': WatchVideoInfo,
      if (timestamp > 0) {
          isDrc: format.is_drc,
    _saveWatchProgress() {

    this.autoplayNextRecommendedVideo = this.autoplayNextRecommendedVideoByDefault
        videoId: this.videoId,
            // The live DASH manifest is currently unusable as it returns 403s after 1 minute of playback
          if (result.error) {
    }
      const currentTime = this.getWatchedProgress()
          this.startNextVideoInFullwindow = true
      this.abortAutoplayCountdown(true)
          break
      const player = this.$refs.player
        const videoInfo = await getLocalVideoInfo(this.videoId)

          }
      if (this.onMountedRun) { return }
          this.useTheatreMode = this.theatrePossible
      // Should be called by manual action, settings should be checked in UI
      url.searchParams.set('cpn', videoInfo.cpn)
              try {
      document.addEventListener('click', this.resetAutoplayInterruptionTimeout)
    userPlaylistsReady: function () {
            // Youtube switches to showing time left in minutes at 120 minutes remaining
      if (process.env.SUPPORTS_LOCAL_API) {
      premiereDate: undefined,


 *     osName: string,
            this.videoLikeCount = result.likeCount
              this.activeFormat = 'dash'
    },
        case 'theatre':
      return chapters
          ]


    },

              })
      isLive: false,
      'updateSubscriptionDetails',
              url: this.currentInvidiousInstanceUrl + caption.url,
  data: function () {
              this.thumbnail = `${this.currentInvidiousInstanceUrl}/vi/${this.videoId}/maxres3.jpg`
            let upcomingTimeLeft = upcomingTimestamp - now
            // e.g. > 2 days = display as `2 days`

      if (!this.isLoading && player?.hasLoaded) {
        viewCount: this.videoViewCount,
      if (this.playlistType !== 'user') {
                this.manifestSrc = await this.createLocalDashManifest(result, true)
                startSeconds: start,
        this.isUnlisted = !!result.basic_info.is_unlisted
          }
          isVoiceBoost: formatHasVoiceBoostTag(format),
          switch (this.thumbnailPreference) {
    handleFormatChange: function (format) {
      }
          mimeType: format.mime_type,
      isUnlisted: false,
      const currentChapterStart = chapters[this.videoCurrentChapterIndex].startSeconds
      channelId: '',
          }
        // extract localised title first and fall back to the not localised one
                  stream.projectionType !== 'RECTANGULAR'
      /** @type {'chapters' | 'keyMoments'} */
      if (this.$refs.player) {
  parseLocalSubscriberCount,
    proxyVideos: function () {

        videoId: this.videoId,
              .find(format => {
    getVideoInformationInvidious: function () {
          if (this.isPostLiveDvr) {
            return this.$t('Playing Next Video Interval', { nextVideoInterval: countDownTimeLeftInSecond }, countDownTimeLeftInSecond)

        id: `${format.language}.${idNumber}`,
      for (const { groups } of chapterMatches) {
          format.height = parseInt(stringHeight)
            if (timeUnit === 'hour' && upcomingTimeLeft > 24) {
            break
      return this.$i18n.locale
                if (!captionTracks.some(captionTrack => languagesSet.has(captionTrack.language))) {
    },
        translationCode = userLanguages.values().next().value
    },


      videoDescription: '',
        poToken,
      if (!process.env.SUPPORTS_LOCAL_API || this.backendPreference === 'invidious') {
      return this.$store.getters.getWatchedProgressSavingMode !== 'never'
            errorText = this.$t('Video.IP block')
              this.manifestMimeType = MANIFEST_TYPE_DASH
            this.legacyFormats = result.formatStreams.map(mapInvidiousLegacyFormat)
        this.watchingPlaylist = false
            // Age-restricted videos can only be watched while logged into a Google account that is age-verified
          for (const format of audioFormats) {
      const url = new URL(videoInfo.streaming_data.server_abr_streaming_url)
    pausePlayer: function () {
        label,
        ustreamerConfig: videoInfo.player_config.media_common_config.media_ustreamer_request_config.video_playback_ustreamer_config,

    // So that the value for this session remains unchanged even if setting changed
      } else if (format.is_dubbed) {
          this.isUnlisted = !result.isListed
                  if (translatedCaptionTrack) {
        result = await invidiousGetVideoInformation(this.videoId)
      clearInterval(this.playNextCountDownIntervalId)
    theatrePossible: function () {
          lastModified: format.last_modified_ms,
      this.autoplayInterruptionTimeout = setTimeout(() => { this.blockVideoAutoplay = true }, this.defaultAutoplayInterruptionIntervalHours * 3_600_000)
        const player = this.$refs.player
                  label: caption.name.text,
          ...recommendedVideos.filter((video) => !this.isRecommendedVideoWatched(video.videoId)),
            }
        lengthSeconds: this.videoLengthSeconds,
          quality: format.quality,
        })

              break
            if (window.innerWidth < 500) {
        /** @type {number} */
        // The WEB HLS manifests only contain combined audio and video files, so we can't do audio only
            if (!process.env.SUPPORTS_LOCAL_API || this.proxyVideos) {
        })

                    break
      this.handleWatchProgressAutoSave()

    },

    },


              if (captionTracks.length > 0) {
              this.addChaptersEndSeconds(chapters, result.lengthSeconds)
        idNumber = 10
  }
                    mimeType: 'image/webp',
      playlistItemId: null,
              path: `/watch/${nextVideoId}`
      // HH:MM:SS Text
            // }

      return this.$route.query.playlistType === 'user'
        const playabilityStatus = result.playability_status
    handleWatchProgressAutoSave() {

    historyEntryExists: function () {
          break
                    break
    ...mapMutations([
     */
            // so there is no point trying any other backends as it will always fail

    getPlaylistReverse: function () {
      return this.$store.getters.getWatchedProgressSavingMode === 'auto'
            this.updateTitle()
      videoViewCount: 0,
        idNumber = -1
            } else {
    },
          return { name: ch, preferredName: '', icon: '' }
          break
            }
              // TODO a I18n entry for time format might be needed here
      if (this.firstLoad) {
import WatchVideoInfo from '../../components/WatchVideoInfo/WatchVideoInfo.vue'
      return JSON.parse(this.$store.getters.getForbiddenTitles.toLowerCase())
    },
    hideChannelSubscriptions: function () {
    },
      upcomingTimestamp: null,
            const countDownTimeLeftInSecond = remainingMs / 1000
} from '../../helpers/utils'

      this.videoCurrentChapterIndex = 0
          }
            return
          }
          if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
    },
          this.isFamilyFriendly = result.isFamilyFriendly
      autoplayInterruptionTimeout: null,
            }
          this.videoLikeCount = null
          }
                  url: url.toString(),
            this.channelSubscriptionCountText = formatNumber(subCount, subCount >= 10000 ? { notation: 'compact' } : undefined)
      try {


      return this.$store.getters.getShowFamilyFriendlyOnly
    forbiddenTitles() {


          } else {
          if (process.env.SUPPORTS_LOCAL_API && this.backendPreference === 'invidious' && this.backendFallback) {
      }



          }
      return this.$refs.watchVideoPlaylist ? this.$refs.watchVideoPlaylist.reversePlaylist : false
    getWatchedProgress: function () {
              language: caption.language_code,
      } else if (format.is_secondary) {
        // if there is no auto-generated track choose the first translatable track
      useTheatreMode: false,
            showToast(this.$t('Playing Next Video'))
          },
      }
      oneTimeTimestamp: null,
        idNumber = 4
    getTranslatedLocaleCaption: function (captions, userLanguages) {
      }
      isLoading: true,
          audioSampleRate: format.audio_sample_rate,
      } else {
    },
        })

          break
            this.enableAudioFormat()
    getTimestamp: function () {

export default defineComponent({
            return
          this.channelName = result.author
        const manifest = await generateInvidiousDashManifestLocally(formats)
  getLocalVideoInfo,

          this.updateTitle()

      this.startNextVideoInFullscreen = uiState.startNextVideoInFullscreen
              chapters.forEach(Object.freeze)
  formatNumber,

          showToast(`${errorMessage}: ${err}`, 10000, () => {
      videoLikeCount: 0,
      const player = this.$refs.player
        } else {
    },

      errorMessage: null,
          if (upcomingTimestamp) {
            } else {
      this.videoStoryboardSrc = ''
      if (autoGeneratedCaptionTrack) {
     */
                console.error(`Failed to generate DASH manifest for this Post Live DVR video ${this.videoId}, falling back to using YouTube's provided one...`, error)
    destroyPlayer: async function() {
      startNextVideoInFullscreen: false,
        this.watchingPlaylist = true

          console.error(err)
        showToast(this.$t('Playing Next Video'))
          } else {
            case 'end':


              const storyboards = storyboard
                    // "iw" is the old/original code for Hewbrew, these days it's "he"
          let chapters = []
          ?.filter((item) => {
                endSeconds: 0,
      return this.$store.getters.getHideLiveChat
          case 403:
            }
              result.streaming_data.adaptive_formats[0]?.signature_cipher ||


          path: `/watch/${this.nextRecommendedVideo.videoId}`
      }
      this.videoPlayerLoaded = false
    },
import { sortCaptions } from '../../helpers/player/utils'
            this.videoDislikeCount = null
                : []
        }
      // otherwise just fallback to the FreeTube display language and hope that YouTube will be able to handle it
      return url
    defaultInterval: function () {
          if (currentSeconds < chapters[i].endSeconds) {
        let start = 60 * Number(groups.minutes) + Number(groups.seconds)
            }
            if (typeof video.published === 'string') {
          this.videoChapters = chapters
          }
            // this should lessen the performance and memory impact of the chapters
        // Whether there is a playlist ID or not, save it
      }
    updateLocalPlaylistLastPlayedAtSometimes() {
      if (!hideToast) {
        switch (this.thumbnailPreference) {
      return this.watchingPlaylist ? this.autoplayNextPlaylistVideo : this.autoplayNextRecommendedVideo
      this.playNextTimeout = null
 */
      if (this.activeFormat === 'legacy') {
        return ch
      return !this.isLoading
            this.enableLegacyFormat()
            }
    },
    },
      this.currentPlaybackRate = newRate
        this.$refs.watchVideoPlaylist.playNextVideo()
      let idNumber = ''
     */
      return this.$store.getters.getHideVideoDescription
    // Skip to the previous video in a playlist
    handleSkipToPrev: function () {
      this.firstLoad = true
          .map(parseLocalWatchNextVideo) ?? []
    },
        this.isLoading = true
  },
              }
      manifestMimeType: MANIFEST_TYPE_DASH,
    updateTitle: function () {
            throw failure
              hour: 'numeric',

        channelsHidden.some(ch => ch.name === video.author) ||
            if (macroMarkersList) {


      })

      // Prevent running twice
    },
        let hasMultipleAudioTracks = false
     * @param {import('youtubei.js/dist/src/parser/classes/PlayerStoryboardSpec').StoryboardData} storyboardInfo
        this.videoGenreIsMusic = result.basic_info.category === 'Music'

    document.removeEventListener('click', this.resetAutoplayInterruptionTimeout)

            // The HLS manifests only contain combined audio+video streams, so we can't do audio only
        })),
            break
      return this.$store.getters.getHideChapters
    },

  showToast
            }
      // will trigger again if you switch formats or change legacy quality
    'ft-shaka-video-player': FtShakaVideoPlayer,
          this.channelThumbnail = ''
      }
     * @param {import('youtubei.js').YT.VideoInfo} videoInfo
            showToast(this.$t('Falling back to Local API'))
    extractChaptersFromDescription: function (description) {
        const subCount = !result.secondary_info.owner.subscriber_count.isEmpty() ? parseLocalSubscriberCount(result.secondary_info.owner.subscriber_count.text) : NaN
    abortAutoplayCountdown: function (hideToast = false) {
      if (error.code === Code.HTTP_ERROR) {
      if (!this.rememberHistory || !this.watchedProgressSavingEnabled) { return }
          this.videoDescription = result.basic_info.short_description

          this.videoTitle = result.title
    },

        if (hasMultipleAudioTracks) {
                const languagesSet = new Set([this.currentLocale, this.currentLocale.split('-')[0]])
    generateAudioTrackFieldInvidious: function (format, languageNames) {
    hideComments: function () {
        .then(async result => {
            // // Proxying doesn't work for live or post live DVR DASH, so use HLS instead
          const recommendedVideos = result.recommendedVideos

              result.streaming_data.adaptive_formats[0]?.cipher
            if (
          }
        return null
        }
      }
        // place watched recommended videos last

        return player.getCurrentTime()
    },
          if (this.isLive || this.isPostLiveDvr) {
              this.captions = sortCaptions(captionTracks)

          this.streamingDataExpiryDate = result.streaming_data.expires
    watchedProgressSavingEnabled: function () {
      this.handleWatchProgressAutoSaveWhenProgressEnabled()
    /**
      } else if (!this.hideRecommendedVideos && this.nextRecommendedVideo) {
      this.activeFormat = 'dash'
     * @param {Set<string>} userLanguages
        this.videoChapters = chapters
        this.playlistType = ''
      'updateHistory',


            copyToClipboard(err)
        return
          break
      playNextTimeout: null,
          this.videoDislikeCount = null

          channelName: this.channelName,

        }
          return
        // The apostrophe is intentionally that one (char code 8217), because that is the one YouTube uses
                  const translatedCaptionTrack = this.getTranslatedLocaleCaption(result.captions, languagesSet)
      }

            this.handleWatchProgressAutoSaveWhenProgressEnabled()
      }
            this.getVideoInformationLocal()
    currentLocale: function () {
            /** @type {import('youtubei.js/dist/src/parser/classes/PlayerStoryboardSpec').StoryboardData[]} */
            this.isLoading = false
          include_thumbnails: includeThumbnails,
        this.playlistType = ''
        this.playlistItemId = null

          this.enableDashFormat()
            return
            this.customErrorIcon = ['fas', 'money-check-dollar']
              this.manifestMimeType = MANIFEST_TYPE_HLS
        this.playlistId = ''
      if (this.selectedUserPlaylist == null) { return }
      return this.$store.getters.getDefaultViewingMode
        this.autoplayNextRecommendedVideo = !this.autoplayEnabled
                }
      const payload = {

        this.isLoading = false
            break
        return
      this.errorMessage = null
      switch (this.backendPreference) {
      // HH:MM:SS - HH:MM:SS - Text // end timestamp is ignored, separator is one of '-', '–', '—'
      const chapters = []
              this.errorMessage = '[BAD_HTTP_STATUS: 403] Potential causes: IP block, streaming URL deciphering failed or music video geo-block'
      return this.$store.getters.getHideComments
          }))
        this.autoplayNextPlaylistVideo = !this.autoplayEnabled
      }
      liveChat: null,
        chapters[i].endSeconds = chapters[i + 1].startSeconds
