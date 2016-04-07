import React from 'react'
import {Route} from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import NotFound from './containers/NotFound'

const routes = (
  <Route component={App}>
    <Route path='/' component={Home} />
    // Put other routes here
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
