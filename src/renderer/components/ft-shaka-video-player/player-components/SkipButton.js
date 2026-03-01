      this.type_ === 'next'
   * @param {shaka.ui.Controls} controls
}
   * @param {'next'|'previous'} type
import i18n from '../../../i18n/index'
import { KeyboardShortcuts, PlayerIcons } from '../../../../constants'
      events.dispatchEvent(new CustomEvent(eventName))
import shaka from 'shaka-player'

  /**
  }
import { addKeyboardShortcutToActionTitle } from '../../../helpers/utils'
  }
  updateLocalisedStrings_() {
        : i18n.global.t('Video.Previous')
    const shortcut =

      'shaka-overflow-button-label',


    this.updateLocalisedStrings_()
export class SkipButton extends shaka.ui.Element {
   * @param {EventTarget} events

    this.eventManager.listen(events, 'localeChanged', () => {
    this.button_ = document.createElement('button')
    this.button_.classList.add(`skip-${type}-button`, 'shaka-tooltip', 'ft-shaka-skip-button')
    this.eventManager.listen(this.button_, 'click', () => {
    /** @private */
    this.button_.appendChild(label)
    })


      'shaka-overflow-menu-only',
    super(parent, controls)
      const eventName = type === 'next' ? 'nextVideo' : 'previousVideo'
    const label = document.createElement('label')
    label.appendChild(this.nameSpan_)
      this.type_ === 'next'
    })
        : KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.SKIP_TO_PREV

    const label = addKeyboardShortcutToActionTitle(labelText, shortcut)
   * @param {HTMLElement} parent


    label.classList.add(
    /** @private */
    /** @private */
      this.updateLocalisedStrings_()
        ? i18n.global.t('Video.Next')

  /** @private */
    this.type_ = type
   */
    const icon = type === 'next' ? PlayerIcons.SKIP_NEXT_FILLED : PlayerIcons.SKIP_PREVIOUS_FILLED
    this.parent.appendChild(this.button_)

        ? KeyboardShortcuts.VIDEO_PLAYER.PLAYBACK.SKIP_TO_NEXT


    )
    // listener
    const labelText =
  constructor(events, parent, controls, type = 'next') {
    this.nameSpan_.textContent = this.button_.ariaLabel = label
    this.icon_ = new shaka.ui.MaterialSVGIcon(this.button_, icon)
    this.nameSpan_ = document.createElement('span')
      'shaka-simple-overflow-button-label-inline'
