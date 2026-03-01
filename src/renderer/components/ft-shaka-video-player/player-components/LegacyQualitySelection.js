    }

    })


    this.button.ariaLabel = resolutionText
        this.onFormatSelected_(format)
    if (activeCaptionIndex >= 0 && this.player.isTextTrackVisible()) {
    button.appendChild(this._checkmarkIcon)

      // when switching away from the legacy formats
      const span = document.createElement('span')
      button.appendChild(span)
    // remove previous selection




    const button = this.menu.querySelectorAll('.legacy-resolution')[index]
  async onFormatSelected_(format) {

   * @param {EventTarget} events

    const isPortrait = legacyFormats[0].height > legacyFormats[0].width
    }
    const sortedLegacyFormats = [...legacyFormats]
    this._checkmarkIcon = checkmarkIcon
    const span = button.querySelector('span')
    })
    this.backSpan.textContent = resolutionText
    button.ariaSelected = 'true'
    }



        restoreCaptionIndex
      this.menu.appendChild(button)

    // current selection
   * @param {object} activeLegacyFormat
      this.activeLegacyFormat_ = event.detail.format
    /** @private */
    this.events_.dispatchEvent(new CustomEvent('setLegacyFormat', {
    this.menu.classList.add('legacy-qualities')
  constructor(activeLegacyFormat, legacyFormats, events, parent, controls) {
    const playbackPosition = this.player.getMediaElement().currentTime
  updateLocalisedStrings_() {
    this.button.classList.add('legacy-quality-button', 'shaka-tooltip-status')



import { PlayerIcons } from '../../../../constants'

      }
  /** @private */


      const button = document.createElement('button')

    if (!this.activeLegacyFormat_) {
    checkmarkIcon.classList.add('shaka-chosen-item')
    const resolutionText = this.localization.resolve('RESOLUTION')
   * @param {!HTMLElement} parent
    span.classList.add('shaka-chosen-item')
    const checkmarkIcon = new shaka.ui.MaterialSVGIcon(null, PlayerIcons.DONE_FILLED).getSvgElement()
  updateResolutionSelection_() {
    this.backButton.ariaLabel = resolutionText
    button.focus()
    this.updateLocalisedStrings_()
      return
  /**
    if (format === this.activeLegacyFormat_) {
      restoreCaptionIndex = activeCaptionIndex

    super(parent, controls, PlayerIcons.TUNE_FILLED)

      this.eventManager.listen(button, 'click', () => {



        playbackPosition,
  }
    this.nameSpan.textContent = resolutionText

      this.updateResolutionSelection_()
    // listeners
    this.activeLegacyFormat_ = activeLegacyFormat

    this.legacyFormats_ = sortedLegacyFormats

    this.events_ = events
      // hide captions before switching as shaka/the browser doesn't clean up the displayed captions
      const button = previousSpan.parentElement
    this.updateResolutionSelection_()
      button.classList.add('legacy-resolution')
    this.button.setAttribute('shaka-status', span.textContent)

      previousSpan.classList.remove('shaka-chosen-item')
    }
    checkmarkIcon.ariaHidden = 'true'
    let restoreCaptionIndex = null
    if (previousSpan) {
    for (const format of sortedLegacyFormats) {
      await this.player.setTextTrackVisibility(false)
    const index = this.legacyFormats_.indexOf(this.activeLegacyFormat_)
    const previousSpan = this.menu.querySelector('.shaka-chosen-item')

      })

    /** @private */
    sortedLegacyFormats.sort((a, b) => isPortrait ? b.width - a.width : b.height - a.height)
}
    this.eventManager.listen(events, 'setLegacyFormat', (/** @type {CustomEvent} */ event) => {
    const activeCaptionIndex = this.player.getTextTracks().findIndex(caption => caption.active)
    }))
   */
  }
        format,


import shaka from 'shaka-player'
export class LegacyQualitySelection extends shaka.ui.SettingsMenu {
    /** @private */

    }
      detail: {
    this.eventManager.listen(events, 'localeChanged', () => {

  }
      return
    /** @private */

      this.updateLocalisedStrings_()
    this.currentSelection.textContent = span.textContent
   * @param {!shaka.ui.Controls} controls
      this._checkmarkIcon.remove()
  }

      button.ariaSelected = 'false'

  /** @private */
      span.textContent = format.qualityLabel
    /** @type {SVGElement} */
  /** @private */
   * @param {object[]} legacyFormats
