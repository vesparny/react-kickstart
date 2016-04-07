var express = require('express')
var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config.dev')
var historyApiFallback = require('connect-history-api-fallback')
var proxyMiddleware = require('http-proxy-middleware')
var proxy = proxyMiddleware('/api', {
  target: 'https://api.github.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  }
})

var app = express()

var compiler = webpack(config)

app.use(proxy)

var wpDevMiddleaware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

app.use(wpDevMiddleaware)

app.use(historyApiFallback())

// https://github.com/webpack/webpack-dev-middleware/pull/44
app.use(wpDevMiddleaware)

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static(path.join(__dirname, '/dist')))

app.listen(config._hotPort, 'localhost', function (err) {
  if (err) {
    console.log(err)
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', config._hotPort, config._hotPort)
})
