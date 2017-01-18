import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

const renderComponent = (p = {}) => shallow(<Counter {...p} />)

describe('<Counter />', () => {
  it('should handle click events', () => {
    const renderedComponent = renderComponent({ count: 1 })
    expect(renderedComponent.find('h1').text()).toEqual('Count: 1')
  })
})
