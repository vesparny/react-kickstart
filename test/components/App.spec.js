import React from 'react'
import App from '../../src/components/App'
import * as utils from '../utils'
import TestUtils from 'react-addons-test-utils'
import test from 'tape'

test('App', (t) => {
  const component = utils.shallowlyRenderedOutput(<App><div /></App>)

  t.ok(component.type === 'div', 'should have a div as container')
  t.ok(typeof TestUtils.isElementOfType(component.props.children) !== 'undefined', 'should contain children')
  t.end()
})
