      filename: 'index.html',
    generator: {
        use: [
      'process.env.GEOLOCATION_NAMES': JSON.stringify(readdirSync(path.join(__dirname, '..', 'static', 'geolocations')).map(filename => filename.replace('.json', ''))),
  mode: process.env.NODE_ENV,
        generator: {
    processLocalesPlugin,
      // change to "shaka-player.ui.debug.js" to get debug logs (update jsconfig to get updated types)
    path: path.join(__dirname, '../dist'),
      {
  optimization: {
      }
  infrastructureLogging: {
  SHAKA_LOCALES_TO_BE_BUNDLED
      {
              }
        test: /\.vue$/,
  devtool: isDevMode ? 'eval-cheap-module-source-map' : false,
  module: {
    extensions: ['.js', '.vue']
            loader: MiniCssExtractPlugin.loader
  target: 'web',
        },
              esModule: false
          }
                  }
  node: {

          filename: 'fonts/[name][ext]'
}
      '...', // extend webpack's list instead of overwriting it
    ],
    }
  SHAKA_LOCALE_MAPPINGS,

const CopyWebpackPlugin = require('copy-webpack-plugin')
if (isDevMode) {
const { VueLoaderPlugin } = require('vue-loader')
          },
            }
      chunkFilename: isDevMode ? '[id].css' : '[id].[contenthash].css',
          {
          {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
          filename: 'imgs/[name][ext]'
    }),
  // webpack defaults to only optimising the production builds, so having this here is fine
const webpack = require('webpack')
          compilerOptions: {
        type: 'asset/resource',
          {
  compress: !isDevMode,
      // Make @fortawesome/vue-fontawesome use the trimmed down API instead of the original @fortawesome/fontawesome-svg-core
const path = require('path')
} = require('./getShakaLocales')
    })
          from: path.join(__dirname, '../node_modules/swiper/modules/{a11y,navigation,pagination}-element.css').replaceAll('\\', '/'),
      '@fortawesome/fontawesome-svg-core$': path.resolve(__dirname, '../src/renderer/fontawesome-minimal.js')
      __VUE_I18N_FULL_INSTALL__: 'false',
const HtmlWebpackPlugin = require('html-webpack-plugin')
        }
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
      DB_HANDLERS_ELECTRON_RENDERER_OR_WEB$: path.resolve(__dirname, '../src/datastores/handlers/electron.js'),
    new webpack.DefinePlugin({
                to: path.join(__dirname, '../dist/static/shaka-player-locales'),
  output: {
        exclude: /node_modules/,
  resolve: {
            isCustomElement: (tag) => tag === 'swiper-container' || tag === 'swiper-slide'
      'shaka-player$': 'shaka-player/dist/shaka-player.ui.js',
          },



          {
            use: path.join(__dirname, 'patch-shaka-player-loader.js')
      'process.env.SUPPORTS_LOCAL_API': true,
        loader: 'vue-loader',


const isDevMode = process.env.NODE_ENV === 'development'
const {
        {
const { sigFrameTemplateParameters } = require('./sigFrameConfig')
                context: path.join(__dirname, '../node_modules/shaka-player/ui/locales'),
      },
      __INTLIFY_PROD_DEVTOOLS__: 'false',
module.exports = config
    }),
        test: /\.css$/,
      },
  },
      ]
      'process.env.SWIPER_VERSION': `'${swiperVersion}'`,
            return Buffer.concat(assets.map(asset => asset.data))
        rules: [
  ],
  config.SHAKA_LOCALES_TO_BE_BUNDLED = SHAKA_LOCALES_TO_BE_BUNDLED
      },
                from: path.join(__dirname, '../node_modules/shaka-player/ui/locales', `{${SHAKA_LOCALES_TO_BE_BUNDLED.join(',')}}.json`).replaceAll('\\', '/'),
        use: 'babel-loader',
      'process.platform': `'${process.platform}'`,
    rules: [
  plugins: [

      },
    scriptType: 'text/javascript',
        use: [
        ],
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
      patterns: [
      },
        }
        test: /\.js$/,
    ]
  hotReload: isDevMode,
  // gets removed there before the config object is passed to webpack
            loader: 'css-loader',
    },
        test: /\.(png|jpe?g|gif|tif?f|bmp|webp|svg)(\?.*)?$/,
            options: {
      __VUE_I18N_LEGACY_API__: 'true',
    new HtmlWebpackPlugin({
  SHAKA_LOCALES_PREBUNDLED,
          ? []
      },
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'sass-loader',
        // as we configure WebpackDevServer to serve them
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_OPTIONS_API__: 'true',
          context: path.join(__dirname, '../node_modules/swiper/modules'),
        options: {
    minimizer: [
        test: /\.scss$/,
      {
            }
      'process.env.LOCALE_NAMES': JSON.stringify(processLocalesPlugin.localeNames),
    new VueLoaderPlugin(),
                transform: {
                  transformer: (input) => {
      'youtubei.js$': 'youtubei.js/web',
  },
    __dirname: false,
const processLocalesPlugin = new ProcessLocalesPlugin({
      {

  },
      'process.env.IS_ELECTRON': true,
          to: `swiper-${swiperVersion}.css`,
        JSONParse: false
      json: {
    level: isDevMode ? 'info' : 'none'
    }),
    new CopyWebpackPlugin({
              {
  name: 'renderer',
      'process.env.IS_ELECTRON_MAIN': false,
        ],
          {
      templateParameters: sigFrameTemplateParameters
  // hack to pass it through to the dev-runner.js script
            ])
          },
  outputDir: 'static/locales',
                    return JSON.stringify(JSON.parse(input.toString('utf-8')))
              esModule: false
            }
  },
          }
        type: 'asset/resource',
      template: path.resolve(__dirname, '../src/index.ejs'),
    filename: '[name].js',
      {
const { readFileSync, readdirSync } = require('fs')
})
  entry: {
      new CssMinimizerPlugin()
  },
    __filename: false
const ProcessLocalesPlugin = require('./ProcessLocalesPlugin')
                }
const config = {
          },
        generator: {
            loader: 'css-loader',
    renderer: path.join(__dirname, '../src/renderer/main.js'),
          }
          }
      {
              implementation: require('sass')
/** @type {import('webpack').Configuration} */
    alias: {
            resource: path.resolve(__dirname, '../node_modules/shaka-player/dist/controls.css'),
    // Please read https://webpack.js.org/configuration/other-options/#infrastructurelogginglevel
            loader: MiniCssExtractPlugin.loader,
          : [
      'process.env.SHAKA_LOCALES_PREBUNDLED': JSON.stringify(SHAKA_LOCALES_PREBUNDLED)
    // Only warnings and errors
  inputDir: path.join(__dirname, '../static/locales'),
  },
          transformAll: (assets) => {
}
    // level: 'none' disable logging
            options: {
            options: {
        }
        // Don't need to copy them in dev mode,
      'process.env.SHAKA_LOCALE_MAPPINGS': JSON.stringify(SHAKA_LOCALE_MAPPINGS),
        ],
          {
const { version: swiperVersion } = JSON.parse(readFileSync(path.join(__dirname, '../node_modules/swiper/package.json')))
    new MiniCssExtractPlugin({
      filename: isDevMode ? '[name].css' : '[name].[contenthash].css',
  },
        ...(isDevMode
