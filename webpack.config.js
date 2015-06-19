'use strict';

var path = require('path');
var webpack = require('webpack');
var hotPort = 8000;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + hotPort,
    'webpack/hot/dev-server',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', 'json']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },{
      test: /\.json?$/,
      exclude: /node_modules/,
      loader: 'json'
    },{
      test: /\.styl|\.css$/,
      loader: ExtractTextPlugin.extract("css-loader!stylus-loader")
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin("main.css")

  ],
  _hotPort: hotPort
};
