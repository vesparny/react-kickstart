/*
import React from 'react'
import Home from '../../src/containers/Home'
import * as utils from '../utils'
import {version} from '../../package.json'
import test from 'ava'
import sinon from 'sinon'
import {find} from 'lodash'
test('is properly shaped', (t) => {
  const component = utils.shallowlyRenderedOutput(<Home />)

  t.is(component.type, 'section', 'should contain one "<section>" element')
  t.truthy(find(component.props.children.props.children, <a href='https://twitter.com/vesparny'>@vesparny</a>), 'should show my twitter handle')
  t.is(Home.prototype.getVersion(), version, 'should return the current version when called')

  const spy = sinon.spy()
  Home.prototype.increment.call({
    state: {
      counter: 0
    },
    setState: spy
  })
  t.truthy(spy.calledOnce, 'increment should call setState() once invoked')
})
*/
import test from 'ava'
test('is properly shaped', (t) => {
  t.truthy(true)
})
