const path = require('path')
    __filename: false
  infrastructureLogging: {
  externals: [
/** @type {import('webpack').Configuration} */
    'electron/renderer'
const isDevMode = process.env.NODE_ENV === 'development'
    // Only warnings and errors
  devtool: isDevMode ? 'eval-cheap-module-source-map' : false,
  },
  mode: process.env.NODE_ENV,
  externalsType: 'commonjs',
    level: isDevMode ? 'info' : 'none'
  target: 'electron-preload',
    path: path.join(__dirname, '../dist'),
const config = {
    filename: '[name].js'
  name: 'preload',
  output: {
    __dirname: false,
}
    // level: 'none' disable logging
  node: {
    preload: path.join(__dirname, '../src/preload/main.js'),
  },
  },
    // Please read https://webpack.js.org/configuration/other-options/#infrastructurelogginglevel

  },
  ],
  entry: {


module.exports = config
