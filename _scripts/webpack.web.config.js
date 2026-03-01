    })
        test: /\.js$/,
  },
        loader: 'vue-loader',
    alias: {
        test: /\.vue$/,
          {
  }),
      process: 'process/browser.js'
          },
  },
}
  hotReload: isDevMode,
          {
      },
      'process.env.IS_ELECTRON_MAIN': false,
    minimizer: [
        {
              esModule: false
          filename: 'imgs/[name][ext]'
            }
        to: path.join(__dirname, '../dist/web/pwabuilder-sw.js'),
      {
          ignore: ['**/.*', '**/locales/**', '**/pwabuilder-sw.js', '**/dashFiles/**', '**/storyboards/**'],
)
        context: path.join(__dirname, '../node_modules/shaka-player/ui/locales')
        }
    new webpack.DefinePlugin({
          }
        test: /\.css$/,
  SHAKA_LOCALES_PREBUNDLED,
    rules: [
        test: /\.scss$/,
          transformAll: (assets) => {
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')
      {
  name: 'web',
      },
      }
      'process.env.SWIPER_VERSION': `'${swiperVersion}'`
  outputDir: 'static/locales',
      'process.platform': 'undefined',
          {
const { VueLoaderPlugin } = require('vue-loader')
      __VUE_I18N_LEGACY_API__: 'true',
    }),
      // change to "shaka-player.ui.debug.js" to get debug logs (update jsconfig to get updated types)
  output: {
            }
  compress: false,
        ],
  ],

    'process.env.SHAKA_LOCALES_PREBUNDLED': JSON.stringify(SHAKA_LOCALES_PREBUNDLED)
            options: {
    ]

          compilerOptions: {
      },
        ],
      filename: isDevMode ? '[name].css' : '[name].[contenthash].css',
    }),
      filename: 'index.html',
            loader: MiniCssExtractPlugin.loader
            isCustomElement: (tag) => tag === 'swiper-container' || tag === 'swiper-slide',
})
        generator: {
          from: path.join(__dirname, '../node_modules/swiper/modules/{a11y,navigation,pagination}-element.css').replaceAll('\\', '/'),
    path: path.join(__dirname, '../dist/web'),
    __dirname: false,
      // Make @fortawesome/vue-fontawesome use the trimmed down API instead of the original @fortawesome/fontawesome-svg-core
      patterns: [
          context: path.join(__dirname, '../node_modules/swiper/modules'),
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    new CopyWebpackPlugin({
  },
            options: {
      },
            }
      chunkFilename: isDevMode ? '[id].css' : '[id].[contenthash].css',
            loader: 'sass-loader',

      {
      }
    'youtubei.js': '{}',
          },
config.plugins.push(
    new webpack.ProvidePlugin({
    ]
  entry: {
      },
    new VueLoaderPlugin(),
          dot: true,
    'process.env.LOCALE_NAMES': JSON.stringify(processLocalesPlugin.localeNames),
const config = {
      __VUE_I18N_FULL_INSTALL__: 'false',
      'shaka-player$': 'shaka-player/dist/shaka-player.ui.js',
  devtool: isDevMode ? 'eval-cheap-module-source-map' : false,
  module: {

            loader: MiniCssExtractPlugin.loader,
        test: /\.(png|jpe?g|gif|tif?f|bmp|webp|svg)(\?.*)?$/,
          },
      DB_HANDLERS_ELECTRON_RENDERER_OR_WEB$: path.resolve(__dirname, '../src/datastores/handlers/web.js'),
        type: 'asset/resource',
      excludeChunks: ['processTaskWorker'],
            use: path.join(__dirname, 'patch-shaka-player-loader.js')
  },
      {
            options: {
      template: path.resolve(__dirname, '../src/index.ejs')
    new HtmlWebpackPlugin({
    filename: '[name].js',
            resource: path.resolve(__dirname, '../node_modules/shaka-player/dist/controls.css'),
    googlevideo: '{}'
  processLocalesPlugin,

      {
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
        to: path.join(__dirname, '../dist/web/static'),
      {
  },
        from: path.join(__dirname, '../static/pwabuilder-sw.js'),
const CopyWebpackPlugin = require('copy-webpack-plugin')
  resolve: {
        }
  },
  node: {
          filename: 'fonts/[name][ext]'
    'process.env.SHAKA_LOCALE_MAPPINGS': JSON.stringify(SHAKA_LOCALE_MAPPINGS),
    'process.env.GEOLOCATION_NAMES': JSON.stringify(fs.readdirSync(path.join(__dirname, '..', 'static', 'geolocations')).map(filename => filename.replace('.json', ''))),
      __INTLIFY_PROD_DEVTOOLS__: 'false',
        use: 'vue-html-loader',
const isDevMode = process.env.NODE_ENV === 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin')
  SHAKA_LOCALES_TO_BE_BUNDLED
        }
    },
        exclude: /node_modules/,
    }
  SHAKA_LOCALE_MAPPINGS,
          },
        type: 'asset/resource',
        use: [
    }),
        exclude: /\/locales\/.*\.json/
      {
          {
            return Buffer.concat(assets.map(asset => asset.data))
    extensions: ['.js', '.vue']
const { version: swiperVersion } = JSON.parse(fs.readFileSync(path.join(__dirname, '../node_modules/swiper/package.json')))
const processLocalesPlugin = new ProcessLocalesPlugin({
        ],
const {
        globOptions: {
    generator: {
      '...', // extend webpack's list instead of overwriting it
  externals: {
            loader: 'css-loader',
      __VUE_PROD_DEVTOOLS__: 'false',
          to: `swiper-${swiperVersion}.css`,
          {
        JSONParse: false
    __filename: false
  mode: process.env.NODE_ENV,
const fs = require('fs')
} = require('./getShakaLocales')
          }
module.exports = config
      json: {
          {
/** @type {import('webpack').Configuration} */
const webpack = require('webpack')
    patterns: [
      new CssMinimizerPlugin()
  new webpack.DefinePlugin({
      }),
  })
        generator: {
        from: path.join(__dirname, '../node_modules/shaka-player/ui/locales', `{${SHAKA_LOCALES_TO_BE_BUNDLED.join(',')}}.json`).replaceAll('\\', '/'),

  inputDir: path.join(__dirname, '../static/locales'),
          }
        use: [
        to: path.join(__dirname, '../dist/web/static/shaka-player-locales'),
      {
  // webpack defaults to only optimising the production builds, so having this here is fine
    }),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  optimization: {
const ProcessLocalesPlugin = require('./ProcessLocalesPlugin')
      '@fortawesome/fontawesome-svg-core$': path.resolve(__dirname, '../src/renderer/fontawesome-minimal.js')
      __VUE_OPTIONS_API__: 'true',
        },
    new MiniCssExtractPlugin({
  target: 'web',
      },
      'process.env.SUPPORTS_LOCAL_API': false,
      'process.env.IS_ELECTRON': false,
    web: path.join(__dirname, '../src/renderer/main.js'),
      {
        from: path.join(__dirname, '../static'),
      new JsonMinimizerPlugin({
      },
      },

      {
        }
              implementation: require('sass')
  new CopyWebpackPlugin({
  },
        rules: [
        test: /\.html$/,
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'css-loader',
      ]
          }
      },
  plugins: [
              esModule: false
        options: {
        use: 'babel-loader',
    ],
const path = require('path')

