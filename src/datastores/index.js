
    if (statSync(path, { throwIfNoEntry: false })?.isSymbolicLink) {
    corruptAlertThreshold: 1
/**
export const subscriptionCache = createDatastore('subscription-cache')
 * @param {string} name
  const { join } = require('path')
    }

import Datastore from '@seald-io/nedb'

  dbPath = (dbName) => {
  }
    // returns undefined if the path doesn't exist
function createDatastore(name) {
  const userDataPath = app.getPath('userData') // This is based on the user's OS
  const { statSync, realpathSync } = require('fs')
 */
export const profiles = createDatastore('profiles')
  return new Datastore({
  })
}
  const { app } = require('electron')
if (process.env.IS_ELECTRON_MAIN) {
    filename: dbPath(name),
export const searchHistory = createDatastore('search-history')

} else {
}
    return path
export const playlists = createDatastore('playlists')
  dbPath = (dbName) => `${dbName}.db`
  // this code only runs in the electron main process, so hopefully using sync fs code here should be fine 😬
export const history = createDatastore('history')

    autoload: !process.env.IS_ELECTRON_MAIN,
export const settings = createDatastore('settings')

    let path = join(userDataPath, `${dbName}.db`)
    // Automatically clean up corrupted data, instead of crashing
let dbPath = null
      path = realpathSync(path)
