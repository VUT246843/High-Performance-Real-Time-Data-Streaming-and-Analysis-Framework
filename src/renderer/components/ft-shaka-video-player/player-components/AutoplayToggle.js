


   */

    this.icon_.use(this.autoplayEnabled_ ? PlayerIcons.PLAY_CIRCLE_FILLED : PlayerIcons.PAUSE_CIRCLE_FILLED)
    this.eventManager.listen(events, 'localeChanged', () => {
}
   * @param {shaka.ui.Controls} controls

    this.button_.ariaLabel = this.autoplayEnabled_ ? i18n.global.t('Video.Player.Autoplay is on') : i18n.global.t('Video.Player.Autoplay is off')
    super(parent, controls)
    this.currentState_ = document.createElement('span')
    })
      'shaka-overflow-menu-only',
      }))

import i18n from '../../../i18n/index'
    this.currentState_.textContent = this.localization.resolve(this.autoplayEnabled_ ? 'ON' : 'OFF')
    }
    this.button_ = document.createElement('button')
  updateLocalisedStrings_() {
    this.nameSpan_.textContent = i18n.global.t('Video.Autoplay')
    this.icon_ = new shaka.ui.MaterialSVGIcon(this.button_, PlayerIcons.PAUSE_CIRCLE_FILLED)

    )
  /** @private */
      'shaka-simple-overflow-button-label-inline'
      this.autoplayEnabled_ = event.detail
  }
    /** @private */
    /** @private */
    this.button_.classList.add('autoplay-toggle', 'shaka-tooltip')
      events.dispatchEvent(new CustomEvent('toggleAutoplay', {
    const handleAutoplayValueChange = (/** @type {CustomEvent} */ event) => {
    this.updateLocalisedStrings_()

      this.updateLocalisedStrings_()
  constructor(autoplayEnabled, events, parent, controls) {
    this.eventManager.listen(this.button_, 'click', () => {
    this.eventManager.listen(events, 'setAutoplay', handleAutoplayValueChange)
    label.classList.add(
    // listeners
  }
    })
        detail: !this.autoplayEnabled_
    label.appendChild(this.nameSpan_)
import { PlayerIcons } from '../../../../constants'

export class AutoplayToggle extends shaka.ui.Element {
   * @param {HTMLElement} parent


  /**
    /** @private */


      this.updateLocalisedStrings_()
    this.nameSpan_ = document.createElement('span')


    this.currentState_.classList.add('shaka-current-selection-span')
    const label = document.createElement('label')

    /** @private */
    label.appendChild(this.currentState_)
    this.autoplayEnabled_ = autoplayEnabled
    this.button_.appendChild(label)

      'shaka-overflow-button-label',


import shaka from 'shaka-player'

   * @param {EventTarget} events
    /** @private */
    this.parent.appendChild(this.button_)
   * @param {boolean} autoplayEnabled
