      this.updateLocalisedStrings_()
    /** @private */

    // listeners
    this.parent.appendChild(this.button_)

  }
    const baseAriaLabel = this.theatreModeEnabled_ ? i18n.global.t('Video.Player.Exit Theatre Mode') : i18n.global.t('Video.Player.Theatre Mode')
   */
   * @param {HTMLElement} parent

      KeyboardShortcuts.VIDEO_PLAYER.GENERAL.THEATRE_MODE

        detail: !this.theatreModeEnabled_
      'shaka-overflow-button-label',
      events.dispatchEvent(new CustomEvent('toggleTheatreMode', {
    })
    this.eventManager.listen(this.button_, 'click', () => {
import { addKeyboardShortcutToActionTitle } from '../../../helpers/utils'
    this.currentState_.textContent = this.localization.resolve(this.theatreModeEnabled_ ? 'ON' : 'OFF')
    this.icon_ = new shaka.ui.MaterialSVGIcon(this.button_, PlayerIcons.RECTANGLE_DEFAULT)
    label.appendChild(this.nameSpan_)
      'shaka-simple-overflow-button-label-inline'
    this.nameSpan_ = document.createElement('span')
    this.eventManager.listen(events, 'localeChanged', () => {
    /** @private */
  }


  updateLocalisedStrings_() {


    })

  constructor(theatreModeEnabled, events, parent, controls) {
    /** @private */
    this.button_ = document.createElement('button')
    label.appendChild(this.currentState_)
}
    )

   * @param {shaka.ui.Controls} controls


    )
    this.currentState_.classList.add('shaka-current-selection-span')
    super(parent, controls)
  /** @private */
  /**
    this.button_.classList.add('theatre-button', 'shaka-tooltip')
    const label = document.createElement('label')
import i18n from '../../../i18n/index'
    this.button_.appendChild(label)
      }))
   * @param {boolean} theatreModeEnabled

      baseAriaLabel,

    /** @private */
    this.currentState_ = document.createElement('span')
      'shaka-overflow-menu-only',
    /** @private */
import shaka from 'shaka-player'




    this.eventManager.listen(events, 'toggleTheatreMode', (/** @type {CustomEvent} */event) => {
   * @param {EventTarget} events
    })
      this.updateLocalisedStrings_()
    this.updateLocalisedStrings_()
export class TheatreModeButton extends shaka.ui.Element {
      this.theatreModeEnabled_ = event.detail


    this.theatreModeEnabled_ = theatreModeEnabled
    label.classList.add(
import { KeyboardShortcuts, PlayerIcons } from '../../../../constants'
    this.nameSpan_.textContent = this.button_.ariaLabel = addKeyboardShortcutToActionTitle(
    this.icon_.use(this.theatreModeEnabled_ ? PlayerIcons.VARIABLES_DEFAULT : PlayerIcons.RECTANGLE_DEFAULT)
