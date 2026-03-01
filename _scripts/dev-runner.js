  },
  mainConfig = require('./webpack.main.config')
async function restartElectron() {
      return
    if (err) console.error(err)
            /(dashFiles|storyboards)\/*/,
function startWeb () {
      })
  console.log('\nStarting electron...')

  const { name } = compiler
  botGuardScriptConfig = require('./webpack.botGuardScript.config')
    if (err) console.error(err)
if (remoteDebugging) {

const remoteDebugging = process.argv.indexOf('--remote-debug') !== -1
  startRenderer(() => {
let manualRestart = null

      }, 2500)
    aggregateTimeout: 500,
    remoteDebugging ? '--inspect=9222' : '',


      {
    // { stdio: 'inherit' } // required for logs to actually appear in the stdout
  const compiler = webpack(preloadConfig)
    if (err) console.error(err)
    startPreload()

let botGuardScriptConfig
const electron = require('electron')
  )

      manualRestart = true
      plugin.notifyLocaleChange = notifyLocaleChange
const port = 9080
  const notifyLocaleChange = (updatedLocales) => {

    console.log(`\nWatching file changes for ${name} script...`)
    .filter(plugin => plugin instanceof ProcessLocalesPlugin)
const webpack = require('webpack')
  const { name } = compiler
  })
const WebpackDevServer = require('webpack-dev-server')
  compiler.hooks.afterEmit.tap('afterEmit', async () => {
  const server = new WebpackDevServer({

  })
          ignored: [
    if (code === relaunchExitCode) {
    }

      await restartElectron()
      overlay: {

}
            '**/static/locales/*'
const path = require('path')
/**
  compiler.hooks.afterEmit.tap('afterEmit', async () => {
  // disable dvtools open in electron
  }

let rendererConfig
      }
function setupNotifyLocaleUpdate(compiler, devServer) {
      kill(pid, err => {
process.env.NODE_ENV = 'development'
  startWeb()
}

  compiler.hooks.afterEmit.tap('afterEmit', () => {
process.env.FREETUBE_RELAUNCH_EXIT_CODE = relaunchExitCode

        watch: {
const ProcessLocalesPlugin = require('./ProcessLocalesPlugin')
function startMain() {
if (!web) {

        publicPath: '/static/shaka-player-locales',

  }, compiler)

const web = process.argv.indexOf('--web') !== -1
  const { name } = compiler
  })
  const server = new WebpackDevServer({
const kill = require('tree-kill')


}
    // '--enable-logging', // Enable to show logs from all electron processes
}
        if (err) reject(err)


    if (firstTime) {


  },
  })
}
  server.startCallback(err => {
  })
    .forEach((/** @type {ProcessLocalesPlugin} */plugin) => {


      },

  let firstTime = true
    } else {
  })
  process.env.RENDERER_REMOTE_DEBUGGING = true
  rendererConfig = require('./webpack.renderer.config')
  })
        directory: path.resolve(__dirname, '..', 'node_modules', 'shaka-player', 'ui', 'locales'),

async function killElectron(pid) {
  preloadConfig = require('./webpack.preload.config.js')
      setTimeout(() => {

    console.log(`\nWatching file changes for ${name} script...`)
          ]
    open: true,
        manualRestart = false
      {
function startRenderer(callback) {
        ignored: [
  ],
}
}
    startBotGuardScript()
  compiler.hooks.afterEmit.tap('afterEmit', () => {
 * @param {WebpackDevServer} devServer
const relaunchExitCode = 69

  })
    })
    static: [
  err => {
  const { pid } = electronProcess || {}
    await restartElectron()
  delete rendererConfig.SHAKA_LOCALES_TO_BE_BUNDLED
      directory: path.resolve(__dirname, '..', 'static'),
} else {
function startPreload() {
  const compiler = webpack(rendererConfig)
const { spawn } = require('child_process')
        runtimeErrors: false
  webpack(botGuardScriptConfig, (err) => {
    console.log(`\nCompiled ${name} script!`)
        },
      manualRestart = false
    static: {
if (!web) {

    path.join(__dirname, '../dist/main.js'),
let electronProcess = null
            '/**/.DS_Store',
    console.log(`\nCompiled ${name} script!`)
}
let preloadConfig

        directory: path.resolve(__dirname, '..', 'static'),
    ],
        watch: {
          // Ignore everything that isn't one of the locales that we would bundle in production mode
  }, compiler)
      }
    if (err) console.error(err)
  electronProcess.on('exit', (code, _) => {
  err => {

    }

    startMain()
      electronProcess = null
// Define exit code for relaunch and set it in the environment

      resolve()
  })
}

    },
      restartElectron()
    devServer.sendMessage(devServer.webSocketServer.clients, 'freetube-locale-update', updatedLocales)
    console.log(`\nWatching file changes for ${name} script...`)
    if (pid) {
  compiler.watch({
let SHAKA_LOCALES_TO_BE_BUNDLED
          ignored: `**/!(${SHAKA_LOCALES_TO_BE_BUNDLED.join('|')}).json`
  })
  return new Promise((resolve, reject) => {
    if (err) console.error(err)
  server.startCallback(err => {
      }
  const compiler = webpack(webConfig)
 * @param {import('webpack').Compiler} compiler
  electronProcess = spawn(electron, [
        }
        resolve()
      firstTime = false
          '**/static/locales/*'
        ]

    port
      watch: {
    client: {
          '/**/.DS_Store',
    manualRestart = true
 */
    callback()
  const { name } = compiler
function startBotGuardScript() {
    setTimeout(() => {

    }, 2500)
    if (!manualRestart) process.exit(0)
    }
  compiler.watch({

    setupNotifyLocaleUpdate(compiler, server)
  compiler.options.plugins
    console.log(`\nCompiled ${botGuardScriptConfig.name} script!`)
    console.log(`\nCompiled ${name} script!`)
let mainConfig

  })
          /(dashFiles|storyboards)\/*/,
} else {
    port
    } else {
  webConfig = require('./webpack.web.config')
    aggregateTimeout: 500,

}
  const compiler = webpack(mainConfig)
  })
    setupNotifyLocaleUpdate(compiler, server)

let webConfig

        publicPath: '/static'
    console.log(`\nWatching file changes for ${name} script...`)
}
    remoteDebugging ? '--remote-debugging-port=9223' : ''

    console.log(`\nCompiled ${name} script!`)
  SHAKA_LOCALES_TO_BE_BUNDLED = rendererConfig.SHAKA_LOCALES_TO_BE_BUNDLED

    },
  await killElectron(pid)
