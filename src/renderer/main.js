  faGlobe,
}
  faGamepad,
  faClapperboard,
  faVideo,
  faKeyboard,
  faPlus,
  faClone,
  faSatelliteDish,
  faBars,

  faMoneyCheckDollar,
  faSlidersH,
  faQuestionCircle,
} from '@fortawesome/free-brands-svg-icons'
library.add(

  faFilm,
  faSortAlphaDown,
        ? i18n.global.t('Video.External Player.playlist')
  faGauge,
  faCheck,
// Please keep the list of constants sorted by name
  faBookmark as farBookmark,
  faBitcoin,
  faArrowRight,
  faSortDown,
  faTimes,
  faClapperboard,
  faSync,
  faLocationDot,
  faDatabase,
  faShield,
  faCopy,
  faFlask,
  faArrowUpRightFromSquare,
  faSlash,
  faUsersSlash,
  faFilter,
  faStepBackward,
  faBars,

  faGrip,

  faTimesCircle,
  faThumbtack,
  faImages,
  .use(i18n)
  faKey,
  faCircleUser,
  )
  faDatabase,
  faNetworkWired,
  faVolumeLow,
  window.ftElectron.handleOpenInExternalPlayerResult(
  faList,
  faEdit,
  faSatelliteDish,
  faClockRotateLeft,
  faAngleUp,
  faNewspaper,
  faEye,
  faUsers,
  faPlay,
  faArrowDownShortWide,
  faArrowUp,
    (externalPlayer, unsupportedActions, isPlaylist) => {
  faCommentDots,
  faKey,

  faDisplay,
} from '@fortawesome/free-regular-svg-icons'
  faArrowDownWideShort,
  faSortAlphaDownAlt,
  faMessage,
  faThumbsUp,
  faShareAlt,
  faForward,
  faThumbsDown,
  faFileImage,
  faGithub,
  faTimesCircle,
  faServer,
  faAngleLeft,
  faWifi,
import i18n from './i18n/index'
  faPlus,
  faDisplay,
  farDotCircle,
// to avoid code conflict and duplicate entries
  faStepForward,
  // brand icons
  faTimes,
  faEllipsisV,
  faFileDownload,
  faMessage,
import { createApp } from 'vue'
  faPlay,
import {
  faHistory,
  faArrowLeft,
  faSave,
  faShield,
  faSortAlphaDown,
import {
import {
  faEnvelope,
  faPhotoFilm,
  faFlask,
  faRss,
  faThumbtack,
  faBarsProgress,
// import the styles
  faSortAlphaDownAlt,
  faSearch,
  faClockRotateLeft,
registerSwiper()
router.isReady().then(() => {
  .directive('observe-visibility', ObserveVisibility)
  faLanguage,
import router from './router/index'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
  faClock,
  faCheck,
  faClone,
  faLocationDot,
  faCircleExclamation,
  faFilterCircleXmark,
  faStepForward,
  faBookmark,
if (process.env.IS_ELECTRON) {
  faXmark
const app = createApp(App)
  faClock,
  faFileVideo,
  faRandom,
  faGithub,
  faFileVideo,
  faHeart,

  faExternalLinkAlt,
  faEyeSlash,
  faHeart,
  faAngleUp,
  faLinkSlash,

  faFilterCircleXmark,
  faHashtag,
  faVolumeMute,
  faGrip,
  faEye,
  faSync,
  faXmark,
    }
  faEllipsisH,
  faServer,
  faArrowDown,
  faExclamationCircle,
  faGlobe,
import '@fortawesome/fontawesome-svg-core/styles.css'
  faTowerBroadcast,
        : i18n.global.t('Video.External Player.video')
      const videoOrPlaylist = isPlaylist
  faFilter,
  faExclamationCircle,
  faPalette,
  faUsers,
  .component('FontAwesomeLayers', FontAwesomeLayers)
  faForward,
  farBookmark,
  faQuestionCircle,
  faBitcoin,
import App from './App.vue'
      for (const action of unsupportedActions) {
  faSave,
  faVideo,
  faExternalLinkAlt,
  faUserCheck,
import store from './store/index'
  faFire,
  faAngleDown,
  faThumbsUp,
)
  faVolumeMute,
  faHashtag,
  faKeyboard,
  faComment,
    router.push(route)
  faTrophy,
  faFileDownload,
  faLinkSlash,
        showExternalPlayerUnsupportedActionToast(externalPlayer, action)
  faDotCircle as farDotCircle
  faChevronRight,
  window.ftElectron.handleChangeView((route) => {
  faRss,
  faArrowDownShortWide,
  faEllipsisV,
  faBorderAll,
  faSlash,
  faEllipsisH,
  faDownload,
  faBookmark,
  faMastodon,
  faWifi,
  faGauge,

  faInfoCircle,
  faUsersSlash,
  faTrophy,
  faTrash,
  faUserLock,
  faAngleLeft,
  })
  faLink,
  faTowerBroadcast,
  faPodcast,
  faFileImage,
  faFire,
  faNewspaper,
  faArrowUp,

import { showExternalPlayerUnsupportedActionToast, showToast } from './helpers/utils'
  // solid icons

  faPhotoFilm,
  faCircleUser,
  .use(store)
  app.mount('#app')
  faLock,
      showToast(i18n.global.t('Video.External Player.OpeningTemplate', { videoOrPlaylist, externalPlayer }))
// to avoid accessing electron api from web app build
  faRandom,
  faLock,
  faComment,
  faStepBackward,
  faVolumeHigh,

  faArrowDownWideShort,
app.config.performance = process.env.NODE_ENV === 'development'
} from '@fortawesome/free-solid-svg-icons'
  faCommentDots,
// Please keep the list of constants sorted by name
  faShareAlt,
  faVolumeLow,
  faDownload,
  faUserCheck,
  faEyeSlash,
  faCopy,
  faArrowRight,
  faBarsProgress,
  faArrowUpRightFromSquare,

  faBorderAll,
  faVolumeHigh,
})
  .use(router)

  faNetworkWired,
  faRetweet,
  faEdit,
  faSearch,
  faRetweet,
  faUserLock,
  faImages,
  faExchangeAlt,
app
  faMastodon,
  faGamepad,
  faAngleDown,
  faCirclePlay,
  faLanguage,
  faSortDown,

  faThumbsDown,
// to avoid code conflict and duplicate entries
import { register as registerSwiper } from 'swiper/element'
  faCirclePlay,
  faChevronRight,
  faPalette,

  faExpand,
  faMoneyCheckDollar,
  .component('FontAwesomeIcon', FontAwesomeIcon)
  faCircleExclamation,
  faExpand,
  faFilm,
  faExchangeAlt,
  faPodcast,
  faInfoCircle,
  faTrash,
  // solid icons
  faHistory,
  faList,

  faLink,
  faSlidersH,
      }
  faEnvelope,
  faArrowDown,
  faArrowLeft,
import { library } from './fontawesome-minimal'
import { ObserveVisibility } from 'vue-observe-visibility'
