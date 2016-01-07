import {jsdom} from 'jsdom'
import sinon from 'sinon'
import glob from 'glob'
import path from 'path'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator

global.sinon = sinon
global.__DEV__ = true

// ensure requiring css not to throw
require.extensions['.css'] = () => {
  return null
}

// require all specs
glob('test/**/*.spec.js', (err, files) => {
  console.error(err)
  files.forEach(file => require(path.resolve(process.cwd(), file)))
})
