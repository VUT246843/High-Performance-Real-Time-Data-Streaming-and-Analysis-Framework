   * @param {any} data
    /** @type {(updatedLocales: [string, string][]) => void|null} */
    this.outputDir = options.outputDir

      }
      this.cache.set(locale, { filename, source })
  }

    }
    const activeLocales = JSON.parse(readFileSync(`${this.inputDir}/activeLocales.json`))
    this.localeNames = []
    }).apply(compiler)
      'process.env.HOT_RELOAD_LOCALES': this.hotReload

    this.notifyLocaleChange = null
          promises.push(this.processLocale(locale, data, updatedLocales, compiler, compilation))
const { load: loadYaml } = require('js-yaml')
    compilation.emitAsset(filename, source, { minimized: true })
        [constants.BROTLI_PARAM_SIZE_HINT]: buffer.byteLength

    }
const { existsSync, readFileSync } = require('fs')

        this.removeEmptyValues(value)
    } else if (!existsSync(options.inputDir)) {
    }
      const timestamp = compiler.fileTimestamps.get(filePath)?.safeTime
        data = loadYaml(contents)
        compilation.emitAsset(filename, source, { minimized: true })
    new DefinePlugin({
      // so we can clear this to free some memory
      updatedLocales.push([locale, output])


        const { filename, source } = this.cache.get(locale)
   * @param {import('webpack').Compiler} compiler
      } else {

const PLUGIN_NAME = 'ProcessLocalesPlugin'
      params: {
   * so we want to get rid of them and also remove the empty objects that can get left behind
   * @param {object|string} data
      this.filePaths.push(filePath)
        // and makes webpack treat them as cached

    })

   */
      if (typeof value === 'object') {
  }
    if (typeof options.inputDir !== 'string') {

        return
        [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
    this.hotReload = !!options.hotReload
    })
    this.locales = new Map()
   * @param {[string, string][]} updatedLocales
    const { Compilation, DefinePlugin } = compiler.webpack
        const promises = []
  async compressLocale(data) {
    if (this.hotReload && compiler.fileTimestamps) {
      source = new compiler.webpack.sources.CachedSource(source)
      if (compiler.watching) {
  constructor(options = {}) {
  }
}
          this.notifyLocaleChange(updatedLocales)
    this.previousTimestamps = new Map()
        // watch locale files for changes
      this.locales.set(locale, data)



    })
const brotliCompressAsync = promisify(brotliCompress)
      const value = data[key]
    }

    }
const { promisify } = require('util')
      compilation.hooks.processAssets.tapPromise({
    this.cache = new Map()
    compiler.hooks.afterCompile.tap(PLUGIN_NAME, (compilation) => {
  }
   * @param {string} locale
    return await brotliCompressAsync(buffer, {
        stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
  }
    /** @type {Map<string, any>} */
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      const filePath = join(this.inputDir, `${locale}.yaml`)
      filename += '.br'

        }
        name: PLUGIN_NAME,
    if (this.compress) {
   * @param {import('webpack').Compilation} compilation
    /** @type {Map<string, any>} */

    let source = new compiler.webpack.sources.RawSource(output)
      })
    for (const key of Object.keys(data)) {
      }
    this.inputDir = options.inputDir
class ProcessLocalesPlugin {
const { readFile } = require('fs/promises')
  apply(compiler) {
      }

  /**
      }, async (_assets) => {
  async processLocale(locale, data, updatedLocales, compiler, compilation) {
   * vue-i18n doesn't fallback if the translation is an empty string

  loadLocales() {

        this.previousTimestamps.set(locale, timestamp)
        await Promise.all(promises)



      output = await this.compressLocale(output)
        if (this.hotReload && this.notifyLocaleChange && updatedLocales.length > 0) {
    }
const { brotliCompress, constants } = require('zlib')
      if (!value || (typeof value === 'object' && Object.keys(value).length === 0)) {
    let filename = `${this.outputDir}/${locale}.json`
    }
      throw new Error('ProcessLocalesPlugin: the specified input directory does not exist.')


    }

        const contents = await readFile(filePath, 'utf-8')
        const updatedLocales = []

    if (compiler.watching && compiler.fileTimestamps) {
        [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY,


        compilation.fileDependencies.addAll(this.filePaths)
        }
  /**
    if (compiler.watching) {
      this.locales.set(locale, null)
    this.removeEmptyValues(data)
      const contents = readFileSync(filePath, 'utf-8')
        }
        for (const [locale, data] of this.locales) {



    this.compress = !!options.compress
  /** @param {import('webpack').Compiler} compiler  */
        // While running in the webpack dev server, this hook gets called for every incremental build.
          console.warn('ProcessLocalesPlugin: Unable to live reload locales as `notifyLocaleChange` is not set.')
      // we don't need the unmodified sources anymore, as we use the cache `this.cache`
   * if we've removed all the keys and values in them
    let output = JSON.stringify(data)
      const filePath = join(this.inputDir, `${locale}.yaml`)
      if (timestamp && timestamp > (this.previousTimestamps.get(locale) ?? this.startTime)) {

        /** @type {[string, string][]} */
      throw new Error('ProcessLocalesPlugin: no output directory `outputDir` specified.')
const { join } = require('path')
    this.startTime = Date.now()
      throw new Error('ProcessLocalesPlugin: no input directory `inputDir` specified.')


        delete data[key]


        // For incremental builds we can return the already processed versions, which saves time

module.exports = ProcessLocalesPlugin
      }
    const buffer = Buffer.from(data, 'utf-8')
      }
      const data = loadYaml(contents)
    for (const locale of activeLocales) {
    this.loadLocales()
    if (typeof options.outputDir !== 'string') {
        if (this.hotReload && !this.notifyLocaleChange) {
      this.localeNames.push(data['Locale Name'] ?? locale)
   */
  removeEmptyValues(data) {
  }


    this.filePaths = []
