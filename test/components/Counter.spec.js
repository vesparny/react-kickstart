import React from 'react'
import Counter from '../../src/components/Counter'
import TestUtils from 'react-addons-test-utils'
import test from 'ava'
import sinon from 'sinon'

const Home = React.createClass({
  getInitialState () {
    return {
      counter: 0
    }
  },

  increment () {
    this.setState({
      counter: this.state.counter += 1
    })
  },

  render () {
    return (
      <div>
        <Counter
          count={this.state.counter}
          onIncrement={this.increment}
        />
      </div>
    )
  }
})

test('is properly shaped and handles events', (t) => {
  const tree = TestUtils.renderIntoDocument(<Home />)
  let counter = TestUtils.findRenderedComponentWithType(tree, Counter)
  TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(counter, 'button'))
  t.is(counter.props.count, 1, 'should receive and increment counter')
  t.is(TestUtils.findRenderedDOMComponentWithTag(counter, 'h1').textContent, 'Count: 1', 'DOM populated accordingly')

  const spy = sinon.spy()
  counter = TestUtils.renderIntoDocument(<Counter onIncrement={spy} count={0} />)
  const button = TestUtils.findRenderedDOMComponentWithTag(counter, 'button')
  TestUtils.Simulate.click(button)
  t.truthy(spy.calledOnce, 'onIncrement should get called when a click on button happens')
})
