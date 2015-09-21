import React from 'react';
import App from '../../src/components/App';
import * as utils from '../utils';
import TestUtils from 'react-addons-test-utils';

describe('Components', () => {
  describe('App', () => {
    const component = utils.shallowlyRenderedOutput(<App />);

    it('should have a div as container', () => {
      expect(component.type).to.equal('div');
    });

    it('should contain children', () => {
      expect(typeof TestUtils.isElementOfType(component.props.children) !== 'undefined').to.be.true;
    });
  });
});
