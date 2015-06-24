/* eslint no-unused-expressions:0 */
import React from 'react/addons';
import Home from '../../src/components/Home';
import * as utils from '../utils';
import {
    version
  } from '../../package.json';

const { TestUtils } = React.addons;
describe('Components', () => {
  describe('Home', () => {
    const component = utils.shallowlyRenderedOutput(<Home />);

    it('should contain one "<section>" element', function () {
      expect(component.type).to.be.equal('section');
    });

    it('should contain a link to my twitter account', () => {
      expect(component.props.children.props.children).to.contain(
        <a href="https://twitter.com/vesparny">@vesparny</a>
      );
    });

    describe('getVersion', () => {
      it('should return the current version when called', function () {
        const currentVersion = Home.prototype.getVersion();
        expect(currentVersion).to.be.equal(version);
      });
    });
  });
});
