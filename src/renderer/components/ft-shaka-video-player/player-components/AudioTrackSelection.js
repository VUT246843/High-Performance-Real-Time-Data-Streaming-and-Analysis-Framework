   */
      menu.appendChild(button)
      config.preferredAudioLanguage = track.language
    const menu = this.menu
  /**
}
      menu.removeChild(menu.firstChild)




      count++
    menu.appendChild(backButton)
      this.updateAudioTracks_()
    let count = 0
    this.updateLocalisedStrings_()
    }
      if (track.active) {

    const config = {
  onAudioTrackSelected_(track) {
        this.currentSelection.textContent = span.textContent

import i18n from '../../../i18n/index'
    if (track.label) {

    const tracks = deduplicateAudioTracks(this.player.getAudioTracks()).values()

  constructor(events, parent, controls) {

    if (count > 1) {
  /**

    }
    if (track.language !== 'und') {
    super(parent, controls, PlayerIcons.RECORD_VOICE_OVER_FILLED)

export class AudioTrackSelection extends shaka.ui.SettingsMenu {
    this.button.ariaLabel = audioTracksText
    this._checkmarkIcon = checkmarkIcon
   * @param {!shaka.ui.Controls} controls
  }
    checkmarkIcon.classList.add('shaka-chosen-item')
    this.button.setAttribute('shaka-status', this.currentSelection.innerText)
      button.appendChild(span)

    const backButton = menu.querySelector('.shaka-back-to-overflow-button')
      this.updateAudioTracks_()
    } else {
    })


   * @param {!HTMLElement} parent
   * @private
      this.button.classList.add('shaka-hidden')
    this.eventManager.listen(this.player, 'adaptation', () => {
      preferSpatialAudio: track.spatialAudio

    }
    this.player.selectAudioTrack(track)
import { deduplicateAudioTracks } from '../../../helpers/player/utils'
   */

    this.button.classList.add('audio-track-button', 'shaka-tooltip-status')
        this.onAudioTrackSelected_(track)
    })
import { PlayerIcons } from '../../../../constants'
    }
      }


    track.codecs = null
        button.ariaSelected = 'true'
    this.updateAudioTracks_()
    const checkmarkIcon = new shaka.ui.MaterialSVGIcon(null, PlayerIcons.DONE_FILLED).getSvgElement()
      this.button.classList.remove('shaka-hidden')
  }
    this.backButton.ariaLabel = this.localization.resolve('BACK')






    this.backSpan.textContent = audioTracksText

    checkmarkIcon.ariaHidden = 'true'
    /** @type {SVGElement} */
      this.updateAudioTracks_()
    /** @private */
    this.player.configure(config)

    while (menu.firstChild) {
    const audioTracksText = i18n.global.t('Video.Player.Audio Tracks')
import shaka from 'shaka-player'
    menu.querySelector('shaka-chosen-item')?.parentElement.focus()
  updateLocalisedStrings_() {
    }
    }
   * @param {shaka.extern.AudioTrack} track


      config.preferredAudioLabel = track.label
        button.appendChild(this._checkmarkIcon)
  /** @private */

   * @param {EventTarget} events
   */
      button.addEventListener('click', () => {
    })
    this.eventManager.listen(this.player, 'trackschanged', () => {
    this.menu.classList.add('audio-tracks')

    })
      const button = document.createElement('button')
    this.nameSpan.textContent = audioTracksText
        span.classList.add('shaka-chosen-item')
    if (track.channelsCount) {
      config.preferredAudioChannelCount = track.channelsCount
    }
      const span = document.createElement('span')
      this.updateLocalisedStrings_()

    this.eventManager.listen(this.player, 'loading', () => {
      span.textContent = track.label || new Intl.DisplayNames('en', { type: 'language', languageDisplay: 'standard' }).of(track.language)
    this.eventManager.listen(this.player, 'variantchanged', () => {
  updateAudioTracks_() {

    this.eventManager.listen(events, 'localeChanged', () => {

   * @private

  }
      this.updateAudioTracks_()
    })
      })
    for (const track of tracks) {

  /**
  }


