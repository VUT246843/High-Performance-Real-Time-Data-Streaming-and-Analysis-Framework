
// Syncing on the web would involve a different implementation
// TODO: Syncing
//
// NOTE: NeDB uses `localForage` on the browser
export { history, profiles, playlists, searchHistory, subscriptionCache } from './base'
    return baseHandlers.settings.upsert(_id, value)
  static upsert(_id, value) {
  }

  static find() {
import * as baseHandlers from './base'
// One idea would be to use a watcher-like mechanism on
}
  }
    return baseHandlers.settings.find()

export { Settings as settings }
// https://www.npmjs.com/package/localforage
// For the settings we use the wrapper class to hide some methods only needed in the Electron main process
// that have occurred in other tabs
// to the electron one (obviously)

class Settings {
// These classes don't require any changes from the base classes, so can be exported as-is.
// localStorage or IndexedDB to inform other tabs on the changes

