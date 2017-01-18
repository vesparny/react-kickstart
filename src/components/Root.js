// @flow
import React from 'react'
import {injectGlobal} from 'styled-components'
import BrowserRouter from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Home from './Home'

const Root = () =>
  <BrowserRouter>
    <Match pattern='/' component={Home} />
  </BrowserRouter>

injectGlobal`
  ul {
    list-style: none
    padding: 0
  }

  #root {
    height: 100%
  }
`
export default Root
