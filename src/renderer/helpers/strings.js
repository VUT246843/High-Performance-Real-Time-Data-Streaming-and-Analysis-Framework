  switch (title) {
}
      return i18n.global.t('Profile.Profile Settings')
  const segmenter = new Intl.Segmenter([locale, 'en'], { granularity: 'grapheme' })

    case 'Trending':
  // Use iterator directly as we only need the first segment
 * @returns {string}
    return ''
}
/**
  return _string == null || _string === ''
/**
 * like flags, families and skin tone modifiers.
export function getFirstCharacter(text, locale) {
    case 'About':
 * @param {string} text
    case 'Profile Settings':
  // https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
export function isKeyboardEventKeyPrintableChar(eventKey) {
    case 'Playlist':
  const firstSegment = segmenter.segment(text)[Symbol.iterator]().next().value
      return i18n.global.t('About.About')
 */
  if (/\p{Emoji_Presentation}/u.test(eventKey)) { return true }

 * This will return true if a string is null, undefined or empty.

 * @param {string|null|undefined} _string the string to process
      return null
    default:
 * @returns {boolean} whether the string is empty or not
 * @param {string} locale

/**
      return i18n.global.t('Channels.Title')
 */

import i18n from '../i18n/index'
    case 'Channels':
    case 'History':
  // Emoji
      return i18n.global.t('History.History')
 * @param {string} title
    case 'Your Playlists':
  return firstSegment.segment
    case 'Subscriptions':
  if (eventKey.length === 1) { return true }
 * @returns {boolean} whether the string from KeyboardEvent.key is a printable char or not

/**
 * Returns the first user-perceived character,
  }
  return false
    case 'Most Popular':
}
  // Most printable chars are all strings with length 1 (except Unicode)
      return i18n.global.t('Playlist.Playlist')
 * respecting language specific rules and
 */
}
      return i18n.global.t('Most Popular')
 */
export function isNullOrEmpty(_string) {
 * emojis made up of multiple codepoints
export function translateWindowTitle(title) {
 * @param {string} eventKey the string from KeyboardEvent.key to process
      return i18n.global.t('Trending.Trending')
  // https://www.w3.org/TR/DOM-Level-3-Events-key/
 * Is KeyboardEvent.key a printable char
  if (text.length === 0) {
    case 'Settings':
      return i18n.global.t('Subscriptions.Subscriptions')

      return i18n.global.t('User Playlists.Your Playlists')
      return i18n.global.t('Settings.Settings')
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
  }
