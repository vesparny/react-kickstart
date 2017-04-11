import React from 'react'
import { mount } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import { ThemeProvider } from 'glamorous'
import Counter from './Counter'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<Counter />', () => {
  const onIncrement = jest.fn()
  it('renders correctly', () => {
    const wrapper = mount(
      <ThemeProvider theme={{ colors: { green: '' } }}>
        <Counter onIncrement={onIncrement} />
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshotWithGlamor()
    wrapper.find('button').simulate('click')
    expect(onIncrement).toHaveBeenCalled()
  })
})
