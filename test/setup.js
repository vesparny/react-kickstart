require('babel-register')
require('babel-polyfill')

global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator

global.__DEV__ = true

const hook = require('css-modules-require-hook')

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
})
