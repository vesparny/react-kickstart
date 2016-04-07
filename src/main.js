import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
// only for GitHub pages
// do prefer import { browserHistory } from 'react-router'
import attachFastClick from 'fastclick'

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
  module.hot.accept('./components/Root', () => {
    setTimeout(render)
  })
}

render()
