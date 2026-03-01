        })
import ExperimentalSettings from '../../components/ExperimentalSettings/ExperimentalSettings.vue'
import PasswordSettings from '../../components/PasswordSettings/PasswordSettings.vue'
import GeneralSettings from '../../components/GeneralSettings/GeneralSettings.vue'
    * if it is the lowest section within the top quarter of the viewport (25vh) */
      if (this.settingsSectionSortEnabled) {
      }
        }
          sectionHeading.tabIndex = -1
          title: this.$t('Settings.Theme Settings.Theme Settings'),
    'player-settings': PlayerSettings,
        {
  components: {

                type: 'proxy-settings',
          // TODO: replace with SponsorBlock icon

          : []),
          title: this.$t('Settings.Distraction Free Settings.Distraction Free Settings'),
          type: 'parental-control-settings',
      this.unlocked = true
          icon: 'lock'
        })
    if (this.unlocked) {
        {
      // ensure General Settings is placed first regardless of sorting
      this.handleResize()
        {
  },
    'distraction-settings': DistractionSettings,
      // navigate to section that was open in mobile or desktop view, if any
        const sectionHeight = sectionElement.offsetHeight
        this.navigateToSection(this.settingsSectionTypeOpenInMobile)
        title: this.$t('Settings.General Settings.General Settings'),
    settingsSectionSortEnabled: function () {
        const firstSection = document.getElementById(this.settingsSectionComponents[0].type)
          type: 'subscription-settings',
    },
    },
          'experimental-settings': ExperimentalSettings
      nextTick(() => document.getElementById(openSection)?.focus())
      const scrollY = window.scrollY + innerHeight / 4
        this.handleMounted()
          type: 'theme-settings',
    },
    }
      ? {
        }
        const activeMenuLink = document.querySelector(`.settingsMenu .title.${ACTIVE_CLASS_NAME}`)
    navigateToSection: function(sectionType) {
          title: this.$t('Settings.Player Settings.Player Settings'),
    },
        const sectionTop = sectionElement.offsetTop
    /* Set the current section to be shown as active in the Settings Menu

        },
    'privacy-settings': PrivacySettings,
  },
          icon: 'shield'
const SETTINGS_MOBILE_WIDTH_THRESHOLD = 1015

import ProxySettings from '../../components/ProxySettings/ProxySettings.vue'
    'ft-settings-menu': FtSettingsMenu,

        },
      window.addEventListener('resize', this.handleResize)

          title: this.$t('Settings.Password Settings.Password Settings'),
      return this.$i18n.locale
        {
          type: 'privacy-settings',
    settingsComponentsData: function () {
        ...(process.env.IS_ELECTRON
      document.addEventListener('scroll', this.markScrolledToSectionAsActive)
          icon: 'user-lock'
  mounted: function () {

          return
        }
          : []),
const ACTIVE_CLASS_NAME = 'active'
        const sectionType = activeMenuLink.id
      const settingsComponentsData = [
  name: 'Settings',
    locale: function() {
      return this.$store.getters.getSettingsPassword
    window.removeEventListener('resize', this.handleResize)
          icon: 'database'
        firstSection.classList.add(ACTIVE_CLASS_NAME)
      // mark first section as active before any scrolling has taken place
          type: 'data-settings',
    returnToSettingsMenu: function () {
})
      unlocked: false
        },
          : []),
    'ft-button': FtButton,
          icon: 'key'
      this.settingsSectionTypeOpenInMobile = null
    document.removeEventListener('scroll', this.markScrolledToSectionAsActive)


    ...(process.env.IS_ELECTRON
import ParentalControlSettings from '../../components/ParentalControlSettings.vue'
      })
      'updateSettingsSectionSortEnabled'
      const openSection = this.settingsSectionTypeOpenInMobile
    'theme-settings': ThemeSettings,
          ? [
    },
      const wasNotInDesktopView = !this.isInDesktopView
    },

          icon: 'circle-play'
export default defineComponent({
          sectionHeading.tabIndex = 0
    },
              icon: 'clapperboard'
    ...mapActions([
    'general-settings': GeneralSettings,
            }]
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase(), this.locale)
import DistractionSettings from '../../components/DistractionSettings/DistractionSettings.vue'
      if (this.isInDesktopView) {
              {
import FtToggleSwitch from '../../components/FtToggleSwitch/FtToggleSwitch.vue'
import { defineComponent, nextTick } from 'vue'
      settingsSectionTypeOpenInMobile: null,
      : {})
  },
        },
  },
              type: 'experimental-settings',
      this.isInDesktopView = window.innerWidth > SETTINGS_MOBILE_WIDTH_THRESHOLD
        {
        },
import { mapActions } from 'vuex'
    settingsSectionComponents: function () {

  },
  methods: {
        if (!activeMenuLink) {
      return [generalSettingsEntry, ...settingsSections]
              title: this.$t('Settings.External Player Settings.External Player Settings'),
  },
    'ft-toggle-switch': FtToggleSwitch,
        settingsSections = settingsSections.toSorted((a, b) => {
          title: this.$t('Settings.Subscription Settings.Subscription Settings'),
        ...(process.env.IS_ELECTRON
              title: this.$t('Settings.Experimental Settings.Experimental Settings'),
      // focus the corresponding Settings Menu title

      isInDesktopView: true,
      nextTick(() => {
      this.unlocked = true
          title: this.$t('Settings.Parental Control Settings.Parental Control Settings'),
import SubscriptionSettings from '../../components/SubscriptionSettings/SubscriptionSettings.vue'
    }
        {
import ThemeSettings from '../../components/ThemeSettings.vue'
    markScrolledToSectionAsActive: function() {
  created: function () {
  data: function () {
          type: 'sponsor-block-settings',
    'data-settings': DataSettings,
  }
        },
              icon: 'flask'
    'sponsor-block-settings': SponsorBlockSettings,

      let settingsSections = this.settingsComponentsData
          correspondingMenuLink.classList.remove(ACTIVE_CLASS_NAME)
        {
      }
      })
          sectionElement.scrollIntoView()
    'password-settings': PasswordSettings,
          icon: 'play'
          icon: 'eye-slash'
      }
          'external-player-settings': ExternalPlayerSettings,

          type: 'player-settings',
          correspondingMenuLink.classList.add(ACTIVE_CLASS_NAME)
        icon: 'border-all'
      if (this.settingsSectionComponents.length > 0) {
          const sectionHeading = sectionElement.firstChild.firstChild
            ]
        if (this.isInDesktopView && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        {
          title: this.$t('Settings.Privacy Settings.Privacy Settings'),
  beforeUnmount: function () {
      return this.$store.getters.getSettingsSectionSortEnabled
      ]
          title: this.$t('Settings.SponsorBlock Settings.SponsorBlock Settings'),
      const generalSettingsEntry = {
      }
    'password-dialog': PasswordDialog,
      usingElectron: process.env.IS_ELECTRON,
          sectionHeading.focus()
    },
      } else {
        },
import PlayerSettings from '../../components/PlayerSettings/PlayerSettings.vue'
      this.handleMounted()
        },
import FtSettingsMenu from '../../components/FtSettingsMenu/FtSettingsMenu.vue'
import ExternalPlayerSettings from '../../components/ExternalPlayerSettings.vue'
    },
    if (this.settingsPassword === '') {
          'proxy-settings': ProxySettings,
  computed: {
          title: this.$t('Settings.Data Settings.Data Settings'),
          type: 'distraction-settings',


    }

import PasswordDialog from '../../components/PasswordDialog/PasswordDialog.vue'
                icon: 'network-wired',
import PrivacySettings from '../../components/PrivacySettings.vue'
    },
      this.settingsSectionComponents.forEach((section) => {
        this.settingsSectionTypeOpenInMobile = null
import DataSettings from '../../components/DataSettings/DataSettings.vue'
      'showKeyboardShortcutPrompt',
    'subscription-settings': SubscriptionSettings,
      if (this.isInDesktopView && wasNotInDesktopView && this.settingsSectionTypeOpenInMobile != null) {
        nextTick(() => {
              }
    handleUnlock: function () {
        ...(process.env.IS_ELECTRON
    ])
        const correspondingMenuLink = document.getElementById(section.type)

      } else if (!this.isInDesktopView && !wasNotInDesktopView) {

      }
          type: 'password-settings',
    return {
                title: this.$t('Settings.Proxy Settings.Proxy Settings'),
        {
        this.navigateToSection(sectionType)
        this.settingsSectionTypeOpenInMobile = sectionType
            }]
              type: 'external-player-settings',

    settingsPassword: function () {
import FtButton from '../../components/FtButton/FtButton.vue'
    handleResize: function () {
    'parental-control-settings': ParentalControlSettings,

        },
          const sectionElement = this.$refs[sectionType][0].$el
          icon: 'display'
        } else {
import SponsorBlockSettings from '../../components/SponsorBlockSettings.vue'
        const sectionElement = this.$refs[section.type][0].$el
          ? [{
        type: 'general-settings',
      return settingsComponentsData
    },
    handleMounted: function () {
          ? [{
