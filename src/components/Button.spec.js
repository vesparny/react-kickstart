import React from 'react'
import { shallow } from 'enzyme'
import { matcher, serializer } from 'jest-glamor-react'
import Button from './Button'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<Button />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Button theme={{ colors: { blue: 'blue' } }}>hello</Button>
    )
    expect(wrapper).toMatchSnapshotWithGlamor()
  })
})
