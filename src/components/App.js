import React, {PropTypes} from 'react'
import {injectGlobal} from 'styled-components'

const App = ({children}) =>
  <div>{children}</div>

App.propTypes = {
  children: PropTypes.object.isRequired
}

injectGlobal`
  ul {
    list-style: none
    padding: 0
  }

  #root {
    height: 100%
  }
`
export default App
