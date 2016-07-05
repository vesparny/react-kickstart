import '../globals.css'
import React from 'react'
import { Router, browserHistory, hashHistory } from 'react-router'
import routes from '../routes'
const history = window.location.hostname === 'vesparny.github.io'
  ? hashHistory // for GitHub pages
  : browserHistory

const Root = () =>
  <Router
    children={routes}
    history={history}
  />

export default Root
