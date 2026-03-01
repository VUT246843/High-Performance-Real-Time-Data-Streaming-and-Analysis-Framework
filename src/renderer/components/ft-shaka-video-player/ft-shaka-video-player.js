    })
          if (existingSkip) {
      events.addEventListener('nextVideo', () => {
    },
          if (fullWindowEnabled.value) {
      ]
      playerDimensions,
                return 1

        }
          bufferingGoal: 180,
            const codecsPrefixA = getCodecsPrefix(a)
    })

    },
      }

      if (!ui || !player) {
    let sponsorBlockSegments = []
          continue
    const onlyUseOverFlowMenu = ref(false)
          markerDiv.className = `sponsorBlockMarker main${sponsorSkips.value.categoryData[segment.category].color}`
        stats.volume = (video_.volume * 100).toFixed(1)
        const devicePixelRatio = window.devicePixelRatio > 1 ? window.devicePixelRatio : 1

    function registerSkipButtons() {

        containerResizeObserver.disconnect()
      showOverlayControls()
          ?.filter(child => typeof child !== 'string' && child.tagName === 'AdaptationSet' &&


          const existingSkip = skippedSponsorBlockSegments.value.find(skipped => skipped.uuid === uuid)
    watchingPlaylist: {
      shakaControls.registerElement('ft_theatre_mode', null)
            // Rewind by the time-skip interval (in seconds)
      volume: '100',
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.DECREASE_VIDEO_SPEED_ALT:
    function registerTheatreModeButton() {

      if (autoSkip.size === 0) {


      }

          'ft_audio_tracks',
            detail: !fullWindowEnabled.value
    const mouseScrollSkipThrottle = throttle(mouseScrollSkip, mouseScrollThrottleWaitMs)
            showToast(t('Screenshot Success'))
            const seekRange = player.seekRange()
        }
      }
        return
          break
      }

      if (error.severity === ErrorSeverity.RECOVERABLE && error.category === ErrorCategory.NETWORK) {
      const duration = seekRange.end - seekRange.start
        'opus',

            events.dispatchEvent(new CustomEvent('toggleTheatreMode', {
          }
        mpdNode.attributes.suggestedPresentationDelay = `PT${(minimumUpdatePeriod * 2).toFixed(3)}S`
      // however if there isn't one we should fall back to US English.
     * As shaka-player doesn't let you unregister custom control factories,
    const videoSkipMouseScroll = computed(() => {
          'ft_autoplay_toggle',
        const originalLocalization = localization.resolve(shakaControlKey)
     */
        sessionStorage.setItem('muted', String(muted))

        if (activeCaptionIndex >= 0 && player.isTextTrackVisible()) {
          player.goToLive()
        console.warn(
        uiConfig.overflowMenuButtons.push(
      events.addEventListener('toggleTheatreMode', () => {

        if (!Object.hasOwn(cachedLocales, shakaLocale)) {
            format.toUpperCase(),
        removeFromArrayIfExists(uiConfig.controlPanelElements, 'ft_theatre_mode')
        sabrStream.cleanup()
          )
      )
    'skip-to-prev',

      }
          response.uri = redirectResponse.uri
                    variants = filteredVariants

      shakaControls.registerElement('ft_legacy_quality', new LegacyQualitySelectionFactory())
      fullscreenTitleOverlay.dir = 'auto'
      try {
        /** @type {shaka.extern.UIConfiguration} */

        return
      if ((event.deltaY < 0 || event.deltaX > 0)) {
        stats.bandwidth = (playerStats.estimatedBandwidth / 1000).toFixed(2)
  debounce,


        ignoreErrors = true
    // shaka-player ships with some locales prebundled and already loaded
        return codecs.split('.')[0]
      }

       * @implements {shaka.extern.IUIElement.Factory}
      type: Boolean,

    })
    const startInFullwindow = props.startInFullwindow
      shakaOverflowMenu.registerElement('ft_skip_next', new SkipNextButtonFactory())
      /** @type {Set<SponsorBlockCategory>} */
        const url = new URL(response.uri)
            await player.unload()
    /**
      // https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image

      onlyUseOverFlowMenu.value = entries[0].contentBoxSize[0].inlineSize <= USE_OVERFLOW_MENU_WIDTH_THRESHOLD
          const redirectResponse = await requestOperation.promise
            event.preventDefault()
    function isPaused() {
      const width = video_.videoWidth
        }
      const categoryData = {}


          request.method = 'POST'
              .catch(error => logShakaError(error, 'addThumbnailsTrack', props.videoId, props.storyboardSrc))

    delayLoadUntilUnix: {
            })
            const currentlyVisible = player.isTextTrackVisible()
        // The audio-only streams are actually raw AAC, so correct the file extension from `.ts` to `.aac`
    }
      /**
                caption.mimeType,
        navigator.mediaSession.playbackState = 'playing'
  findMostSimilarAudioBandwidth,

        } else {
    /** @type {import('vue').ComputedRef<boolean>} */
          // we have our own ones (shaka-player's ones are quite limited)
        } else {
        video_.pause()
      valueChangeTimeout = setTimeout(() => {
        i = parseFloat(i.toFixed(2))
        if (showStats.value && hasLoaded.value) {

        container.value.ui = null
    }
        events.dispatchEvent(new CustomEvent('setFullWindow', {

        const firstTimeConfig = {
    /** @type {ResizeObserver} */
        abr: {
      if (video.value) {
              translatedCategory: translateSponsorBlockCategory(category),
    })
      handleLeavePictureInPicture,
    /**
    }
    const screenshotQuality = computed(() => {
          // save the state of player settings to reinitialize them upon next creation
     * @param {boolean} canSeekResult Allow functions that have already checked whether seeking is possible, to skip the extra check (e.g. frameByFrame)
          const responseAsString = shaka.util.StringUtils.fromUTF8(response.data)
          case 'preview':

        canvas.remove()
        audioCodec: '',
      default: null
            forceAspectRatio.value = firstVariant.width / firstVariant.height < 1.5
        // so shaka-player isn't able to infer the mime type from the `/file/seg.ts` part like it does for non-proxied HLS manifests.
      /** @type {Set<SponsorBlockCategory>} */
    },
     * }} track
      sortAdapationSetsByCodec(periods)
      const initialLoadDelayMs = props.delayLoadUntilUnix - Date.now()
      window.removeEventListener('online', onlineHandler)
const AdvancedRequestType = shaka.net.NetworkingEngine.AdvancedRequestType
    const videoPlaybackRateMouseScroll = computed(() => {
          // `⌘+,` is for settings in MacOS
          detail: newValue
      type: String,
        const video_ = video.value
      stopPowerSaveBlocker()
    const playerWidth = computed(() => Math.round(pipWindowWidth.value ?? videoElementWidth.value))
      }

      // imageQuality is ignored for pngs, so it is still okay to pass the quality value
        const popUpLayout = seconds > 0
  UNMUTE: KeyboardShortcuts.VIDEO_PLAYER.GENERAL.MUTE,
            const url = new URL(caption.url)
          if (saved) {
          url.pathname += `/host/${encodeURIComponent(value.replace('.c.youtube.com', '.googlevideo.com'))}`

      updateVolume,

    manifestMimeType: {
      /**

     * @param {number|undefined} previousQuality
          ? { icon: 'arrow-right', invertContentOrder: true }
      type: Array,

                  representations.push(adaptationSetChild)
        startInPip = false
          enableFullscreenOnRotation: enterFullscreenOnDisplayRotate.value,
    async function setLocale(locale) {
      return store.getters.getEnterFullscreenOnDisplayRotate
    }
    useTheatreMode: {
        // about it being set to labels, but that the audio tracks don't have labels
            showToast(t('Screenshot Success'))
      // exit fullscreen and/or fullwindow if keyboard shortcut modal is opened
          initLoadWaitTimeToastAC.signal,
        for (const period of periods) {
          props.format === 'legacy' ? 'ft_legacy_quality' : 'quality',
          // hide captions before switching as shaka/the browser doesn't clean up the displayed captions
    })
          const knownIds = new Set()
        player.getNetworkingEngine().registerResponseFilter(responseFilter)
        skippedSegments.forEach(({ uuid, category }) => {
      const duration = end - start
    }
      }
    /**
        player.removeEventListener('adaptation', updateQualityStats)
    }
      default: () => ([])
    }
            }
        })

        streaming: {
            await player.unload()
    /**
    )
            mouseScrollPlaybackRateHandler(event)

            return t('Video.Watch.Remaining preroll-ad time: {remindingTimeSeconds}s', { remindingTimeSeconds: +(remainingMs / 1000).toFixed(1) })
      }
      const isPortrait = variants[0].height > variants[0].width
        trackLabelFormat: hasMultipleAudioTracks.value ? TrackLabelFormat.LABEL : TrackLabelFormat.LANGUAGE_ROLE,
     */
      if (newPlaybackRate > 0.07 && newPlaybackRate <= maxVideoPlaybackRate.value) {
      }
      }

            controls
          `Category: ${categoryText} (${error.category})\n` +
      stats.codecs.videoCodec = codecsMatch.groups.videoCodec

    }
        case '1':
      ui = new shaka.ui.Overlay(


    onMounted(async () => {
          return
      hasMultipleAudioTracks.value = false
      })
      }
        // for abr changes/auto quality

        return
            events,
        create(rootElement, controls) {
        tapSeekDistance: newValue

      fullWindowEnabled,

        return
          break

    /**
          gatherInitialStatsValues()
          video_.pause()
          newTime = segment.endTime

        const firstFormat = props.legacyFormats[0]
    }
            // always place image and text tracks AdaptionSets last in the manifest

          event.preventDefault()

     * @param {WheelEvent} event
          break

      if (!showStats.value || props.format !== 'legacy') {
    })

          markerDiv.style.left = `calc(${(chapter.startSeconds / duration) * 100}% - 1px)`
            }
        seekBySeconds(defaultSkipInterval.value * player.getPlaybackRate(), true)
      } else if (!process.env.SUPPORTS_LOCAL_API) {
          const uris = [responseAsString]
            // Return to previous frame
      const sponsorCategories = ['sponsor',
        if ((event.deltaY < 0 || event.deltaX > 0)) {
      default: ''
    watch(locale, setLocale)
      url.pathname += `/file/${encodeURIComponent(fileValue)}`
      if ((!process.env.IS_ELECTRON || screenshotAskPath.value) && wasPlaying) {
        event.preventDefault()
          return markerDiv

} from '../../helpers/utils'
     * @param {number} quality
      const muted = sessionStorage.getItem('muted')
            }

        setupSponsorBlock()
      })

                }
     * @param {shaka.extern.xml.Node[]} periods
      default: false
      forceAspectRatio,
      }
            const stringBody = new TextDecoder().decode(response.data)
        }))
      isPaused,
          // Exit full window
    function registerScreenshotButton() {
        try {
    watch(playbackRates, (newValue) => {
       * @type {{
      // Should really be fixed in shaka-player but it's easier just to do it ourselves
      if (process.env.SUPPORTS_LOCAL_API && sabrStream) {
        if (key === 'file') {
     * overwrite them with `null` instead so the referenced objects
          break

        event.stopPropagation()
    })
      return store.getters.getVideoVolumeMouseScroll

          event.preventDefault()
            }
       * @param {'dash'|'audio'|'legacy'} oldFormat
        return
      }, 1000))
        }
        return
    const valueChangeMessage = ref('')

            blob,

     *   newTrack: shaka.extern.Track,
            existingSkip.timeoutId = setTimeout(() => {
      if (process.env.IS_ELECTRON) {
      if (video.value) {
        if (ui.getControls().isFullScreenEnabled()) {
          break
          contextMenuElements: ['ft_stats'],
       * - captions track
          ui.getControls().toggleFullScreen()
            break
      default: null
        classList.contains('shaka-controls-container')) {
                // Push AudioChannelConfiguration to the front (where it seems to already be) so that it doesn't
              detail: !props.useTheatreMode
                )
          'playback_rate',
      return parseInt(value)
       *   [key in SponsorBlockCategory]: {
  getSponsorBlockSegments,
        }
    },
        }
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo
        takeScreenshot()
    /** @type {import('vue').Ref<HTMLVideoElement | null>} */

    }
      } else {
    })
      if (firstTime) {
            const isMuted = !video_.muted
      // Seeking not possible e.g. with HLS
        if (videoPlaybackRateMouseScroll.value) {
        const codecs = adaptationSet.attributes.codecs ??
        elementList = uiConfig.controlPanelElements
          // Replace .c.youtube.com with .googlevideo.com as the built-in Invidious video proxy only accepts host parameters with googlevideo.com
            // Advance to next frame
     * @param {number} step

        }
        }
              const newId = `${id}-ft-fix-${counter}`
    /** @type {import('vue').ComputedRef<number>} */
          changeVolume(0.05)
          seekBar.push(x)
        if (useSponsorBlock.value && sponsorBlockSegments.length > 0 && canSeek()) {
        displayInVrMode: useVrMode.value
        emit('skip-to-next')
      pipWindowWidth.value = pipWindow.width * devicePixelRatio
      player.addEventListener('buffering', event => {
          }
      type: String,
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.THEATRE_MODE:
          const representations = []
        volumeBar.value = 100

              })())
          }
          enableTooltips: true,
        ...controlPanelElements.slice(1)
          break

      }

          'captions',
        case '5':
          }

      }
        error = error.data[0]
      if (newValue) {
    },
      if (!ui) {
    }
            /** @type {shaka.extern.xml.Node | string} */ b
      shakaControls.registerElement('ft_full_window', new FullWindowButtonFactory())

      // For most of FreeTube's locales, there is an equivalent one in shaka-player,
      Object.entries(shakaControlKeysToShortcuts).forEach(([shakaControlKey, shortcut]) => {
    function changePlayBackRate(step) {


            }
import { AudioTrackSelection } from './player-components/AudioTrackSelection'

        }
    }

     */
    const invertValueChangeContentOrder = ref(false)
    // #endregion tear down
      const chapters = props.chapters
      if (!player || !hasLoaded.value) {
        localization.insert(shakaLocale, new Map(Object.entries(cachedLocales[shakaLocale])))
            // `+value` converts string back to float
        let useAutoQuality = oldFormat === 'legacy' ? defaultQuality.value === 'auto' : player.getConfiguration().abr.enabled
    }
        const markerBar = document.createElement('div')
            frameByFrame(1)
    /** @type {import('vue').ComputedRef<boolean>} */
      }
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.NEXT_FRAME:

    function setDashQuality(quality, audioBandwidth, label) {
    let sabrManifest
      }
          if (canChapterJump(event, 'previous')) {
        'vp9',
    const showOfflineMessage = computed(() => {
      /** @type {shaka.extern.xml.Node[]} */
        // - `smooth`: without dropping frames
          promptSkip.add(x)
       * @implements {shaka.extern.IUIElement.Factory}

      ui.configure({
      class ScreenshotButtonFactory {
                  // Sometimes there is nothing marked as main, don't filter in this case
          try {
        }
    const uiConfig = computed(() => {
                  variants = variants.filter(variant => variant.label === label)
            const track = player.getVariantTracks().find(track => track.active)
            // If an error occurs with them, it's not critical

      showOverlayControls()
      shakaOverflowMenu.registerElement('ft_screenshot', null)
      }
    let containerResizeObserver = null
     * @param {string} locale
     * first it checks whether there are any chapters (the array is also empty if chapters are hidden)
            event.preventDefault()
      if (initialLoadDelayMs > 0 && (props.format === 'legacy' || props.manifestMimeType !== MANIFEST_TYPE_SABR)) {


              useAutoQuality = true
    }

      // Touchpad scroll = small deltaX/deltaY
      if (


          promises.push(
        // which still doesn't tell shaka-player how to handle the stream because that's the equivalent of saying "binary data".
        overflowMenuButtons: [],
        if ((!process.env.IS_ELECTRON || screenshotAskPath.value) && wasPlaying) {
      const { autoSkip } = sponsorSkips.value
      if (typeof audioBandwidth === 'number') {

    function setCurrentTime(time) {
      return {
const LOCALE_MAPPINGS = new Map(process.env.SHAKA_LOCALE_MAPPINGS)


        classList.contains('shaka-play-button-container') ||
      return uiConfig
            if (typeof a === 'string' || a.tagName !== 'AdaptationSet' ||
          // when switching away from the legacy formats
    }
      const promptSkip = new Set()
          'recenter_vr',

    /**
      }
      })
      } else {
          document.body.classList.remove('playerFullWindow')
        fullWindowEnabled.value = event.detail

    }
      } else {
        const promises = []
          event.preventDefault()

    },

      shakaOverflowMenu.registerElement('ft_next_previous', null)
      }


        // fix live streams with subtitles having duplicate Representation ids
          addBigPlayButton: displayVideoPlayButton.value,
          // Toggle picture in picture
      type: Number,

                const index = skippedSponsorBlockSegments.value.findIndex(skipped => skipped.uuid === uuid)
          document.body.classList.add('playerFullWindow')


          bufferBehind: 300
              for (const adaptationSetChild of periodChild.children) {
      } else {
              player.addTextTrackAsync(
            rootElement,
    /**
      if (label) {
                skippedSponsorBlockSegments.value.splice(index, 1)
     */
    /** @type {ResizeObserver|null} */
            if (props.format === 'dash') {
    // #region player config
      }
      return store.getters.getDisplayVideoPlayButton
          )
    /**

      // This has to be right at the end so that shaka-player can read the file extension

    }
        )

    const activeLegacyFormat = shallowRef(null)
        }
              }

                  'captions',
          })


          case 'sponsor':
      })
const USE_OVERFLOW_MENU_WIDTH_THRESHOLD = 634

            break
            const message = isMuted ? '0%' : `${Math.round(video_.volume * 100)}%`
            if (props.format !== 'legacy') {
  props: {
                if (typeof audioBandwidth === 'number') {
            // Jump to the next chapter
        if (/\/itag\/23[34]\//.test(url.pathname) || url.searchParams.get('itag') === '233' || url.searchParams.get('itag') === '234') {
      restoreCaptionIndex = 0
          controlsContainer.addEventListener('click', handleControlsContainerClick, true)

    }

    /**

    let pipWindow = null

                undefined, // codec, only needed if the captions are inside a container (e.g. mp4)
        // Reset to default value
      }
      }


      if (props.format === 'legacy') {
      }
        'intro',
              promises.push((async () => {
     *   endTime: number
      const canvas = document.createElement('canvas')
          case 'outro':


      }
    function updateLegacyQualityStats(newFormat) {

        stats.codecs.videoItag = ''

      },
      type: Boolean,
    /** @type {import('vue').ComputedRef<number>} */
            }))
          // Toggle full screen
       */
      }
                // block sorting Representations if it's in the middle instead
      const wasPlaying = !video_.paused
      document.body.classList.remove('playerFullWindow')
       *   endSeconds: number,
      if (process.env.SUPPORTS_LOCAL_API && sabrStream) {
        // `+value` converts string back to float
      /**
    // #region screenshots

      }
       */
      // skip to previous video button


      if (props.format === 'audio') {
          'ft_theatre_mode',
      stats.resolution.frameRate = fps
        event.preventDefault()

          } catch (error) {
        'mute',
    })
        }

            if (knownIds.has(id)) {

        video_.currentTime = seekRange.start
          matches = legacyFormats.sort((a, b) => a.bitrate - b.bitrate)
        configureUI()

    const vrCanvas = ref(null)
            if (typeA !== 'video' && typeA !== 'audio') {
          navigator.mediaSession.playbackState = 'none'
                caption.url,
        matches = variants.filter(variant => {
      } else if (newValue > 0 && newValue < oldValue) {
    function registerStatsButton() {
  setup: function (props, { emit, expose }) {

      pipWindowWidth.value = null
    // #region mouse and keyboard helpers
      if (matches.length === 0) {
      sortAudioAdaptationSetsByBitrate(periods)
        // hence compare it with 'false' and set volume to defaultVolume.
        window.ftElectron.startPowerSaveBlocker()
        height: 0,
        stats.codecs.audioCodec = audioCodec

              knownIds.add(newId)
    window.addEventListener('online', onlineHandler)
        onlyUseOverFlowMenu.value = true
      if (!event.ctrlKey && !event.metaKey) {
      sponsorBlockSegments.forEach(segment => {
    // #endregion mouse scroll handlers
      events.addEventListener('takeScreenshot', () => {
      if (typeof previousQuality === 'undefined') {
    const playerHeight = computed(() => Math.round(pipWindowHeight.value ?? videoElementHeight.value))
    })
     */
          player.cancelTrickPlay()
    }

       * @implements {shaka.extern.IUIElement.Factory}
export default defineComponent({

    // If we briefly lose the connection but it comes back before the buffer is empty,

        configureUI()
        })
      type: Boolean,
      }

      } else if (newValue > 0 && newValue > oldValue) {
          // Jump to end of video
      }
                    return previous === null || current.bandwidth > previous.bandwidth ? current : previous
     * Adds the captions and thumbnail tracks, also restores the previously selected captions track,
            sponsorVal = store.getters.getSponsorBlockSelfPromo
          // TODO: enable this when electron gets document PiP support
              return -1

            const id = representation.attributes.id
    // #endregion set quality
      if (startInFullscreen && process.env.IS_ELECTRON) {
          'picture_in_picture',
const RequestType = shaka.net.NetworkingEngine.RequestType
    manifestSrc: {
    /** @type {import('vue').ComputedRef<number | 'auto'>} */
      const newValue = oldValue + (step * 100)
        stats.resolution.height = newTrack.height
    // #endregion offline message
      return { autoSkip, seekBar, promptSkip, categoryData }
    let startInPip = props.startInPip
     * @param {WheelEvent} event
        'vp09',
    /** @type {AbortController | undefined} */
          event.preventDefault()
          enableKeyboardPlaybackControls: false,
      class AudioTrackSelectionFactory {
      stats.codecs.videoItag = itag
    // #region request/response filters
    },
        // - `powerEfficient` the spec is quite vague but in Chromium it should prioritise hardware decoding when available
                } catch (error) {

      }
    },
      if (newValue !== oldValue && ui) {
    // #region functions used by the watch page
      handlePictureInPictureResize()
      /** @implements {shaka.extern.IUIElement.Factory} */
    }

    })
       */
          break
          if (props.theatrePossible) {


            showOverlayControls()
          return markerDiv
                  caption.mimeType,
    /**
      }
        // Longer timeout for receiving larger responses
                  caption.label
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.STATS:
    legacyFormats: {

    const seekingIsPossible = computed(() => {
      let segments, averageDuration
          break

        await setLegacyQuality(props.startTime)
      addMarkers(
        } else {


        stats.codecs.audioCodec = newTrack.audioCodec
        isBuffering.value = event.buffering

          if (props.format === 'dash') {
    const playbackRates = computed(() => {

     * e.g. due to the active format changing or the user changing settings
          break
      }

        },

      /** @type {shaka.extern.UIConfiguration} */
      const oldValue = parseFloat(volumeBar.value)
    const videoElementHeight = ref(0)

    })
                  let text = await response.text()
              const index = skippedSponsorBlockSegments.value.findIndex(skipped => skipped.uuid === uuid)
        showToast(t('Screenshot Error', { error: err.message }))
          // makes captions work for live streams and doesn't seem to have any negative affect on VOD videos
      const video_ = video.value
      getCurrentTime,

      if (muted !== null) {
    watch(videoPlaybackRateMouseScroll, (newValue, oldValue) => {
        if (autoSkip.has(segment.category) && currentTime < segment.endTime &&
      } else {
    })
        if (newFormat === 'audio' || newFormat === 'dash') {
      if (!useVrMode.value) {
          }

     *   uuid: string

    /** @type {shaka.Player|null} */
      // make scrolling over volume slider change the volume
      }
      // https://docs.videojs.com/html5#volume
          request.body = new Uint8Array([0x78, 0]) // protobuf: { 15: 0 } (no idea what it means but this is what YouTube uses)
        messageIcon = 'volume-high'
      shakaOverflowMenu.registerElement('ft_theatre_mode', null)


        }

      })
    })

        const filteredVariants = variants.filter(variant => variant.audioRoles.includes('main'))
    function handleLeavePictureInPicture() {
        return
       * - video quality
    const videoResizeObserver = new ResizeObserver(() => {
    function mouseScrollSkipHandler(event) {
    /**
      return url.toString()
      }

          'ft_full_window',
    /**
    function createChapterMarkers() {
            player.addThumbnailsTrack(props.storyboardSrc, 'text/vtt')
          return
      const isPortrait = legacyFormats[0].height > legacyFormats[0].width
          tapSeekDistance: defaultSkipInterval.value,
        const muted = video_.muted

      shakaControls.registerElement('ft_legacy_quality', null)
      // shaka-player doesn't clear these itself, which prevents shaka.ui.Overlay from being garbage collected

            if (typeof track.audioBandwidth === 'number') {
     * To workaround that we destroy the player first and wait for it to finish before we unmount this component.
      }
        'volume',
      const shakaControlKeysToShortcutLocalizations = new Map()
                }
        error.category !== shaka.util.Error.Category.TEXT &&
    chapters: {
            // Only log the error, as the thumbnails are a nice to have
      if (!props.autoplayPossible) {
      shakaControls.registerElement('ft_autoplay_toggle', null)
          await player.setTextTrackVisibility(true)
    /** @type {shaka.ui.Overlay|null} */
      shakaOverflowMenu.registerElement('ft_autoplay_toggle', null)
    function pause() {
      }
                  const response = await fetch(caption.url)
      required: true

  emits: [

        }
            }))
            break
          'loop',
        ui = null
            } else {
      // check if the component is already getting destroyed
    vrProjection: {
        chapters.map(chapter => {
  PAUSE: KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.PLAY,


      const uiConfig = {
          break

        return true
        await new Promise((resolve) => setTimeout(resolve, initialLoadDelayMs))
      ]
      hasLoaded.value = false



        // shaka-player throws DASH_DUPLICATE_REPRESENTATION_ID if we don't fix it

    // #endregion keyboard shortcuts
      } else if (hasMultipleAudioTracks.value) {
      }
    theatrePossible: {
              promises.push(
          }
            }, 2000)
        !ignoreErrors &&
            const codecsPrefixB = getCodecsPrefix(b)
import { TheatreModeButton } from './player-components/TheatreModeButton'
              representation.attributes.id = newId

                if (typeof adaptationSetChild !== 'string' && adaptationSetChild.tagName === 'Representation') {
        stats.resolution.width = newTrack.width
            const cleaned = stringBody.replaceAll(/ align:start position:(?:10)?0%$/gm, '')
      } else if ((event.deltaY > 0 || event.deltaX < 0)) {
        ignoreErrors = true


        uiConfig.overflowMenuButtons = [
    onBeforeUnmount(() => {
      const interval = videoPlaybackRateInterval.value
            handleError(error, 'loading dash/audio manifest for format switch', `${oldFormat} -> ${newFormat}`)
          if (canSeek()) {

    /** @type {import('vue').ComputedRef<boolean>} */
      // allow copying text
        if (fullWindowEnabled.value) {
      }
            request.uris[0] += `&range=${request.headers.Range.split('=')[1]}`
       * @implements {shaka.extern.IUIElement.Factory}
          stats.codecs.videoItag = newTrack.originalVideoId.split('-', 1)[0]
      event.preventDefault()
        })

    }


      if (newValue !== oldValue && ui) {
      }

        ({ segments, averageDuration } = await getSponsorBlockSegments(props.videoId, sponsorSkips.value.seekBar))
      shakaControls.registerElement('ft_skip_next', new SkipNextButtonFactory())
          }
          const saved = await writeFileWithPicker(


        }

      shakaOverflowMenu.registerElement('ft_autoplay_toggle', new AutoplayToggleFactory())
            }
      // Need to set crossorigin="anonymous" for LegacyFormat on Invidious
            // position:0% for LTR text and position:100% for RTL text
      videoResizeObserver.observe(videoElement)
    const container = ref(null)
      if ('mediaSession' in navigator) {
    })
      const playerStats = player.getStats()
          return new AudioTrackSelection(events, rootElement, controls)
      registerScreenshotButton()
        const minimumUpdatePeriod = parseFloat(mpdNode.attributes.minimumUpdatePeriod.match(/^PT(\d+(?:\.\d+)?)S$/)[1])
        playbackRates: newValue
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.LARGE_REWIND:

    }))
      if (containerResizeObserver) {
      registerLegacyQualitySelection()
    function registerLegacyQualitySelection() {
      /**
     */
      // PiP can only be activated once the video's readState and video track are populated
            response.data = new TextEncoder().encode(cleaned).buffer
        createSponsorBlockMarkers(duration)
          case 'selfpromo':
      let matches = variants.filter(variant => {
    const video = ref(null)
            return codecPriorities.indexOf(codecsPrefixA) - codecPriorities.indexOf(codecsPrefixB)
import {
          customContextMenu: true,
      }
        markers.forEach(marker => markerBar.appendChild(marker))
    // #region mouse scroll handlers
    const fullWindowEnabled = ref(false)

      if (video_.muted && (event.deltaY < 0 || event.deltaX > 0)) {
      }
        }
              })
                    caption.label
    })
      class AutoplayToggleFactory {
     * @param {number} currentTime


        let duration

      }
      }

          // So that we don't see last countdown text like 0/N


      document.addEventListener('keydown', keyboardShortcutHandler)

      if (showStats.value) {
     * @returns {shaka.extern.PlayerConfiguration}
      if (!showStats.value || props.format === 'legacy') {
        url.pathname += `/${key}/${encodeURIComponent(value)}`
      if (newValue !== oldValue && ui) {


          ignoreErrors = false
      // Whatever runs after `performFirstLoad` might be after switching to another page due to SABR backoff
        shakaControlKeysToShortcutLocalizations.set(shakaControlKey, localizationWithShortcut)
      }

    // #endregion custom player controls
          await setLegacyQuality(playbackPosition, previousQuality)
        }
      type: String,
      ui.configure({
        return

     * with the the keyboard shortcuts, should be done

        }

      /**
    })
    let sabrAbortController

          for (const representation of representations) {

      // save some work when sponsorblock is disabled
      const video_ = video.value
    const maxVideoPlaybackRate = computed(() => {
      volumeBar.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }))
        // as shaka-player recreates the UI when you call configure
        const index = restoreCaptionIndex
      const value = store.getters.getDefaultQuality

      while (error.code === ErrorCode.REQUEST_FILTER_ERROR || error.code === ErrorCode.RESPONSE_FILTER_ERROR) {
    autoplayEnabled: {
            player.setTextTrackVisibility(!currentlyVisible)
    function skipSponsorBlockSegments(currentTime) {
      }
                return -1
      return playbackRates
     * Vue's lifecycle hooks are synchonous, so if we destroy the player in {@linkcode onBeforeUnmount},
      events.addEventListener('toggleAutoplay', () => {
        preferredDecodingAttributes: format === 'dash' ? ['smooth', 'powerEfficient'] : [],
            // use seek range instead of duration so that it works for live streams too

    function hlsProxiedUrlReplacer(match) {
          handleError(error, 'setLegacyFormat', event.detail)
          case 'intro':
    'loaded',
    function manifestPreprocessorTXml(mpdNode) {
        // for manual changes e.g. in quality selector

        const activeCaptionIndex = player.getTextTracks().findIndex(caption => caption.active)
      type: Boolean,
      let uiState = { startNextVideoInFullscreen: false, startNextVideoInFullwindow: false, startNextVideoInPip: false }
        // estimated bandwidth is NaN for legacy, as none of the requests go through shaka,
    })
        frameRate: 0
      shakaControls.registerElement('ft_next_previous', null)

     * @param {string | undefined} label

      return store.getters.getUseSponsorBlock
     */
      isOffline.value = false

          case 'interaction':

  See: https://github.com/shaka-project/shaka-player/blob/main/ui/locales/en.json
      emit('loaded')
    },
        fps = player.getVariantTracks().find(track => track.active).frameRate
        }
            if (!useAutoQuality) {

            }
            // Take screenshot
          new DataView(response.data).getUint32(0) === HTTP_IN_HEX) {
              if (dimension) {
      const getCodecsPrefix = (adaptationSet) => {


      }
      if (!enableScreenshot.value || props.format === 'audio') {
       */
      nextTick(showOverlayControls)
          },
      if (process.env.SUPPORTS_LOCAL_API && props.format !== 'legacy' && props.manifestMimeType === MANIFEST_TYPE_SABR) {
          player.configure(getPlayerConfig(newFormat, defaultQuality.value === 'auto'))

          }
      }
      stats.codecs.audioCodec = codecsMatch.groups.audioCodec

        create(rootElement, controls) {
          'toggle_stereoscopic',
        } else if (key === 'hls_chunk_host') {
      const classList = event.target.classList


    // #region SABR
     * if this was triggered by a format change and the user had the captions enabled.
          console.error('Mising Shaka localization key "%s"', shakaControlKey)

     * @type {{
              player.selectVariantTrack(variants[0])
        emit('toggle-theatre-mode')
        player = null
          })
          playbackPosition
      }, 2000)
            const previousTrack = player.getVariantTracks().find(track => track.active)
      return store.getters.getEnableScreenshot
              )
     * @param {string} icon - The icon to display.
        await player.destroy()
    /** @type {import('vue').ComputedRef<boolean>} */
      // Since there can be 2 requests at the same time (video + audio), we debounce the listener to only show the message once
        segments = []
          // Fast-Forward by 2x the time-skip interval (in seconds)
        }
        const height = matches[0].height

    }

    // #endregion UI config

      video.value.pause()
      const buffered = player.getBufferedInfo().total
      }
    // #endregion power save blocker
      if (props.format !== 'legacy') {

      switch (event.key.toLowerCase()) {
      /**
     * @param {number} seconds The number of seconds to seek by, positive values seek forwards, negative ones seek backwards
        return

          if (canSeek()) {
          event.preventDefault()
      if ((event.deltaY < 0 || event.deltaX > 0)) {
            mouseScrollVolumeHandler(event)
        case ' ':
      type: Boolean,
      shakaOverflowMenu.registerElement('ft_theatre_mode', new TheatreModeButtonFactory())
    },
      }
          // Increase playback rate by user configured interval
            video_.currentTime = props.chapters[props.currentChapterIndex - 1].startSeconds
      // Skip to next video in playlist or recommended
    function getCurrentTime() {
      }

            sponsorVal = store.getters.getSponsorBlockSponsor
      registerAudioTrackSelection()
          restrictToElementSize: true
          if (!event.metaKey) {
        volumeBar.value = newValue

        }

                setDashQuality(dimension, audioBandwidth, label)

    })
    let sabrStream



        console.error(e)
        if (response.data && response.data.byteLength > 4 &&
    /** @type {shaka.extern.ResponseFilter} */

  ENTER_PICTURE_IN_PICTURE: KeyboardShortcuts.VIDEO_PLAYER.GENERAL.PICTURE_IN_PICTURE,
        // fix live stream loading issues

        // while shaka-player processes the new manifest and segments


    },
                  caption.url,
        changePlayBackRate(-0.05)
      // ideally we would set this in the `streaming` event handler, but for HLS this is only set to true after the loaded event fires.

        return
        removeFromArrayIfExists(elementList, 'ft_screenshot')
      const seekRange = player.seekRange()
        }
      showValueChangePopup,
      const codecPriorities = [
          changeVolume(-0.05)

import { useI18n } from '../../composables/use-i18n-polyfill'
      // getAudioTracks() returns an empty array when no variant is active, so we can't do this in the `streaming` event
    // Only display the offline message while buffering/the loading symbol is visible.
      if (event.ctrlKey || event.metaKey) {
      if (startInFullwindow) {


      }
          changePlayBackRate(videoPlaybackRateInterval.value)
      // Check how many seconds we are allowed to seek, 30 is too short, 3600 is an hour which is great
      shakaControls.registerElement('ft_autoplay_toggle', new AutoplayToggleFactory())


    /** @type {import('../../helpers/player/SabrSchemePlugin').SabrStream | undefined} */
     * @param {shaka.extern.xml.Node} mpdNode
      } else if (newValue > 100) {
    let ignoreErrors = false
        matches = legacyFormats.filter(variant => {

          shortcut

        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.INCREASE_VIDEO_SPEED:
      })
        sabrManifest = player.getManifest()


      default: ''
          event.preventDefault()
    const mouseScrollVolumeThrottle = throttle(mouseScrollVolume, mouseScrollThrottleWaitMs)
            const typeB = b.attributes.contentType || b.attributes.mimeType.split('/')[0]
        stats.codecs.videoCodec = videoCodec
    }
      return store.getters.getScreenshotQuality
      /** @type {object[]} */
      }
     */

    },
import { AutoplayToggle } from './player-components/AutoplayToggle'
        // and a shorter one for low latency streams
          ({ remainingMs }) => {
          restoreCaptionIndex = null
          preferDocumentPictureInPicture: false
          activeLegacyFormat.value = null

        player.removeEventListener('variantchanged', updateQualityStats)
    }

      }
            event.preventDefault()
        sponsorBlockAverageVideoDuration = averageDuration
      pipWindow.addEventListener('resize', handlePictureInPictureResize)

      ui.configure({
      container,
      // Allow shaka-player to retry on potentially recoverable network errors
        'spacer'
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.DECREASE_VIDEO_SPEED:
        }
      }
      pipWindow = event.pictureInPictureWindow
     * @param {shaka.extern.xml.Node[]} periods
          handleError(error, 'loading dash/audio manifest and setting default quality in mounted')
      if (volume !== null) {
          break
        })
        // "CHUNK_DEMUXER_ERROR_APPEND_FAILED: Projection element is incomplete; ProjectionPoseYaw required."
    }
      class FullWindowButtonFactory {
          }
    })
     * @param {number | undefined} audioBandwidth
                  .catch(error => handleError(error, 'addTextTrackAsync', caption))
      const controlPanelElements = [
    const defaultQuality = computed(() => {
          break
    },

     */
      type: Array,

          changePlayBackRate(-videoPlaybackRateInterval.value)
      let newTime = 0

            level: 'var(--primary-color)'
      sabrStream.onReloadOnce(() => {

    }
                player.addTextTrackAsync(
              audioBandwidth = track.audioBandwidth
      ui.getControls().showUI()

        clearTimeout(valueChangeTimeout)
          if (props.format === 'legacy') {


      () => props.format,
                    console.error(error)
        // Sometimes there is nothing marked as main, don't filter in this case
          player.selectTextTrack(textTrack)
                  }, null)

              detail: false
      }
        videoResizeObserver.disconnect()
            detail: !showStats.value
      })
      sabrStream = /** @__NOINLINE__ */ setupSabrScheme(props.sabrData, () => player, () => sabrManifest, playerWidth, playerHeight)
        }
    thumbnail: {


       */
        const url = new URL(response.uri)
      if ('mediaSession' in navigator) {
    }
      // For SABR we include the thumbnails and subtitles in the manifest
        //
      /** @type {DOMTokenList} */
      return props.chapters.length > 0 &&
              }

        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.SMALL_FAST_FORWARD:

        stats.resolution.frameRate = newTrack.frameRate
        controlPanelElements: props.watchingPlaylist ? controlPanelElementsWithSkipButtons : controlPanelElements,
        messageIcon = 'volume-mute'
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.FULLSCREEN:
          markerDiv.title = chapter.title
      registerAutoplayToggle()
      })
      } else {
        manifest: {
      }
    })
        stats.frames = {
      }

      if (type === RequestType.SEGMENT) {
          duration = seekRange.end - seekRange.start
        uiConfig.controlPanelElements.push(
      const mimeType = `image/${format === 'jpg' ? 'jpeg' : format}`
        i += interval
      player.addEventListener('loaded', handleLoaded)
            url.searchParams.get('caps') === 'asr' && url.searchParams.get('kind') === 'asr' && url.searchParams.get('fmt') === 'vtt') {

            sponsorVal = store.getters.getSponsorBlockInteraction
      }
    /** @type {shaka.extern.Manifest | undefined} */
      valueChangeIcon.value = icon
      video,
          totalFrames: playerStats.decodedFrames
    /** @type {shaka.extern.RequestFilter} */

     */


          // e.g., A Shaka localization key in shakaControlKeysToShortcuts has fallen out of date and need to be updated
      const volumeBar = container.value.querySelector('.shaka-volume-bar')
          markerDiv.style.left = `${(segment.startTime / duration) * 100}%`
      })

    /** @type {PictureInPictureWindow | null} */
     */
        period.children
          // can happen at the end of the video sometimes

      videoElement.defaultPlaybackRate = defaultPlaybackRate.value
       *   startSeconds: number,
        return

      } else {
          let previousQuality
    // #region power save blocker
        }
      player?.addEventListener('ratechange', () => {
          format: matches[0],

          await player.load(format.url, playbackPosition, format.mimeType)

    const screenshotFormat = computed(() => {
          }
    function configureUI(firstTime = false) {
        create(rootElement, controls) {

      const { fps, bitrate, mimeType, itag, width, height } = newFormat
      stats.resolution.height = height
      invertValueChangeContentOrder,
      }
      return store.getters.getVideoSkipMouseScroll
        seekBySeconds(-defaultSkipInterval.value * player.getPlaybackRate(), true)
      type: Object,

        changePlayBackRate(0.05)
              const highestBandwidth = Math.max(...variants.map(variant => variant.audioBandwidth))
    const forceAspectRatio = ref(false)
  PICTURE_IN_PICTURE: KeyboardShortcuts.VIDEO_PLAYER.GENERAL.PICTURE_IN_PICTURE,
        // Combine the config objects so we only need to do one configure call
          break

      return true
          // these have their own watchers
    /**
      type: String,
      if (newTime === 0 || video_.ended) {
      vrCanvas,

              timeout: 30 * 1000 * 2,
              url.searchParams.get('caps') === 'asr' && url.searchParams.get('kind') === 'asr' && url.searchParams.get('fmt') === 'vtt') {
import shaka from 'shaka-player'
      handleTimeupdate,
      if (document.activeElement.classList.contains('ft-input') || event.altKey) {
          // Toggle mute only if metakey is not pressed
        textTrackLabelFormat: props.captions.length > 0 ? TrackLabelFormat.LABEL : TrackLabelFormat.LANGUAGE,

      return props.format === 'dash' && props.vrProjection === 'EQUIRECTANGULAR'
  repairInvidiousManifest,
    /**
            event.preventDefault()

    function mouseScrollPlaybackRate(event) {

      return video.value.paused
      if (newTime < seekRange.start) {
       *   }
import { StatsButton } from './player-components/StatsButton'
                  if (error instanceof shaka.util.Error) {
     * @param {WheelEvent} event
        case '3':


        removeFromArrayIfExists(elementList, 'ft_autoplay_toggle')
        videoItag: '',
                    url,
       */
        }
    const skippedSponsorBlockSegments = ref([])

      if (!process.env.SUPPORTS_LOCAL_API || props.format === 'legacy' || props.manifestMimeType !== MANIFEST_TYPE_SABR) {
        sponsorBlockSegments.map(segment => {
        )
    })
        if (modifiedText) {

      player = controls.getPlayer()
      }
      type: Number,

                  } else {
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.TAKE_SCREENSHOT:
      handlePlay,
       *   thumbnail?: string
      shakaControls.registerElement('ft_full_window', null)
    /**
    'playback-rate-updated',
      if (width <= 0) {
    // #endregion player config
     */
            mimeType,
            await player.load(props.manifestSrc, playbackPosition, props.manifestMimeType)
          event.preventDefault()
    }
    currentPlaybackRate: {
            event.preventDefault()
      isLive.value = player.isLive()
    startInFullwindow: {
     */
      }
     */
    videoId: {

            await player.unload()
          }
                    'captions',

    }
      },
      type: Boolean,

      let bufferedSeconds = 0
  name: 'FtShakaVideoPlayer',

    },
     * @param {WheelEvent} event
      pipWindow = null
      valueChangeIcon,
  }
            // `+value` converts string back to float
          for (const periodChild of period.children) {
      stopPowerSaveBlocker()
            takeScreenshot()

      autoplayVideos,
        case '4':
        // Touchpad scroll = small deltaX/deltaY
     */
      } else {
      } finally {
          dash: {
      const videoElement = video.value
      if (Math.abs(videoEnd - currentTime) < 1 || video_.ended) {
      } else if ((event.deltaY > 0 || event.deltaX < 0)) {



      if (canSeek()) {
        )
        if (event.detail) {

    }
          request.uris[0] += '&alr=yes'

          }))
          sabrAbortController.signal,

    },
    /**

    }
              return 1
    // #region SponsorBlock

      type: Number,
      const imageQuality = screenshotQuality.value / 100
        return quality === (isPortrait ? variant.width : variant.height)
          segmentRelativeVttTiming: true,
     * Sort audio AdaptationSets so that streams with higher bitrates come first.
      }
      // which is possible because this function runs asynchronously
        }
        for (const caption of props.captions) {

          if (await window.ftElectron.writeToDefaultFolder(filenameWithExtension, arrayBuffer)) {
        if (!process.env.IS_ELECTRON || screenshotAskPath.value) {
*/
                return b.attributes.bandwidth - a.attributes.bandwidth
      player.selectVariantTrack(chosenVariant)

        'outro',
        containerResizeObserver.observe(container.value)
      stats.codecs.audioItag = itag
        sessionStorage.setItem('volume', volume.toString())
      ui.configure({
          // Decrease Volume

      ]
      invertValueChangeContentOrder.value = invertContentOrder
          originalLocalization,
      }
        if (fullWindowEnabled.value) {


      const seekBarContainer = container.value.querySelector('.shaka-seek-bar-container')
      /** @type {number} */
          }
      shakaOverflowMenu.registerElement('ft_audio_tracks', null)
    expose({


        window.ftElectron.requestFullscreen()
     * @param {WheelEvent} event
      }
              } else {
          player.configure(getPlayerConfig(newFormat, useAutoQuality))
       *     skip: 'autoSkip' | 'promptToSkip' | 'showInSeekBar' | 'doNothing'
      await localPlayer.attach(videoElement)
      hasMultipleAudioTracks.value = deduplicateAudioTracks(player.getAudioTracks()).size > 1
        activeLegacyFormat.value = event.detail.format
      document.addEventListener('fullscreenchange', fullscreenChangeHandler)

      let messageIcon
      addMarkers(
    const { ContextMenu: shakaContextMenu, Controls: shakaControls, OverflowMenu: shakaOverflowMenu } = shaka.ui

     */

              label = track.label
      }

    })
        removeFromArrayIfExists(uiConfig.overflowMenuButtons, 'loop')
      startPowerSaveBlocker()


          event.preventDefault()
              }
            props.legacyFormats,
    function addUICustomizations() {
            event.preventDefault()
            mouseScrollSkipHandler(event)
        return
    }
        variants = variants.filter(variant => variant.label === label)
          .forEach(adaptationSet => {
      }
            showOverlayControls()
    }

        return false
        // audio

      }
        event.stopPropagation()
          if (player.getTextTracks().length > 0) {
        case '9': {
          variants = filteredVariants
                let variants = player.getVariantTracks()
        if ('mediaSession' in navigator) {
        preferredVideoCodecs: typeof props.vrProjection === 'string' ? ['av01', 'avc1'] : []
      })

            previousQuality = previousTrack.height > previousTrack.width ? previousTrack.width : previousTrack.height
      }
    const isOffline = ref(!navigator.onLine)
        // YouTube uses these values and they seem to work well in FreeTube too,
        }

