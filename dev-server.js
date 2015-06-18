var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var serverOptions = {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  hot: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  },
  historyApiFallback: true
};

var compiler = webpack(config);
var webpackDevServer = new WebpackDevServer(compiler, serverOptions);

webpackDevServer.listen(config._hotPort, function (err) {
  if (err) {
    throw err;
  }
  console.log('webpack dev server listening on %s', config._hotPort);
});
