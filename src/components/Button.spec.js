import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

const renderComponent = (p = {}) => shallow(<Button {...p} />)

describe('<Counter />', () => {
  it('should handle click events', () => {
    const spy = jest.fn()
    const renderedComponent = renderComponent({ onClick: spy })
    renderedComponent.find('button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})
