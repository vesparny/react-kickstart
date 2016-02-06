import React from 'react'
import Home from '../../src/components/Home'
import * as utils from '../utils'
import {version} from '../../package.json'
import test from 'tape'
import sinon from 'sinon'
import {find} from 'lodash'
test('Home', (t) => {
  const component = utils.shallowlyRenderedOutput(<Home />)

  t.equal(component.type, 'section', 'should contain one "<section>" element')
  t.ok(find(component.props.children.props.children, <a href='https://twitter.com/vesparny'>@vesparny</a>), 'should show my twitter handle')
  t.equal(Home.prototype.getVersion(), version, 'should return the current version when called')

  const spy = sinon.spy()
  Home.prototype.increment.call({
    state: {
      counter: 0
    },
    setState: spy
  })
  t.ok(spy.calledOnce, 'increment should call setState() once invoked')
  t.end()
})
