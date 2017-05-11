import React from 'react'
import { ThemeProvider } from 'glamorous'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import theme from '../theme'

const Root = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path='/' component={Home} />
    </Router>
  </ThemeProvider>
)

export default Root
