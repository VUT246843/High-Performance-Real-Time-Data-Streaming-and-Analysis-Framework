  constructor(showStats, events, parent, controls) {
    this.nameSpan_.textContent = label
  }
    this.button_.classList.add('stats-button')




    this.currentState_.classList.add('shaka-current-selection-span')
import { KeyboardShortcuts, PlayerIcons } from '../../../../constants'

   * @param {EventTarget} events
    // listeners
   * @param {HTMLElement} parent


    this.icon_.use(this.showStats_ ? PlayerIcons.INSERT_CHART_FILLED : PlayerIcons.INSERT_CHART_DEFAULT)
      baseLabel,
      }))
import i18n from '../../../i18n/index'
    })
    /** @private */
    this.nameSpan_ = document.createElement('span')

  /** @private */
    })
    label.classList.add('shaka-overflow-button-label', 'shaka-simple-overflow-button-label-inline')
    this.button_ = document.createElement('button')
    this.showStats_ = showStats
    /** @private */
    this.icon_ = new shaka.ui.MaterialSVGIcon(this.button_, PlayerIcons.INSERT_CHART_DEFAULT)
    this.currentState_ = document.createElement('span')
    label.appendChild(this.currentState_)
    this.eventManager.listen(events, 'localeChanged', () => {
}

  updateLocalisedStrings_() {
   * @param {boolean} showStats

    /** @private */
   * @param {shaka.ui.Controls} controls

    this.parent.appendChild(this.button_)
    const baseLabel = this.showStats_ ? i18n.global.t('Video.Player.Hide Stats') : i18n.global.t('Video.Player.Show Stats')
    /** @private */

      this.updateLocalisedStrings_()
export class StatsButton extends shaka.ui.Element {
      this.updateLocalisedStrings_()
    })
  }



    this.button_.ariaLabel = label
    )

import { addKeyboardShortcutToActionTitle } from '../../../helpers/utils'
    this.eventManager.listen(this.button_, 'click', () => {
    super(parent, controls)
    label.appendChild(this.nameSpan_)
    /** @private */
    const label = document.createElement('label')
    const label = addKeyboardShortcutToActionTitle(
    this.updateLocalisedStrings_()


  /**
   */
      KeyboardShortcuts.VIDEO_PLAYER.GENERAL.STATS
      this.showStats_ = event.detail
      events.dispatchEvent(new CustomEvent('setStatsVisibility', {
    this.button_.appendChild(label)
    this.eventManager.listen(events, 'setStatsVisibility', (/** @type {CustomEvent} */ event) => {
        detail: !this.showStats_
import shaka from 'shaka-player'

