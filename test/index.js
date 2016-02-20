import {jsdom} from 'jsdom'
import sinon from 'sinon'
import glob from 'glob'
import path from 'path'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator

global.sinon = sinon
global.__DEV__ = true

require('css-modules-require-hook')

// require all specs
glob('test/**/*.spec.js', (err, files) => {
  if (err) return
  files.forEach((file) => require(path.resolve(process.cwd(), file)))
})
