/* eslint no-unused-expressions:0 */
import jsdom from 'mocha-jsdom';

import React from 'react/addons';
import Home from '../../src/components/Home';

const { TestUtils } = React.addons;

describe('Home', () => {
  jsdom();

  it('contains "<section>" element', function () {
    const component = TestUtils.renderIntoDocument(<Home />);
    const div = TestUtils.findRenderedDOMComponentWithTag(component, 'section');
    expect(div).to.be.defined;
  });
});
