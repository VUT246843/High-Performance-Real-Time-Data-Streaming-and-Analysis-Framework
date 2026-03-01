    },
      return this.$route.name === 'subscriptions' || this.$route.name === 'default'
                value: 'openInvidious'
    },
      addToPlaylistPromptCloseCallback: null,

    appearance: {
      }

      }
    },
    },
        case 'start':
      this.isVr360 = this.data.isVr360
      this.$store.commit('addVideoToDeArrowCache', cacheData)
    },
      }
          playlistId: this.playlistId,
      if (this.backendPreference === 'invidious') {
        case 'openInvidious':
    toggleQuickBookmarked() {
      } else {
      default: false
  }
      }
        title = this.deArrowCache.title
          },
      if (this.showDeArrowTitle && this.deArrowCache?.title) {
        return {
            : this.$t('Video.Mark As Watched'),
      type: String,
    watchPageLinkQuery() {
      type: String,

      deArrowTogglePinned: false,
    },
    playlistItemIdFinal: function () {

      return this.$store.getters.getShowDistractionFreeTitles
      if (!this.showVideoWithLastViewedPlaylist) { return }
      }
      const hiddenChannels = JSON.parse(this.$store.getters.getChannelsHidden)
          {
        case 'history':
        const deArrowCacheClone = deepCopy(this.deArrowCache)
  data: function () {
    youtubeShareUrl: function () {
        playlistIndex: this.playlistIndex,
    hideSharingActions: function() {
        if (typeof premiereDate === 'string') {
        _id: this.quickBookmarkPlaylist._id,
    return {
      }
      if (this.showDeArrowThumbnail && this.deArrowCache?.thumbnail != null) {
    },
      if (this.rememberHistory) {
      if (this.useDeArrowTitles) {
        this.addToQuickBookmarkPlaylist()
      type: Boolean,

            type: 'divider'


      return this.playlistIdTypePairFinal?.playlistType
    hideChannel: function(channelName, channelId) {
      return this.isInQuickBookmarkPlaylist ? 'base favorite' : 'base'
        published: this.published,
      }
        author: this.channelName,
              }]
            },
    saveVideoHistoryWithLastViewedPlaylist: function () {
        title = this.title
          channelShouldBeHidden
        description: this.description,
      this.$emit('pause-player')
          break

        // `index` seems can be ignored
        this.published = premiereDate.getTime()
  methods: {
        this.published = this.data.published
        authorId: this.channelId,
    },
    blurThumbnailsStyle: function () {
      }
        return
            {
        return toDistractionFreeTitle(title)
              }
      type: Boolean,
  debounce
      }
      return this.$store.getters.getExternalPlayer
      if (this.addToPlaylistPromptCloseCallback == null) { return }
      }
      // this.thumbnail = this.data.videoThumbnails[4].url

      default: null
        viewCount: this.viewCount,
    ])
    },

      return this.$store.getters.getListType
                  label: this.$t('Video.Copy Invidious Channel Link'),
        return {
    },
      cacheData.videoDuration = data?.videoDuration ? Math.floor(data.videoDuration) : null
  },
        return 0
        published: this.published,

    },


      this.isVr180 = this.data.isVr180
      this.title = this.data.title
    },
      if (this.showDistractionFreeTitles) {
          },
  toDistractionFreeTitle,
      this.$emit('move-video-down', this.id, this.playlistItemId)
      type: Boolean,
    },
      if (thumbnail) {
          },
          playlistShuffle: null,
  computed: {
      description: '',

        this.uploadedTime = premiereDate.toLocaleString([this.currentLocale, 'en'])
        videoId: this.id,
      return this.$store.getters.getDefaultPlayback

      const videoUrl = `https://youtu.be/${this.id}`
      isLive: false,
      return this.$store.getters.getCurrentInvidiousInstanceUrl
              value: 'copyYoutubeChannel'
      this.$emit('move-video-up', this.id, this.playlistItemId)
    },
      }
      this.addToPlaylistPromptCloseCallback()

    playlistType: {
      }
        const hiddenChannels = JSON.parse(this.$store.getters.getChannelsHidden)
  formatDurationAsTimestamp,
      return this.blurThumbnails ? 'blur(20px)' : null
        case 'copyYoutubeEmbed':
          break
          break
      }
      if (this.playlistIdFinal) { query.playlistId = this.playlistIdFinal }
            {
      default: false
  getRelativeTimeFromDate,
            this.removeFromWatched()
        }

      // TODO: Maybe show playlist name
        if (this.inHistory) {
      return this.isInQuickBookmarkPlaylist
            ? [{
            value: 'openYoutube'
        this.lengthSeconds = this.historyEntry.lengthSeconds

      this.addToPlaylistPromptCloseCallback = () => {

    },
      if (this.showDeArrowThumbnail && this.deArrowCache?.thumbnail === null) {
    },
            value: 'openYoutubeEmbed'
            ? {
    },
    },
  emits: ['move-video-down', 'move-video-up', 'pause-player', 'remove-from-playlist'],
          break
      return this.$store.getters.getThumbnailPreference

      return `${this.currentInvidiousInstanceUrl}/channel/${this.channelId}`
        case 'openInvidiousChannel':
      this.isLive = this.data.liveNow || this.data.lengthSeconds === 'undefined'
      switch (option) {
    moveVideoUp: function() {
            : [],

      type: Boolean,

      if (!this.saveVideoHistoryWithLastViewedPlaylist) { return }
                value: 'unhideChannel'
            label: this.$t('Video.Open in YouTube'),
    },
      this.id = this.data.videoId
          premiereDate = new Date(premiereDate)
    },
              type: 'divider'

      switch (this.thumbnailPreference) {
      type: Boolean,
      default: true,
      } else if (typeof (this.data.premiereTimestamp) !== 'undefined') {
        videoUrl += `&list=${this.playlistIdFinal}`
    toggleDeArrow() {
        options.push(
    },

    },
        baseUrl = 'https://i.ytimg.com'
      if (this.hideVideoViews) {
        }
      const percentage = (this.watchProgress / this.lengthSeconds) * 100
        return 0

        }
          },
    },
      default: false
              }]
        let premiereDate = this.data.premiereDate
    listType: function () {
          break
        return `${videoUrl}?list=${this.playlistIdFinal}`
    },

        return {}

    selectedUserPlaylist: function () {
      }

    },
  components: {
  formatNumber,
        options.push(
          )
      return this.playlistIdTypePairFinal?.playlistItemId
      const id = this.id
          return `${baseUrl}/vi/${this.id}/mq2.jpg`
    },
      if (!this.deArrowChangedContent) {
          value: 'history'
        title: this.title,
    hideVideoViews: function () {
    displayTitle: function () {
        case 'unhideChannel':
      this.updateChannelsHidden(JSON.stringify(hiddenChannels.filter(c => c.name !== channelId)))
        _id: this.quickBookmarkPlaylist._id,

      if (this.isInQuickBookmarkPlaylist) {
  openExternalLink,
      return this.playlistIdFinal && this.playlistIdFinal.length !== 0 && !this.inUserPlaylist
    currentInvidiousInstanceUrl: function () {
      }
      // When in the history page, showing relative dates isn't very useful.
      } else {
      return this.$route.name === 'history'
        videoId: this.id,

    youtubeEmbedUrl: function () {
    isQuickBookmarkEnabled() {
      'updateChannelsHidden',
      const cacheData = { videoId, title: null, videoDuration: null, thumbnail: null, thumbnailTimestamp: null }
            {
      if (!this.historyEntryExists) {
        window.ftElectron.openInExternalPlayer(payload)
import { mapActions } from 'vuex'

              value: 'openYoutubeChannel'

        cacheData.thumbnailTimestamp = data.videoDuration * data.randomTime
    blurThumbnails: function () {
      type: String,
      return this.$store.getters.getPlaylist(this.playlistIdFinal)
        videoId: this.id,
    playlistIdTypePairFinal() {
    showPlaylists: function () {
      if ((this.data.lengthSeconds === '' || this.data.lengthSeconds === '0:00') && this.historyEntryExists) {

        case 'copyInvidiousChannel':

      type: Boolean,
    externalPlayerIsDefaultViewingMode: function () {
          label: this.historyEntryExists
      'removeFromHistory',
      this.showAddToPlaylistPromptForManyVideos({ videos: [videoData] })



      })

        : this.$t('Video.DeArrow.Show Original Details')
        } else {
        (this.useDeArrowTitles && this.deArrowCache?.title &&
          path: `/watch/${this.id}`,
      }
      const hiddenChannels = JSON.parse(this.$store.getters.getChannelsHidden)
    },
      return ['auto', 'semi-auto'].includes(this.$store.getters.getWatchedProgressSavingMode)
      'addVideo',
        default:
    deArrowToggleTitle: function() {
      if (process.env.IS_ELECTRON) {
      'removeVideo',
    showAddToPlaylistPrompt(value) {
    playlistReverse: {
      }
    },
          ...this.showInvidiousShareOptions
        this.markAsWatched()
          openExternalLink(this.invidiousUrl)
      if (!this.externalPlayerIsDefaultViewingMode) {
        videoId: this.id,
      let videoUrl = `https://www.youtube.com/watch?v=${this.id}`
          this.hideChannel(this.channelName, this.channelId)
          {
        premiereTimestamp: this.data.premiereTimestamp,
        premiereDate: this.data.premiereDate,
          },
      }
      }
      if (this.playlistIdFinal === '') { return null }
      }
        this.handleExternalPlayer()
        const channelShouldBeHidden = hiddenChannels.some(c => c.name === this.channelId)
      // however as we know that some users have playlists that have more than 10k items in them
    },
      default: null
                label: this.$t('Video.Hide Channel'),
  },
    this.parseVideoData()
      return videoUrl

    },
    playlistIdFinal: function () {

      showDeArrowTitle: false,
    playlistIndex: {

      return this.quickBookmarkPlaylist.videos.some((video) => {
      this.hasCaptions = this.data.hasCaptions
      this.is4k = this.data.is4k
      default: false
              ? [{
        authorId: this.channelId,
      })
      this.removeVideo({
        }
      hideViews: false,
  },
      return (this.listType === 'list' || this.forceListType === 'list') && this.forceListType !== 'grid'
        cacheData.title = data.titles[0].title.replaceAll(/(^|\s)>(\S)/g, '$1$2').trim()
      if (this.playlistIdFinal == null) { return null }
      if (this.inUserPlaylist) {

          break


    },
      return this.deArrowTogglePinned
      return this.$store.getters.getRememberHistory
            type: 'divider'
    playlistShuffle: {
            },
          break
      if (this.playlistSharable) {

      isVr180: false,
        // `index` seems can be ignored
        }

    showInvidiousShareOptions: function () {
      this.is8k = this.data.is8k
    playlistSharable() {
    this.showDeArrowThumbnail = this.useDeArrowThumbnails
    }
        // `index` seems can be ignored
      }
      this.deArrowTogglePinned = !this.deArrowTogglePinned
      uploadedTime: '',
  deepCopy,
        ? this.$t('User Playlists.Remove from Favorites', translationProperties)
      'showAddToPlaylistPromptForManyVideos',

          openExternalLink(this.youtubeChannelUrl)
      lengthSeconds: 0,
      default: null
        Object.assign(payload, {
      return this.$i18n.locale
import { deArrowData, deArrowThumbnail } from '../../helpers/sponsorblock'
                  value: 'openInvidiousChannel'
    externalPlayer: function () {
      }

      return this.$store.getters.getDeArrowCache[this.id]
      channelName: null,
        authorId: this.channelId,
        isLive: false,
      if (Array.isArray(data?.titles) && data.titles.length > 0 && (data.titles[0].locked || data.titles[0].votes >= 0)) {
        description: this.description,

        case 'copyYoutube':

          playlistLoop: null,
      return this.quickBookmarkPlaylist != null
      // `playlistId` can be undefined
        viewCount: this.viewCount,
        case 'openYoutubeChannel':
      return this.historyEntryExists && !this.inHistory
      is3D: false,
      return this.$store.getters.getUseDeArrowThumbnails

          playlistIndex: null,
    },
          if (this.historyEntryExists) {
    },
    historyEntryExists: function () {
        playlistLoop: this.playlistLoop,
      } else {
} from '../../helpers/utils'
    },
    },
    },
      return this.$store.getters.getHistoryCacheById[this.id]
      default: false,
        this.$store.commit('addThumbnailToDeArrowCache', deArrowCacheClone)
      }
      this.channelId = this.data.authorId ?? null
    alwaysShowAddToPlaylistButton: {
    moveVideoDown: function() {
      type: Boolean,
      showDeArrowThumbnail: false,
    },
      if (this.playlistSharable) {
    playlistLoop: {
    },
          this.data.title.localeCompare(this.deArrowCache.title, undefined, { sensitivity: 'accent' }) !== 0)

        return
      title: '',
    removeFromWatched: function () {
      // `playlistId` can be undefined
    },
          return `${baseUrl}/vi/${this.id}/mqdefault.jpg`
        title: this.title,
      return (this.useDeArrowThumbnails && this.deArrowCache?.thumbnail) ||
        )
        playlistId: this.playlistIdFinal,
      // We want to show the exact date instead
      default: false,
      if (this.channelId !== null && !this.inSubscriptions) {
      return typeof this.historyEntry !== 'undefined'
    },
    canMoveVideoUp: {
    },

    },
      this.isUpcoming = this.data.isUpcoming || this.data.premiere
        this.parsedViewCount = formatNumber(this.data.viewCount)
      return Math.min(percentage, 100)
        deArrowCacheClone.thumbnail = thumbnail
    invidiousUrl: function () {
    },
    },
      // Also the search is retriggered every time any playlist is modified.
                value: 'hideChannel'
        this.showDeArrowTitle = !this.showDeArrowTitle
          openExternalLink(this.invidiousChannelUrl)
      }
      return videoUrl
                value: 'copyInvidious'

      isPremium: false,


          openExternalLink(this.youtubeEmbedUrl)
          // Use 30 days per month, just like calculatePublishedDate
      }
        }
              : [],
      const videoData = {
      return this.$store.getters.getUseDeArrowTitles
        this.hideViews = true
      }
    markAsWatched: function () {
      if (!this.isQuickBookmarkEnabled) { return false }
      if (this.thumbnailPreference === 'hidden') { return }

        title: this.title,
    },
    },
        this.hideViews = true
    isInQuickBookmarkPlaylist: function () {

  watch: {
        case 'middle':
    },
      return query
    youtubeChannelUrl: function () {
      }
    useDeArrowThumbnails: function () {
import FtIconButton from '../FtIconButton/FtIconButton.vue'
import {
      }
        videoData,
    },
      let baseUrl
      return {
      if (!this.hideSharingActions) {
    },
      }
    deArrowChangedContent: function () {
      hasCaptions: false,
        this.addToPlaylistPromptCloseCallback = null
      // Get playlist ID from history ONLY if option enabled
    quickBookmarkIconTheme: function () {
      } else if (typeof this.data.published === 'number' && !this.isLive) {
            : {

        published: this.published,
        this.published = this.data.premiereTimestamp * 1000
        playlistItemId: this.historyEntry?.lastViewedPlaylistItemId,
        baseUrl = this.currentInvidiousInstanceUrl
        : this.$t('User Playlists.Add to Favorites', translationProperties)
    quickBookmarkButtonEnabled: {
      showToast(this.$t('Channel Hidden', { channel: channelName }))
          } else {
    if ((this.showDeArrowTitle || this.showDeArrowThumbnail) && !this.deArrowCache) {

    dropdownOptions: function () {
    },
    forceListType: {
      if (!this.isQuickBookmarkEnabled) {
    canMoveVideoDown: {
})
    playlistId: {
        author: this.channelName,
      isVr360: false,
      return options
  showToast,
    handleExternalPlayer: function () {
      if (typeof this.lengthSeconds !== 'number' || this.lengthSeconds === 0) {
            type: 'divider'

import { defineComponent } from 'vue'
              type: 'divider'
      required: true
        lengthSeconds: this.data.lengthSeconds,
    addToQuickBookmarkPlaylist() {
      const options = [
    },
        watchProgress: 0,
      // it adds up quickly, especially as there are usually lots of ft-list-video instances active at the same time.
      return this.historyEntry.watchProgress
        if (this.debounceGetDeArrowThumbnail == null) {

        lengthSeconds: this.data.lengthSeconds,
          {
        this.parsedViewCount = this.data.viewCountText.replace(' views', '')
    },
      if (this.thumbnailPreference === 'hidden') {
      is8k: false,
        this.showDeArrowThumbnail = !this.showDeArrowThumbnail
                label: this.$t('Video.Copy Invidious Link'),
    },
      showToast(this.$t('Channel Unhidden', { channel: channelName }))
          copyToClipboard(this.youtubeEmbedUrl, { messageOnSuccess: this.$t('Share.YouTube Embed URL copied to clipboard') })
    },
      let videoUrl = `${this.currentInvidiousInstanceUrl}/watch?v=${this.id}`

      return this.playlistTypeFinal === 'user' || this.selectedUserPlaylist != null
    playlistTypeFinal: function () {
    },
    watchVideoRouterLink() {
    },
      published: undefined,


      return this.$store.getters.getBackendPreference
      this.updateChannelsHidden(JSON.stringify(hiddenChannels))
        ? this.$t('Video.DeArrow.Show Modified Details')
    inSubscriptions: function () {
      } else if (typeof (this.data.viewCountText) !== 'undefined') {
    'ft-icon-button': FtIconButton
import thumbnailPlaceholder from '../../assets/img/thumbnail_placeholder.svg'
    displayDuration: function () {
    removeFromQuickBookmarkPlaylist() {
      return this.$store.getters.getBlurThumbnails
      if (this.playlistId) {

      if (this.externalPlayerIsDefaultViewingMode) {
        playlistType: this.historyEntry?.lastViewedPlaylistType,
            label: this.$t('Video.Copy YouTube Link'),
      if (this.playlistItemIdFinal) { query.playlistItemId = this.playlistItemIdFinal }
        this.duration = formatDurationAsTimestamp(this.historyEntry.lengthSeconds)
      this.isPremium = this.data.premium || false

      const payload = {
              ? [{
        // remove dearrow formatting markers https://github.com/ajayyy/DeArrow/blob/0da266485be902fe54259214c3cd7c942f2357c5/src/titles/titleFormatter.ts#L460
      } else if (typeof (this.data.viewCount) !== 'undefined' && this.data.viewCount !== null) {
        lengthSeconds: this.data.lengthSeconds,
          break
      const query = {}
          ...this.showInvidiousShareOptions
        playlistShuffle: this.playlistShuffle,
    parseVideoData: function () {

    },
          },
    },
      }
          break
        type: 'video'
        return title
          this.uploadedTime = getRelativeTimeFromDate(this.data.published, false)
          {
      // Save data to cache whether data available or not to prevent duplicate requests
    },
        {
            ? [{
      return this.$store.getters.getHideSharingActions
      isNew: false,
      // TODO: Maybe show playlist name

    },
          playlistId: null,
        )
    progressPercentage: function () {
    rememberHistory: function () {
        // Remove all playlist items with same videoId
    },
          break
      if (!this.isQuickBookmarkEnabled) { return false }
        case 'copyInvidious':
    canRemoveFromPlaylist: {
    },
      required: true
      return videoUrl
    historyEntry: function () {
        this.lengthSeconds = this.data.lengthSeconds
    },
        case 'openYoutubeEmbed':
        return formatDurationAsTimestamp(this.deArrowCache.videoDuration)
      this.removeFromHistory(this.id)

      }
            },
        playlistId: this.historyEntry?.lastViewedPlaylistId,
          playlistReverse: null,
    backendPreference: function () {
      return process.env.IS_ELECTRON && this.externalPlayer !== '' && this.$store.getters.getDefaultViewingMode === 'external_player'
            value: 'copyYoutubeEmbed'
      if (!this.historyEntryExists || !this.watchedProgressSavingEnabled) {
        showToast(this.$t('Video.Video has been marked as watched'))
    }
      this.isNew = this.data.isNew
    }
      }
      default: false,
      type: Object,
      if (typeof this.data.premiereDate !== 'undefined') {
    if (this.showDeArrowThumbnail && this.deArrowCache && this.deArrowCache.thumbnail == null) {
  },
            ? this.$t('Video.Remove From History')
        case 'hideChannel':
    },
      type: String,
      return `https://youtube.com/channel/${this.channelId}`
    },
            ...this.showInvidiousShareOptions
    },
    },
      const data = await deArrowData(this.id)
          break
                }]
    // For `router-link` attribute `to`
        playlistName: this.quickBookmarkPlaylist.playlistName,
    thumbnailPreference: function () {
    },
        premiereDate: this.data.premiereDate,
  copyToClipboard,
        author: this.channelName,
    youtubeUrl: function () {
                  label: this.$t('Video.Open Channel in Invidious'),


        this.removeFromQuickBookmarkPlaylist()
          break
      // So create a temporary variable outside of the array, so we only have to do it once.
          copyToClipboard(this.youtubeShareUrl, { messageOnSuccess: this.$t('Share.YouTube URL copied to clipboard') })

      // fetch dearrow thumbnails if enabled
    },
    },
      this.channelName = this.data.author ?? null
    },
        playbackRate: this.defaultPlayback,
  props: {
        this.duration = formatDurationAsTimestamp(this.data.lengthSeconds)


    fetchDeArrowData: async function() {
      debounceGetDeArrowThumbnail: null,
          break
  name: 'FtListVideo',
      id: '',
    },
    },

    removeFromPlaylist: function() {
      return !this.$store.getters.getHidePlaylists
      }
    data: {
      default: null
    watchProgress: function () {
    showVideoWithLastViewedPlaylist: {
    inUserPlaylist: function () {
    useDeArrowTitles: function () {
      type: Boolean,
      is4k: false,
    },
    },
      }

      } else {
            ...this.showInvidiousShareOptions
      return this.$store.getters.getHideVideoViews
    },

    this.showDeArrowTitle = this.useDeArrowTitles
export default defineComponent({
  created: function () {
      type: Number,
          {
            : [],
      this.debounceGetDeArrowThumbnail()
          options.push(
              label: this.$t('Video.Open Channel in YouTube'),
    handleOptionsClick: function (option) {
      viewCount: 0,
    },
      duration: '',
          }
      return this.playlistIdTypePairFinal?.playlistId
      parsedViewCount: '',
      })



    },
      }
      hiddenChannels.push({ name: channelId, preferredName: channelName })
      } else {
            },
      isUpcoming: false,
    togglePlaylistPrompt: function () {
      } else {

    fetchDeArrowThumbnail: async function() {
    handleWatchPageLinkClick: function() {
      const translationProperties = {
    },
    },
        timeWatched: Date.now(),

        cacheData.thumbnailTimestamp = data.thumbnails.at(0).timestamp
      }
      if (value) { return }
    addWatchedStyle: function () {
      type: Boolean,

    },
      // Accessing a reactive property has a negligible amount of overhead,
      return this.backendPreference === 'invidious' || this.$store.getters.getBackendFallback
            {

            label: this.$t('Video.Copy YouTube Embedded Player Link'),
              label: this.$t('Video.Copy YouTube Channel Link'),
      if (this.playlistTypeFinal) { query.playlistType = this.playlistTypeFinal }
      type: String,
          this.uploadedTime = new Date(this.data.published).toLocaleDateString([this.currentLocale, 'en'])
      return this.duration
      showToast(this.$t('Video.Video has been removed from your saved list'))


    invidiousChannelUrl: function () {
          },
      const videoData = {
          copyToClipboard(this.invidiousChannelUrl, { messageOnSuccess: this.$t('Share.Invidious Channel URL copied to clipboard') })
        case 'copyYoutubeChannel':
            label: this.$t('Video.Open YouTube Embedded Player'),
          query: this.watchPageLinkQuery,
      }

      }
      // Only play video in non playlist mode when user playlist detected
    },
      this.$emit('remove-from-playlist', this.id, this.playlistItemId)
      return this.$store.getters.getQuickBookmarkPlaylist
  },


    ...mapActions([
          this.debounceGetDeArrowThumbnail = debounce(this.fetchDeArrowThumbnail, 1000)
                  value: 'copyInvidiousChannel'



          openExternalLink(this.youtubeUrl)

        case 'end':
        premiereTimestamp: this.data.premiereTimestamp,
        startTime: this.watchProgress,
          return `${baseUrl}/vi/${this.id}/mq3.jpg`
    },
            value: 'copyYoutube'
    },
      default: null
    },
        return video.videoId === id
      return this.$store.getters.getSaveVideoHistoryWithLastViewedPlaylist
      if (this.useDeArrowThumbnails) {
      // Execute on prompt close
      }
    quickBookmarkIconText: function () {
      return `https://www.youtube-nocookie.com/embed/${this.id}`
      } else if (data?.videoDuration != null) {
                }]
      this.description = this.data.description
        // premiereDate will be a string when the subscriptions are restored from the cache
          {
      'updateHistory',
      const thumbnail = await deArrowThumbnail(videoId, this.deArrowCache.thumbnailTimestamp)
    },
      default: false,
          this.unhideChannel(this.channelName, this.channelId)
    currentLocale: function () {
    showDistractionFreeTitles: function () {

          {
      this.viewCount = this.data.viewCount
    effectiveListTypeIsList: function () {
        }
        case 'openYoutube':
      }


      this.addVideo({
      this.is3D = this.data.is3d
              }

          playlistType: this.playlistType,
        return thumbnailPlaceholder
  },
                label: this.$t('Video.Open in Invidious'),
        if (this.channelId !== null) {
        this.uploadedTime = new Date(this.data.premiereTimestamp * 1000).toLocaleString([this.currentLocale, 'en'])
    deArrowCache: function () {
      }
          playlistItemId: this.playlistItemId,
    },
    defaultPlayback: function () {
        // This should be prevented by UI
        videoId: this.id,
    },
      showToast(this.$t('Video.Video has been removed from your history'))
          copyToClipboard(this.invidiousUrl, { messageOnSuccess: this.$t('Share.Invidious URL copied to clipboard') })
      // Focus when prompt closed
      showToast(this.$t('Video.Video has been saved'))
    quickBookmarkPlaylist() {
        playlistReverse: this.playlistReverse,
              : [],


    },
      if (this.playlistSharable) {
          copyToClipboard(this.youtubeChannelUrl, { messageOnSuccess: this.$t('Share.YouTube Channel URL copied to clipboard') })
            this.markAsWatched()
      // User playlist ID should not be shared
    unhideChannel: function(channelName, channelId) {
          return `${baseUrl}/vi/${this.id}/mq1.jpg`
        this.debounceGetDeArrowThumbnail()
      let title
        })
      const videoData = {
        this.debounceGetDeArrowThumbnail = debounce(this.fetchDeArrowThumbnail, 1000)
      ]
                label: this.$t('Video.Unhide Channel'),
      if (this.useDeArrowTitles && (this.duration === '' || this.duration === '0:00') && this.deArrowCache?.videoDuration) {
    inHistory: function () {
    },
    playlistItemId: {
      channelId: null,
    watchedProgressSavingEnabled: function () {
      this.updateHistory(videoData)
      }
      const videoId = this.id
        // Run once only

      if (this.debounceGetDeArrowThumbnail == null) {
        videoUrl += `&list=${this.playlistIdFinal}`
      } else {
      const videoId = this.id

        return this.deArrowCache.thumbnail
      this.fetchDeArrowData()
    thumbnail: function () {
      if (Array.isArray(data?.thumbnails) && data.thumbnails.length > 0 && (data.thumbnails[0].locked || data.thumbnails[0].votes >= 0)) {
