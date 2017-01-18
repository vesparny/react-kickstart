import React from 'react'
import { shallow } from 'enzyme'
import BrowserRouter from 'react-router/BrowserRouter'

import Root from './Root'

const renderComponent = (props = {}) => shallow(<Root />)

describe('<Root />', () => {
  it('should render a <BrowserRouter> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find(BrowserRouter).length).toBe(1)
  })
})
