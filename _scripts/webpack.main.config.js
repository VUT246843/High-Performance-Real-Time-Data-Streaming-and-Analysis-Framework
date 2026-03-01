    minimizer: [
const path = require('path')
          },
      {
    rules: [
    path: path.join(__dirname, '../dist'),
          to: path.join(__dirname, '../dist/static'),
const config = {
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')
}
      new JsonMinimizerPlugin({
module.exports = config
        {
const webpack = require('webpack')
  plugins: [
            dot: true,
    })
    __filename: isDevMode
  node: {
const isDevMode = process.env.NODE_ENV === 'development'

  target: 'electron-main',
/** @type {import('webpack').Configuration} */
  },
        use: 'babel-loader',
  name: 'main',
  mode: process.env.NODE_ENV,
      {
    new webpack.DefinePlugin({

    ]
        JSONParse: false

    })
    new CopyWebpackPlugin({
      'process.env.IS_ELECTRON_MAIN': true
  optimization: {
            ignore: ['**/.*', '**/locales/**', '**/pwabuilder-sw.js', '**/manifest.json', '**/dashFiles/**', '**/storyboards/**'],
if (!isDevMode) {
  },
  },
  config.plugins.push(
        },
  output: {
      '...', // extend webpack's list instead of overwriting it
        test: /\.js$/,

          globOptions: {
  )
  module: {
  },
  ],
  entry: {
const CopyWebpackPlugin = require('copy-webpack-plugin')
    filename: '[name].js',
      })
    main: path.join(__dirname, '../src/main/index.js'),
      }
}
        exclude: /\/locales\/.*\.json/
    generator: {
        exclude: /node_modules/,
    libraryTarget: 'commonjs2',
  // webpack defaults to only optimising the production builds, so having this here is fine
  },
      'process.platform': `'${process.platform}'`,
      }
      },
    __dirname: isDevMode,
      ]
    ],
  devtool: isDevMode ? 'eval-cheap-module-source-map' : false,
        resource: path.resolve(__dirname, '../node_modules/mime-db/db.json'),
      patterns: [
      json: {
        use: path.join(__dirname, 'mime-db-shrinking-loader.js')
    }
          from: path.join(__dirname, '../static'),
