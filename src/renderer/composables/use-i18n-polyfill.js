
    }
}
  return i18n.global.t(...args)
 *
 * @param {Record<string, unknown>} named
/**
 */
 * @param {Record<string, unknown>} named

 * which is needed for Options API components.
    t
 * Yes, vue-i18n 9 has an `allowComposition` option,
/**
    get() {
 * @param {string} key
 */
 * @param {number} plural
 * and doesn't work when vue-i18n 9+ (used for Vue 3) is set to `legacy: true`,
  })
 * @returns {string}
/**
/**
      i18n.global.locale = locale

 */
 */

 * @param {unknown[]} list
 * @see https://vue-i18n.intlify.dev/guide/migration/breaking10.html#drop-allowcomposition-option
 * @param {string} key

 * @overload
 *
 * @returns {string}
 * but it comes with limitations that this polyfill doesn't have and was removed in vue-i18n 10.
 * @returns {string}
 * @returns {string}
 * @overload
/* eslint-disable @intlify/vue-i18n/no-dynamic-keys */
}
 * @param {string} key
 * @overload
  return {
    locale,
 */
import i18n from '../i18n/index'

/**

 * @param {string} key
 * @see https://vue-i18n.intlify.dev/guide/migration/vue3#limitations
 * @param {number} plural
 * @param {unknown[]} list
 */
 */
 */
 * @returns {string}
 * @returns {string}
import { computed } from 'vue'
 * @returns {string}
 * @overload
 * @param {string} key

  const locale = computed({
  }
/**
      return i18n.global.locale
 * @overload
 * @param {...any} args
    },
    set(locale) {
function t(...args) {
 * @param {string} key

 * @param {number} plural
/**

export function useI18n() {
/**
 * @overload
 * Polyfill for vue-i18n's useI18n composable, as it is not available in Vue 2
