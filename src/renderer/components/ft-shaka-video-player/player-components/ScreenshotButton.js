
    this.eventManager.listen(events, 'localeChanged', () => {
    super(parent, controls)
      'shaka-overflow-menu-only',
  /**
    const label = addKeyboardShortcutToActionTitle(
    this.button_.appendChild(label)
    })
      KeyboardShortcuts.VIDEO_PLAYER.GENERAL.TAKE_SCREENSHOT
    const label = document.createElement('label')
import i18n from '../../../i18n/index'


    label.appendChild(this.nameSpan_)
    /** @private */
    label.classList.add(
      events.dispatchEvent(new CustomEvent('takeScreenshot'))

import { KeyboardShortcuts, PlayerIcons } from '../../../../constants'
    this.parent.appendChild(this.button_)
  }
    this.button_ = document.createElement('button')
  }
    })
  updateLocalisedStrings_() {
    this.button_.classList.add('screenshot-button', 'shaka-tooltip')
    /** @private */
      'shaka-overflow-button-label',
  /** @private */

    )
export class ScreenshotButton extends shaka.ui.Element {


      this.updateLocalisedStrings_()
    this.nameSpan_ = document.createElement('span')
    /** @private */

    this.icon_ = new shaka.ui.MaterialSVGIcon(this.button_, PlayerIcons.PHOTO_CAMERA_FILLED)
      i18n.global.t('Video.Player.Take Screenshot'),
   */
    )


   * @param {EventTarget} events
import shaka from 'shaka-player'
   * @param {HTMLElement} parent
}
   * @param {shaka.ui.Controls} controls
    this.nameSpan_.textContent = this.button_.ariaLabel = label

      'shaka-simple-overflow-button-label-inline'
import { addKeyboardShortcutToActionTitle } from '../../../helpers/utils'


    // listeners
    this.eventManager.listen(this.button_, 'click', () => {
    this.updateLocalisedStrings_()
  constructor(events, parent, controls) {
