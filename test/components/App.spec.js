import React from 'react'
import App from '../../src/containers/App'
import * as utils from '../utils'
import TestUtils from 'react-addons-test-utils'
import test from 'ava'

test('is properly shaped', (t) => {
  const component = utils.shallowlyRenderedOutput(<App><div /></App>)

  t.truthy(component.type === 'div', 'should have a div as container')
  t.truthy(typeof TestUtils.isElementOfType(component.props.children) !== 'undefined', 'should contain children')
})
