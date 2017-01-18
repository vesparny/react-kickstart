const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseconfig = require('./webpack.config.base')

module.exports = baseconfig({
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/dev-server',
    path.join(__dirname, 'src/main.js')
  ],
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  performance: {
    hints: false
  }
})
