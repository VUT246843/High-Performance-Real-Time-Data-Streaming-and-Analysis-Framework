    // https://vue-i18n.intlify.dev/guide/essentials/fallback.html
          const localeData = JSON.parse(data)
  if (i18n.global.availableLocales.includes(locale) &&
  const response = await fetch(url)
  if (process.env.IS_ELECTRON && process.env.NODE_ENV !== 'development') {
    console.error(`Unable to load unknown locale: "${locale}"`)

    'pt-PT': ['pt'],
    path = `/static/locales/${locale}.json`
  }

    return
        if (i18n.global.availableLocales.includes(locale) &&
  }
  const websocket = new WebSocket('ws://localhost:9080/ws')
    // any -> en-US

      for (const [locale, data] of message.data) {
  }
// List of locales approved for use
  const data = await response.json()

  i18n.global.setLocaleMessage(locale, data)
  legacy: true,
          Object.keys(i18n.global.messages[locale]).length > 0) {

export async function loadLocale(locale) {
  }
}
    'es-MX': ['es'],
    'pt-BR': ['pt'],
  if (!activeLocales.includes(locale)) {
if (process.env.HOT_RELOAD_LOCALES) {
const i18n = createI18n({
  let path
  // locales are only compressed in our production Electron builds
  }
  // don't need to load it if it's already loaded
    path = `/static/locales/${locale}.json.br`
    default: ['en-US'],

  websocket.onmessage = (event) => {

    // pt-BR -> pt -> en-US
// Set by _scripts/ProcessLocalesPlugin.js
    // es-AR -> es -> en-US
import { createI18n } from 'vue-i18n'
      }
          i18n.global.setLocaleMessage(locale, localeData)
    'es-AR': ['es'],
  locale: 'en-US',

import { createWebURL } from '../helpers/utils'
}
  fallbackLocale: {
    Object.keys(i18n.global.messages[locale]).length > 0) {

    const message = JSON.parse(event.data)


  } else {
    // pt-PT -> pt -> en-US
    // es-MX -> es -> en-US
    }
import activeLocales from '../../../static/locales/activeLocales.json'
})
    return
export default i18n
        }
  const url = createWebURL(path)
    if (message.type === 'freetube-locale-update') {

        // Only update locale data if it was already loaded
