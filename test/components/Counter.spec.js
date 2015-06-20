import React, { PropTypes, Component } from 'react/addons';
import Counter from '../../src/components/Counter';
import * as utils from '../utils';

const { TestUtils } = React.addons;

describe('Counter', () => {
  const component = utils.getRenderOutput(<Counter count={10} handleClick={() => null} />);

  it('should display count', () => {
    const count = component.props.children.filter((el) => el.type === 'h1')[0];
    expect(count.props.children.toString()).to.contain('10');
  });
});
