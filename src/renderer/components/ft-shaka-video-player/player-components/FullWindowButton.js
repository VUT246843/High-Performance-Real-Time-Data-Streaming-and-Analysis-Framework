    this.fullWindowEnabled_ = fullWindowEnabled
  constructor(fullWindowEnabled, events, parent, controls) {
    label.appendChild(this.currentState_)

    })
    const baseAriaLabel = this.fullWindowEnabled_ ? i18n.global.t('Video.Player.Exit Full Window') : i18n.global.t('Video.Player.Full Window')


      this.fullWindowEnabled_ = event.detail
    this.nameSpan_.textContent = this.button_.ariaLabel = newLabel
    label.classList.add(
    /** @private */
    const label = document.createElement('label')
import i18n from '../../../i18n/index'
   * @param {HTMLElement} parent
      KeyboardShortcuts.VIDEO_PLAYER.GENERAL.FULLWINDOW

    this.parent.appendChild(this.button_)
      baseAriaLabel,
    })

    /** @private */
      }))
  updateLocalisedStrings_() {
    const newLabel = addKeyboardShortcutToActionTitle(
    this.currentState_ = document.createElement('span')
   * @param {EventTarget} events
    this.eventManager.listen(events, 'setFullWindow', (/** @type {CustomEvent} */ event) => {
    this.currentState_.textContent = this.localization.resolve(this.fullWindowEnabled_ ? 'ON' : 'OFF')

    this.currentState_.classList.add('shaka-current-selection-span')
    this.eventManager.listen(events, 'localeChanged', () => {
    this.updateLocalisedStrings_()
import shaka from 'shaka-player'
    super(parent, controls)
import { KeyboardShortcuts, PlayerIcons } from '../../../../constants'
    /** @private */
      'shaka-simple-overflow-button-label-inline'
    this.nameSpan_ = document.createElement('span')
export class FullWindowButton extends shaka.ui.Element {

import { addKeyboardShortcutToActionTitle } from '../../../helpers/utils'

    this.eventManager.listen(this.button_, 'click', () => {
   */
    // listeners
  }

      'shaka-overflow-menu-only',
    label.appendChild(this.nameSpan_)
   * @param {shaka.ui.Controls} controls

      events.dispatchEvent(new CustomEvent('setFullWindow', {
        detail: !this.fullWindowEnabled_
   * @param {boolean} fullWindowEnabled
    this.button_.appendChild(label)

  /**
    /** @private */

    this.icon_ = new shaka.ui.MaterialSVGIcon(this.button_, PlayerIcons.OPEN_IN_FULL_FILLED)
  }

      this.updateLocalisedStrings_()
  /** @private */


      'shaka-overflow-button-label',
    this.button_ = document.createElement('button')
    this.button_.classList.add('full-window-button', 'shaka-tooltip')

}
      this.updateLocalisedStrings_()
    })
    )
    )
    this.icon_.use(this.fullWindowEnabled_ ? PlayerIcons.CLOSE_FULLSCREEN_FILLED : PlayerIcons.OPEN_IN_FULL_FILLED)
    /** @private */