import { MANIFEST_TYPE_SABR } from '../../helpers/player/SabrManifestParser'
    // #endregion stats
          changeVolume(-0.05)
            break
                  )
      let i = interval
        })
            const messageIcon = isMuted ? 'volume-mute' : 'volume-high'
    })
import { setupSabrScheme } from '../../helpers/player/SabrSchemePlugin'
          'overflow_menu',
     * determines whether the jump to the previous or next chapter

        // Shaka-player does attempt to detect it with HEAD request but the `Content-Type` header is `application/octet-stream`,
      type: Array,
      events.addEventListener('setLegacyFormat', async (/** @type {CustomEvent} */ event) => {
    /** @type {number|null} */
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, onUnmounted, reactive, ref, shallowRef, watch } from 'vue'
     * @param {number} time
/*
        if (url.protocol === 'sabr:') {
    }

        player.addEventListener('adaptation', updateQualityStats)
    /**

          if (event.shiftKey) {
            manifestPreprocessorTXml: manifestPreprocessorTXml
      type: Boolean,
    },
          return new LegacyQualitySelection(
      events.addEventListener('setFullWindow', (/** @type {CustomEvent} */ event) => {
      if (newTime > videoEnd || Math.abs(videoEnd - newTime) < 1) {
      configureUI(true)
        // destroying the ui also destroys the player
      const localPlayer = new shaka.Player()
    /**

      if (props.format === 'dash' || props.format === 'audio') {
  CAPTIONS: KeyboardShortcuts.VIDEO_PLAYER.GENERAL.CAPTIONS,
          const markerDiv = document.createElement('div')
          detail: true
        }
      }
          } catch { }
      const filenameWithExtension = `${filename}.${format}`
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.SMALL_REWIND:
      const video_ = video.value
        // So use the AV1 and h264 codecs instead which it doesn't reject
          // Toggle caption/subtitles
          } else {
        showToast(t('Screenshot Error', { error }))
      if (props.format === 'legacy') {
      localization.insert(shakaLocale, shakaControlKeysToShortcutLocalizations)
          modifiedText = stringBody.replaceAll(/https?:\/\/.+$/gm, hlsProxiedUrlReplacer)

      } catch (err) {
      stopPowerSaveBlocker()

          playbackRates: playbackRates.value,
          },
        }

      }
    }
          }
      const url = new URL(match)
const shakaControlKeysToShortcuts = {

     */
    let player = null
      shakaContextMenu.registerElement('ft_stats', new StatsButtonFactory())
    }
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.LARGE_FAST_FORWARD:
                    handleError(error, 'addTextTrackAsync', caption)
     */
    },
          'ft_full_window',
    'error',
        player.addEventListener('streaming', () => {
    },
      }
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.MUTE:
        navigator.mediaSession.playbackState = 'paused'

      if (process.env.SUPPORTS_LOCAL_API) {

        return
        return
                  undefined, // codec, only needed if the captions are inside a container (e.g. mp4)

        player.cancelTrickPlay()
      if (event.shiftKey && event.key.toLowerCase() === 'p') {
          if (url.hostname.endsWith('.youtube.com') && url.pathname === '/api/timedtext' &&

      }
              return 0
     * @param {KeyboardEvent} event the keyboard event

        emit('skip-to-next')
            updateStats()
          }
    const videoVolumeMouseScroll = computed(() => {
    /**
  translateSponsorBlockCategory
    function handleTimeupdate() {

              } else {
      /** @type {HTMLVideoElement} */
          break
        const volume = parseFloat(sessionStorage.getItem('defaultVolume'))
        /** @type {keyof ErrorCategory} */
    async function setupSponsorBlock() {
      stats.bitrate = (newTrack.bandwidth / 1000).toFixed(2)
        if (filteredVariants.length > 0) {
              dimension = legacyFormat.height > legacyFormat.width ? legacyFormat.width : legacyFormat.height
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.VOLUME_DOWN:

      shakaOverflowMenu.registerElement('ft_full_window', new FullWindowButtonFactory())
      }
        )

    /**
        if (showStats.value) {
    /** @type {import('vue').Ref<HTMLCanvasElement | null>} */
          autoSkip.add(x)
      for (const period of periods) {
        await Promise.all(promises)
        // default audio track
    const defaultPlaybackRate = computed(() => {

    }

      }
            (newTime > 0 && (segment.startTime < newTime || segment.startTime - newTime <= 0.150) && segment.endTime > newTime))) {
    'timeupdate',
      shakaOverflowMenu.registerElement('ft_legacy_quality', null)
            } else {
    }
          markerDiv.style.width = `${((segment.endTime - segment.startTime) / duration) * 100}%`
      handleCanPlay,
    /**
          } else if (oldFormat !== 'legacy') {
        }
          stats.resolution.height = newTrack.height


    const showValueChangePopup = ref(false)
        const codeText = Object.keys(ErrorCode).find((/** @type {keyof ErrorCode} */ key) => ErrorCode[key] === error.code)
     */
    format: {
      }
      sponsorBlockShowSkippedToast,

        audioItag: '',
      }


        // Electron doesn't like YouTube's vp9 VR video streams and throws:
        'av01',
          return new FullWindowButton(fullWindowEnabled.value, events, rootElement, controls)

          },
      if (type === RequestType.SEGMENT) {
          `Code: ${codeText} (${error.code})\n` +

     * @param {number|null} playbackPosition
        // Prioritise variants that are predicted to play:
      container.value.querySelector('.shaka-volume-bar').addEventListener('wheel', mouseScrollVolumeHandler)
    const { locale, t } = useI18n()
      canvas.width = width
    const defaultSkipInterval = computed(() => {
        }


        matches = matches.filter(variant => variant.width === width && variant.height === height)
    // #endregion screenshots
import { KeyboardShortcuts } from '../../../constants'
      // check if the component is already getting destroyed
            if (typeof periodChild !== 'string' && periodChild.tagName === 'AdaptationSet') {
            } else {
      matches.sort((a, b) => isPortrait ? b.width - a.width : b.height - a.height)
          }

    watch(displayVideoPlayButton, (newValue) => {
    function registerFullWindowButton() {
      // which is possible because this function runs asynchronously
        } else {
            video_.currentTime = seekRange.start
          showAudioCodec: false,

    }

    autoplayPossible: {
    /** @type {import('vue').ComputedRef<boolean>} */
      class StatsButtonFactory {
    /**
        showToast(
            })
              counter++
        totalFrames: 0,
            delete request.headers.Range
    }
        case '7':
      // text related errors aren't serious (captions and seek bar thumbnails), so we should just log them
    }
      }

      let elementList = []
      shakaOverflowMenu.registerElement('ft_audio_tracks', new AudioTrackSelectionFactory())
          skippedSegments.push(segment)
    })
          showVideoCodec: false,
    const sponsorBlockShowSkippedToast = computed(() => {
        // video
     * @param {boolean} useAutoQuality
      return store.getters.getDefaultPlayback

        autoShowText: shaka.config.AutoShowText.NEVER,
      registerStatsButton()
            played: 'var(--primary-color)'

    /**

        const currentTime = video.value.currentTime
    function sortAudioAdaptationSetsByBitrate(periods) {

    function handleCanPlay() {

    /**
      bitrate: '0',

          mouseScrollVolume(event)
      default: null

              knownIds.add(id)
  logShakaError,

      return isOffline.value && isBuffering.value

            video_.muted = isMuted
        showValueChange(`${newPlaybackRateString}x`)
            } else {
    // #endregion mouse and keyboard helpers

      height: playerHeight.value
      }
          let counter = 0

     * @param {MouseEvent} event
      } else {
        let sponsorVal = {}
            skippedSponsorBlockSegments.value.push({
          return new StatsButton(showStats.value, events, rootElement, controls)
      if (useSponsorBlock.value && sponsorBlockSegments.length > 0) {
     * @param {string} context
            event.preventDefault()
        const width = matches[0].width
          video_.paused ? video_.play() : video_.pause()


        create(rootElement, controls) {


        showValueChange(`${defaultPlaybackRate.value}x`)
          }
        create(rootElement, controls) {
      }
     * @param {{
        repairInvidiousManifest(periods)
        detail: {
        events.dispatchEvent(new CustomEvent('setAutoplay', {
      }
            showOverlayControls()
          }
      shakaControls.registerElement('ft_theatre_mode', new TheatreModeButtonFactory())
      const newTime = currentTime + seconds
      return video.value.currentTime
                }
            event.preventDefault()
      }))
    /**
    /** @type {import('vue').Ref<HTMLDivElement | null>} */
          duration = sponsorBlockAverageVideoDuration
      } else {
    },
     *
    function fullscreenChangeHandler() {
      return parseInt(store.getters.getMaxVideoPlaybackRate)
      default: false
  removeFromArrayIfExists,
  showToast,


        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.VOLUME_UP:
  PLAY: KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.PLAY,
    function mouseScrollVolume(event) {
          // Toggle stats display
        sponsorBlockSegments = segments
          ?.sort((

      }
      }

          let dimension

                  }
      // allow chapter jump keyboard shortcuts
        }
      /** @type {SponsorBlockCategory[]} */
        if (url.protocol !== 'sabr:' && url.hostname.endsWith('.googlevideo.com') && url.pathname === '/videoplayback') {
      const dist = frameTime * step
        }
    }

        newTime = videoEnd

            startNextVideoInFullwindow: fullWindowEnabled.value,
            }
            modifiedText = new TextDecoder().decode(response.data)
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.PLAY:
        playbackRates.unshift(i)
        // as sessionStorage stores string values which are truthy by default so we must check with 'true'
          // Fix positioning for auto-generated subtitles
                if (label) {
                  text = text.replaceAll(/ align:start position:(?:10)?0%$/gm, '')
        await ui.destroy()
    startTime: {
        showValueChange(`${formattedSeconds}s`, popUpLayout.icon, popUpLayout.invertContentOrder)
      /** @type {string[]} */

          if (showStats.value) {
    }
     * @param {string} direction the direction of the jump either previous or next
        if (wasPaused) {
    }
        let modifiedText
    const pipWindowHeight = ref(null)
          'ft_screenshot',
          }
          (segment.startTime <= currentTime ||
import {
        if (url.searchParams.has('local')) {
    function updateStats() {
      // which is possible because this function runs asynchronously
          response.headers = redirectResponse.headers
            sponsorVal = store.getters.getSponsorBlockMusicOffTopic

      const legacyFormats = props.legacyFormats
    },
      default: false
        videoElement.volume = parseFloat(volume)
        if (!hasLoaded.value) {
        // Touchpad scroll = small deltaX/deltaY
          updateStats()
        chosenVariant = findMostSimilarAudioBandwidth(matches, audioBandwidth)
              }
      pause,

     * @param {boolean} showPopUp Whether to show a pop-up with the seconds seeked
    /**
            `.${format}`,
            (child.attributes.contentType === 'audio' || child.attributes.mimeType.startsWith('audio/')))
      if (mpdNode.attributes.type === 'dynamic') {
        ((process.platform !== 'darwin' && event.ctrlKey) ||
        removeFromArrayIfExists(uiConfig.overflowMenuButtons, 'toggle_stereoscopic')
        configureUI()
    const displayVideoPlayButton = computed(() => {
        // If we don't add a little bit of a delay, we get presented with a loading symbol every 5 seconds,
    }
            video_.currentTime = (props.chapters[props.currentChapterIndex + 1].startSeconds)
        }
            detail: !fullWindowEnabled.value
  EXIT_PICTURE_IN_PICTURE: KeyboardShortcuts.VIDEO_PLAYER.GENERAL.PICTURE_IN_PICTURE,

      logShakaError(error, context, props.videoId, details)

      let filename
        return previousQuality === isPortrait ? variant.width : variant.height

          return new SkipButton(events, rootElement, controls, 'previous')
    function handleControlsContainerWheel(event) {
          break
          stats.resolution.width = newTrack.width
                  const filteredVariants = variants.filter(variant => variant.audioRoles.includes('main'))


        sabrAbortController?.abort()
            const length = seekRange.end - seekRange.start
    function gatherInitialStatsValues() {

        stats.codecs.audioItag = newTrack.originalAudioId.split('-', 1)[0]

        return
        })
        console.error(error)
      let fileValue
            startNextVideoInPip: controls.isPiPEnabled()
      try {
    })
        case '0':
      class TheatreModeButtonFactory {
          video_.currentTime = seekRange.end
        emit('error', error)
    // #region setup
        // it doesn't like the range param and makes get requests to youtube anyway


      handleEnterPictureInPicture,
        canvas.remove()

            const percentage = parseInt(event.key) / 10

                return 0

        sabrAbortController.abort()
            if (controls.isPiPAllowed()) {
            .find(child => typeof child !== 'string' && child.tagName === 'Representation').attributes.codecs
      })
        ]
        // only set this to label when we actually have labels, so that the warning doesn't show up
          if (videoPlaybackRateMouseScroll.value) {
                'captions',
        } else {
      if (process.env.IS_ELECTRON) {
        if (restoreCaptionIndex_ !== null) {
          }))
              if (hasMultipleAudioTracks.value) {

      if (event.ctrlKey && (process.platform === 'darwin' || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight'))) {
    function resized(entries) {
          previousQuality = defaultQuality.value
    })
          }
      player.addEventListener('loading', () => {
          matches.sort((a, b) => b.bitrate - a.bitrate)
       *     color: string,

          initialLoadDelayMs,
      // At the time of writing "et", "eu", "gl", "is" don't have any translations
      }
          mouseScrollVolumeThrottle(event)
    'toggle-autoplay',

      const { start, end } = player.seekRange()



        // for manual changes e.g. in quality selector
    const stats = reactive({
    function registerAudioTrackSelection() {

      default: false
          await player.setTextTrackVisibility(false)


     * @param {WheelEvent} event
      const periods = mpdNode.children?.filter(child => typeof child !== 'string' && child.tagName === 'Period') ?? []
    function handlePlay() {
          }
        showToast(
     */

      // title overlay when the video is fullscreened
      }
        if (sponsorVal.skip === 'autoSkip') {
        try {
    })
      handleEnded,
          ignoreErrors = false
      }
          // Jump to percentage in the video
      /**
        }

    async function takeScreenshot() {
        return {}
          ) => {
          seekBySeconds(-defaultSkipInterval.value * player.getPlaybackRate() * 2, false, true)
      return store.getters.getScreenshotFormat
      class SkipPreviousButtonFactory {
        console.error(`Parse failed: ${err.message}`)
          const requestOperation = player.getNetworkingEngine().request(type, redirectRequest, context)
          disableVideo: format === 'audio',
            const controls = ui.getControls()
     */
    /** @type {import('vue').ComputedRef<boolean>} */
        'ft_skip_previous',
          event.preventDefault()
        })

     * @param {string} message - The message to display.
    }

        ui.configure(uiConfig.value)
      const video_ = video.value
      pipWindowHeight.value = null
          }
          } else {
      canvas.getContext('2d').drawImage(video_, 0, 0)
    let valueChangeTimeout = null
     * @param {'dash'|'audio'|'legacy'} format

    function mouseScrollVolumeHandler(event) {

      controls.addEventListener('uiupdated', addUICustomizations)


    captions: {
            activeLegacyFormat.value,
    if (process.env.SUPPORTS_LOCAL_API && props.sabrData) {
        'play_pause',
      // TODO: consider only emitting when the severity is crititcal?

            showOverlayControls()
                    caption.mimeType,
    watch(activeLegacyFormat, updateLegacyQualityStats)
            const seekRange = player.seekRange()
          }
        if (Math.abs(event.deltaX) <= 5 && Math.abs(event.deltaY) <= 5) {

          video_.pause()
        forceAspectRatio.value = firstFormat.width / firstFormat.height < 1.5
          },
      if (onlyUseOverFlowMenu.value) {
    /** @type {ResizeObserverCallback} */
      if (!(canSeekResult || canSeek())) {
        }
    const pipWindowWidth = ref(null)
          }
    },
        if (ui.getControls()) {

      if (videoResizeObserver) {
        window.ftElectron.requestPiP()
     * it won't be finished in time, as the player destruction is asynchronous.
          return quality > (isPortrait ? variant.width : variant.height)

        categoryData[x] = sponsorVal
    function createSponsorBlockMarkers(duration) {
          // response.
     *   category: SponsorBlockCategory
        // don't react to multiple consecutive errors, otherwise we don't give the format fallback from the previous error a chance to work
    }
      }

      hasLoaded,
  Mapping of Shaka localization keys for control labels to FreeTube shortcuts.
     * @param {boolean} firstTime
          // Interpret the response data as a URL string.

          streaming: {
    }
          await store.dispatch('cachePlayerLocale', shakaLocale)
          : { icon: 'arrow-left', invertContentOrder: false }
            }
    })
      const fullscreenTitleOverlay = document.createElement('h1')

        Object.assign(firstTimeConfig, uiConfig.value)
        if (event.ctrlKey || event.metaKey) {
      } else if (player) {

          props.format === 'legacy' ? 'ft_legacy_quality' : 'quality',
        }


        configureUI()
          return new ScreenshotButton(events, rootElement, controls)


      if (!hasLoaded.value) {
        })
      window.addEventListener('beforeunload', stopPowerSaveBlocker)
        },
          break
        uiConfig.controlPanelElements.push('overflow_menu', 'fullscreen')
        updateQualityStats({
    function changeVolume(step) {
     */
                  if (filteredVariants.length > 0) {
        /** @type {HTMLDivElement} */
      if (matches.length === 0) {
      shakaContextMenu.registerElement('ft_stats', null)
          modifiedText = modifiedText.replaceAll('/file/seg.ts', '/file/seg.aac')

            if (track.label) {
        create(rootElement, controls) {
     * it also checks that the approprate combination was used ALT/OPTION on macOS and CTRL everywhere else
                  // position:0% for LTR text and position:100% for RTL text
          if (props.format !== 'audio') {

          // Toggle Play/Pause
          event.preventDefault()
      const seekRange = player.seekRange()
    // #endregion request/response filters

    const useSponsorBlock = computed(() => {
       * Handles changing between formats. It tries its best to backup and restore the settings:
      }
        if (isLive.value) {
        createChapterMarkers()
      } else {
          ignoreErrors = false
        } else {
            const firstVariant = player.getVariantTracks()[0]
    title: {
              timeout: 30 * 1000,
        }
      seekBySeconds(dist, true)

    // #region set quality

        }

      if (newValue !== oldValue) {
      if (newValue <= 0) {
          // Decrease playback rate by user configured interval

        } catch (error) {
          if (oldFormat === 'audio' && newFormat === 'dash' && !useAutoQuality) {
    const videoElementWidth = ref(0)
          break
            'pictures'
    })

      const seekRange = player.seekRange()
     * @param {WheelEvent} event
          'Data', error.data
      if (sessionStorage.getItem('muted') === 'false' && video_.volume === 0) {
      shakaControls.registerElement('ft_screenshot', null)
    currentChapterIndex: {
          markerDiv.title = translateSponsorBlockCategory(segment.category)
      videoElement.playbackRate = props.currentPlaybackRate
    let ui = null
    watch(
     *   type: ('adaptation'|'variantchanged'),
      if (event.shiftKey && event.key === '?') {
    }
    }

      stats.buffered = ((bufferedSeconds / duration) * 100).toFixed(2)
      await setLocale(locale.value)

            }
    }
    /**



        emit('playback-rate-updated', player.getPlaybackRate())
          ({ remainingMs }) => {
        })
          seekBySeconds(defaultSkipInterval.value * player.getPlaybackRate() * 2, false, true)
    }
      if (restoreCaptionIndex !== null) {

          rebufferingGoal: 0.02,

     */
      showOfflineMessage,
      }
    })
          }
      let chosenVariant
            sponsorVal = store.getters.getSponsorBlockIntro

        player = null
        }, {

     */
      } catch (error) {

    function sortAdapationSetsByCodec(periods) {
          break
          previousQuality = Infinity
    const enableScreenshot = computed(() => {

            event.preventDefault()
          // Increase volume

/** @typedef {import('../../helpers/sponsorblock').SponsorBlockCategory} SponsorBlockCategory */
        }
          }

            )

      showValueChangePopup.value = true
        const { format, playbackPosition, restoreCaptionIndex: restoreCaptionIndex_ = null } = event.detail
      })
      sabrStream.onBackoffRequested(debounce(({ backoffMs }) => {
    function showValueChange(message, icon = null, invertContentOrder = false) {
    }
      if (newTrack.videoCodec?.includes(',')) {
        showValueChangePopup.value = false
        (direction === 'previous' ? currentChapter > 0 : props.chapters.length - 1 !== currentChapter) &&
        }

          } catch { }
          stats.codecs.videoCodec = newTrack.videoCodec
        }
          response.data = redirectResponse.data
          }
        switch (x) {
          // So that we don't see last countdown text like 0/N
      }
            sponsorVal = store.getters.getSponsorBlockFiller
      for (const [key, value] of url.searchParams) {
    /**
            // use seek range instead of duration so that it works for live streams too
      default: ''
        )
            showOverlayControls()

        // If video is muted by dragging volume slider, it doesn't change 'muted' in sessionStorage to true

          },
    const enterFullscreenOnDisplayRotate = computed(() => {

    storyboardSrc: {


          try {
      // placing this inside the controls container so that we can fade it in and out at the same time as the controls
     * @returns {Promise<{ startNextVideoInFullscreen: boolean, startNextVideoInFullwindow: boolean, startNextVideoInPip: boolean }>}
      default: false
        // otherwise 'false' will be returned as true as well
          if (canSeek()) {
        })
        classList.contains('shaka-play-button') ||
        } else {
      registerSkipButtons()
          'ft_screenshot',
                  await player.addTextTrackAsync(
      const currentChapter = props.currentChapterIndex
    function requestFilter(type, request, _context) {
            // Jump to the previous chapter
     */

        emit('timeupdate', currentTime)
        return false
          playerTime: video_.currentTime,
          break
       *   title: string,
      // These two errors are just wrappers around another error, so use the original error instead

     * }[]}
      })
        video.value.ui = null
      valueChangeMessage.value = message

          once: true
    if (store.getters.getEnableSubtitlesByDefault && props.captions.length > 0) {
      }
              // Use auto as we don't know what resolution to pick
              uuid,
        player.getNetworkingEngine().registerRequestFilter(requestFilter)
      })
      canvas.height = height

       * @param {'dash'|'audio'|'legacy'} newFormat
    function handleControlsContainerClick(event) {
        period.children
      class SkipNextButtonFactory {
     */
      if (showPopUp) {
          // Toggle full window mode
  throttle,
          'recenter_vr',

    function canSeek() {
     */
        'avc1'
          seekBarColors: {
        createChapterMarkers()
        }} */
        showStats.value = event.detail

        }
      } else if (newTime > seekRange.end) {
        const markerBar = seekBarContainer.firstElementChild
      // shaka-player doesn't start with the cursor hidden, so hide it here for instances in which the
      // Combined audio and video HLS streams
      if (!useVrMode.value) {
    sabrData: {
      }
     * @param {boolean} invertContentOrder - Whether to invert the order of the icon and message.


  EXIT_FULL_SCREEN: KeyboardShortcuts.VIDEO_PLAYER.GENERAL.FULLSCREEN
    // #endregion settings

          try {

// The UTF-8 characters "h", "t", "t", and "p".
          mouseScrollSkip(event)
          addSeekBar: seekingIsPossible.value,
      }
        // format switch happened before the player loaded, probably because of an error
    })
      }
        video_.currentTime = newTime
      return match != null && parseInt(match[1] || '0') > 30
     *   oldTrack: shaka.extern.Track
                player.selectVariantsByLabel(label)
            // Fast-Forward by the time-skip interval (in seconds)
      const height = video_.videoHeight
      if (hasLoaded.value && props.chapters.length > 0) {
      controlsContainer.appendChild(fullscreenTitleOverlay)
      } else {
        // force the player aspect ratio to 16:9 to avoid overflowing the layout, when the video is too tall
    watch(videoSkipMouseScroll, (newValue, oldValue) => {
          // Toggle theatre mode
          const arrayBuffer = await blob.arrayBuffer()
              if (a.tagName === 'AudioChannelConfiguration' && b.tagName !== 'AudioChannelConfiguration') {
    /**
                .catch(error => handleError(error, 'addTextTrackAsync', caption))
      type: String,
        video_.muted = false
     */
        }

          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

      // cursor is in the video player area when the video first loads
}
        } else {
        enableFullscreenOnRotation: newValue
       * - audio track
      const codecsMatch = mimeType.match(/codecs="(?<videoCodec>.+), ?(?<audioCodec>.+)"/)
            }
       */
      )
          break

     */

        create(rootElement, controls) {
      }
    }
        return
      type: Number,
    /** @type {import('vue').ComputedRef<boolean>} */
    onUnmounted(() => {
          return
            event.preventDefault()
    /**
        }
    function seekBySeconds(seconds, canSeekResult = false, showPopUp = false) {
          } else {
      cleanUpCustomPlayerControls()
        'ac-3',
      registerFullWindowButton()
          case 'filler':


      required: true
      if (Math.abs(event.deltaX) <= 5 && Math.abs(event.deltaY) <= 5) {
        videoElement.muted = (muted === 'true')
              skippedSponsorBlockSegments.value.splice(index, 1)
    window.addEventListener('offline', offlineHandler)
                  }
          video_.play()
      }
    async function performFirstLoad() {
  writeFileWithPicker,
    }
        emit('skip-to-prev')
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.FULLWINDOW:
        video.value.defaultPlaybackRate = newValue
      stats.resolution.width = width
    watch(enterFullscreenOnDisplayRotate, (newValue) => {
        sessionStorage.setItem('muted', String(muted))

    /**
          'picture_in_picture',
    'player-reload-requested',

            filenameWithExtension,
        seekBarContainer.insertBefore(markerBar, seekBarContainer.firstElementChild)

          skipSponsorBlockSegments(currentTime)
      const video_ = video.value
          (process.platform === 'darwin' && event.metaKey))
    // #region seek bar markers
        createSponsorBlockMarkers(averageDuration)

              }
    watch(videoVolumeMouseScroll, (newValue, oldValue) => {
    // #region keyboard shortcuts
        'preview',
              timeoutId: setTimeout(() => {
    function updateQualityStats({ newTrack }) {
      } else {
              controls.togglePiP()
          if (video_.paused) {
        }
            promises.push(
                  // default audio track
            if (url.hostname.endsWith('.youtube.com') && url.pathname === '/api/timedtext' &&
      if (useSponsorBlock.value && sponsorSkips.value.seekBar.length > 0) {

     * Workaround that makes the player select high-quality audio.

        bufferedSeconds += end - start
              setDashQuality(defaultQuality.value)
      document.removeEventListener('keydown', keyboardShortcutHandler)
            }
          }
      let variants = player.getVariantTracks()
      return parseFloat(store.getters.getVideoPlaybackRateInterval)
      }
       *   timestamp: string,
      })
  MUTE: KeyboardShortcuts.VIDEO_PLAYER.GENERAL.MUTE,
        chosenVariant = matches[0]
      })
    return {


} from '../../helpers/player/utils'
        event.preventDefault()
      buffered: '0',

      const skippedSegments = []
      fullscreenTitleOverlay.textContent = props.title
    }
      skippedSponsorBlockSegments.value.forEach(segment => clearTimeout(segment.timeoutId))

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
          null,
        loadedLocales.add(shakaLocale)

        case 'escape':

        const [audioCodec, videoCodec] = newTrack.videoCodec.split(',')
        case '8':
    }
        video_.volume = 0


      class LegacyQualitySelectionFactory {
    'ended',
      }
        }
        vrCanvas.value
      }
        markers.forEach(marker => markerBar.appendChild(marker))
    function mouseScrollPlaybackRateHandler(event) {
      /** @param {shaka.extern.xml.Node} adaptationSet */
        } else {
        create(rootElement, controls) {
      showValueChange(`${Math.round(video.value.volume * 100)}%`, messageIcon)
            }
     * as well as setting the options that we won't change again.
    /**
        case '6':
    },
      default: false
          if (defaultQuality.value !== 'auto') {
        } else {
      type: String,
        if (sponsorVal.skip !== 'doNothing') {
    // the user won't notice anything so we don't need to display the message.

          break


    })

    // #endregion SABR
    }
      const devicePixelRatio = window.devicePixelRatio > 1 ? window.devicePixelRatio : 1
    const hasMultipleAudioTracks = ref(false)
    watch(uiConfig, (newValue, oldValue) => {


     *   startTime: number,
        const video_ = video.value
        const formattedSeconds = +Math.abs(seconds).toFixed(2)
              }, 2000)
       * - playback position
    function offlineHandler() {
      }
    // #region video event handlers
            }
    }
          try {


    /** @type {import('vue').ComputedRef<boolean>} */
        const muted = true
      setCurrentTime,

      })

    function handleEnded() {
        navigator.mediaSession.playbackState = 'none'
    function addMarkers(markers) {
     * @param {string} match
          enabled: useAutoQuality,
      // The provided playback rate (0.05) is not in the supported playback range.
    watch(showStats, (newValue) => {

      shakaOverflowMenu.registerElement('ft_skip_previous', new SkipPreviousButtonFactory())
            break
      if (value === 'auto') { return value }
    })
            break
      window.removeEventListener('beforeunload', stopPowerSaveBlocker)

    watch(defaultSkipInterval, (newValue) => {
              if (label) {
     * @param {number} step
      if (!useSponsorBlock.value) {
    const autoplayVideos = computed(() => {




      if (props.format !== 'audio') {

          const controls = ui.getControls()

        create(rootElement, controls) {

        addBigPlayButton: newValue
      }
      }
        if (defaultQuality.value === 'auto') {
              )
              variants = variants.filter(variant => variant.audioBandwidth === highestBandwidth)

      }
        }
          volumeBarColors: {
    const playerDimensions = computed(() => ({
      if (!loadedLocales.has(shakaLocale)) {
        // some live streams come with subtitles in the DASH manifest, but without labels

      // As they can be nested (e.g. multiple googlevideo redirects because the Invidious server was far away from the user) we should pick the inner most one
        videoElement,
          // if the element already exists, just update the timeout, instead of creating a duplicate
      })

    function canChapterJump(event, direction) {


      }
        player.addEventListener('variantchanged', updateQualityStats)
        }
    // #endregion seek bar markers
        /** @type {Blob} */
      return store.getters.getVideoPlaybackRateMouseScroll
    }

      } catch (e) {


        if (hasLoaded.value) {
    }
     * but Vue 2 doesn't support reactivity on Maps, so we have to use an array instead
     * @param {PictureInPictureEvent} event
      const localization = ui.getControls().getLocalization()
        }
      handlePause,
      shakaControls.registerElement('ft_screenshot', new ScreenshotButtonFactory())
    }
      ) {
      default: false
            events.dispatchEvent(new CustomEvent('setFullWindow', {
        // so it has no way to estimate the bandwidth
      shakaControls.registerElement('ft_audio_tracks', new AudioTrackSelectionFactory())
        mouseScrollPlaybackRate(event)
          }
      const videoEnd = player.seekRange().end
      }
      if (event.shiftKey && event.key.toLowerCase() === 'n') {

    /** @type {import('vue').ComputedRef<string>} */
      if (segments.length > 0) {

        'filler'
      if (!props.theatrePossible) {
          }
              typeof b === 'string' || b.tagName !== 'AdaptationSet') {

      if (props.manifestMimeType !== 'application/x-mpegurl') {
        // Only set it to label if we added the captions ourselves,
        } else if ((event.deltaY > 0 || event.deltaX < 0)) {
      let matches = legacyFormats.filter(variant => {
    }
        }
          if (oldFormat === 'dash') {

            retryParameters: {
        onlyUseOverFlowMenu.value = container.value.getBoundingClientRect().width <= USE_OVERFLOW_MENU_WIDTH_THRESHOLD
    // #region offline message
    }
        if (originalLocalization === '') {
    function updateVolume() {

      }
    async function handleLoaded() {
            break
      }
      type: String,
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, mimeType, imageQuality))
                } else if (variants.length > 1) {
                  const url = `data:${caption.mimeType};charset=utf-8,${encodeURIComponent(text)}`
        // as there are no previous player settings to restore, we should treat it like this was the original format
    async function setLegacyQuality(playbackPosition = null, previousQuality = undefined) {

        if (props.format === 'dash') {
          events.dispatchEvent(new CustomEvent('setFullWindow', {
      }
        'music_offtopic',
      showStats,
import { LegacyQualitySelection } from './player-components/LegacyQualitySelection'
    const isLive = ref(false)
      const shakaLocale = LOCALE_MAPPINGS.get(locale) ?? 'en'
    const mouseScrollThrottleWaitMs = 200


      default: () => ([])
        })
        // stop shaka-player's click handler firing
        return
    })
      for (const { start, end } of buffered) {
    /** @type {import('vue').ComputedRef<boolean>} */
      url.search = ''

    }
      try {
            }
        videoElementWidth.value = video_.clientWidth * devicePixelRatio

    const sponsorSkips = computed(() => {
          break
    // #endregion player locales
            const legacyFormat = activeLegacyFormat.value
      isOffline.value = true
     * @param {object?} details
    startInPip: {
    })
      controlsContainer.removeEventListener('wheel', handleControlsContainerWheel)
    // #region custom player controls
        videoCodec: ''
          // https://github.com/electron/electron/issues/39633
                variants = variants.filter(variant => variant.audioRoles.includes('main'))
      }
     * For all subsequent calls we only want to reconfigure the options that have changed.


        if (Math.abs(event.deltaX) <= 5 && Math.abs(event.deltaY) <= 5) {
      } else {

          const markerDiv = document.createElement('div')
    }
    async function destroyPlayer() {
    watch(defaultPlaybackRate, (newValue) => {
      if (video.value) {
  deduplicateAudioTracks,
        // only when we aren't proxying through Invidious,
          }
        emit('skip-to-prev')
          event.preventDefault()

/** @type {Map<string, string>} */

        const categoryText = Object.keys(ErrorCategory).find((/** @type {keyof ErrorCategory} */ key) => ErrorCategory[key] === error.category)
      const cachedLocales = store.state.player.cachedPlayerLocales
      sponsorCategories.forEach(x => {

    // #region stats
      return store.getters.getSponsorBlockShowSkippedToast
      }
      stats.volume = (video_.volume * 100).toFixed(1)
            // so that we can skip them all in one go (especially useful on slow connections)
     */
            video_.currentTime = seekRange.start + (length * percentage)
      if (container.value) {
        // so we might as well use them
        case '2':
      video.value.currentTime = time

        // Fixes proxied HLS manifests, as Invidious replaces the path parameters with query parameters,
            }
      }

        )
      initLoadWaitTimeToastAC.abort()

        width: 0,

          changeVolume(0.05)

    }
          stats.resolution.frameRate = newTrack.frameRate
          /** @type {shaka.extern.xml.Node[]} */
          }
        player.addEventListener('loaded', () => {

      const video_ = video.value
      let fps
      const currentTime = video_.currentTime
          restoreCaptionIndex = restoreCaptionIndex_
      })
          if (!modifiedText) {

          }

        // If volume isn't muted by dragging the slider, muted and volume values are carried over to next video.

        emit('player-reload-requested')
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.HOME:
        'mp4a',
      controlsContainer.removeEventListener('click', handleControlsContainerClick, true)
          await performFirstLoad()
                }

      default: () => ([])
    }
        'interaction',
    })
          date: new Date(),
          uiState = {
  },
        navigator.mediaSession.playbackState = 'none'

    /**
                  chosenVariant = variants.reduce((previous, current) => {
          // This only affects the "auto" quality, users can still manually select whatever quality they want.
      if (!ui || !player) {


          }
      }
            return t('Video.Watch.Remaining SABR backoff time: {remindingTimeSeconds}s', { remindingTimeSeconds: +(remainingMs / 1000).toFixed(1) })

    }
        videoElementHeight.value = video_.clientHeight * devicePixelRatio
          if (!event.metaKey && video_.paused) {
          ui.getControls().toggleFullScreen()
      /** @type {HTMLDivElement} */
        elementList = uiConfig.overflowMenuButtons

          await player.load(props.manifestSrc, props.startTime, props.manifestMimeType)
const { Severity: ErrorSeverity, Category: ErrorCategory, Code: ErrorCode } = shaka.util.Error
    })
      stats.bitrate = (bitrate / 1000).toFixed(2)
          newTrack: player.getVariantTracks().find(track => track.active)
          if (enableScreenshot.value && props.format !== 'audio') {

    function handleError(error, context, details) {
      // This has to be called after creating the UI, so that the player uses the UI's UITextDisplayer
        }
          'fullscreen'

                // default audio track
    function showOverlayControls() {
const TrackLabelFormat = shaka.ui.Overlay.TrackLabelFormat
        }
      player.configure(getPlayerConfig(props.format, defaultQuality.value === 'auto'))
    function mouseScrollSkip(event) {
          player.trickPlay(newPlaybackRate, false)

    function cleanUpCustomPlayerControls() {


    function registerAutoplayToggle() {
      }
            video_.currentTime = seekRange.end
      // Skip to previous video in playlist
          return new SkipButton(events, rootElement, controls, 'next')
    // #endregion SponsorBlock
        if (textTrack) {

      localization.changeLocale([shakaLocale])
            frameByFrame(-1)
    watch(() => props.autoplayEnabled, (newValue, oldValue) => {
        hasLoaded.value = false
       * - paused state
      shakaOverflowMenu.registerElement('ft_screenshot', new ScreenshotButtonFactory())
      return store.getters.getScreenshotAskPath
          const stringBody = new TextDecoder().decode(response.data)
      events.dispatchEvent(new CustomEvent('setLegacyFormat', {
        emit('toggle-autoplay')
    // #region settings
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.LAST_FRAME:
    const isBuffering = ref(false)
          response.data = new TextEncoder().encode(modifiedText).buffer


        window.ftElectron.stopPowerSaveBlocker()
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.END:
        return
      }
      default: 0
          streaming: {

      resolution: {
          )
      emit('ended')
      }
        filename = await store.dispatch('parseScreenshotCustomFileName', {
          let label
        } catch (error) {
          if (oldFormat === 'legacy' && newFormat === 'dash') {
        stats.codecs.audioItag = ''
        const localizationWithShortcut = addKeyboardShortcutToActionTitle(

            // if we already have a segment to skip, check if there are any that are less than 150ms later,
    let sponsorBlockAverageVideoDuration = 0
                caption.label
          } else {
      }
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.PICTURE_IN_PICTURE:
       * @type {{
      }
       * }[]}
     * Shows a popup with a message and an icon on top of the video player.
    /** @type {import('vue').ComputedRef<boolean>} */
        } else {
    },
    function getPlayerConfig(format, useAutoQuality = false) {
     * For the first call we want to set initial values for options that may change later,
    /**

        localPlayer,
          let audioBandwidth
        }
      ]
      bandwidth: '0',
            showValueChange(message, messageIcon)
      pipWindowHeight.value = pipWindow.height * devicePixelRatio
      shakaControls.registerElement('ft_audio_tracks', null)
      if (props.format === 'audio' || !canSeek()) {
            retryParameters: {
        removeFromArrayIfExists(elementList, 'picture_in_picture')
      if (props.format !== 'legacy') {
            break
    function startPowerSaveBlocker() {
    const mouseScrollPlaybackRateThrottle = throttle(mouseScrollPlaybackRate, mouseScrollThrottleWaitMs)
        player.configure({

    function handleEnterPictureInPicture(event) {

      })

            seekBySeconds(defaultSkipInterval.value * player.getPlaybackRate(), false, true)

                  chosenVariant = findMostSimilarAudioBandwidth(variants, audioBandwidth)
          if (videoVolumeMouseScroll.value) {

    function stopPowerSaveBlocker() {
      shakaControls.registerElement('ft_skip_previous', new SkipPreviousButtonFactory())
          }
          if (request.headers.Range) {
                player.selectVariantTrack(chosenVariant)
      if ('mediaSession' in navigator) {
      const frameTime = 1 / fps

      }
    /**
        markerBar.className = 'markerContainer'
     *
            break
        'selfpromo',

      if (props.format !== 'legacy') {
     */
          // Jump to beginning of video

              dimension = defaultQuality.value
      return uiState
      }


      /** @type {SponsorBlockCategory[]} */
      shakaOverflowMenu.registerElement('ft_legacy_quality', new LegacyQualitySelectionFactory())
                try {
  addKeyboardShortcutToActionTitle,
      }
          'captions',
        stopPowerSaveBlocker()
                    caption.language,
     * @type {import('vue').Ref<{uuid: string, translatedCategory: string, timeoutId: number}[]>}
          fileValue = value
        }

      ignoreErrors = true
    }
      if (classList.contains('shaka-scrim-container') ||

     */
      } else {

    }

        mouseScrollPlaybackRateThrottle(event)
        container.value,
      // The following error is thrown if you go below 0.07:
        case KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.INCREASE_VIDEO_SPEED_ALT:
    // #region tear down
     * @param {number} duration As the sponsorblock segments can sometimes load before the video does, we need to pass in the duration here
    const useVrMode = computed(() => {
          null,
          videoId: props.videoId
    function frameByFrame(step) {
      default: 0
     * @param {KeyboardEvent} event
      const newPlaybackRate = parseFloat(newPlaybackRateString)
        updateLegacyQualityStats(activeLegacyFormat.value)

          }
      }
      events.addEventListener('previousVideo', () => {
          break

      default: null
        'ec-3',
          // Make another request for the redirect URL.
     * @param {shaka.util.Error} error
            const typeA = a.attributes.contentType || a.attributes.mimeType.split('/')[0]
        return
              } else if (a.tagName === 'Representation' && b.tagName === 'Representation') {
     * @param {number} step
            } else {
    // #region UI config
      }
        }
        }
        }

    const hasLoaded = ref(false)
  FULL_SCREEN: KeyboardShortcuts.VIDEO_PLAYER.GENERAL.FULLSCREEN,
    // #region player locales
      if (isLive.value) {
      default: false
        }
    })
        if (sponsorVal.skip === 'promptToSkip') {
       */
            clearTimeout(existingSkip.timeoutId)
      await performFirstLoad()
          return previousQuality > isPortrait ? variant.width : variant.height
        if (videoVolumeMouseScroll.value || videoSkipMouseScroll.value || videoPlaybackRateMouseScroll.value) {

        'ft_skip_next',
        classList.contains('shaka-fast-foward-container') ||
        classList.contains('shaka-rewind-container') ||
      const controlPanelElementsWithSkipButtons = [
        fps = activeLegacyFormat.value.fps
    function onlineHandler() {
      if (video.value) {
      if (!video_.muted) {
        const url = new URL(request.uris[0])
      if ('mediaSession' in navigator) {
        containerResizeObserver = new ResizeObserver(resized)
          const seekRange = player.seekRange()
    const screenshotAskPath = computed(() => {
    /**
          // Modify the original response to contain the results of the redirect
      type: String,
        const textTrack = player.getTextTracks()[index]
        // for abr changes/auto quality
    function keyboardShortcutHandler(event) {

      const seekBar = []

      player.addEventListener('error', event => handleError(event.detail, 'shaka error handler'))
      fullscreenTitleOverlay.className = 'playerFullscreenTitleOverlay'
      const format = screenshotFormat.value
                } else {
      if (newValue !== oldValue && ui) {

      }
       * @implements {shaka.extern.IUIElement.Factory}

    const videoPlaybackRateInterval = computed(() => {
        droppedFrames: 0
      if (!player || !hasLoaded.value) {
          case 'music_offtopic':


      const newPlaybackRateString = (player.getPlaybackRate() + step).toFixed(2)
      }
          }
      if (ui) {

    })

      const autoSkip = new Set()
        ...controlPanelElements.slice(0, 1),
     */
      shakaOverflowMenu.registerElement('ft_skip_previous', null)

        if (!isLive.value && props.storyboardSrc) {
          events.dispatchEvent(new CustomEvent('setFullWindow', {
          event.preventDefault()
     * @param {HTMLDivElement[]} markers
      video_.currentTime = newTime
})

        /** @type {keyof ErrorCode} */
import { SkipButton } from './player-components/SkipButton'
      }
      }
      video.value.pause()

      async (newFormat, oldFormat) => {
              updateQualityStats({
          'toggle_stereoscopic',
        }
          'loop',
     */

      if (props.chapters.length > 0) {
                newTrack: player.getVariantTracks().find(track => track.active)
          controlsContainer.addEventListener('wheel', handleControlsContainerWheel)
            seekBySeconds(-defaultSkipInterval.value * player.getPlaybackRate(), false, true)

        } else {

      if (ui.isMobile()) {
            adaptationSet.children.sort((a, b) => {
            sponsorVal = store.getters.getSponsorBlockRecap
            if (typeB !== 'video' && typeB !== 'audio') {
        return
    const initLoadWaitTimeToastAC = new AbortController()

      if (valueChangeTimeout) {
            // force the player aspect ratio to 16:9 to avoid overflowing the layout
    let restoreCaptionIndex = null
      const controls = ui.getControls()

        messageIcon = 'volume-low'
      if (newValue < 0) {
        return

    const loadedLocales = new Set(process.env.SHAKA_LOCALES_PREBUNDLED)
      document.removeEventListener('keydown', keyboardShortcutHandler)
      destroyPlayer
          } else if (videoSkipMouseScroll.value) {

      stats,

      valueChangeMessage,
const HTTP_IN_HEX = 0x68747470
     */
      if (seekBarContainer.firstElementChild?.classList.contains('markerContainer')) {
      }

    function handlePictureInPictureResize() {
      }
        sessionStorage.setItem('volume', volume.toString())
    async function responseFilter(type, response, context) {
      /**
        } else {
        },

    // #endregion functions used by the watch page
      type: Boolean,
      // Add the keyboard shortcut to the label for the default Shaka controls

            /** @type {shaka.extern.xml.Node | string} */ a,
              let variants = player.getVariantTracks()
        removeFromArrayIfExists(uiConfig.overflowMenuButtons, 'recenter_vr')
          // Rewind by 2x the time-skip interval (in seconds)

          // Add the host parameter so some Invidious instances stop complaining about the missing host parameter
      }

          } catch { }
      codecs: {
      default: 1

            const seekRange = player.seekRange()
              } else if (b.tagName === 'AudioChannelConfiguration' && a.tagName !== 'AudioChannelConfiguration') {
      // check if the component is already getting destroyed


          events.dispatchEvent(new CustomEvent('setStatsVisibility', {
          return new TheatreModeButton(props.useTheatreMode, events, rootElement, controls)
      container.value.classList.add('no-cursor')
      // otherwise it uses the browsers native captions which get displayed underneath the UI controls

        restoreCaptionIndex = null
                    undefined, // codec, only needed if the captions are inside a container (e.g. mp4)
import { FullWindowButton } from './player-components/FullWindowButton'
      events.dispatchEvent(new CustomEvent('localeChanged'))
      default: ''
    }
          adaptationSet.children
    // #endregion video event handlers


    }
      const playbackRates = []

      sabrAbortController = new AbortController()


  ],
       * @implements {shaka.extern.IUIElement.Factory}
            sponsorVal = store.getters.getSponsorBlockOutro

     */
    'toggle-theatre-mode',
            // use seek range instead of duration so that it works for live streams too
            showOverlayControls()
    const events = new EventTarget()

          'ft_audio_tracks',
        const wasPaused = video_.paused
        case 'spacebar': // older browsers might return spacebar instead of a space character
      const controlsContainer = ui.getControls().getControlsContainer()
          return new AutoplayToggle(props.autoplayEnabled, events, rootElement, controls)
        if (newPlaybackRate === defaultPlaybackRate.value) {
      updateStats()
      )
          droppedFrames: playerStats.droppedFrames,
          const redirectRequest = shaka.net.NetworkingEngine.makeRequest(uris, retryParameters)
    'skip-to-next',
          restoreCaptionIndex = activeCaptionIndex
          if (canChapterJump(event, 'next')) {



    let startInFullscreen = props.startInFullscreen
          const retryParameters = player.getConfiguration().streaming.retryParameters
import { ScreenshotButton } from './player-components/ScreenshotButton'

            if (useAutoQuality) {
      }
      return store.getters.getDefaultSkipInterval
        volumeBar.value = 0
    },
        }))
        if (matches.length > 0) {
                caption.language,
      for (const period of periods) {
      } else if (type === RequestType.MANIFEST && context.type === AdvancedRequestType.MEDIA_PLAYLIST) {
        const volume = video_.volume
          backoffMs,
        startInFullscreen = false
      pipWindow.removeEventListener('resize', handlePictureInPictureResize)
    function handlePause() {
          'Recoverable network error retrying...\n' +
      }
     * Yes a map would be much more suitable for this (unlike objects they retain the order that items were inserted),
          if (event.shiftKey) {
      if (sponsorBlockShowSkippedToast.value) {
      }
          mouseScrollSkipThrottle(event)
      hasLoaded.value = true

      // skip to next video button
      }
      /**

      skippedSponsorBlockSegments,
        'time_and_duration',
          'ft_autoplay_toggle',
            break
        const playbackPosition = video_.currentTime
      window.removeEventListener('offline', offlineHandler)
import store from '../../store/index'
    const valueChangeIcon = ref(null)
        !(error.code === shaka.util.Error.Code.BAD_HTTP_STATUS && error.data[0].startsWith('https://www.youtube.com/api/timedtext'))
      events.addEventListener('setStatsVisibility', (/** @type {CustomEvent} */ event) => {

        ui.configure(firstTimeConfig)
      })
                  caption.language,
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler)
        if (!wasPaused) {
      }

        containerResizeObserver = null
          markerDiv.className = 'chapterMarker'
     * (e.g. {@linkcode events}, {@linkcode fullWindowEnabled}) can get garbage collected
      const match = props.manifestSrc.match(/\/(?:manifest|playlist)_duration\/(\d+)\//)
      while (i <= maxVideoPlaybackRate.value) {

      }

    startInFullscreen: {
          }))
        }


      return store.getters.getAutoplayVideos

        }
      const video_ = video.value
        // YouTube uses a 12 second delay on the official website for normal streams
            if (defaultQuality.value !== 'auto') {
            'player-screenshots',
    /** @type {import('vue').ComputedRef<number>} */
          'playback_rate',
        player.configure({
      shakaOverflowMenu.registerElement('ft_full_window', null)
      if (seekRange.start === seekRange.end || !seekingIsPossible.value) {
    const showStats = ref(false)
            startNextVideoInFullscreen: controls.isFullScreenEnabled(),
      registerTheatreModeButton()
      frames: {
                let chosenVariant
    // #endregion setup
      width: playerWidth.value,
      const volume = sessionStorage.getItem('volume')
      shakaControls.registerElement('ft_skip_previous', null)
      if (startInPip && props.format !== 'audio' && ui.getControls().isPiPAllowed() && process.env.IS_ELECTRON) {


    }
        case KeyboardShortcuts.VIDEO_PLAYER.GENERAL.CAPTIONS:
