const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = baseConfig({
  devtool: 'source-map',
  entry: [path.join(__dirname, 'src/main.js')],
  output: {
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true
      }
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets'
    }]),
    new ExtractTextPlugin({
      filename: '[name].[hash].min.css',
      disable: false,
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }
    ]
  }
})
