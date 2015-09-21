import React from 'react';
import Counter from '../../src/components/Counter';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

describe('Components', () => {
  jsdom();
  describe('Counter', () => {
    // Mock minimal Home interface
    const Home = React.createClass({

      getInitialState() {
        return {
          counter: 0
        };
      },

      increment() {
        this.setState({
          counter: this.state.counter += 1
        });
      },

      render() {
        return (
          <div>
            <Counter
              count={this.state.counter}
              onIncrement={this.increment}
            />
          </div>
        );
      }
    });

    it('should receive and increment counter', () => {
      const tree = TestUtils.renderIntoDocument(<Home />);
      const counter = TestUtils.findRenderedComponentWithType(tree, Counter);
      TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(counter, 'button'));
      expect(counter.props.count).to.be.equal(1);
      expect(TestUtils.findRenderedDOMComponentWithTag(counter, 'h1').textContent)
        .to.contain('1');
    });

    describe('increment', () => {
      it('should get called when a click on button happens', () => {
        const spy = sinon.spy();
        const counter = TestUtils.renderIntoDocument(<Counter onIncrement={spy} count={0} />);
        const button = TestUtils.findRenderedDOMComponentWithTag(counter, 'button');
        TestUtils.Simulate.click(button);
        expect(spy).to.have.been.calledOnce;
      });
    });
  });
});
