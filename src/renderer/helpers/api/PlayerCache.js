    // no-op; YouTube.js only uses remove for the OAuth credentials, but we don't use that in FreeTube
    await window.ftElectron.playerCacheSet(key, value)
  async get(key) {

  async remove(_key) {
}
    return await window.ftElectron.playerCacheGet(key)
  }
  }
  }

export class PlayerCache {
  async set(key, value) {
