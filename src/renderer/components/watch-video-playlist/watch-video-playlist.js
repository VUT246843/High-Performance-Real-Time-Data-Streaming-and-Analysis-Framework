    },
        // Scroll after this component loaded, otherwise doesn't work

        const targetPlaylistItem = this.randomizedPlaylistItems[targetVideoIndex]
        return false
          this.getPlaylistInformationLocal()

      // Wrap around to the end of the playlist only if there are no remaining earlier videos
        playlistId: this.playlistId,

    calculateWindowWidth() {
        // loopEnabled = true
      this.getPlaylistInfoWithDelay()
    }


    },
    playlistItemId: function () {
    },
      return {
        query: {
        this.shufflePlaylistItems()
      if (this.shuffleEnabled) {
        },
        // `nextTick` is required (tested via reloading)
      previewVideoIndex: 1,
        path: `/playlist/${this.playlistId}`,
      const index = this.previewVideoIndex - 1
            path: `/watch/${targetPlaylistItem.videoId}`,
  untilEndOfLocalPlayList,
        this.prevVideoBeforeDeletion = targetVideoIndex >= 0 ? this.playlistItems[targetVideoIndex] : null
          }
      return null
    if (cachedPlaylist?.id === this.playlistId) {
    videoId: function (newId, oldId) {
        this.shuffleEnabled = false
        const playlist = await getLocalPlaylist(this.playlistId)
      if (index >= 0 && index < this.playlistItems.length) {
      return this.playlistItems.length
      this.isLoading = true
        }
        this.shuffleEnabled = true
        }, { runCallbackOnceFirst: false })
  },

          playlistType: this.isUserPlaylist ? 'user' : '',
      channelId: '',


      // Prevents the array from affecting the original object
        let channelName
      if (!isCurrentVideoInParsedPlaylist) {
    const cachedPlaylist = this.$store.getters.getCachedPlaylist
      const clickX = event.clientX - rect.left
      }
        })
      return this.playlistItems[this.currentVideoIndexZeroBased]
          showToast(this.$t('The playlist has ended. Enable loop to continue playing'))
    'ft-list-video-numbered': FtListVideoNumbered
      const targetVideoIndex = (videoIndex === 0 || this.videoIsNotPlaylistItem) ? this.playlistItems.length - 1 : videoIndex - 1
        // or the prior video in the list before the current video's deletion
  mounted: function () {
    },
      }
            query: Object.assign(playlistInfo, { playlistItemId: targetPlaylistItem.playlistItemId }),

      }
      this.prevVideoBeforeDeletion = null
        let doShufflePlaylistItems = false
          channelName = subtitle.substring(0, index).trim()
      this.isLoading = true
    },
      } else {
      // Align left/right to avoid going out of either side of the window

        return this.playlistItems[index].title || 'Unknown Title'
        const videos = cachedPlaylist.items
          copyToClipboard(err)
  beforeUnmount: function () {
    loadCachedPlaylistInformation: async function (cachedPlaylist) {
        })
        if (stopDueToLoopDisabled) {
      }
        // Mainly for Invidious API
  },

      }
    previewTransformXPercentage() {
      }).catch((err) => {
      this.previewVideoIndex = Math.max(1, Math.min(this.playlistVideoCount, Math.ceil((percentage / 100) * this.playlistVideoCount)))
      return ''
  },
    handleProgressBarClick: function (event) {
    selectedUserPlaylistVideoCount () {

      if (this.windowWidth > 1050) {
      this.getPlaylistInfoWithDelay()
        this.$router.push(
      this.parseUserPlaylist(this.selectedUserPlaylist)
        }
  },
import {
      /*
    backendPreference: function () {
        })
      if (this.isUserPlaylist && !this.userPlaylistsReady) { return }
    getPlaylistInformationLocal: async function () {
            baseUrl = this.currentInvidiousInstanceUrl
import FtCard from '../ft-card/ft-card.vue'
      if (oldVal !== newVal) {
    },
          {
        showToast(this.$t('Playing Next Video'))
          if (this.backendPreference === 'invidious') {
      * we actually want to actually play the "current" video.
        if (doShufflePlaylistItems) { this.shufflePlaylistItems() }
      }
          this.isLoading = false
      if (index >= 0 && index < this.playlistItems.length) {
    userPlaylistsReady: function() {
    'ft-loader': FtLoader,
          showToast(this.$t('The playlist has ended. Enable loop to continue playing'))

      const items = []
      * the previous video is shown as the "current" one.
      default: null
  emits: ['pause-player'],
        const errorMessage = this.$t('Invidious API Error (Click to copy)')

        this.playlistItems = this.playlistItems.concat(result.videos)
      this.isLoading = true
      if (this.prevVideoBeforeDeletion && !this.shuffleEnabled) {
          this.getPlaylistInformationLocal()
        videos.push(...continuationData.items.map(parseLocalPlaylistVideo))
            path: `/watch/${targetPlaylistItem.videoId}`,
      navigator.mediaSession.setActionHandler('nexttrack', this.playNextVideo)

      randomizedPlaylistItems: [],
import { defineComponent, nextTick } from 'vue'
      this.loadCachedPlaylistInformation(cachedPlaylist)
          {

        items.push(this.currentVideo)
        if (this.backendPreference === 'local' && this.backendFallback) {
    scrollToCurrentVideo: function () {
        // Scroll after watch view loaded, otherwise doesn't work
    updateProgressBarPreview: function (event) {
      } else {
      if (!this.videoIsLastInInPlaylistItems) { return false }
        }
      this.setCachedPlaylist(null)
          videos.push(...p.items.map(parseLocalPlaylistVideo))
    currentVideoIndexZeroBased: function () {
      }


      this.isLoading = false
      return this.previewPosition <= 50 ? 0 : -100

    videoId: {
    },
          }
    isLoading: function (newVal, oldVal) {
        } else if (item.id) {
      } else {
        this.getPlaylistInformationInvidious()
      if (oldVal && !newVal) {
        const newVideoIndex = this.randomizedPlaylistItems.findIndex((item) => {
      return this.$store.getters.getPlaylist(this.playlistId)
        nextTick(() => this.scrollToCurrentVideo())

import { mapMutations } from 'vuex'
      const playlistItems = this.shuffleEnabled ? this.randomizedPlaylistItems : this.playlistItems
      if (!this.showProgressBarPreview) return
        } else {
    },
      this.previewPosition = percentage
        // Align left when preview is on the right half to avoid going out of right side of the window
    },
    },
    }
      const targetVideoIndex = (this.videoIsNotPlaylistItem || this.videoIsLastPlaylistItem) ? 0 : videoIndex + 1
        }
    },
    },
    },
    selectedUserPlaylistLastUpdatedAt () {
      if (this.shuffleEnabled) {
            path: `/watch/${targetPlaylistItem.videoId}`,
  getLocalCachedFeedContinuation,

          this.getPlaylistInformationInvidious()
} from '../../helpers/api/local'
        // `nextTick` is required (tested via reloading)
        nextTick(() => this.scrollToCurrentVideo())

      isLoading: true,
      return this.playlistType === 'user'


          // Watch view can be ready sooner than this component
            query: Object.assign(playlistInfo, { playlistItemId: targetPlaylistItem.playlistItemId }),
        }
    sortOrder: function () {
        // If current video is absent in (removed from) the playlist, nothing should be changed
      this.playlistItems = this.playlistItems.toReversed()
      this.reversePlaylist = !this.reversePlaylist
        showToast(`${errorMessage}: ${err}`, 10000, () => {

          }
        const container = this.$refs.playlistItemsWrapper
    toggleLoop: function () {
    toggleReversePlaylist: function () {
      }
  computed: {

        this.playlistItems = cachedPlaylist.items
      }


        this.channelId = playlist.info.author?.id
    },
      // Re-fetch from local store when current user playlist updated
          this.getPlaylistInformationInvidious()
    playPreviousVideo: function () {
    },
        // grab 2nd video if the 1st one is current & deleted
      return this.$i18n.locale
    },
    },
      // For `router-link` attribute `to`
          return item.videoId === videoId || item.videoId === prevVideoBeforeDeletion?.videoId
    },
      }
  props: {
    },
        return this.videoIndexInPlaylistItems === this.playlistItems.length - 1
    },
    },
      return this.currentVideoIndexZeroBased + 1
      const clickPercentage = clickX / progressBarWidth
        remainingItems.splice(this.currentVideoIndexZeroBased, 1)
          return item.playlistItemId === playlistItemId || item.playlistItemId === prevVideoBeforeDeletion?.playlistItemId
        this.loopEnabled = true
          // TODO: Show toast with error message

        showToast(this.$t('Loop is now disabled'))
    getPlaylistInfoWithDelay: function () {
      const playlistInfo = {
        const continuationData = await getLocalCachedFeedContinuation('playlist', cachedPlaylist.continuationData)
        if (item.playlistItemId && (playlistItemId || prevVideoBeforeDeletion?.playlistItemId)) {
      type: String,
      // Only show ticks if <= 50 videos in playlist to avoid clutter
        if ((newVideoIndex - 1) !== oldVideoIndex) {
  methods: {
    },
        const stopDueToLoopDisabled = this.videoIsLastPlaylistItem && !this.loopEnabled
      })
    },
      // `selectedUserPlaylist` result accuracy relies on data being ready
        playlistId: this.playlistId,

      type: String,
import FtListVideoNumbered from '../FtListVideoNumbered/FtListVideoNumbered.vue'

    },
    },
    }
    'ft-card': FtCard,
      const videoId = this.videoId
      const playlistInfo = {
    if ('mediaSession' in navigator) {
      let videoIndex = this.videoIndexInPlaylistItems

        playlistType: this.playlistType,
      playlistItems: [],
        showToast(this.$t('Playing Next Video'))
        console.error(err)

  getLocalPlaylist,
      if (this.currentVideo != null) {
        }

        // Mainly for Local API
      }
    parseUserPlaylist: function (playlist) {
      type: String,
    },
      }
    previewVideoThumbnail: function () {
      // Check if next video is from the shuffled list or if the user clicked a different video
        showToast(this.$t('Shuffle is now disabled'))
        })
    },
    },
      default: null,
      required: true,

    selectedUserPlaylistLastUpdatedAt () {
  }
    },
      if (this.playlistId == null || this.playlistId === '') { return null }
        } else {
        } else if (item.videoId) {
    },
      return this.playlistVideoCount <= 50
      windowWidth: window.innerWidth,
        const targetPlaylistItem = this.playlistItems[targetVideoIndex]
    watchViewLoading: function (newVal, oldVal) {

    },
      nextTick(() => {

      }

    playlistId: {
        this.isLoading = false
  data: function () {
  watch: {
    if ('mediaSession' in navigator) {
    backendFallback: function () {
        // Watch view can be ready sooner than this component
      channelName: '',
    videoIsNotPlaylistItem: function () {
      } else {
    previewVideoTitle: function () {
      const prevVideoBeforeDeletion = this.prevVideoBeforeDeletion
      navigator.mediaSession.setActionHandler('previoustrack', this.playPreviousVideo)

        if (!process.env.SUPPORTS_LOCAL_API || this.backendPreference === 'invidious') {
      return this.selectedUserPlaylist?.lastUpdatedAt
      required: true,
        const oldVideoIndex = this.randomizedPlaylistItems.findIndex((item) => {
      if (this.shuffleEnabled) {
          return item.id === videoId || item.id === prevVideoBeforeDeletion?.videoId
    playlistPageLinkTo() {

    } else {
      } catch (err) {
import { invidiousGetPlaylistInfo } from '../../helpers/api/invidious'
      previewPosition: 0,
      }
})
      } else {

      return this.videoIndexInPlaylistItems === -1

      return this.$store.getters.getUserPlaylistSortOrder
      if (this.selectedUserPlaylist != null) {
    },
      this.playlistTitle = cachedPlaylist.title
          }
          const subtitle = playlist.info.subtitle.toString()
      } else {
    },


    },
        )
      this.getPlaylistInfoRun = true
    return {
      this.$emit('pause-player')
      // Breakpoint for single-column-template
      // If watch view is loaded after this component loaded
        }


          this.shufflePlaylistItems()
      * So if we want to play the previous video, in this case,
      return this.findIndexOfCurrentVideoInPlaylist(playlistItems)
        const randomInt = Math.floor(Math.random() * remainingItems.length)
    },

    }
          return item.videoId === oldId
    toggleShuffle: function () {

        this.channelId = result.authorId
      }
      showToast(this.$t('Playing Previous Video'))
  name: 'WatchVideoPlaylist',
      // Re-fetch from local store when current user playlist updated
        this.isLoading = false
        )
          container.scrollTop = targetPlaylistItemEl.offsetTop - container.offsetTop
    },
    ])

          let baseUrl = 'https://i.ytimg.com'
    getPlaylistInformationInvidious: function () {
    }
    currentVideoIndexOneBased: function () {
      }
      this.getPlaylistInfoRun = true
        // There is no else case
    },
      if (!process.env.SUPPORTS_LOCAL_API || this.backendPreference === 'invidious' || cachedPlaylist.continuationData === null) {
      if (this.getPlaylistInfoRun) { return }
      required: true,

      const mouseX = event.clientX - rect.left
      this.channelId = ''
    },
      prevVideoBeforeDeletion: null,
          showToast(this.$t('Falling back to Invidious API'))
    watchViewLoading: {
          {
        items.push(remainingItems[randomInt])

      if (this.loopEnabled) {

    playlistVideoCount: function () {
      * When the current video being watched in the playlist is deleted,
        remainingItems.splice(randomInt, 1)
      return this.selectedUserPlaylist?.videos?.length
    window.addEventListener('resize', this.calculateWindowWidth)
        this.channelName = result.author
      return this.$store.getters.getPlaylistsReady

      }
      })
        const targetPlaylistItem = this.randomizedPlaylistItems[targetVideoIndex]
import { copyToClipboard, showToast } from '../../helpers/utils'
      return this.$store.getters.getBackendFallback
    },

        return this.videoIndexInPlaylistItems === this.randomizedPlaylistItems.length - 1
      showProgressBarPreview: false,
          return `${baseUrl}/vi/${videoId}/default.jpg`
    userPlaylistSortOrder: function () {
        await untilEndOfLocalPlayList(continuationData, (p) => {
      this.channelId = cachedPlaylist.channelId

      * The only exception is when shuffle is enabled, as we don't actually

      showToast(this.$t('The playlist has been reversed'))
    },
        return this.previewPosition <= 50 ? -50 : -100
    shouldShowTicks: function () {
      this.channelName = ''
      this.randomizedPlaylistItems = items
    },
    currentLocale: function () {
      * want to play the last sequential video with shuffle.
  },
import { getSortedPlaylistItems, SORT_BY_VALUES } from '../../helpers/playlists'
      shuffleEnabled: false,
            path: `/watch/${targetPlaylistItem.videoId}`,
    currentVideo: function () {
      const videoIndex = this.videoIndexInPlaylistItems
  },
          channelName = playlist.info.author.name
        this.playlistTitle = result.title
        if (this.videoIsLastPlaylistItem && !this.loopEnabled) {
  parseLocalPlaylistVideo,
        })
    videoIsLastPlaylistItem: function () {
          this.isLoading = false
    },
          // User clicked a different video than expected. Re-shuffle the list
            query: Object.assign(playlistInfo, { playlistItemId: targetPlaylistItem.playlistItemId }),
      // This component is loaded/rendered before watch view loaded
      this.isLoading = true
    },
        const targetPlaylistItemEl = container ? Array.from(container.children)[targetArrayIndex] : null
    playlistType: {
    ...mapMutations([
        } else {
      return !this.loopEnabled
          return item.videoId === newId
      this.isLoading = false

        const targetPlaylistItem = this.playlistItems[targetVideoIndex]
      return this.findIndexOfCurrentVideoInPlaylist(this.playlistItems)
      const rect = event.currentTarget.getBoundingClientRect()
      navigator.mediaSession.setActionHandler('previoustrack', null)
      }
    window.removeEventListener('resize', this.calculateWindowWidth)
    },
    },
      return this.$store.getters.getCurrentInvidiousInstanceUrl
      return this.$store.getters.getBackendPreference
      if (targetArrayIndex >= 0 && targetArrayIndex < this.playlistItems.length) {
    },
      }
import FtLoader from '../FtLoader/FtLoader.vue'
      return this.isUserPlaylist ? this.userPlaylistSortOrder : SORT_BY_VALUES.Custom
      const targetArrayIndex = targetVideoIndex - 1
    },
          copyToClipboard(err)
        } else {
          showToast(this.$t('Falling back to Local API'))
      const playlistItemId = this.playlistItemId
          {

      playlistTitle: '',
    findIndexOfCurrentVideoInPlaylist: function (playlist) {
    videoIsLastInInPlaylistItems: function () {
        if (playlist.info.author) {
        this.getPlaylistInformationLocal()
    userPlaylistsReady: function () {
    currentInvidiousInstanceUrl: function () {
      const rect = this.$refs.playlistProgressBar.getBoundingClientRect()
        this.parseUserPlaylist(this.selectedUserPlaylist)
      }
      })
        const videoId = this.playlistItems[index].videoId
    shufflePlaylistItems: function () {
      if (this.shuffleEnabled) {
      if (container != null && currentVideoItemEl != null) {
      const percentage = Math.max(0, Math.min(100, (mouseX / progressBarWidth) * 100))
      } else if (!process.env.SUPPORTS_LOCAL_API || this.backendPreference === 'invidious') {
      */
      this.channelName = cachedPlaylist.channelName
    },
    videoIndexInPlaylistItems: function () {
      const remainingItems = [].concat(this.playlistItems)
      type: String,
        this.playlistItems = videos

        }
        if (process.env.SUPPORTS_LOCAL_API && this.backendPreference === 'invidious' && this.backendFallback) {
        this.$router.push(
          videos.push(...p.items.map(parseLocalPlaylistVideo))

        this.isLoading = false


    selectedUserPlaylistVideoCount () {
  },
      }
    },
      return playlist.findIndex((item) => {
        showToast(this.$t('Loop is now enabled'))
          return
        this.loopEnabled = false
      'setCachedPlaylist'

      this.windowWidth = window.innerWidth

      while (remainingItems.length > 0) {
      loopEnabled: false,
      // Loop enabled = should not stop
      // Create a new array to avoid changing array in data store state
        )
        videoIndex++
      const progressBarWidth = rect.width



      this.shufflePlaylistItems()
        this.playlistTitle = playlist.info.title
      if (this.shuffleEnabled) {
    },
      getPlaylistInfoRun: false,
        console.error(err)
      this.playlistItems = getSortedPlaylistItems(playlist.videos, this.sortOrder, this.currentLocale, this.reversePlaylist)


        if (container != null && targetPlaylistItemEl != null) {
        const errorMessage = this.$t('Local API Error (Click to copy)')
      }
      const container = this.$refs.playlistItemsWrapper
        this.$router.push(
        this.channelName = channelName
          return
export default defineComponent({


      navigator.mediaSession.setActionHandler('nexttrack', null)
      type: Boolean,
    isUserPlaylist: function () {
        }
    playlistId: function (newVal, oldVal) {
      return this.videoIndexInPlaylistItems === (this.playlistItems.length - 1)
      this.parseUserPlaylist(this.selectedUserPlaylist)
        )
        if (this.videoIsLastPlaylistItem || this.videoIsNotPlaylistItem) { doShufflePlaylistItems = true }

      invidiousGetPlaylistInfo(this.playlistId).then((result) => {
        }
          }
      const index = this.previewVideoIndex - 1
        const videos = []

      }
        await untilEndOfLocalPlayList(playlist, (p) => {
    selectedUserPlaylist: function () {
        if (videoId) {

      }
        playlistType: this.playlistType,
      reversePlaylist: false,
    playlistItemId: {
        showToast(`${errorMessage}: ${err}`, 10000, () => {
    },

      this.isLoading = true

    shouldStopDueToPlaylistEnd: function () {
        const targetVideoIndex = this.currentVideoIndexZeroBased - 1
      try {
      this.playlistTitle = playlist.playlistName
    },
          const index = subtitle.lastIndexOf('•')
    },
      const targetVideoIndex = Math.max(1, Math.min(this.playlistVideoCount, Math.ceil(clickPercentage * this.playlistVideoCount)))
      // it could be user playlist or cache playlist
        this.$router.push(
      if (oldVal && !newVal) {
        container.scrollTop = currentVideoItemEl.offsetTop - container.offsetTop


      const currentVideoItemEl = container ? Array.from(container.children)[this.currentVideoIndexZeroBased] : null
            query: Object.assign(playlistInfo, { playlistItemId: targetPlaylistItem.playlistItemId }),
      const isCurrentVideoInParsedPlaylist = this.findIndexOfCurrentVideoInPlaylist(playlist.videos) !== -1
    },

      const progressBarWidth = rect.width

  components: {
      } else {
        this.playlistItems = videos
    pausePlayer: function () {
    playNextVideo: function () {
        showToast(this.$t('Shuffle is now enabled'))
