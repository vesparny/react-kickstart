import 'babel-polyfill'
import 'sanitize.css/sanitize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import attachFastClick from 'fastclick'

import '!file-loader?name=[name].[ext]!./assets/favicon.ico'

const rootEl = document.getElementById('root')
// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

// Expose globally
window.React = React

let render = () => {
  const Root = require('./components/Root').default
  ReactDOM.render(
    <Root />,
    rootEl
  )
}

if (module.hot) {
  const renderApp = render
  const renderError = (err) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={err} />,
      rootEl
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (err) {
      renderError(err)
    }
  }
  module.hot.accept('./components/Root', render)
}

render()
