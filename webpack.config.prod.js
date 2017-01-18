const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = baseConfig({
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src/main.js')
  ],
  output: {
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].min.css',
      disable: false,
      allChunks: true
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    })
  ],
  module: {
    rules: [{
      test: /.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
      })
    }]
  }
})
