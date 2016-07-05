var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webPackConfig = require('./webpack.config.dev')
var compiler = webpack(webPackConfig)
var webServerConfig = {
  publicPath: webPackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}

var server = new WebpackDevServer(compiler, webServerConfig)

server.listen(webPackConfig._hotPort)
console.info('==> 🌎 Listening on port %s', webPackConfig._hotPort)
