import SearchPage from '../views/SearchPage/SearchPage.vue'
      },
      name: 'profileSettings',
      },
    })
import Subscriptions from '../views/Subscriptions/Subscriptions.vue'
    {
      path: '/settings/profile',
          component: Trending
        title: 'About'
import Settings from '../views/Settings/Settings.vue'
const router = createRouter({
      },
      component: UserPlaylists
    {
import About from '../views/About/About.vue'
      component: SearchPage
    {
    }

    },
    },
import Popular from '../views/Popular/Popular.vue'
      name: 'subscriptions',
      component: Post
          path: '/trending',
        title: 'Your Playlists'
      meta: {
      meta: {
      path: '/hashtag/:hashtag',
        title: 'Subscriptions'
      },
      setTimeout(() => {
      }, 500)
          },
      component: SubscribedChannels
    },
      component: About
        title: 'Subscriptions'
      path: '/subscribedchannels',
      },
      path: '/about',
      meta: {
        title: 'Channel'
import UserPlaylists from '../views/UserPlaylists/UserPlaylists.vue'
      component: Channel
          resolve({ left: 0, top: 0 })
        title: 'Watch'
  ],
      },
  routes: [
      ? [{

      meta: {
      name: 'history',
        title: 'Post',
    {
          meta: {
      },
    ...(process.env.SUPPORTS_LOCAL_API
  scrollBehavior(to, from, savedPosition) {
import SubscribedChannels from '../views/SubscribedChannels/SubscribedChannels.vue'
      },
      },
      },
      name: 'settings',
      component: History
      },
        }]
import Channel from '../views/Channel/Channel.vue'
import ProfileSettings from '../views/ProfileSettings/ProfileSettings.vue'
      component: Subscriptions
import Watch from '../views/Watch/Watch.vue'
    },
      path: '/search/:query',
      component: ProfileSettings
            title: 'Trending'
      meta: {
import Trending from '../views/Trending/Trending.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
      path: '/popular',
      name: 'about',
    {
    {
    {
        }
    {
      name: 'userPlaylists',
      meta: {
        title: 'Settings'
      name: 'subscribedChannels',
    {
})
        if (savedPosition !== null) {
    },
        title: 'History'
      : []),
      path: '/userplaylists',
      path: '/settings',
      component: Settings
      component: Popular
    },
    {
      component: Watch
export default router
  }
      meta: {
          name: 'trending',
      path: '/channel/:id/:currentTab?',
      path: '/subscriptions',
    },
      path: '/history',
    {
      component: Hashtag
      path: '/post/:id',
      meta: {
    {
import Hashtag from '../views/Hashtag/Hashtag.vue'
        title: 'Most Popular'
      name: 'default',
      meta: {
      meta: {
      path: '/',
      component: Playlist
      },
      meta: {
      meta: {
      component: Subscriptions
          resolve(savedPosition)
      path: '/playlist/:id',
  history: createWebHashHistory(),
    },
      meta: {
        title: 'Search Results'
      path: '/watch/:id',
    },
      name: 'popular',
import Playlist from '../views/Playlist/Playlist.vue'
        } else {
import History from '../views/History/History.vue'
      meta: {
      },
        title: 'Channels'
      },
        title: 'Playlist'
      },
    },
    return new Promise((resolve, reject) => {
    },
      meta: {
    {
    },
        title: 'Hashtag'
    {
    },
    },
import Post from '../views/Post.vue'
        title: 'Profile Settings'
    {
