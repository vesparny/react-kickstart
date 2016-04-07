import '../globals.css'
import React from 'react'
// only for GitHub pages
// do prefer import { browserHistory } from 'react-router'
import {Router, hashHistory as history} from 'react-router'
import routes from '../routes'

const Root = () =>
  <Router
    children={routes}
    history={history}
  />

export default Root
