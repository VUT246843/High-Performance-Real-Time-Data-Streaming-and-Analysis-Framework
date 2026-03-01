    filename: '[name].js',
  }
  entry: {
const path = require('path')
  devtool: false,
    botGuardScript: path.join(__dirname, '../src/botGuardScript.js'),
  experiments: {
  },
  },
  // Always use production mode, as we use the output as a function body and the debug output doesn't work for that
    outputModule: true
module.exports = {
  output: {
    }
}

/** @type {import('webpack').Configuration} */
    library: {
  name: 'botGuardScript',
  mode: 'production',
  target: 'web',
    path: path.join(__dirname, '../dist'),
      type: 'modern-module'
