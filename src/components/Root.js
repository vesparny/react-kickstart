import '../globals.css'
import React from 'react'
import {Router, browserHistory as history} from 'react-router'
import routes from '../routes'

const Root = () =>
  <Router
    children={routes}
    history={history}
  />

export default Root
